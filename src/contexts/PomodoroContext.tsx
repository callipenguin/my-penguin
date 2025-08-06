import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { Project } from "../types";

// SimpleTodo 인터페이스
interface SimpleTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

// 뽀모도로 상태 인터페이스
interface PomodoroState {
  isActive: boolean;
  time: number; // 남은 시간 (초)
  totalTime: number; // 전체 시간 (초)
  selectedProject: Project | null;
  selectedTask: SimpleTodo | null;
  isBreak: boolean;
  completedSessions: number;
  sessionStartTime: string | null;
  currentSessionId: string | null;
}

// 뽀모도로 액션 인터페이스
interface PomodoroActions {
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  setTime: (minutes: number) => void;
  setProject: (project: Project | null) => void;
  setTask: (task: SimpleTodo | null) => void;
  setIsBreak: (isBreak: boolean) => void;
  completeSession: () => void;
}

// Context 타입
interface PomodoroContextType extends PomodoroState, PomodoroActions {}

// Context 생성
const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

// Provider Props
interface PomodoroProviderProps {
  children: ReactNode;
}

// Provider 컴포넌트
export const PomodoroProvider: React.FC<PomodoroProviderProps> = ({ children }) => {
  // 상태 관리
  const [isActive, setIsActive] = useState(false);
  const [time, setTimeState] = useState(25 * 60); // 기본 25분
  const [totalTime, setTotalTime] = useState(25 * 60);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTask, setSelectedTask] = useState<SimpleTodo | null>(null);
  const [isBreak, setIsBreak] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [sessionStartTime, setSessionStartTime] = useState<string | null>(null);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);

  // 백그라운드 타이머를 위한 참조
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 타이머 효과
  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTimeState((prevTime) => {
          if (prevTime <= 1) {
            // 타이머 완료
            setIsActive(false);
            completeSession();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, time]);

  // 로컬스토리지에 상태 저장
  useEffect(() => {
    const pomodoroState = {
      isActive,
      time,
      totalTime,
      selectedProject,
      selectedTask,
      isBreak,
      completedSessions,
      sessionStartTime,
      currentSessionId,
    };
    localStorage.setItem("pomodoroState", JSON.stringify(pomodoroState));
  }, [
    isActive,
    time,
    totalTime,
    selectedProject,
    selectedTask,
    isBreak,
    completedSessions,
    sessionStartTime,
    currentSessionId,
  ]);

  // 컴포넌트 마운트 시 저장된 상태 복원
  useEffect(() => {
    const savedState = localStorage.getItem("pomodoroState");
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setIsActive(parsed.isActive || false);
        setTimeState(parsed.time || 25 * 60);
        setTotalTime(parsed.totalTime || 25 * 60);
        setSelectedProject(parsed.selectedProject || null);
        setSelectedTask(parsed.selectedTask || null);
        setIsBreak(parsed.isBreak || false);
        setCompletedSessions(parsed.completedSessions || 0);
        setSessionStartTime(parsed.sessionStartTime || null);
        setCurrentSessionId(parsed.currentSessionId || null);
      } catch (error) {
        console.error("뽀모도로 상태 복원 실패:", error);
      }
    }
  }, []);

  // 액션 함수들
  const startTimer = () => {
    if (!sessionStartTime) {
      setSessionStartTime(new Date().toISOString());
      setCurrentSessionId(Date.now().toString());
    }
    startTimeRef.current = Date.now();
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeState(totalTime);
    setSessionStartTime(null);
    setCurrentSessionId(null);
    startTimeRef.current = null;
  };

  const setTime = (minutes: number) => {
    const seconds = minutes * 60;
    setTimeState(seconds);
    setTotalTime(seconds);
  };

  const setProject = (project: Project | null) => {
    setSelectedProject(project);
  };

  const setTask = (task: SimpleTodo | null) => {
    setSelectedTask(task);
  };

  const completeSession = () => {
    setCompletedSessions((prev) => prev + 1);
    setSessionStartTime(null);
    setCurrentSessionId(null);

    // 브레이크 시간으로 전환
    if (!isBreak) {
      setIsBreak(true);
      setTime(5); // 5분 브레이크
    } else {
      setIsBreak(false);
      setTime(25); // 다시 25분 작업
    }

    // 완료 알림 (선택적)
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(isBreak ? "브레이크 완료! 🎉" : "뽀모도로 완료! 🍅", {
        body: isBreak ? "작업을 시작하세요!" : "잠시 휴식하세요!",
        icon: isBreak ? "🎉" : "🍅",
      });
    }
  };

  const contextValue: PomodoroContextType = {
    // 상태
    isActive,
    time,
    totalTime,
    selectedProject,
    selectedTask,
    isBreak,
    completedSessions,
    sessionStartTime,
    currentSessionId,
    // 액션
    startTimer,
    pauseTimer,
    resetTimer,
    setTime,
    setProject,
    setTask,
    setIsBreak,
    completeSession,
  };

  return <PomodoroContext.Provider value={contextValue}>{children}</PomodoroContext.Provider>;
};

// Hook
export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error("usePomodoro must be used within a PomodoroProvider");
  }
  return context;
};

// 시간 포맷팅 유틸리티
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};
