// 컨디션 관련 타입
export interface ConditionEntry {
  id: string;
  date: string; // YYYY-MM-DD
  hour: number; // 0-23
  condition: ConditionLevel;
  memo?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export type ConditionLevel = "excellent" | "good" | "normal" | "tired" | "exhausted";

// 프로젝트 관리 타입
export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  priority: Priority;
  startDate?: string;
  dueDate?: string;
  progress: number; // 0-100
  tasks: Task[];
  tags?: string[];
  epicId?: string; // 에픽과 연결 (선택적)
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  dueDate?: string;
  estimatedHours?: number;
  actualHours?: number;
  createdAt: string;
  updatedAt: string;
}

export type ProjectStatus = "planning" | "active" | "paused" | "completed" | "cancelled";
export type TaskStatus = "todo" | "in-progress" | "review" | "completed";
export type Priority = "low" | "medium" | "high" | "urgent";

// 간단한 할일 타입 (프로젝트별 관리용)
export interface SimpleTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

// 솔루션 시스템 타입
export interface Solution {
  id: string;
  title: string;
  description: string;
  type: SolutionType;
  triggers: ConditionLevel[];
  steps: string[];
  estimatedMinutes: number;
  emoji: string;
  tags?: string[];
}

export type SolutionType = "exercise" | "meditation" | "break" | "nutrition" | "environment" | "mindset";

// 채팅 관련 타입
export interface ChatMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: string;
  context?: ChatContext;
}

export interface ChatContext {
  currentCondition?: ConditionLevel;
  activeProjects?: Project[];
  recentActivities?: string[];
  userPreferences?: UserPreferences;
}

// 테마 관련 타입 추가
export type ThemeType = "penguin" | "desert-fox" | "sheep" | "cat";
export type ColorMode = "light" | "dark" | "auto";

export interface ThemeSettings {
  type: ThemeType;
  mode: ColorMode;
}

