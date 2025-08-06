import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  Avatar,
  useTheme,
  Button,
  Divider,
  useMediaQuery,
  Fade,
  Slide,
  Tooltip,
  Switch,
  FormControlLabel,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import {
  TrendingUp,
  Lightbulb,
  Explore,
  AcUnit,
  LocalHospital,
  Analytics,
  Home as HomeIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Project, Todo, Priority } from "../types";
import dayjs from "dayjs";
import { loadUserData, getCurrentUser } from "../utils/firebase";
import ModernPenguinScene from "../components/ModernPenguinScene";
import DesertFoxScene from "../components/DesertFoxScene";
import SheepScene from "../components/SheepScene";
import CatScene from "../components/CatScene";
import { ThemeConfigExtended } from "../types";
import { useTodo } from "../contexts/TodoContext";

// 심플한 Todo 타입
interface SimpleTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface DashboardProps {
  themeConfig?: ThemeConfigExtended;
}

const Dashboard: React.FC<DashboardProps> = ({ themeConfig }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentTime, setCurrentTime] = useState(dayjs());

  // 새로운 상태들
  const [hideCompleted, setHideCompleted] = useState(false);
  const [addTodoDialogOpen, setAddTodoDialogOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [newTodoPriority, setNewTodoPriority] = useState<Priority>("medium");
  const [newTodoDueDate, setNewTodoDueDate] = useState("");

  // 추가 상태들
  const [editTodoDialogOpen, setEditTodoDialogOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editTodoTitle, setEditTodoTitle] = useState("");
  const [editTodoDescription, setEditTodoDescription] = useState("");
  const [editTodoPriority, setEditTodoPriority] = useState<Priority>("medium");
  const [editTodoDueDate, setEditTodoDueDate] = useState("");

  // TodoContext 사용
  const {
    todos,
    epics,
    projects: contextProjects,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoComplete,
    getEpicById,
    getProjectById,
    getProjectsByEpicId,
    getTodosByProjectId,
  } = useTodo();

  // 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(timer);
  }, []);

  // 프로젝트 데이터는 Context에서 가져오도록 수정
  useEffect(() => {
    setProjects(contextProjects);
  }, [contextProjects]);

  const getGreeting = () => {
    const hour = currentTime.hour();
    if (hour < 6) return "🌙 깊은 밤이에요";
    if (hour < 12) return "🌅 좋은 아침이에요";
    if (hour < 18) return "☀️ 좋은 오후에요";
    if (hour < 22) return "🌆 좋은 저녁이에요";
    return "🌙 늦은 밤이에요";
  };

  const getTemperatureMood = () => {
    const temp = Math.floor(Math.random() * 10) - 5; // -5도에서 5도 사이
    if (temp < -3)
      return {
        temp: `${temp}°C`,
        mood: themeConfig?.concepts.temperatureMoods.cold || "🥶 완전 추워요!",
        color: theme.palette.info.main,
      };
    if (temp < 0)
      return {
        temp: `${temp}°C`,
        mood: themeConfig?.concepts.temperatureMoods.cold || "❄️ 시원해요",
        color: theme.palette.primary.main,
      };
    if (temp < 3)
      return {
        temp: `${temp}°C`,
        mood: themeConfig?.concepts.temperatureMoods.mild || "🐧 적당해요",
        color: theme.palette.success.main,
      };
    return {
      temp: `${temp}°C`,
      mood: themeConfig?.concepts.temperatureMoods.warm || "🌡️ 따뜻해요",
      color: theme.palette.warning.main,
    };
  };

  // 할일 추가 함수
  const handleAddTodo = () => {
    if (!newTodoTitle.trim()) return;

    addTodo({
      title: newTodoTitle.trim(),
      description: newTodoDescription.trim(),
      completed: false,
      priority: newTodoPriority,
      dueDate: newTodoDueDate || undefined,
      tags: [],
    });

    // 폼 초기화
    setNewTodoTitle("");
    setNewTodoDescription("");
    setNewTodoPriority("medium");
    setNewTodoDueDate("");
    setAddTodoDialogOpen(false);
  };

  // 할일 수정 함수
  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setEditTodoTitle(todo.title);
    setEditTodoDescription(todo.description || "");
    setEditTodoPriority(todo.priority);
    setEditTodoDueDate(todo.dueDate ? dayjs(todo.dueDate).format("YYYY-MM-DD") : "");
    setEditTodoDialogOpen(true);
  };

  const handleUpdateTodo = () => {
    if (!editingTodo || !editTodoTitle.trim()) return;

    const updatedTodo: Todo = {
      ...editingTodo,
      title: editTodoTitle.trim(),
      description: editTodoDescription.trim(),
      priority: editTodoPriority,
      dueDate: editTodoDueDate || undefined,
    };

    updateTodo(updatedTodo);

    // 폼 초기화
    setEditingTodo(null);
    setEditTodoTitle("");
    setEditTodoDescription("");
    setEditTodoPriority("medium");
    setEditTodoDueDate("");
    setEditTodoDialogOpen(false);
  };

  // 표시할 할일들 필터링
  const displayTodos = hideCompleted ? todos.filter((todo) => !todo.completed) : todos;

  const activeProjects = projects.filter((p) => p.status === "active");
  const completedProjects = projects.filter((p) => p.status === "completed");
  const weatherInfo = getTemperatureMood();

  const quickActions = [
    {
      title: "건강 체크",
      description: "오늘의 컨디션을 기록하세요",
      icon: <LocalHospital />,
      color: theme.palette.success.main,
      path: "/condition",
      emoji: themeConfig?.emoji || "🐧",
    },
    {
      title: themeConfig?.concepts.projectCreate?.replace("새로운 ", "새 ").replace(" 시작하기", "") || "새 탐험 시작",
      description: themeConfig?.concepts.projectCreate || "새로운 프로젝트를 계획하세요",
      icon: <Explore />,
      color: theme.palette.warning.main,
      path: "/projects",
      emoji: "🚀",
    },
    {
      title: "활동 분석",
      description: "데이터로 보는 나의 성장",
      icon: <Analytics />,
      color: theme.palette.info.main,
      path: "/analytics",
      emoji: "📊",
    },
    {
      title: "계획 관리",
      description: "할일과 에픽을 체계적으로 관리",
      icon: <Lightbulb />,
      color: theme.palette.secondary.main,
      path: "/todos",
      emoji: "📝",
    },
  ];

  // 테마별 Scene 컴포넌트 렌더링
  const renderScene = () => {
    const width = isMobile ? Math.min(window.innerWidth - 32, 800) : Math.min(window.innerWidth - 200, 1200);
    const height = isMobile ? 300 : 400;

    switch (themeConfig?.id) {
      case "desert-fox":
        return <DesertFoxScene width={width} height={height} projects={projects} />;
      case "sheep":
        return <SheepScene width={width} height={height} projects={projects} />;
      case "cat":
        return <CatScene width={width} height={height} projects={projects} />;
      default:
        return <ModernPenguinScene width={width} height={height} projects={projects} />;
    }
  };

  return (
    <Box sx={{ height: "100vh", overflow: "auto", backgroundColor: theme.palette.background.default }}>
      <Box sx={{ p: 3, maxWidth: "1400px", margin: "0 auto" }}>
        {/* 헤더 */}
        <Box mb={4}>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            {getGreeting()}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {themeConfig?.concepts.welcome || "오늘도 함께 성장해봐요!"} {themeConfig?.emoji || "🐧"}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {currentTime.format("YYYY년 MM월 DD일 dddd HH:mm")}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* 왼쪽: Scene */}
          <Grid item xs={12} lg={8}>
            <Card sx={{ mb: 3, borderRadius: 3, overflow: "hidden" }}>
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ textAlign: "center", p: 3, pb: 2 }}>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                    {themeConfig?.concepts.liveView || "🏠 목장 라이브 뷰"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {themeConfig?.concepts.liveViewDescription || "우리의 양 친구가 목초지를 걸어다니고 있어요! 🐑🌱"}
                  </Typography>
                </Box>
                {renderScene()}
              </CardContent>
            </Card>

            {/* 빠른 액션 카드들 */}
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <Lightbulb color="primary" />
              빠른 액션
            </Typography>
            <Grid container spacing={2}>
              {quickActions.map((action, index) => (
                <Grid item xs={12} sm={6} md={6} key={action.title}>
                  <Fade in={true} timeout={600 + index * 200}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        border: `1px solid ${action.color}30`,
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: `0 8px 25px ${action.color}40`,
                          borderColor: action.color,
                        },
                      }}
                      onClick={() => navigate(action.path)}
                    >
                      <CardContent sx={{ textAlign: "center", py: 3 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            backgroundColor: `${action.color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 2,
                          }}
                        >
                          <Box sx={{ fontSize: "1.8rem", color: action.color }}>{action.icon}</Box>
                        </Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {action.emoji} {action.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {action.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* 오른쪽: 할일 현황판 */}
          <Grid item xs={12} lg={4}>
            <Card sx={{ height: "fit-content" }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                    🐑 목장일 현황판
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Tooltip title="할일 추가">
                      <IconButton size="small" color="primary" onClick={() => setAddTodoDialogOpen(true)}>
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={hideCompleted ? "완료된 일 보기" : "완료된 일 숨기기"}>
                      <IconButton size="small" onClick={() => setHideCompleted(!hideCompleted)}>
                        {hideCompleted ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>

                <FormControlLabel
                  control={
                    <Switch checked={hideCompleted} onChange={(e) => setHideCompleted(e.target.checked)} size="small" />
                  }
                  label="완료된 일 숨기기"
                  sx={{ mb: 2 }}
                />

                <Divider sx={{ mb: 2 }} />

                {/* 통계 */}
                <Box mb={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box textAlign="center">
                        <Typography variant="h4" color="primary">
                          {todos.length}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          전체 할일
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box textAlign="center">
                        <Typography variant="h4" color="success.main">
                          {todos.filter((t) => t.completed).length}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          완료
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box mt={2}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="body2">완료율</Typography>
                      <Typography variant="body2">
                        {todos.length > 0
                          ? Math.round((todos.filter((t) => t.completed).length / todos.length) * 100)
                          : 0}
                        %
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={todos.length > 0 ? (todos.filter((t) => t.completed).length / todos.length) * 100 : 0}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* 할일 목록 */}
                <Typography variant="subtitle1" gutterBottom>
                  할일 목록 ({displayTodos.length})
                </Typography>

                <List dense>
                  {displayTodos.length === 0 ? (
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="body2" color="text.secondary" textAlign="center">
                            {hideCompleted && todos.length > 0
                              ? "모든 할일이 완료되었어요! 🎉"
                              : "할일이 없어요. 새로운 할일을 추가해보세요! ✨"}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ) : (
                    displayTodos.slice(0, 10).map((todo) => {
                      const epic = getEpicById(todo.epicId || "");
                      const project = getProjectById(todo.projectId || "");

                      return (
                        <ListItem key={todo.id} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <Checkbox
                              checked={todo.completed}
                              onChange={() => toggleTodoComplete(todo.id)}
                              size="small"
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                variant="body2"
                                sx={{
                                  textDecoration: todo.completed ? "line-through" : "none",
                                  opacity: todo.completed ? 0.7 : 1,
                                }}
                              >
                                {todo.title}
                              </Typography>
                            }
                            secondary={
                              <Box>
                                {/* 에픽과 프로젝트 정보 */}
                                {(epic || project) && (
                                  <Box display="flex" alignItems="center" gap={0.5} mt={0.5}>
                                    {epic && (
                                      <Chip
                                        size="small"
                                        label={`${epic.emoji} ${epic.title.split(" ")[0]}...`}
                                        sx={{
                                          fontSize: "0.6rem",
                                          height: "16px",
                                          backgroundColor: epic.color + "20",
                                          color: epic.color,
                                          border: `1px solid ${epic.color}40`,
                                        }}
                                      />
                                    )}
                                    {project && (
                                      <Chip
                                        size="small"
                                        label={`📋 ${project.title.split(" ")[0]}...`}
                                        sx={{
                                          fontSize: "0.6rem",
                                          height: "16px",
                                          backgroundColor: "#f5f5f5",
                                          color: "#666",
                                        }}
                                      />
                                    )}
                                  </Box>
                                )}

                                {/* 우선순위와 마감일 */}
                                <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                                  <Chip
                                    size="small"
                                    label={
                                      todo.priority === "urgent"
                                        ? "긴급"
                                        : todo.priority === "high"
                                        ? "높음"
                                        : todo.priority === "medium"
                                        ? "보통"
                                        : "낮음"
                                    }
                                    color={
                                      todo.priority === "urgent"
                                        ? "error"
                                        : todo.priority === "high"
                                        ? "warning"
                                        : todo.priority === "medium"
                                        ? "primary"
                                        : "success"
                                    }
                                    sx={{ fontSize: "0.7rem", height: "18px" }}
                                  />
                                  {todo.dueDate && (
                                    <Typography variant="caption" color="text.secondary">
                                      {dayjs(todo.dueDate).format("MM/DD")}
                                    </Typography>
                                  )}
                                </Box>
                              </Box>
                            }
                          />
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <Tooltip title="수정">
                              <IconButton size="small" color="primary" onClick={() => handleEditTodo(todo)}>
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="삭제">
                              <IconButton size="small" color="error" onClick={() => deleteTodo(todo.id)}>
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </ListItem>
                      );
                    })
                  )}
                </List>

                {displayTodos.length > 10 && (
                  <Box textAlign="center" mt={2}>
                    <Button variant="text" size="small" onClick={() => navigate("/todos")}>
                      더 보기 ({displayTodos.length - 10}개 더)
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 할일 추가 다이얼로그 */}
      <Dialog open={addTodoDialogOpen} onClose={() => setAddTodoDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>새 할일 추가 📝</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="할일 제목"
            fullWidth
            variant="outlined"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="설명 (선택사항)"
            fullWidth
            variant="outlined"
            multiline
            rows={2}
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            margin="dense"
            label="우선순위"
            fullWidth
            variant="outlined"
            value={newTodoPriority}
            onChange={(e) => setNewTodoPriority(e.target.value as Priority)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="low">낮음</MenuItem>
            <MenuItem value="medium">보통</MenuItem>
            <MenuItem value="high">높음</MenuItem>
            <MenuItem value="urgent">긴급</MenuItem>
          </TextField>
          <TextField
            type="date"
            margin="dense"
            label="마감일 (선택사항)"
            fullWidth
            variant="outlined"
            value={newTodoDueDate}
            onChange={(e) => setNewTodoDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddTodoDialogOpen(false)}>취소</Button>
          <Button onClick={handleAddTodo} variant="contained" disabled={!newTodoTitle.trim()}>
            추가
          </Button>
        </DialogActions>
      </Dialog>

      {/* 할일 수정 다이얼로그 */}
      <Dialog open={editTodoDialogOpen} onClose={() => setEditTodoDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>할일 수정 ✏️</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="할일 제목"
            fullWidth
            variant="outlined"
            value={editTodoTitle}
            onChange={(e) => setEditTodoTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="설명 (선택사항)"
            fullWidth
            variant="outlined"
            multiline
            rows={2}
            value={editTodoDescription}
            onChange={(e) => setEditTodoDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            margin="dense"
            label="우선순위"
            fullWidth
            variant="outlined"
            value={editTodoPriority}
            onChange={(e) => setEditTodoPriority(e.target.value as Priority)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="low">낮음</MenuItem>
            <MenuItem value="medium">보통</MenuItem>
            <MenuItem value="high">높음</MenuItem>
            <MenuItem value="urgent">긴급</MenuItem>
          </TextField>
          <TextField
            type="date"
            margin="dense"
            label="마감일 (선택사항)"
            fullWidth
            variant="outlined"
            value={editTodoDueDate}
            onChange={(e) => setEditTodoDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditTodoDialogOpen(false)}>취소</Button>
          <Button onClick={handleUpdateTodo} variant="contained" disabled={!editTodoTitle.trim()}>
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
