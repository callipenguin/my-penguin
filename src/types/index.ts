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
  theme: "light" | "dark" | "auto";
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
