import { Project } from "../types";
import dayjs from "dayjs";

// 사용자의 실제 프로젝트 데이터 복구
export const recoverUserProjects = (): Project[] => {
  return [
    {
      title: "지급결의사이트 리뉴얼",
      progress: 0,
      status: "planning",
      priority: "medium",
      createdAt: "2025-08-01T00:43:13.487Z",
      id: "1754008993487",
      description: "지급결의사이트 리뉴얼 및 배포",
      startDate: "2025-08-01",
      tags: [],
      tasks: [],
      dueDate: "2025-08-01",
      updatedAt: "2025-08-01T08:10:04.044Z",
    },
  ];
};

// 실제 데이터 복구 함수
export const restoreRealUserData = () => {
  try {
    // 기존 프로젝트 데이터 복구
    const realProjects = recoverUserProjects();

    // localStorage에 저장
    localStorage.setItem("projects", JSON.stringify(realProjects));

    // 기본 에픽과 할일도 함께 생성
    const basicEpic = {
      id: "user-epic-1",
      title: "🎯 개인 업무 관리",
      description: "개인적인 업무와 프로젝트를 관리하는 에픽입니다",
      status: "active",
      priority: "high",
      startDate: dayjs().toISOString(),
      dueDate: dayjs().add(6, "month").toISOString(),
      progress: 15,
      projects: [],
      color: "#FF6B6B",
      emoji: "🎯",
      tags: ["업무", "개인"],
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    };

    const basicTodo = {
      id: "user-todo-1",
      title: "📝 지급결의사이트 기획 문서 작성",
      description: "리뉴얼을 위한 요구사항 정리 및 기획 문서 작성",
      completed: false,
      priority: "high",
      dueDate: dayjs().add(3, "day").toISOString(),
      tags: ["기획", "문서"],
      epicId: "user-epic-1",
      projectId: "1754008993487",
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    };

    // 에픽과 할일도 저장
    localStorage.setItem("epics", JSON.stringify([basicEpic]));
    localStorage.setItem("todos", JSON.stringify([basicTodo]));

    console.log("실제 사용자 데이터 복구 완료:", {
      projects: realProjects,
      epics: [basicEpic],
      todos: [basicTodo],
    });

    return {
      projects: realProjects,
      epics: [basicEpic],
      todos: [basicTodo],
    };
  } catch (error) {
    console.error("사용자 데이터 복구 실패:", error);
    return null;
  }
};

// JSON 형태로 사용자 데이터 생성
export const generateUserDataJSON = () => {
  const userData = {
    metadata: {
      exportDate: dayjs().toISOString(),
      version: "1.0",
      userDataRecovery: true,
      totalTodos: 1,
      totalEpics: 1,
      totalProjects: 1,
    },
    todos: [
      {
        id: "user-todo-1",
        title: "📝 지급결의사이트 기획 문서 작성",
        description: "리뉴얼을 위한 요구사항 정리 및 기획 문서 작성",
        completed: false,
        priority: "high",
        dueDate: dayjs().add(3, "day").toISOString(),
        tags: ["기획", "문서"],
        epicId: "user-epic-1",
        projectId: "1754008993487",
        createdAt: dayjs().toISOString(),
        updatedAt: dayjs().toISOString(),
      },
    ],
    epics: [
      {
        id: "user-epic-1",
        title: "🎯 개인 업무 관리",
        description: "개인적인 업무와 프로젝트를 관리하는 에픽입니다",
        status: "active",
        priority: "high",
        startDate: dayjs().toISOString(),
        dueDate: dayjs().add(6, "month").toISOString(),
        progress: 15,
        projects: [],
        color: "#FF6B6B",
        emoji: "🎯",
        tags: ["업무", "개인"],
        createdAt: dayjs().toISOString(),
        updatedAt: dayjs().toISOString(),
      },
    ],
    projects: [
      {
        title: "지급결의사이트 리뉴얼",
        progress: 0,
        status: "planning",
        priority: "medium",
        createdAt: "2025-08-01T00:43:13.487Z",
        id: "1754008993487",
        description: "지급결의사이트 리뉴얼 및 배포",
        startDate: "2025-08-01",
        tags: [],
        tasks: [],
        dueDate: "2025-08-01",
        updatedAt: "2025-08-01T08:10:04.044Z",
        epicId: "user-epic-1",
      },
    ],
    statistics: {
      completedTodos: 0,
      activeTodos: 1,
      activeEpics: 1,
      completedEpics: 0,
      activeProjects: 1,
      completedProjects: 0,
    },
  };

  // JSON 파일로 다운로드
  const dataStr = JSON.stringify(userData, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `penguin-user-data-recovery-${dayjs().format("YYYY-MM-DD-HHmm")}.json`;
  link.click();
  URL.revokeObjectURL(url);

  return userData;
};
