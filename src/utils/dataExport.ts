import * as XLSX from "xlsx";
import { Todo, Epic, Project } from "../types";
import dayjs from "dayjs";

// 엑셀 내보내기
export const exportToExcel = (todos: Todo[], epics: Epic[], projects: Project[]) => {
  // 워크북 생성
  const workbook = XLSX.utils.book_new();

  // 할일 시트
  const todosData = todos.map((todo) => ({
    ID: todo.id,
    제목: todo.title,
    설명: todo.description || "",
    완료여부: todo.completed ? "완료" : "미완료",
    우선순위: getPriorityText(todo.priority),
    마감일: todo.dueDate ? dayjs(todo.dueDate).format("YYYY-MM-DD") : "",
    태그: todo.tags?.join(", ") || "",
    에픽ID: todo.epicId || "",
    프로젝트ID: todo.projectId || "",
    생성일: dayjs(todo.createdAt).format("YYYY-MM-DD HH:mm"),
    수정일: dayjs(todo.updatedAt).format("YYYY-MM-DD HH:mm"),
    완료일: todo.completedAt ? dayjs(todo.completedAt).format("YYYY-MM-DD HH:mm") : "",
  }));

  // 에픽 시트
  const epicsData = epics.map((epic) => ({
    ID: epic.id,
    제목: epic.title,
    설명: epic.description,
    상태: getStatusText(epic.status),
    우선순위: getPriorityText(epic.priority),
    시작일: dayjs(epic.startDate).format("YYYY-MM-DD"),
    마감일: epic.dueDate ? dayjs(epic.dueDate).format("YYYY-MM-DD") : "",
    진행률: `${epic.progress}%`,
    색상: epic.color,
    이모지: epic.emoji,
    태그: epic.tags?.join(", ") || "",
    생성일: dayjs(epic.createdAt).format("YYYY-MM-DD HH:mm"),
    수정일: dayjs(epic.updatedAt).format("YYYY-MM-DD HH:mm"),
  }));

  // 프로젝트 시트
  const projectsData = projects.map((project) => ({
    ID: project.id,
    제목: project.title,
    설명: project.description,
    상태: getStatusText(project.status),
    우선순위: getPriorityText(project.priority),
    시작일: dayjs(project.startDate).format("YYYY-MM-DD"),
    마감일: project.dueDate ? dayjs(project.dueDate).format("YYYY-MM-DD") : "",
    진행률: `${project.progress}%`,
    태그: project.tags?.join(", ") || "",
    에픽ID: project.epicId || "",
    생성일: dayjs(project.createdAt).format("YYYY-MM-DD HH:mm"),
    수정일: dayjs(project.updatedAt).format("YYYY-MM-DD HH:mm"),
  }));

  // 시트 생성 및 추가
  const todosSheet = XLSX.utils.json_to_sheet(todosData);
  const epicsSheet = XLSX.utils.json_to_sheet(epicsData);
  const projectsSheet = XLSX.utils.json_to_sheet(projectsData);

  // 컬럼 너비 설정
  const setColumnWidths = (sheet: XLSX.WorkSheet) => {
    const range = XLSX.utils.decode_range(sheet["!ref"] || "A1");
    const widths = [];
    for (let col = range.s.c; col <= range.e.c; col++) {
      widths.push({ wpx: 150 });
    }
    sheet["!cols"] = widths;
  };

  setColumnWidths(todosSheet);
  setColumnWidths(epicsSheet);
  setColumnWidths(projectsSheet);

  XLSX.utils.book_append_sheet(workbook, todosSheet, "할일");
  XLSX.utils.book_append_sheet(workbook, epicsSheet, "에픽");
  XLSX.utils.book_append_sheet(workbook, projectsSheet, "프로젝트");

  // 파일 다운로드
  const fileName = `penguin-data-${dayjs().format("YYYY-MM-DD-HHmm")}.xlsx`;
  XLSX.writeFile(workbook, fileName);

  return fileName;
};

// JSON 내보내기 (기존보다 더 자세한 정보 포함)
export const exportToJSON = (todos: Todo[], epics: Epic[], projects: Project[]) => {
  const data = {
    metadata: {
      exportDate: dayjs().toISOString(),
      version: "1.0",
      totalTodos: todos.length,
      totalEpics: epics.length,
      totalProjects: projects.length,
    },
    todos,
    epics,
    projects,
    statistics: {
      completedTodos: todos.filter((t) => t.completed).length,
      activeTodos: todos.filter((t) => !t.completed).length,
      activeEpics: epics.filter((e) => e.status === "active").length,
      completedEpics: epics.filter((e) => e.status === "completed").length,
      activeProjects: projects.filter((p) => p.status === "active").length,
      completedProjects: projects.filter((p) => p.status === "completed").length,
    },
  };

  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `penguin-data-${dayjs().format("YYYY-MM-DD-HHmm")}.json`;
  link.click();
  URL.revokeObjectURL(url);

  return data;
};

