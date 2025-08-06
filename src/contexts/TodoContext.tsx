import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Todo, Epic, Project } from "../types";
import dayjs from "dayjs";

// ID 생성 함수
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// 샘플 데이터 생성 함수들
const createSampleTodos = (): Todo[] => [
  {
    id: generateId(),
    title: "React 프로젝트 기획서 작성",
    description: "새로운 React 애플리케이션의 상세 기획서를 작성합니다.",
    completed: false,
    priority: "high",
    dueDate: dayjs().add(2, "day").toISOString(),
    tags: ["개발", "기획"],
    epicId: "epic-1",
    projectId: "project-1",
    createdAt: dayjs().subtract(1, "day").toISOString(),
    updatedAt: dayjs().subtract(1, "day").toISOString(),
  },
  {
    id: generateId(),
    title: "UI/UX 디자인 시안 검토",
    description: "디자이너가 제작한 시안을 검토하고 피드백을 제공합니다.",
    completed: true,
    priority: "medium",
    dueDate: dayjs().subtract(1, "day").toISOString(),
    tags: ["디자인", "검토"],
    epicId: "epic-1",
    projectId: "project-1",
    createdAt: dayjs().subtract(3, "day").toISOString(),
    updatedAt: dayjs().subtract(1, "day").toISOString(),
    completedAt: dayjs().subtract(1, "day").toISOString(),
  },
  {
    id: generateId(),
    title: "데이터베이스 스키마 설계",
    description: "효율적인 데이터 저장을 위한 데이터베이스 구조를 설계합니다.",
    completed: false,
    priority: "urgent",
    dueDate: dayjs().add(1, "day").toISOString(),
    tags: ["개발", "데이터베이스"],
    epicId: "epic-2",
    projectId: "project-2",
    createdAt: dayjs().subtract(2, "day").toISOString(),
    updatedAt: dayjs().subtract(2, "day").toISOString(),
  },
];

const createSampleEpics = (): Epic[] => [
  {
    id: "epic-1",
    title: "웹 애플리케이션 개발 🚀",
    description: "사용자 친화적인 웹 애플리케이션을 개발하는 대규모 프로젝트입니다.",
    status: "active",
    priority: "high",
    startDate: dayjs().subtract(1, "week").toISOString(),
    dueDate: dayjs().add(2, "month").toISOString(),
    progress: 35,
    projects: [],
    color: "#FF6B6B",
    emoji: "🚀",
    tags: ["개발", "웹"],
    createdAt: dayjs().subtract(1, "week").toISOString(),
    updatedAt: dayjs().toISOString(),
  },
  {
    id: "epic-2",
    title: "데이터 분석 플랫폼 🔍",
    description: "빅데이터를 활용한 인사이트 도출 플랫폼을 구축합니다.",
    status: "planning",
    priority: "medium",
    startDate: dayjs().add(1, "week").toISOString(),
    dueDate: dayjs().add(3, "month").toISOString(),
    progress: 10,
    projects: [],
    color: "#4ECDC4",
    emoji: "🔍",
    tags: ["데이터", "분석"],
    createdAt: dayjs().subtract(3, "day").toISOString(),
    updatedAt: dayjs().toISOString(),
  },
];

const createSampleProjects = (): Project[] => [
  {
    id: "project-1",
    title: "프론트엔드 개발",
    description: "React 기반 사용자 인터페이스 개발",
    status: "active",
    priority: "high",
    startDate: dayjs().subtract(5, "day").toISOString(),
    dueDate: dayjs().add(1, "month").toISOString(),
    progress: 45,
    tasks: [],
    tags: ["React", "Frontend"],
    epicId: "epic-1",
    createdAt: dayjs().subtract(5, "day").toISOString(),
    updatedAt: dayjs().toISOString(),
  },
  {
    id: "project-2",
    title: "백엔드 API 개발",
    description: "RESTful API 서버 구축",
    status: "active",
    priority: "high",
    startDate: dayjs().subtract(3, "day").toISOString(),
    dueDate: dayjs().add(6, "week").toISOString(),
    progress: 25,
    tasks: [],
    tags: ["Node.js", "Backend"],
    epicId: "epic-2",
    createdAt: dayjs().subtract(3, "day").toISOString(),
    updatedAt: dayjs().toISOString(),
  },
];

// Context 타입 정의
interface TodoContextType {
  // 상태
  todos: Todo[];
  epics: Epic[];
  projects: Project[];
  
