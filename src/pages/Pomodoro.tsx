import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  useTheme,
  useMediaQuery,
  Fade,
  Alert,
  IconButton,
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  Refresh,
  CheckCircle,
  Timer,
  AcUnit,
  Celebration,
  Add,
  Edit,
  Delete,
} from "@mui/icons-material";
import { Project } from "../types";
import { loadUserData, getCurrentUser, savePomodoroSession, saveUserData } from "../utils/firebase";
import { ThemeConfigExtended } from "../types";
import { getThemeUI, getThemeGame, getThemeAnimation, isThemeType } from "../config/themes";

// SimpleTodo 인터페이스 추가
interface SimpleTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface PomodoroProps {
  themeConfig?: ThemeConfigExtended;
}

const Pomodoro: React.FC<PomodoroProps> = ({ themeConfig }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // 테마별 설정 가져오기
  const themeUI = getThemeUI(themeConfig);
  const themeGame = getThemeGame(themeConfig);
  const themeAnimation = getThemeAnimation(themeConfig);

  // 뽀모도로 상태
  const [isActive, setIsActive] = useState(false);
  const [selectedMinutes, setSelectedMinutes] = useState(25); // 기본 25분
  const [time, setTime] = useState(25 * 60); // 초 단위
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTask, setSelectedTask] = useState<SimpleTodo | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectTodos, setProjectTodos] = useState<{ [projectId: string]: SimpleTodo[] }>({});
  const [isBreak, setIsBreak] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  // 애니메이션 상태 (개선된 원형 시스템)
  const [animalPosition, setAnimalPosition] = useState({ x: 50, y: 50 });
  const [circleBlocks, setCircleBlocks] = useState<Array<{ id: number; angle: number; filled: boolean }>>([]);

  // 현재 세션 추적을 위한 상태
  const [sessionStartTime, setSessionStartTime] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastCompletedSession, setLastCompletedSession] = useState<{
    projectTitle: string;
    taskTitle: string;
    sessionType: string;
    duration: number;
  } | null>(null);

  // 프로젝트/테스크 생성 다이얼로그 상태
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // 알림 사운드 Ref
  const notificationAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    loadProjects();
    loadProjectTodos();

    // 알림 사운드 초기화
    try {
      notificationAudioRef.current = new Audio();
      // 브라우저 내장 사운드 사용 (데이터 URI로 간단한 비프음 생성)
      notificationAudioRef.current.src =
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZgdT32YorBjOH3vbYhTYEJYHU99uLNwgYgtD32YcrBTOH2vbYgzUEJYHW99uLNwgWgdD32YorBTOH2vbYgzQEJYPY99uLNwgXgdP32YcrBDOG2fXWgTYEJ4LS9dqMNwcUgNP32I0qBjOH3fVwKdOoAo+OgNT22I0qBjOE0/TUmzEGFYDO9dyIKwUzhdj42YYz6DOEz/TQjC8UgNP32IsyBjOH3fXYyDQODYHQ8teBONQ4HoPU9tyIrSoGLYHO9diJNwgZgdT32YorBmQ";
    } catch (error) {
      console.warn("알림 사운드 초기화 실패:", error);
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log("🎮 Pomodoro 페이지 활성화 - 데이터 새로고침");
        loadProjectTodos();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // 분 단위 변경 시 시간 업데이트
  useEffect(() => {
    if (!isActive) {
      setTime(selectedMinutes * 60);
    }
  }, [selectedMinutes, isActive]);

  // 타이머 효과
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          const totalTime = selectedMinutes * 60;
          const progress = ((totalTime - newTime) / totalTime) * 100;

          // 원형 블록 업데이트
          updateCircleBlocks(progress);

          return newTime;
        });
      }, 1000);
    } else if (time === 0) {
      handleTimerComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, selectedMinutes]);

  // 동물 애니메이션 효과 (1분에 한바퀴)
  useEffect(() => {
    if (!isActive) return;

    const animateAnimal = () => {
      const elapsed = selectedMinutes * 60 - time; // 경과 시간 (초)
      const angle = (elapsed / 60) * 2 * Math.PI; // 1분에 한바퀴 (2π)
      const radius = 35; // 반지름
      const centerX = 50;
      const centerY = 50;

      const x = centerX + Math.cos(angle - Math.PI / 2) * radius; // -π/2로 12시 방향에서 시작
      const y = centerY + Math.sin(angle - Math.PI / 2) * radius;

      setAnimalPosition({ x, y });
    };

    const animationInterval = setInterval(animateAnimal, 100);
    return () => clearInterval(animationInterval);
  }, [isActive, time, selectedMinutes]);

  // 원형 블록 시스템 초기화 및 업데이트
  useEffect(() => {
    initializeCircleBlocks();
  }, [selectedMinutes]);

  const initializeCircleBlocks = () => {
    const totalBlocks = 60; // 원주를 60개 구간으로 나눔
    const blocks = [];

    for (let i = 0; i < totalBlocks; i++) {
      blocks.push({
        id: i,
        angle: (i * 360) / totalBlocks, // 0-360도
        filled: false,
      });
    }

    setCircleBlocks(blocks);
  };

  const updateCircleBlocks = (progress: number) => {
    const totalBlocks = 60;
    const filledCount = Math.floor((progress / 100) * totalBlocks);

    setCircleBlocks((prev) =>
      prev.map((block, index) => ({
        ...block,
        filled: index < filledCount,
      }))
    );
  };

  const loadProjects = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "projects");
        if (result.success && result.data) {
          setProjects(result.data);
        }
      }
    } catch (error) {
      console.error("프로젝트 로드 실패:", error);
    }
  };

  const loadProjectTodos = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "projectTodos");
        if (result.success && result.data) {
          console.log("🎮 Pomodoro: Firebase에서 할일 로드 성공:", result.data);
          setProjectTodos(result.data);
        }
      } else {
        const savedTodos = localStorage.getItem("projectTodos");
        if (savedTodos) {
          const parsedTodos = JSON.parse(savedTodos);
          setProjectTodos(parsedTodos);
        }
      }
    } catch (error) {
      console.error("할일 로드 실패:", error);
      const savedTodos = localStorage.getItem("projectTodos");
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        setProjectTodos(parsedTodos);
      }
    }
  };

  // 프로젝트 생성
  const handleCreateProject = async () => {
    if (!newProjectTitle.trim()) return;

    const user = getCurrentUser();
    if (!user) return;

    const newProject: Project = {
      id: `proj_${Date.now()}`,
      title: newProjectTitle.trim(),
      description: newProjectDescription.trim(),
      status: "active",
      priority: "medium",
      progress: 0,
      tasks: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      const updatedProjects = [...projects, newProject];
      const result = await saveUserData(user.uid, "projects", updatedProjects);

      if (result.success) {
        setProjects(updatedProjects);
        setNewProjectTitle("");
        setNewProjectDescription("");
        setProjectDialogOpen(false);
        setSelectedProject(newProject);
      }
    } catch (error) {
      console.error("프로젝트 생성 실패:", error);
    }
  };

  // 테스크 생성
  const handleCreateTask = async () => {
    if (!newTaskTitle.trim() || !selectedProject) return;

    const user = getCurrentUser();
    if (!user) return;

    const newTask: SimpleTodo = {
      id: `task_${Date.now()}`,
      title: newTaskTitle.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    try {
      const updatedTodos = {
        ...projectTodos,
        [selectedProject.id]: [...(projectTodos[selectedProject.id] || []), newTask],
      };

      const result = await saveUserData(user.uid, "projectTodos", updatedTodos);

      if (result.success) {
        setProjectTodos(updatedTodos);
        setNewTaskTitle("");
        setTaskDialogOpen(false);
        setSelectedTask(newTask);
      }
    } catch (error) {
      console.error("테스크 생성 실패:", error);
    }
  };

  // 테스크 완료 토글
  const handleToggleTaskComplete = async (task: SimpleTodo) => {
    if (!selectedProject) return;

    const user = getCurrentUser();
    if (!user) return;

    try {
      const updatedTodos = {
        ...projectTodos,
        [selectedProject.id]: projectTodos[selectedProject.id].map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t
        ),
      };

      const result = await saveUserData(user.uid, "projectTodos", updatedTodos);

      if (result.success) {
        setProjectTodos(updatedTodos);
        // 완료된 테스크는 선택 해제
        if (selectedTask?.id === task.id && !task.completed) {
          setSelectedTask(null);
        }
      }
    } catch (error) {
      console.error("테스크 상태 업데이트 실패:", error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsActive(true);
    setSessionStartTime(new Date().toISOString());
    initializeCircleBlocks(); // 블록 초기화
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(selectedMinutes * 60);
    setSessionStartTime(null);
    setAnimalPosition({ x: 50, y: 50 }); // 12시 방향으로 초기화
    initializeCircleBlocks(); // 블록 초기화
  };

  // 요란한 알림 함수
  const playCompletionNotification = () => {
    try {
      // 브라우저 알림
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("🎉 뽀모도로 완료!", {
          body: `${selectedMinutes}분 집중 완료! 수고하셨어요!`,
          icon: "/favicon.ico",
        });
      }

      // 사운드 재생 (여러번)
      if (notificationAudioRef.current) {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            notificationAudioRef.current?.play().catch((e) => console.warn("사운드 재생 실패:", e));
          }, i * 200);
        }
      }

      // 진동 (모바일)
      if ("vibrate" in navigator) {
        navigator.vibrate([500, 200, 500, 200, 500]);
      }

      // 브라우저 탭 제목 깜빡임
      let blinkCount = 0;
      const originalTitle = document.title;
      const blinkInterval = setInterval(() => {
        document.title = blinkCount % 2 === 0 ? "🎉 완료! 🎉" : originalTitle;
        blinkCount++;
        if (blinkCount > 10) {
          clearInterval(blinkInterval);
          document.title = originalTitle;
        }
      }, 500);
    } catch (error) {
      console.warn("알림 재생 실패:", error);
    }
  };

  const handleTimerComplete = async () => {
    setIsActive(false);

    // 🎉 요란한 알림!
    playCompletionNotification();

    // 뽀모도로 세션 기록 저장
    if (sessionStartTime && selectedProject && selectedTask) {
      try {
        const user = getCurrentUser();
        if (user) {
          const sessionData = {
            projectId: selectedProject.id,
            projectTitle: selectedProject.title,
            taskId: selectedTask.id,
            taskTitle: selectedTask.title,
            sessionType: isBreak ? ("break" as const) : ("work" as const),
            duration: selectedMinutes,
            startTime: sessionStartTime,
            endTime: new Date().toISOString(),
            completed: true,
          };

          const result = await savePomodoroSession(user.uid, sessionData);
          if (result.success) {
            setLastCompletedSession({
              projectTitle: selectedProject.title,
              taskTitle: selectedTask.title,
              sessionType: isBreak ? "휴식" : "집중",
              duration: selectedMinutes,
            });
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 5000);
          }
        }
      } catch (error) {
        console.error("뽀모도로 세션 저장 중 오류:", error);
      }
    }

    if (!isBreak) {
      setCompletedSessions((prev) => prev + 1);
      setIsBreak(true);
      const breakMinutes = Math.max(5, Math.floor(selectedMinutes / 5)); // 선택 시간의 1/5, 최소 5분
      setSelectedMinutes(breakMinutes);
      setTime(breakMinutes * 60);
    } else {
      setIsBreak(false);
      setSelectedMinutes(25); // 기본값으로 복원
      setTime(25 * 60);
    }

    setSessionStartTime(null);
  };

  // 알림 권한 요청
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const availableTasks = selectedProject
    ? (projectTodos[selectedProject.id] || []).filter((todo) => !todo.completed)
    : [];

  const progress = ((selectedMinutes * 60 - time) / (selectedMinutes * 60)) * 100;
  const filledBlocksCount = circleBlocks.filter((block) => block.filled).length;

  return (
    <Box sx={{ p: isMobile ? 2 : 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Timer /> {themeConfig?.emoji} {themeConfig?.concepts?.animal} 뽀모도로
        </Typography>
        <Typography variant="body1" color="textSecondary">
          집중할 시간을 선택하고 {themeConfig?.concepts?.animal}과 함께 집중해보세요! {themeConfig?.emoji}⭐️
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 3 }}>
        {/* 축하 메시지 */}
        <Fade in={showCelebration}>
          <Card
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              minWidth: isMobile ? 300 : 400,
              background: themeUI.background.gradient,
              color: "white",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <CardContent sx={{ textAlign: "center", py: 4 }}>
              <Celebration sx={{ fontSize: 80, mb: 2, color: "#FFD700" }} />
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                🎉 완료!
              </Typography>
              {lastCompletedSession && (
                <>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    {lastCompletedSession.duration}분 {lastCompletedSession.sessionType} 세션 완료
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      borderRadius: 2,
                      p: 2,
                      mb: 2,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography variant="body1" fontWeight="bold">
                      📁 {lastCompletedSession.projectTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      ✅ {lastCompletedSession.taskTitle}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {themeGame.building.completionMessage}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Fade>

        {/* 왼쪽: 설정 패널 */}
        <Card sx={{ flex: 1, maxWidth: isMobile ? "100%" : 400 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AcUnit color="primary" /> 작업 설정
            </Typography>

            {/* 시간 선택 슬라이더 */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                집중 시간: {selectedMinutes}분
              </Typography>
              <Slider
                value={selectedMinutes}
                onChange={(_, value) => setSelectedMinutes(value as number)}
                min={5}
                max={99}
                step={1}
                disabled={isActive}
                marks={[
                  { value: 5, label: "5분" },
                  { value: 25, label: "25분" },
                  { value: 50, label: "50분" },
                  { value: 99, label: "99분" },
                ]}
                sx={{
                  "& .MuiSlider-thumb": {
                    background: themeUI.border.color,
                  },
                  "& .MuiSlider-track": {
                    background: themeUI.background.gradient,
                  },
                }}
              />
            </Box>

            {/* 프로젝트 선택 */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>프로젝트 선택</InputLabel>
              <Select
                value={selectedProject?.id || ""}
                label="프로젝트 선택"
                onChange={(e) => {
                  const project = projects.find((p) => p.id === e.target.value);
                  setSelectedProject(project || null);
                  setSelectedTask(null);
                  if (project) {
                    loadProjectTodos();
                  }
                }}
              >
                {projects.map((project) => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* 프로젝트 생성 버튼 */}
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => setProjectDialogOpen(true)}
              sx={{ mb: 2, width: "100%" }}
            >
              새 프로젝트 만들기
            </Button>

            {/* 태스크 선택 */}
            {selectedProject && (
              <>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>태스크 선택</InputLabel>
                  <Select
                    value={selectedTask?.id || ""}
                    label="태스크 선택"
                    onChange={(e) => {
                      const task = availableTasks.find((t) => t.id === e.target.value);
                      setSelectedTask(task || null);
                    }}
                  >
                    {availableTasks.map((task) => (
                      <MenuItem key={task.id} value={task.id}>
                        {task.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* 테스크 생성 버튼 */}
                <Button
                  variant="outlined"
                  startIcon={<Add />}
                  onClick={() => setTaskDialogOpen(true)}
                  sx={{ mb: 2, width: "100%" }}
                >
                  새 테스크 만들기
                </Button>

                {/* 테스크 목록 및 완료 처리 */}
                {projectTodos[selectedProject.id]?.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      테스크 목록:
                    </Typography>
                    <List dense>
                      {projectTodos[selectedProject.id].map((task) => (
                        <ListItem key={task.id} sx={{ px: 0 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={task.completed}
                                onChange={() => handleToggleTaskComplete(task)}
                                size="small"
                              />
                            }
                            label={
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textDecoration: task.completed ? "line-through" : "none",
                                    opacity: task.completed ? 0.6 : 1,
                                  }}
                                >
                                  {task.title}
                                </Typography>
                                {task.completed && <Chip label="완료" size="small" color="success" />}
                              </Box>
                            }
                            sx={{ flex: 1, m: 0 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </>
            )}

            {/* 할일이 없을 때 안내 메시지 */}
            {selectedProject && availableTasks.length === 0 && (
              <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  📝 완료되지 않은 테스크가 없어요!
                  <br />새 테스크를 만들거나 {themeConfig?.concepts?.projectType}에서 할일을 추가해보세요!{" "}
                  {themeConfig?.emoji}
                </Typography>
              </Alert>
            )}

            {/* 현재 상태 */}
            <Alert severity={isBreak ? "info" : "success"} sx={{ mb: 2 }}>
              {isBreak ? `🌵 휴식 시간입니다!` : `${themeConfig?.emoji} 집중 시간입니다!`}
            </Alert>

            <Typography variant="body2" color="text.secondary">
              완료된 세션: {completedSessions}개 🎯
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {themeGame.blocks.collectName}: {filledBlocksCount}/60개 {themeGame.blocks.emoji}
            </Typography>
          </CardContent>
        </Card>

        {/* 오른쪽: 타이머 & 원형 애니메이션 */}
        <Box sx={{ flex: 1 }}>
          {/* 타이머 디스플레이 */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                {formatTime(time)}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 12,
                  borderRadius: 6,
                  mb: 3,
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 6,
                    background: themeUI.background.gradient,
                  },
                }}
              />

              {/* 컨트롤 버튼 */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                {!isActive ? (
                  <Button
                    variant="contained"
                    startIcon={<PlayArrow />}
                    onClick={startTimer}
                    size="large"
                    disabled={!selectedTask}
                  >
                    시작
                  </Button>
                ) : (
                  <Button variant="contained" startIcon={<Pause />} onClick={pauseTimer} size="large" color="warning">
                    일시정지
                  </Button>
                )}

                <IconButton onClick={resetTimer} size="large">
                  <Refresh />
                </IconButton>

                {progress >= 100 && (
                  <Button
                    variant="contained"
                    startIcon={<CheckCircle />}
                    color="success"
                    size="large"
                    onClick={resetTimer}
                  >
                    완료! 🎉
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>

          {/* 깔끔한 원형 애니메이션 */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
                {themeConfig?.emoji} {themeConfig?.concepts?.animal}의 집중 여행
              </Typography>

              {/* 정원형 화면 */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1", // 정원 만들기
                  maxWidth: { xs: 250, sm: 300, md: 400 },
                  margin: "0 auto",
                  position: "relative",
                  borderRadius: 2,
                  border: `2px solid ${theme.palette.divider}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: theme.palette.background.paper,
                }}
              >
                {/* 기본 원 (실선) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "70%",
                    height: "70%",
                    border: `2px solid ${themeUI.border.color}`,
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                />

                {/* 원을 따라 배치되는 블록들 */}
                {circleBlocks.map((block) => {
                  const angle = (block.angle - 90) * (Math.PI / 180); // -90도로 12시 방향에서 시작
                  const radius = 35; // 부모 크기의 35%
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;

                  return (
                    <Box
                      key={block.id}
                      sx={{
                        position: "absolute",
                        left: `${x}%`,
                        top: `${y}%`,
                        width: "16px",
                        height: "16px",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: "translate(-50%, -50%)",
                        opacity: block.filled ? 1 : 0.3,
                        transition: "opacity 0.5s ease",
                        zIndex: 2,
                      }}
                    >
                      {block.filled ? themeGame.blocks.emoji : "⚪"}
                    </Box>
                  );
                })}

                {/* 움직이는 동물 */}
                <Box
                  sx={{
                    position: "absolute",
                    left: `${animalPosition.x}%`,
                    top: `${animalPosition.y}%`,
                    transform: "translate(-50%, -50%)",
                    fontSize: "2rem",
                    zIndex: 3,
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                    transition: "all 0.1s ease-out",
                  }}
                >
                  {themeConfig?.emoji}
                </Box>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mt: 2 }}>
                {isActive ? (
                  <>
                    🎯 {themeConfig?.concepts?.animal}이 원을 따라 여행하며 {themeGame.blocks.type}을 수집해요! <br />⏰{" "}
                    {Math.floor(time / 60)}분 {time % 60}초 남았어요! 원이 모두 채워지면 완료! <br />
                    🔄 1분에 한바퀴씩 돌며 {filledBlocksCount}/60개 수집했어요!
                  </>
                ) : (
                  <>
                    {themeConfig?.emoji} {themeConfig?.concepts?.animal}이 출발을 기다리고 있어요! <br />
                    ▶️ 타이머를 시작하면 원을 따라 여행하며 {themeGame.blocks.type}을 수집해요! <br />⭕ 원이 모두
                    채워지면 {selectedMinutes}분 집중 완료!
                  </>
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* 프로젝트 생성 다이얼로그 */}
      <Dialog open={projectDialogOpen} onClose={() => setProjectDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>새 프로젝트 만들기</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="프로젝트 제목"
            fullWidth
            variant="outlined"
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="프로젝트 설명 (선택사항)"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={newProjectDescription}
            onChange={(e) => setNewProjectDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProjectDialogOpen(false)}>취소</Button>
          <Button onClick={handleCreateProject} variant="contained" disabled={!newProjectTitle.trim()}>
            만들기
          </Button>
        </DialogActions>
      </Dialog>

      {/* 테스크 생성 다이얼로그 */}
      <Dialog open={taskDialogOpen} onClose={() => setTaskDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>새 테스크 만들기</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            프로젝트: {selectedProject?.title}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="테스크 제목"
            fullWidth
            variant="outlined"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTaskDialogOpen(false)}>취소</Button>
          <Button onClick={handleCreateTask} variant="contained" disabled={!newTaskTitle.trim()}>
            만들기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Pomodoro;
