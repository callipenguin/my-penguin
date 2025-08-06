import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slide,
  Fade,
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  Assignment,
  PlayArrow,
  Pause,
  CheckCircle,
  Flag,
  AccessTime,
  ExpandMore,
  Explore,
  AcUnit,
  AddCircleOutline,
} from "@mui/icons-material";
import { Project, ProjectStatus, Priority, Task, SimpleTodo, ThemeConfigExtended } from "../types";
import dayjs from "dayjs";
import { loadUserData, getCurrentUser, saveUserData } from "../utils/firebase";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

interface ProjectManagerProps {
  themeConfig?: ThemeConfigExtended;
}

const ProjectManager: React.FC<ProjectManagerProps> = ({ themeConfig }) => {
  const theme = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: "",
    description: "",
    status: "active",
    priority: "medium",
    progress: 0,
  });
  const [newTodoText, setNewTodoText] = useState<{ [key: string]: string }>({});
  const [projectTodos, setProjectTodos] = useState<{ [projectId: string]: SimpleTodo[] }>({});

  // 테마별 상태 이모지
  const getStatusEmojis = () => {
    switch (themeConfig?.id) {
      case "desert-fox":
        return {
          planning: "🏜️",
          active: "🦊",
          paused: "🌵",
          completed: "🐫",
        };
      case "sheep":
        return {
          planning: "🌱",
          active: "🐑",
          paused: "🌿",
          completed: "🌾",
        };
      case "cat":
        return {
          planning: "🧶",
          active: "🐱",
          paused: "🐾",
          completed: "🐟",
        };
      default: // penguin
        return {
          planning: "🧊",
          active: "🐧",
          paused: "❄️",
          completed: "🐟",
        };
    }
  };

  const statusEmojis = getStatusEmojis();

  const statusColumns: { status: ProjectStatus; title: string; color: string; emoji: string }[] = [
    { status: "planning", title: "계획 중", color: theme.palette.info.main, emoji: statusEmojis.planning },
    { status: "active", title: "진행 중", color: theme.palette.grey[600], emoji: statusEmojis.active },
    { status: "paused", title: "일시 중단", color: theme.palette.warning.main, emoji: statusEmojis.paused },
    { status: "completed", title: "완료", color: theme.palette.success.main, emoji: statusEmojis.completed },
  ];

  const priorityInfo: Record<Priority, { color: string; label: string }> = {
    low: { color: theme.palette.success.main, label: "낮음" },
    medium: { color: theme.palette.warning.main, label: "보통" },
    high: { color: theme.palette.error.main, label: "높음" },
    urgent: { color: theme.palette.error.dark, label: "긴급" },
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // 프로젝트 데이터 로드
  useEffect(() => {
    loadProjects();
    loadProjectTodos(); // 할일 데이터도 로드
  }, []);

  const loadProjects = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "projects");
        if (result.success && result.data) {
          setProjects(result.data);
        } else {
          // 첫 실행시 목업 데이터로 초기화
          const mockProjects: Project[] = [
            {
              id: "1",
              title: "개인 비서 앱 개발",
              description: "Mac용 개인 비서 애플리케이션 개발 프로젝트",
              status: "active",
              priority: "high",
              startDate: dayjs().subtract(2, "week").format("YYYY-MM-DD"),
              dueDate: dayjs().add(2, "week").format("YYYY-MM-DD"),
              progress: 65,
              tasks: [],
              tags: ["React", "Electron", "TypeScript"],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
            {
              id: "2",
              title: "포트폴리오 웹사이트 리뉴얼",
              description: "개인 포트폴리오 웹사이트를 새로운 디자인으로 업데이트",
              status: "active",
              priority: "medium",
              startDate: dayjs().add(1, "week").format("YYYY-MM-DD"),
              progress: 10,
              tasks: [],
              tags: ["Next.js", "Design", "Portfolio"],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ];
          setProjects(mockProjects);
          await saveProjects(mockProjects);
        }
      } else {
        console.error("사용자가 로그인되지 않았습니다.");
        setProjects([]);
      }
    } catch (error) {
      console.error("프로젝트 로드 실패:", error);
      setProjects([]);
    }
  };

  // 할일 데이터 로드 함수 추가
  const loadProjectTodos = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "projectTodos");
        if (result.success && result.data) {
          setProjectTodos(result.data);
        }
      } else {
        // 로그인되지 않은 경우 localStorage에서 로드
        const savedTodos = localStorage.getItem("projectTodos");
        if (savedTodos) {
          setProjectTodos(JSON.parse(savedTodos));
        }
      }
    } catch (error) {
      console.error("할일 로드 실패:", error);
      // Fallback to localStorage
      const savedTodos = localStorage.getItem("projectTodos");
      if (savedTodos) {
        setProjectTodos(JSON.parse(savedTodos));
      }
    }
  };

  // 할일 데이터 저장 함수 추가
  const saveProjectTodos = async (todosToSave: { [projectId: string]: SimpleTodo[] }) => {
    try {
      const user = getCurrentUser();
      if (user) {
        await saveUserData(user.uid, "projectTodos", todosToSave);
      } else {
        // 로그인되지 않은 경우 fallback
        localStorage.setItem("projectTodos", JSON.stringify(todosToSave));
      }
    } catch (error) {
      console.error("할일 저장 실패:", error);
      // Fallback to localStorage
      localStorage.setItem("projectTodos", JSON.stringify(todosToSave));
    }
  };

  const saveProjects = async (projectsToSave: Project[]) => {
    try {
      const user = getCurrentUser();
      if (user) {
        await saveUserData(user.uid, "projects", projectsToSave);
      } else {
        // 로그인되지 않은 경우 fallback
        localStorage.setItem("projects", JSON.stringify(projectsToSave));
      }
    } catch (error) {
      console.error("프로젝트 저장 실패:", error);
    }
  };

  const handleCreateProject = async () => {
    const project: Project = {
      id: Date.now().toString(),
      title: newProject.title || "",
      description: newProject.description || "",
      status: newProject.status || "active",
      priority: newProject.priority || "medium",
      progress: newProject.progress || 0,
      startDate: newProject.startDate,
      dueDate: newProject.dueDate,
      tasks: [],
      tags: newProject.tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    await saveProjects(updatedProjects);

    setDialogOpen(false);
    setNewProject({
      title: "",
      description: "",
      status: "active",
      priority: "medium",
      progress: 0,
    });
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setNewProject(project);
    setDialogOpen(true);
  };

  const handleUpdateProject = async () => {
    if (!editingProject) return;

    const updatedProjects = projects.map((p) =>
      p.id === editingProject.id ? { ...p, ...newProject, updatedAt: new Date().toISOString() } : p
    );

    setProjects(updatedProjects);
    await saveProjects(updatedProjects);

    setDialogOpen(false);
    setEditingProject(null);
    setNewProject({
      title: "",
      description: "",
      status: "active",
      priority: "medium",
      progress: 0,
    });
  };

  const handleDeleteProject = async (projectId: string) => {
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    setProjects(updatedProjects);
    await saveProjects(updatedProjects);
  };

  const handleStatusChange = async (projectId: string, newStatus: ProjectStatus) => {
    const updatedProjects = projects.map((p) =>
      p.id === projectId ? { ...p, status: newStatus, updatedAt: new Date().toISOString() } : p
    );
    setProjects(updatedProjects);
    await saveProjects(updatedProjects);
  };

  const handleQuickStatusChange = async (projectId: string, newStatus: ProjectStatus) => {
    const updatedProjects = projects.map((project) =>
      project.id === projectId ? { ...project, status: newStatus, updatedAt: new Date().toISOString() } : project
    );
    setProjects(updatedProjects);
    await saveProjects(updatedProjects);
  };

  const getProjectsByStatus = (status: ProjectStatus) => {
    return projects.filter((p) => p.status === status);
  };

  const getStatusIcon = (status: ProjectStatus) => {
    switch (status) {
      case "planning":
        return <Assignment />;
      case "active":
        return <PlayArrow />;
      case "paused":
        return <Pause />;
      case "completed":
        return <CheckCircle />;
      default:
        return <Assignment />;
    }
  };

  const getDaysUntilDue = (dueDate?: string) => {
    if (!dueDate) return null;
    const days = dayjs(dueDate).diff(dayjs(), "day");
    return days;
  };

  // Todo 추가 함수 (별도 상태로 관리)
  const handleAddTodo = async (projectId: string, todoText: string) => {
    if (!todoText.trim()) return;

    const newTodo: SimpleTodo = {
      id: Date.now().toString(),
      title: todoText.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const updatedTodos = {
      ...projectTodos,
      [projectId]: [...(projectTodos[projectId] || []), newTodo],
    };

    setProjectTodos(updatedTodos);
    await saveProjectTodos(updatedTodos); // 저장 로직 추가

    setNewTodoText({ ...newTodoText, [projectId]: "" });
  };

  // Todo 완료/미완료 토글
  const handleToggleTodo = async (projectId: string, todoId: string) => {
    const updatedTodos = {
      ...projectTodos,
      [projectId]: (projectTodos[projectId] || []).map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    };

    setProjectTodos(updatedTodos);
    await saveProjectTodos(updatedTodos); // 저장 로직 추가
  };

  // 드래그 앤 드롭 핸들러
  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // 드롭 위치가 없으면 취소
    if (!destination) return;

    // 같은 위치면 취소
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    // 프로젝트 찾기
    const project = projects.find((p) => p.id === draggableId);
    if (!project) return;

    // 새로운 상태 결정
    const newStatus = destination.droppableId as ProjectStatus;

    // 프로젝트 상태 업데이트
    const updatedProjects = projects.map((p) =>
      p.id === draggableId ? { ...p, status: newStatus, updatedAt: new Date().toISOString() } : p
    );

    setProjects(updatedProjects);
    await saveProjects(updatedProjects);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* 헤더 - 테마별 컨셉 */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box>
          <Typography
            variant="h4"
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
            {themeConfig?.concepts?.baseTitle?.split(" ")[0] || <AcUnit />}{" "}
            {themeConfig?.concepts?.projectType || "프로젝트"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {themeConfig?.concepts?.projectManage || "프로젝트를 체계적으로 관리하세요"} {themeConfig?.emoji || "🐧"}
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setDialogOpen(true)}
          size="large"
          sx={{
            borderRadius: 3,
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 10px 4px rgba(255, 105, 135, .3)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {themeConfig?.concepts?.projectCreate?.replace("새로운 ", "새 ").replace(" 시작하기", "") || "새 탐험"}
        </Button>
      </Box>

      {/* 통계 카드들 - 모던한 디자인 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statusColumns.map((column, index) => {
          const count = getProjectsByStatus(column.status).length;
          return (
            <Grid item xs={12} sm={6} md={6} key={column.status}>
              <Fade in={true} timeout={500 + index * 200}>
                <Card
                  sx={{
                    borderRadius: 4,
                    background: `linear-gradient(135deg, ${column.color}15 0%, ${column.color}25 100%)`,
                    border: `1px solid ${column.color}30`,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 12px 40px ${column.color}30`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <Typography sx={{ fontSize: "2.5rem", mb: 1 }}>{column.emoji}</Typography>
                    <Typography variant="h3" color={column.color} fontWeight="bold" gutterBottom>
                      {count}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" fontWeight="medium">
                      {column.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          );
        })}
      </Grid>

      {/* 데스크탑: 칸반 보드 / 모바일: 아코디언 */}
      {isMobile ? (
        // 모바일 아코디언 형태
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Explore color="primary" />
            탐험 현황
          </Typography>
          {statusColumns.map((column, index) => (
            <Accordion
              key={column.status}
              sx={{
                mb: 2,
                borderRadius: 3,
                "&:before": { display: "none" },
                boxShadow: `0 4px 20px ${column.color}20`,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  backgroundColor: `${column.color}10`,
                  borderRadius: 3,
                  "&.Mui-expanded": {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                  <Typography sx={{ fontSize: "1.5rem" }}>{column.emoji}</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {column.title}
                  </Typography>
                  <Chip
                    label={getProjectsByStatus(column.status).length}
                    size="small"
                    sx={{
                      backgroundColor: column.color,
                      color: "white",
                      fontWeight: "bold",
                      ml: "auto",
                    }}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {getProjectsByStatus(column.status).map((project) => {
                    const daysUntilDue = getDaysUntilDue(project.dueDate);
                    return (
                      <Card
                        key={project.id}
                        sx={{
                          borderRadius: 3,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          "&:hover": {
                            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        <CardContent>
                          {/* 프로젝트 헤더 */}
                          <Box
                            sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}
                          >
                            <Typography variant="h6" fontWeight="bold" sx={{ flex: 1 }}>
                              {project.title}
                            </Typography>
                            <Box sx={{ display: "flex", gap: 0.5 }}>
                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditProject(project);
                                }}
                                sx={{
                                  "&:hover": {
                                    backgroundColor: "primary.main",
                                    color: "white",
                                    transform: "scale(1.1)",
                                  },
                                  transition: "all 0.2s ease",
                                }}
                              >
                                <Edit fontSize="small" />
                              </IconButton>
                              <IconButton
                                size="small"
                                color="error"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteProject(project.id);
                                }}
                                sx={{
                                  "&:hover": {
                                    transform: "scale(1.1)",
                                  },
                                  transition: "all 0.2s ease",
                                }}
                              >
                                <Delete fontSize="small" />
                              </IconButton>
                            </Box>
                          </Box>

                          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                            {project.description}
                          </Typography>

                          {/* 우선순위 및 진행률 */}
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                              <Chip
                                icon={<Flag />}
                                label={priorityInfo[project.priority].label}
                                size="small"
                                sx={{
                                  backgroundColor: priorityInfo[project.priority].color + "20",
                                  color: priorityInfo[project.priority].color,
                                  fontWeight: "bold",
                                }}
                              />
                              <Typography variant="body2" color="textSecondary">
                                {project.progress}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={project.progress}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: "grey.200",
                                "& .MuiLinearProgress-bar": {
                                  borderRadius: 4,
                                  background: `linear-gradient(45deg, ${column.color} 30%, ${column.color}80 90%)`,
                                },
                              }}
                            />
                          </Box>

                          {/* 날짜 정보 */}
                          {(project.startDate || project.dueDate) && (
                            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                              {project.startDate && (
                                <Typography variant="caption" color="textSecondary">
                                  시작: {dayjs(project.startDate).format("MM/DD")}
                                </Typography>
                              )}
                              {project.dueDate && (
                                <Typography
                                  variant="caption"
                                  color={daysUntilDue !== null && daysUntilDue < 3 ? "error" : "textSecondary"}
                                  sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                                >
                                  <AccessTime fontSize="small" />
                                  마감: {dayjs(project.dueDate).format("MM/DD")}
                                  {daysUntilDue !== null && (
                                    <span>
                                      (
                                      {daysUntilDue > 0
                                        ? `${daysUntilDue}일 남음`
                                        : daysUntilDue === 0
                                        ? "오늘 마감"
                                        : `${Math.abs(daysUntilDue)}일 지연`}
                                      )
                                    </span>
                                  )}
                                </Typography>
                              )}
                            </Box>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                  {getProjectsByStatus(column.status).length === 0 && (
                    <Box sx={{ textAlign: "center", py: 4 }}>
                      <Typography color="textSecondary">
                        {column.emoji} 진행 중인 {column.title.toLowerCase()} 탐험이 없습니다
                      </Typography>
                    </Box>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ) : (
        // 데스크탑 칸반 보드
        <DragDropContext onDragEnd={handleDragEnd}>
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
              <Explore color="primary" />
              {themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"}{" "}
              {themeConfig?.concepts?.projectType || "탐험"} 현황판
            </Typography>
            <Box sx={{ overflowX: "auto", pb: 2 }}>
              <Box sx={{ display: "flex", gap: 3, minWidth: "fit-content" }}>
                {statusColumns.map((column) => (
                  <Box key={column.status} sx={{ minWidth: 320, maxWidth: 400 }}>
                    {/* 컬럼 헤더 */}
                    <Box
                      sx={{
                        p: 3,
                        mb: 3,
                        background: `linear-gradient(135deg, ${column.color}15 0%, ${column.color}25 100%)`,
                        borderRadius: 4,
                        border: `2px solid ${column.color}30`,
                        boxShadow: `0 4px 20px ${column.color}20`,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography sx={{ fontSize: "1.8rem" }}>{column.emoji}</Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {column.title}
                        </Typography>
                        <Chip
                          label={getProjectsByStatus(column.status).length}
                          size="small"
                          sx={{
                            backgroundColor: column.color,
                            color: "white",
                            fontWeight: "bold",
                            ml: "auto",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* 드롭 가능한 영역 */}
                    <Droppable droppableId={column.status}>
                      {(provided, snapshot) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            minHeight: 200,
                            backgroundColor: snapshot.isDraggingOver ? `${column.color}10` : "transparent",
                            borderRadius: 2,
                            p: 1,
                            transition: "background-color 0.2s ease",
                          }}
                        >
                          {/* 프로젝트 카드들 */}
                          {getProjectsByStatus(column.status).map((project, index) => {
                            const daysUntilDue = getDaysUntilDue(project.dueDate);

                            return (
                              <Draggable key={project.id} draggableId={project.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Slide key={project.id} direction="up" in={true} timeout={500}>
                                      <Card
                                        sx={{
                                          borderRadius: 4,
                                          boxShadow: snapshot.isDragging
                                            ? "0 12px 40px rgba(0,0,0,0.3)"
                                            : "0 4px 20px rgba(0,0,0,0.1)",
                                          "&:hover": {
                                            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                                            transform: snapshot.isDragging ? "none" : "translateY(-4px)",
                                          },
                                          transition: "all 0.3s ease",
                                          border: `1px solid ${column.color}20`,
                                          transform: snapshot.isDragging ? "rotate(5deg)" : "none",
                                        }}
                                      >
                                        <CardContent sx={{ p: 3 }}>
                                          {/* 나머지 카드 내용은 동일하게 유지하되 더 모던한 스타일링 적용 */}
                                          {/* 프로젝트 헤더 */}
                                          <Box
                                            sx={{
                                              display: "flex",
                                              justifyContent: "space-between",
                                              alignItems: "flex-start",
                                              mb: 2,
                                            }}
                                          >
                                            <Typography variant="h6" fontWeight="bold" sx={{ flex: 1 }}>
                                              {project.title}
                                            </Typography>
                                            <Box sx={{ display: "flex", gap: 0.5 }}>
                                              <IconButton
                                                size="small"
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleEditProject(project);
                                                }}
                                                sx={{
                                                  borderRadius: 2,
                                                  "&:hover": {
                                                    backgroundColor: "primary.main",
                                                    color: "white",
                                                    transform: "scale(1.1)",
                                                  },
                                                  transition: "all 0.2s ease",
                                                }}
                                              >
                                                <Edit fontSize="small" />
                                              </IconButton>
                                              <IconButton
                                                size="small"
                                                color="error"
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleDeleteProject(project.id);
                                                }}
                                                sx={{
                                                  borderRadius: 2,
                                                  "&:hover": {
                                                    transform: "scale(1.1)",
                                                  },
                                                  transition: "all 0.2s ease",
                                                }}
                                              >
                                                <Delete fontSize="small" />
                                              </IconButton>
                                            </Box>
                                          </Box>

                                          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                            {project.description}
                                          </Typography>

                                          {/* 우선순위 */}
                                          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                            <Chip
                                              icon={<Flag />}
                                              label={priorityInfo[project.priority].label}
                                              size="small"
                                              sx={{
                                                backgroundColor: priorityInfo[project.priority].color + "20",
                                                color: priorityInfo[project.priority].color,
                                                fontWeight: "bold",
                                                borderRadius: 2,
                                              }}
                                            />
                                          </Box>

                                          {/* 진행률 */}
                                          <Box sx={{ mb: 2 }}>
                                            <Box
                                              sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                mb: 1,
                                              }}
                                            >
                                              <Typography variant="body2" color="textSecondary" fontWeight="medium">
                                                진행률
                                              </Typography>
                                              <Typography variant="body2" color="primary" fontWeight="bold">
                                                {project.progress}%
                                              </Typography>
                                            </Box>
                                            <LinearProgress
                                              variant="determinate"
                                              value={project.progress}
                                              sx={{
                                                height: 8,
                                                borderRadius: 4,
                                                backgroundColor: "grey.200",
                                                "& .MuiLinearProgress-bar": {
                                                  borderRadius: 4,
                                                  background: `linear-gradient(45deg, ${column.color} 30%, ${column.color}80 90%)`,
                                                },
                                              }}
                                            />
                                          </Box>

                                          {/* 날짜 정보 */}
                                          {(project.startDate || project.dueDate) && (
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                              {project.startDate && (
                                                <Typography variant="caption" color="textSecondary">
                                                  시작일: {dayjs(project.startDate).format("YYYY년 MM월 DD일")}
                                                </Typography>
                                              )}
                                              {project.dueDate && (
                                                <Typography
                                                  variant="caption"
                                                  color={
                                                    daysUntilDue !== null && daysUntilDue < 3
                                                      ? "error"
                                                      : "textSecondary"
                                                  }
                                                  sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                                                >
                                                  <AccessTime fontSize="small" />
                                                  마감일: {dayjs(project.dueDate).format("YYYY년 MM월 DD일")}
                                                  {daysUntilDue !== null && (
                                                    <Chip
                                                      label={
                                                        daysUntilDue > 0
                                                          ? `${daysUntilDue}일 남음`
                                                          : daysUntilDue === 0
                                                          ? "오늘 마감"
                                                          : `${Math.abs(daysUntilDue)}일 지연`
                                                      }
                                                      size="small"
                                                      color={
                                                        daysUntilDue > 3
                                                          ? "success"
                                                          : daysUntilDue > 0
                                                          ? "warning"
                                                          : "error"
                                                      }
                                                      sx={{ ml: 1, borderRadius: 2 }}
                                                    />
                                                  )}
                                                </Typography>
                                              )}
                                            </Box>
                                          )}

                                          {/* 심플 Todo 섹션 */}
                                          <Box sx={{ mt: 3 }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                                              <Box sx={{ fontSize: "1rem", fontWeight: "bold" }}>🐟</Box>
                                              <Box
                                                sx={{ fontSize: "0.9rem", fontWeight: "bold", color: "primary.main" }}
                                              >
                                                할 일 ({(projectTodos[project.id] || []).length}개)
                                              </Box>
                                            </Box>

                                            {/* Todo 입력 */}
                                            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                              <TextField
                                                size="small"
                                                placeholder="새 할 일 추가..."
                                                value={newTodoText[project.id] || ""}
                                                onChange={(e) =>
                                                  setNewTodoText({ ...newTodoText, [project.id]: e.target.value })
                                                }
                                                onKeyPress={(e) => {
                                                  if (e.key === "Enter") {
                                                    handleAddTodo(project.id, newTodoText[project.id] || "");
                                                  }
                                                }}
                                                sx={{ flex: 1 }}
                                              />
                                              <IconButton
                                                size="small"
                                                onClick={() => handleAddTodo(project.id, newTodoText[project.id] || "")}
                                                sx={{
                                                  backgroundColor: "primary.main",
                                                  color: "white",
                                                  "&:hover": { backgroundColor: "primary.dark" },
                                                }}
                                              >
                                                <AddCircleOutline fontSize="small" />
                                              </IconButton>
                                            </Box>

                                            {/* Todo 목록 */}
                                            {(projectTodos[project.id] || []).map((todo) => (
                                              <Box
                                                key={todo.id}
                                                sx={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  gap: 1,
                                                  py: 0.5,
                                                  opacity: todo.completed ? 0.6 : 1,
                                                  textDecoration: todo.completed ? "line-through" : "none",
                                                }}
                                              >
                                                <IconButton
                                                  size="small"
                                                  onClick={() => handleToggleTodo(project.id, todo.id)}
                                                  sx={{ p: 0.5 }}
                                                >
                                                  {todo.completed ? (
                                                    <CheckCircle sx={{ color: "success.main", fontSize: "1.2rem" }} />
                                                  ) : (
                                                    <Box
                                                      sx={{
                                                        width: 18,
                                                        height: 18,
                                                        border: "2px solid",
                                                        borderColor: "grey.400",
                                                        borderRadius: "50%",
                                                      }}
                                                    />
                                                  )}
                                                </IconButton>
                                                <Box sx={{ fontSize: "0.85rem", flex: 1 }}>{todo.title}</Box>
                                              </Box>
                                            ))}

                                            {(projectTodos[project.id] || []).length === 0 && (
                                              <Box
                                                sx={{
                                                  textAlign: "center",
                                                  py: 2,
                                                  color: "text.secondary",
                                                  fontSize: "0.8rem",
                                                }}
                                              >
                                                아직 할 일이 없어요 🐧
                                              </Box>
                                            )}
                                          </Box>
                                        </CardContent>
                                      </Card>
                                    </Slide>
                                  </div>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                          {getProjectsByStatus(column.status).length === 0 && (
                            <Box
                              sx={{
                                textAlign: "center",
                                py: 6,
                                borderRadius: 4,
                                border: `2px dashed ${column.color}40`,
                                backgroundColor: `${column.color}08`,
                              }}
                            >
                              <Typography color="textSecondary" sx={{ fontSize: "1.1rem" }}>
                                {column.emoji}
                              </Typography>
                              <Typography color="textSecondary" sx={{ mt: 1 }}>
                                진행 중인 {column.title.toLowerCase()} 탐험이 없습니다
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      )}
                    </Droppable>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </DragDropContext>
      )}

      {/* 프로젝트 생성/편집 다이얼로그 */}
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setEditingProject(null);
          setNewProject({
            title: "",
            description: "",
            status: "active",
            priority: "medium",
            progress: 0,
          });
        }}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{editingProject ? "프로젝트 수정" : "새 프로젝트 생성"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, pt: 2 }}>
            <TextField
              fullWidth
              label="프로젝트 제목"
              value={newProject.title}
              onChange={(e) => setNewProject((prev) => ({ ...prev, title: e.target.value }))}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              label="프로젝트 설명"
              value={newProject.description}
              onChange={(e) => setNewProject((prev) => ({ ...prev, description: e.target.value }))}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>상태</InputLabel>
                  <Select
                    value={newProject.status}
                    label="상태"
                    onChange={(e) => setNewProject((prev) => ({ ...prev, status: e.target.value as ProjectStatus }))}
                  >
                    {statusColumns.map((status) => (
                      <MenuItem key={status.status} value={status.status}>
                        {status.emoji} {status.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>우선순위</InputLabel>
                  <Select
                    value={newProject.priority}
                    label="우선순위"
                    onChange={(e) => setNewProject((prev) => ({ ...prev, priority: e.target.value as Priority }))}
                  >
                    {Object.entries(priorityInfo).map(([key, info]) => (
                      <MenuItem key={key} value={key}>
                        <Flag sx={{ mr: 1, color: info.color }} />
                        {info.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="시작일"
                  InputLabelProps={{ shrink: true }}
                  value={newProject.startDate ?? ""}
                  onChange={(e) => setNewProject((prev) => ({ ...prev, startDate: e.target.value }))}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="마감일"
                  InputLabelProps={{ shrink: true }}
                  value={newProject.dueDate ?? ""}
                  onChange={(e) => setNewProject((prev) => ({ ...prev, dueDate: e.target.value }))}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              setEditingProject(null);
              setNewProject({
                title: "",
                description: "",
                status: "active",
                priority: "medium",
                progress: 0,
              });
            }}
          >
            취소
          </Button>
          <Button
            onClick={editingProject ? handleUpdateProject : handleCreateProject}
            variant="contained"
            disabled={!newProject.title}
          >
            {editingProject ? "수정" : "생성"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectManager;
