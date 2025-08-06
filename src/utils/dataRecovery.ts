import { Todo, Epic, Project } from "../types";
import dayjs from "dayjs";

// 기존 데이터 백업 및 복구 유틸리티

export const backupData = () => {
  const todos = localStorage.getItem("todos");
  const epics = localStorage.getItem("epics");
  const projects = localStorage.getItem("projects");

  const backup = {
    todos: todos ? JSON.parse(todos) : [],
    epics: epics ? JSON.parse(epics) : [],
    projects: projects ? JSON.parse(projects) : [],
    timestamp: new Date().toISOString(),
  };

  // 백업을 별도 키에 저장
  localStorage.setItem("data_backup", JSON.stringify(backup));
  console.log("데이터 백업 완료:", backup);
  return backup;
};

export const restoreData = () => {
  const backup = localStorage.getItem("data_backup");
  if (backup) {
    const data = JSON.parse(backup);
    localStorage.setItem("todos", JSON.stringify(data.todos));
    localStorage.setItem("epics", JSON.stringify(data.epics));
    localStorage.setItem("projects", JSON.stringify(data.projects));
    console.log("데이터 복구 완료:", data);
    return data;
  }
  return null;
};

export const getCurrentData = () => {
  const todos = localStorage.getItem("todos");
  const epics = localStorage.getItem("epics");
  const projects = localStorage.getItem("projects");

  return {
    todos: todos ? JSON.parse(todos) : [],
    epics: epics ? JSON.parse(epics) : [],
    projects: projects ? JSON.parse(projects) : [],
  };
};

export const clearAllData = () => {
  localStorage.removeItem("todos");
  localStorage.removeItem("epics");
  localStorage.removeItem("projects");
  console.log("모든 데이터 삭제 완료");
};

// 샘플 데이터 대신 실제 사용 가능한 기본 데이터 생성
export const createBasicUserData = () => {
  const basicEpic: Epic = {
    id: "basic-epic-1",
    title: "🎯 개인 프로젝트",
    description: "개인적인 목표와 프로젝트를 관리하는 에픽입니다",
    status: "active",
    priority: "high",
    startDate: dayjs().toISOString(),
    dueDate: dayjs().add(3, "month").toISOString(),
    progress: 10,
    projects: [],
    color: "#FF6B6B",
    emoji: "🎯",
    tags: ["개인", "목표"],
    createdAt: dayjs().toISOString(),
    updatedAt: dayjs().toISOString(),
  };

  const basicProject: Project = {
    id: "basic-project-1",
    title: "📋 일상 관리",
    description: "일상적인 할일들을 관리하는 프로젝트입니다",
    status: "active",
    priority: "medium",
    startDate: dayjs().toISOString(),
    dueDate: dayjs().add(1, "month").toISOString(),
    progress: 0,
    tasks: [],
    tags: ["일상", "관리"],
    epicId: "basic-epic-1",
    createdAt: dayjs().toISOString(),
    updatedAt: dayjs().toISOString(),
  };

  const basicTodo: Todo = {
    id: "basic-todo-1",
    title: "📝 할일 관리 시스템 설정하기",
    description: "개인 할일 관리 시스템을 제대로 설정해보세요",
    completed: false,
    priority: "medium",
    dueDate: dayjs().add(1, "week").toISOString(),
    tags: ["설정", "시작"],
    epicId: "basic-epic-1",
    projectId: "basic-project-1",
    createdAt: dayjs().toISOString(),
    updatedAt: dayjs().toISOString(),
  };

  return {
    epics: [basicEpic],
    projects: [basicProject],
    todos: [basicTodo],
  };
};

// 데이터 복구 함수
export const recoverUserData = () => {
  const currentData = getCurrentData();

  // 현재 데이터가 비어있거나 샘플 데이터인 경우
  const hasSampleData = currentData.todos.some(
    (todo: any) => todo.title.includes("테스트") || todo.title.includes("샘플")
  );

  if (currentData.todos.length === 0 || hasSampleData) {
    const basicData = createBasicUserData();
    localStorage.setItem("todos", JSON.stringify(basicData.todos));
    localStorage.setItem("epics", JSON.stringify(basicData.epics));
    localStorage.setItem("projects", JSON.stringify(basicData.projects));

    console.log("기본 사용자 데이터로 복구 완료");
    return basicData;
  }

  return currentData;
};

// 브라우저 콘솔에서 사용할 수 있는 전역 함수들
if (typeof window !== "undefined") {
  (window as any).dataRecovery = {
    backup: backupData,
    restore: restoreData,
    current: getCurrentData,
    clear: clearAllData,
    recover: recoverUserData,
  };
}