// 엑셀에서 가져오기
export const importFromExcel = (
  file: File
): Promise<{
  todos: Todo[];
  epics: Epic[];
  projects: Project[];
}> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });

        let todos: Todo[] = [];
        let epics: Epic[] = [];
        let projects: Project[] = [];

        // 할일 시트 읽기
        if (workbook.SheetNames.includes("할일")) {
          const todosSheet = workbook.Sheets["할일"];
          const todosData = XLSX.utils.sheet_to_json(todosSheet);
          todos = todosData.map((row: any) => ({
            id: row.ID || generateId(),
            title: row.제목 || "",
            description: row.설명 || "",
            completed: row.완료여부 === "완료",
            priority: parsePriorityText(row.우선순위) || "medium",
            dueDate: row.마감일 ? dayjs(row.마감일).toISOString() : undefined,
            tags: row.태그 ? row.태그.split(", ").filter(Boolean) : [],
            epicId: row.에픽ID || undefined,
            projectId: row.프로젝트ID || undefined,
            createdAt: row.생성일 ? dayjs(row.생성일).toISOString() : dayjs().toISOString(),
            updatedAt: row.수정일 ? dayjs(row.수정일).toISOString() : dayjs().toISOString(),
            completedAt: row.완료일 ? dayjs(row.완료일).toISOString() : undefined,
          }));
        }

        // 에픽 시트 읽기
        if (workbook.SheetNames.includes("에픽")) {
          const epicsSheet = workbook.Sheets["에픽"];
          const epicsData = XLSX.utils.sheet_to_json(epicsSheet);
          epics = epicsData.map((row: any) => ({
            id: row.ID || generateId(),
            title: row.제목 || "",
            description: row.설명 || "",
            status: parseStatusText(row.상태) || "planning",
            priority: parsePriorityText(row.우선순위) || "medium",
            startDate: row.시작일 ? dayjs(row.시작일).toISOString() : dayjs().toISOString(),
            dueDate: row.마감일 ? dayjs(row.마감일).toISOString() : undefined,
            progress: parseInt(row.진행률?.replace("%", "")) || 0,
            projects: [],
            color: row.색상 || "#FF6B6B",
            emoji: row.이모지 || "🎯",
            tags: row.태그 ? row.태그.split(", ").filter(Boolean) : [],
            createdAt: row.생성일 ? dayjs(row.생성일).toISOString() : dayjs().toISOString(),
            updatedAt: row.수정일 ? dayjs(row.수정일).toISOString() : dayjs().toISOString(),
          }));
        }

        // 프로젝트 시트 읽기
        if (workbook.SheetNames.includes("프로젝트")) {
          const projectsSheet = workbook.Sheets["프로젝트"];
          const projectsData = XLSX.utils.sheet_to_json(projectsSheet);
          projects = projectsData.map((row: any) => ({
            id: row.ID || generateId(),
            title: row.제목 || "",
            description: row.설명 || "",
            status: parseStatusText(row.상태) || "active",
            priority: parsePriorityText(row.우선순위) || "medium",
            startDate: row.시작일 ? dayjs(row.시작일).toISOString() : dayjs().toISOString(),
            dueDate: row.마감일 ? dayjs(row.마감일).toISOString() : undefined,
            progress: parseInt(row.진행률?.replace("%", "")) || 0,
            tasks: [],
            tags: row.태그 ? row.태그.split(", ").filter(Boolean) : [],
            epicId: row.에픽ID || undefined,
            createdAt: row.생성일 ? dayjs(row.생성일).toISOString() : dayjs().toISOString(),
            updatedAt: row.수정일 ? dayjs(row.수정일).toISOString() : dayjs().toISOString(),
          }));
        }

        resolve({ todos, epics, projects });
      } catch (error) {
        reject(new Error("엑셀 파일 읽기에 실패했습니다: " + error));
      }
    };
    reader.onerror = () => reject(new Error("파일 읽기 오류"));
    reader.readAsArrayBuffer(file);
  });
};

// JSON에서 가져오기 (기존 데이터에 추가)
export const importFromJSON = (
  file: File
): Promise<{
  todos: Todo[];
  epics: Epic[];
  projects: Project[];
}> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);

        // 새로운 형식인지 확인
        if (jsonData.metadata && jsonData.todos && jsonData.epics && jsonData.projects) {
          resolve({
            todos: jsonData.todos || [],
            epics: jsonData.epics || [],
            projects: jsonData.projects || [],
          });
        } else {
          // 기존 형식
          resolve({
            todos: jsonData.todos || [],
            epics: jsonData.epics || [],
            projects: jsonData.projects || [],
          });
        }
      } catch (error) {
        reject(new Error("JSON 파일 형식이 올바르지 않습니다: " + error));
      }
    };
    reader.onerror = () => reject(new Error("파일 읽기 오류"));
    reader.readAsText(file);
  });
};

// 유틸리티 함수들
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const getPriorityText = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "긴급";
    case "high":
      return "높음";
    case "medium":
      return "보통";
    case "low":
      return "낮음";
    default:
      return "보통";
  }
};

const parsePriorityText = (text: string) => {
  switch (text) {
    case "긴급":
      return "urgent";
    case "높음":
      return "high";
    case "보통":
      return "medium";
    case "낮음":
      return "low";
    default:
      return "medium";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "planning":
      return "계획중";
    case "active":
      return "진행중";
    case "paused":
      return "일시정지";
    case "completed":
      return "완료";
    default:
      return "진행중";
  }
};

const parseStatusText = (text: string) => {
  switch (text) {
    case "계획중":
      return "planning";
    case "진행중":
      return "active";
    case "일시정지":
      return "paused";
    case "완료":
      return "completed";
    default:
      return "active";
  }
};