// 테마별 색상 세트 정의
export interface ThemeColorSet {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  background: string;
  paper: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

// 테마별 컨셉 정의
export interface ThemeConcepts {
  loading: string;
  welcome: string;
  appName: string;
  appDescription: string;
  environment: string;
  animal: string;
  greeting: string;
  farewell: string;
  // Dashboard 관련
  baseTitle: string;
  baseWelcome: string;
  liveView: string;
  liveViewDescription: string;
  quickActions: string;
  activeProjects: string;
  projectStats: string;
  animalSaying: string;
  // 온도 기분
  temperatureMoods: {
    cold: string;
    cool: string;
    mild: string;
    warm: string;
    hot: string;
  };
  // 프로젝트 관련
  projectType: string; // "탐험" vs "모험"
  projectCreate: string;
  projectManage: string;
}

// 사용자 설정 타입
export interface UserPreferences {
  name?: string;
  timezone: string;
  workingHours: {
    start: number; // 0-23
    end: number; // 0-23
  };
  notifications: {
    conditionReminders: boolean;
    projectDeadlines: boolean;
    breakReminders: boolean;
  };
  theme: ThemeSettings;
  language: "ko" | "en";
}

// 통계 타입
export interface ConditionStats {
  weeklyAverage: number;
  monthlyTrend: { date: string; average: number }[];
  mostProductiveHours: number[];
  commonPatterns: string[];
}

export interface ProjectStats {
  totalProjects: number;
  completedProjects: number;
  averageCompletionTime: number;
  productivityByHour: { hour: number; efficiency: number }[];
}

// 뽀모도로 관련 타입
export interface PomodoroSession {
  id: string;
  userId: string;
  projectId: string;
  projectTitle: string;
  taskId: string;
  taskTitle: string;
  sessionType: "work" | "break";
  duration: number; // 分 단위 (25분 또는 5분) - 설정된 시간
  actualDuration?: number; // 분 단위 - 실제 경과 시간 (중도 중단 시)
  startTime: string; // ISO string
  endTime: string; // ISO string
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WeeklyPomodoroStats {
  weekStart: string; // YYYY-MM-DD
  weekEnd: string; // YYYY-MM-DD
  totalSessions: number;
  workSessions: number;
  breakSessions: number;
  totalMinutes: number;
  projectBreakdown: Array<{
    projectId: string;
    projectTitle: string;
    sessions: number;
    minutes: number;
    tasks: Array<{
      taskId: string;
      taskTitle: string;
      sessions: number;
      minutes: number;
    }>;
  }>;
  dailyBreakdown: Array<{
    date: string; // YYYY-MM-DD
    sessions: number;
    minutes: number;
  }>;
}

// 확장된 테마 시스템을 위한 새로운 인터페이스들
export interface ThemeUIConfig {
  background: {
    primary: string; // 메인 배경색
    secondary: string; // 보조 배경색
    pattern: string; // SVG 패턴 URL
    gradient: string; // CSS 그라디언트
  };
  border: {
    color: string; // 테두리 색상
    shadow: string; // 박스 섀도우
  };
  path: {
    color: string; // 원형 경로 색상
    opacity: number; // 경로 투명도
  };
}

export interface ThemeGameConfig {
  blocks: {
    emoji: string; // 블록 이모지
    type: string; // 블록 타입 이름 (얼음, 피라미드 등)
    collectName: string; // 수집 아이템 이름
  };
  building: {
    name: string; // 건축물 이름 (피라미드, 얼음성 등)
    description: string; // 건축물 설명
    completionMessage: string; // 완성 메시지
  };
  collectInterval: number; // 블록 수집 간격 (초)
  maxBlocks: number; // 최대 블록 수
  progressPerBlock: number; // 블록당 진행도 (%)
}

export interface ThemeAnimationConfig {
  animal: {
    speed: number; // 이동 속도 (원주 속도)
    radius: number; // 이동 반지름 (%)
    bounceHeight: number; // 바운스 높이 효과
  };
  blocks: {
    popDuration: string; // 블록 팝업 애니메이션 시간 (CSS 시간)
    arrangement: "pyramid" | "tower" | "circle" | "spiral"; // 블록 배치 방식
    spacing: {
      horizontal: number; // 가로 간격
      vertical: number; // 세로 간격
    };
  };
}

// 확장된 ThemeConfig 인터페이스
export interface ThemeConfigExtended {
  id: ThemeType;
  name: string;
  emoji: string;
  description: string;
  colors: {
    light: ThemeColorSet;
    dark: ThemeColorSet;
  };
  concepts: ThemeConcepts;
  ui: ThemeUIConfig;
  game: ThemeGameConfig;
  animation: ThemeAnimationConfig;
}

// 기존 ThemeConfig와의 호환성을 위한 타입 (점진적 마이그레이션)
export interface ThemeConfig extends Partial<ThemeConfigExtended> {
  name: string;
  emoji: string;
  colors: {
    light: ThemeColorSet;
    dark: ThemeColorSet;
  };
  concepts: ThemeConcepts;
}

// Epic 관리 타입 (대주제 개념)
export interface Epic {
  id: string;
  title: string;
  description: string;
  status: EpicStatus;
  priority: Priority;
  startDate?: string;
  dueDate?: string;
  progress: number; // 0-100 (하위 프로젝트들의 평균 진행률)
  projects: Project[]; // 이 에픽에 속한 프로젝트들
  color: string; // 에픽 구분용 색상
  emoji?: string; // 에픽 아이콘
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export type EpicStatus = "planning" | "active" | "paused" | "completed" | "cancelled";

// 확장된 할일 타입 (독립적인 할일 관리용)
export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string;
  tags?: string[];
  epicId?: string; // 에픽과 연결 (선택적)
  projectId?: string; // 프로젝트와 연결 (선택적)
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

// 할일 필터 타입
export interface TodoFilter {
  status?: "all" | "completed" | "pending";
  priority?: Priority | "all";
  epicId?: string | "all";
  projectId?: string | "all";
  tags?: string[];
  dateRange?: {
    start?: string;
    end?: string;
  };
}

// 에픽 통계 타입
export interface EpicStats {
  totalEpics: number;
  activeEpics: number;
  completedEpics: number;
  totalProjects: number;
  completedProjects: number;
  totalTodos: number;
  completedTodos: number;
  averageEpicCompletionTime?: number; // 일 단위
}

// 할일 통계 타입
export interface TodoStats {
  totalTodos: number;
  completedTodos: number;
  completionRate: number; // 0-100
  todayTodos: number;
  overdueTodos: number;
  upcomingTodos: number;
  priorityBreakdown: {
    urgent: number;
    high: number;
    medium: number;
    low: number;
  };
  dailyCompletions: Array<{
    date: string; // YYYY-MM-DD
    completed: number;
  }>;
}

// 긴급알림 시스템
export interface EmergencyAlert {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "error" | "success";
  severity: "low" | "medium" | "high" | "critical";
  createdAt: string;
  expiresAt?: string; // 만료일 (선택적)
  dismissible: boolean; // 사용자가 닫을 수 있는지
  persistent: boolean; // 새로고침해도 계속 표시할지
  targetUsers?: string[]; // 특정 사용자만 대상 (선택적)
  dismissed: boolean; // 사용자가 닫았는지
  dismissedAt?: string; // 언제 닫았는지
  showOnce?: boolean; // 한 번만 표시할지
}

export type AlertSeverity = EmergencyAlert["severity"];
export type AlertType = EmergencyAlert["type"];