  // Todo 관련 함수
  addTodo: (todo: Omit<Todo, "id" | "createdAt" | "updatedAt">) => void;
  updateTodo: (updatedTodo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleTodoComplete: (id: string) => void;
  
  // Epic 관련 함수
  addEpic: (epic: Omit<Epic, "id" | "createdAt" | "updatedAt" | "projects" | "progress">) => void;
  updateEpic: (updatedEpic: Epic) => void;
  deleteEpic: (id: string) => void;
  
  // Project 관련 함수
  addProject: (project: Omit<Project, "id" | "createdAt" | "updatedAt" | "tasks">, epicId?: string) => void;
  updateProject: (updatedProject: Project) => void;
  deleteProject: (id: string) => void;
  
  // 유틸리티 함수
  getEpicById: (id: string) => Epic | undefined;
  getProjectById: (id: string) => Project | undefined;
  getTodosByProjectId: (projectId: string) => Todo[];
  getTodosByEpicId: (epicId: string) => Todo[];
  getProjectsByEpicId: (epicId: string) => Project[];
}

// Context 생성
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider Props 타입
interface TodoProviderProps {
  children: ReactNode;
}

// Provider 컴포넌트
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [epics, setEpics] = useState<Epic[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  // localStorage 키
  const STORAGE_KEYS = {
    todos: "todos",
    epics: "epics", 
    projects: "projects",
  };

  // 초기 데이터 로드
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEYS.todos);
      const savedEpics = localStorage.getItem(STORAGE_KEYS.epics);
      const savedProjects = localStorage.getItem(STORAGE_KEYS.projects);

      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      } else {
        const sampleTodos = createSampleTodos();
        setTodos(sampleTodos);
        localStorage.setItem(STORAGE_KEYS.todos, JSON.stringify(sampleTodos));
      }

      if (savedEpics) {
        setEpics(JSON.parse(savedEpics));
      } else {
        const sampleEpics = createSampleEpics();
        setEpics(sampleEpics);
        localStorage.setItem(STORAGE_KEYS.epics, JSON.stringify(sampleEpics));
      }

      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      } else {
        const sampleProjects = createSampleProjects();
        setProjects(sampleProjects);
        localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(sampleProjects));
      }
    } catch (error) {
      console.error("데이터 로드 실패:", error);
      // 오류 시 샘플 데이터 사용
      setTodos(createSampleTodos());
      setEpics(createSampleEpics());
      setProjects(createSampleProjects());
    }
  }, []);

  // localStorage 동기화
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.todos, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.epics, JSON.stringify(epics));
  }, [epics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
  }, [projects]);

  // Todo 관련 함수들
  const addTodo = (todoData: Omit<Todo, "id" | "createdAt" | "updatedAt">) => {
    const newTodo: Todo = {
      ...todoData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const updateTodo = (updatedTodo: Todo) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === updatedTodo.id 
          ? { ...updatedTodo, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const toggleTodoComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? new Date().toISOString() : undefined,
              updatedAt: new Date().toISOString(),
            }
          : todo
      )
    );
  };

  // Epic 관련 함수들
  const addEpic = (epicData: Omit<Epic, "id" | "createdAt" | "updatedAt" | "projects" | "progress">) => {
    const newEpic: Epic = {
      ...epicData,
      id: generateId(),
      projects: [],
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setEpics(prev => [...prev, newEpic]);
  };

  const updateEpic = (updatedEpic: Epic) => {
    setEpics(prev =>
      prev.map(epic =>
        epic.id === updatedEpic.id
          ? { ...updatedEpic, updatedAt: new Date().toISOString() }
          : epic
      )
    );
  };

  const deleteEpic = (id: string) => {
    setEpics(prev => prev.filter(epic => epic.id !== id));
    // 해당 에픽과 연결된 할일들과 프로젝트들의 epicId 제거
    setTodos(prev =>
      prev.map(todo =>
        todo.epicId === id
          ? { ...todo, epicId: undefined, updatedAt: new Date().toISOString() }
          : todo
      )
    );
    setProjects(prev =>
      prev.map(project =>
        project.epicId === id
          ? { ...project, epicId: undefined, updatedAt: new Date().toISOString() }
          : project
      )
    );
  };

  // Project 관련 함수들
  const addProject = (projectData: Omit<Project, "id" | "createdAt" | "updatedAt" | "tasks">, epicId?: string) => {
    const newProject: Project = {
      ...projectData,
      id: generateId(),
      tasks: [],
      epicId: epicId || projectData.epicId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setProjects(prev => [...prev, newProject]);

    // 에픽의 projects 배열에도 추가
    if (newProject.epicId) {
      setEpics(prev =>
        prev.map(epic =>
          epic.id === newProject.epicId
            ? { ...epic, projects: [...epic.projects, newProject], updatedAt: new Date().toISOString() }
            : epic
        )
      );
    }
  };

  const updateProject = (updatedProject: Project) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === updatedProject.id
          ? { ...updatedProject, updatedAt: new Date().toISOString() }
          : project
      )
    );

    // 에픽의 projects 배열도 업데이트
    setEpics(prev =>
      prev.map(epic => ({
        ...epic,
        projects: epic.projects.map(project =>
          project.id === updatedProject.id ? updatedProject : project
        ),
        updatedAt: new Date().toISOString(),
      }))
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
    
    // 에픽의 projects 배열에서도 제거
    setEpics(prev =>
      prev.map(epic => ({
        ...epic,
        projects: epic.projects.filter(project => project.id !== id),
        updatedAt: new Date().toISOString(),
      }))
    );

    // 해당 프로젝트와 연결된 할일들의 projectId 제거
    setTodos(prev =>
      prev.map(todo =>
        todo.projectId === id
          ? { ...todo, projectId: undefined, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  };

  // 유틸리티 함수들
  const getEpicById = (id: string) => epics.find(epic => epic.id === id);
  const getProjectById = (id: string) => projects.find(project => project.id === id);
  const getTodosByProjectId = (projectId: string) => todos.filter(todo => todo.projectId === projectId);
  const getTodosByEpicId = (epicId: string) => todos.filter(todo => todo.epicId === epicId);
  const getProjectsByEpicId = (epicId: string) => projects.filter(project => project.epicId === epicId);

  const value: TodoContextType = {
    // 상태
    todos,
    epics,
    projects,
    
    // Todo 함수들
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoComplete,
    
    // Epic 함수들
    addEpic,
    updateEpic,
    deleteEpic,
    
    // Project 함수들
    addProject,
    updateProject,
    deleteProject,
    
    // 유틸리티 함수들
    getEpicById,
    getProjectById,
    getTodosByProjectId,
    getTodosByEpicId,
    getProjectsByEpicId,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// Hook
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}; 