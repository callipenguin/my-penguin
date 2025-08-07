import React, { useState, useMemo } from "react";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Fab,
  Tooltip,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton,
  Divider,
  Button,
  Alert,
} from "@mui/material";
import {
  Assessment as OverviewIcon,
  Assignment as TodoIcon,
  AccountTree as EpicIcon,
  Folder as ProjectIcon,
  ExpandMore,
  Add,
  Edit,
  Delete,
  Sync,
} from "@mui/icons-material";
import { Todo, Epic, Project, TodoStats, EpicStats } from "../types";
import { TodoList } from "../components/TodoList";
import { EpicList } from "../components/EpicList";
import dayjs from "dayjs";
import { useTodo } from "../contexts/TodoContext";

const TodoManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // TodoContext에서 상태와 함수들 가져오기
  const {
    todos,
    epics,
    projects,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoComplete,
    addEpic,
    updateEpic,
    deleteEpic,
    addProject,
    getTodosByProjectId,
    getEpicById,
    getProjectsByEpicId,
    refreshFirebaseData,
  } = useTodo();

  // Firebase 데이터 새로고침
  const handleRefreshFirebaseData = async () => {
    setIsRefreshing(true);
    try {
      await refreshFirebaseData();
      console.log("🔄 Firebase 데이터 새로고침 완료");
    } catch (error) {
      console.error("❌ Firebase 데이터 새로고침 실패:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // 통계 계산
  const todoStats: TodoStats = useMemo(() => {
    const totalTodos = todos.length;
    const completedTodos = todos.filter((t) => t.completed).length;
    const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;
    const todayTodos = todos.filter((t) => t.dueDate && dayjs(t.dueDate).isSame(dayjs(), "day")).length;
    const overdueTodos = todos.filter(
      (t) => t.dueDate && !t.completed && dayjs(t.dueDate).isBefore(dayjs(), "day")
    ).length;
    const upcomingTodos = todos.filter(
      (t) => t.dueDate && !t.completed && dayjs(t.dueDate).isAfter(dayjs(), "day")
    ).length;

    const priorityBreakdown = {
      urgent: todos.filter((t) => t.priority === "urgent").length,
      high: todos.filter((t) => t.priority === "high").length,
      medium: todos.filter((t) => t.priority === "medium").length,
      low: todos.filter((t) => t.priority === "low").length,
    };

    // 최근 7일간의 완료 통계
    const dailyCompletions = [];
    for (let i = 6; i >= 0; i--) {
      const date = dayjs().subtract(i, "day").format("YYYY-MM-DD");
      const completed = todos.filter(
        (t) => t.completedAt && dayjs(t.completedAt).isSame(dayjs().subtract(i, "day"), "day")
      ).length;
      dailyCompletions.push({ date, completed });
    }

    return {
      totalTodos,
      completedTodos,
      completionRate,
      todayTodos,
      overdueTodos,
      upcomingTodos,
      priorityBreakdown,
      dailyCompletions,
    };
  }, [todos]);

  const epicStats: EpicStats = useMemo(() => {
    const totalEpics = epics.length;
    const activeEpics = epics.filter((e) => e.status === "active").length;
    const completedEpics = epics.filter((e) => e.status === "completed").length;
    const totalProjects = projects.length;
    const completedProjects = projects.filter((p) => p.status === "completed").length;
    const epicTodos = todos.filter((t) => t.epicId);
    const totalTodos = epicTodos.length;
    const completedTodos = epicTodos.filter((t) => t.completed).length;

    return {
      totalEpics,
      activeEpics,
      completedEpics,
      totalProjects,
      completedProjects,
      totalTodos,
      completedTodos,
      completionRate: totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0,
    };
  }, [epics, projects, todos]);

  // 프로젝트별 할일 그룹화
  const projectGroups = useMemo(() => {
    const groups: Array<{
      type: "project" | "unassigned";
      project: Project | null;
      todos: Todo[];
      epic: Epic | null;
    }> = [];

    // 프로젝트가 있는 할일들
    projects.forEach((project) => {
      const projectTodos = getTodosByProjectId(project.id);
      if (projectTodos.length > 0) {
        groups.push({
          type: "project",
          project,
          todos: projectTodos,
          epic: getEpicById(project.epicId || "") || null,
        });
      }
    });

    // 프로젝트가 없는 할일들
    const unassignedTodos = todos.filter((todo) => !todo.projectId);
    if (unassignedTodos.length > 0) {
      groups.push({
        type: "unassigned",
        project: null,
        todos: unassignedTodos,
        epic: null,
      });
    }

    return groups;
  }, [projects, todos, getTodosByProjectId, getEpicById]);

  // 할일 관리 함수들
  const handleAddTodo = (todoData: Omit<Todo, "id" | "createdAt" | "updatedAt">) => {
    addTodo(todoData);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    updateTodo(updatedTodo);
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
  };

  const handleToggleComplete = (id: string) => {
    toggleTodoComplete(id);
  };

  // 에픽 관리 함수들
  const handleAddEpic = (epicData: Omit<Epic, "id" | "createdAt" | "updatedAt" | "projects" | "progress">) => {
    addEpic(epicData);
  };

  const handleUpdateEpic = (updatedEpic: Epic) => {
    updateEpic(updatedEpic);
  };

  const handleDeleteEpic = (id: string) => {
    deleteEpic(id);
  };

  // 프로젝트 추가 함수 - 이제 제대로 구현!
  const handleAddProject = (epicId: string) => {
    const title = prompt("프로젝트 제목을 입력하세요:");
    if (title && title.trim()) {
      addProject(
        {
          title: title.trim(),
          description: "",
          status: "active",
          priority: "medium",
          startDate: dayjs().toISOString(),
          progress: 0,
          tags: [],
        },
        epicId
      );
    }
  };

  // 개요 탭 렌더링
  const renderOverview = () => (
    <Box>
      <Typography variant="h5" gutterBottom>
        계획 관리 개요 📊
      </Typography>

      <Grid container spacing={3}>
        {/* 할일 통계 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
                <TodoIcon color="primary" />
                할일 통계
              </Typography>

              <Box mb={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="body2">완료율</Typography>
                  <Typography variant="body2">{todoStats.completionRate}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={todoStats.completionRate}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="primary">
                      {todoStats.totalTodos}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      전체
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="success.main">
                      {todoStats.completedTodos}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      완료
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="warning.main">
                      {todoStats.todayTodos}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      오늘
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="error.main">
                      {todoStats.overdueTodos}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      지연
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box mt={2}>
                <Typography variant="body2" gutterBottom>
                  우선순위별 분포
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap">
                  <Chip size="small" label={`긴급 ${todoStats.priorityBreakdown.urgent}`} color="error" />
                  <Chip size="small" label={`높음 ${todoStats.priorityBreakdown.high}`} color="warning" />
                  <Chip size="small" label={`보통 ${todoStats.priorityBreakdown.medium}`} color="primary" />
                  <Chip size="small" label={`낮음 ${todoStats.priorityBreakdown.low}`} color="success" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 에픽 통계 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
                <EpicIcon color="secondary" />
                에픽 통계
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="primary">
                      {epicStats.totalEpics}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      전체 에픽
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="success.main">
                      {epicStats.activeEpics}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      진행중
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="info.main">
                      {epicStats.totalProjects}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      총 프로젝트
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="secondary.main">
                      {epicStats.totalTodos}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      에픽 할일
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* 최근 활동 에픽들 */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                진행중인 에픽들 🚀
              </Typography>
              {epics.filter((e) => e.status === "active").length === 0 ? (
                <Typography variant="body2" color="text.secondary" textAlign="center" py={2}>
                  진행중인 에픽이 없습니다. 새로운 에픽을 만들어보세요! ✨
                </Typography>
              ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                  {epics
                    .filter((e) => e.status === "active")
                    .slice(0, 3)
                    .map((epic) => (
                      <Box key={epic.id} display="flex" alignItems="center" gap={2}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            backgroundColor: epic.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                          }}
                        >
                          {epic.emoji}
                        </Box>
                        <Box flex={1}>
                          <Typography variant="body1" fontWeight="bold">
                            {epic.title}
                          </Typography>
                          <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="body2" color="text.secondary">
                              {epic.description}
                            </Typography>
                            <Typography variant="body2">{Math.round(epic.progress)}%</Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={epic.progress}
                            sx={{
                              mt: 0.5,
                              height: 4,
                              borderRadius: 2,
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: epic.color,
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    ))}
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  // 프로젝트별 할일 렌더링
  const renderProjectTodos = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        📁 프로젝트별 할일 관리
      </Typography>

      {projectGroups.length === 0 ? (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              아직 할일이 없어요! 📝
            </Typography>
            <Typography variant="body2" color="text.secondary">
              새로운 할일을 추가해서 프로젝트별로 관리해보세요!
            </Typography>
          </CardContent>
        </Card>
      ) : (
        projectGroups.map((group, index) => (
          <Accordion key={index} sx={{ mb: 2, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box display="flex" alignItems="center" gap={2} width="100%">
                {group.type === "project" && group.project ? (
                  <>
                    <ProjectIcon color="primary" />
                    <Box flex={1}>
                      <Typography variant="h6">{group.project.title}</Typography>
                      {group.epic && (
                        <Chip
                          size="small"
                          label={`${group.epic.emoji} ${group.epic.title}`}
                          sx={{
                            fontSize: "0.7rem",
                            backgroundColor: group.epic.color + "20",
                            color: group.epic.color,
                            border: `1px solid ${group.epic.color}40`,
                            mt: 0.5,
                            borderRadius: 2,
                          }}
                        />
                      )}
                    </Box>
                  </>
                ) : (
                  <>
                    <TodoIcon color="secondary" />
                    <Typography variant="h6" flex={1}>
                      미분류 할일
                    </Typography>
                  </>
                )}
                <Chip
                  size="small"
                  label={`${group.todos.filter((t) => t.completed).length}/${group.todos.length}`}
                  color="primary"
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {group.todos.map((todo) => (
                  <ListItem key={todo.id} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Checkbox size="small" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)} />
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
                            sx={{ fontSize: "0.7rem", height: "18px", borderRadius: 2 }}
                          />
                          {todo.dueDate && (
                            <Typography variant="caption" color="text.secondary">
                              {dayjs(todo.dueDate).format("MM/DD")}
                            </Typography>
                          )}
                        </Box>
                      }
                    />
                    <Box display="flex" gap={0.5}>
                      <Tooltip title="수정">
                        <IconButton
                          size="small"
                          onClick={() => {
                            // TODO: 할일 수정 다이얼로그 열기
                            console.log("Edit todo:", todo.id);
                          }}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="삭제">
                        <IconButton size="small" color="error" onClick={() => deleteTodo(todo.id)}>
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );

  return (
    <Container maxWidth="xl">
      <Box py={3}>
        {/* 헤더 */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            계획 관리자 🎯
          </Typography>
          <Box display="flex" gap={2}>
            <Tooltip title="Firebase 데이터 새로고침 (뽀모도로 프로젝트 동기화)">
              <Button
                variant="outlined"
                startIcon={<Sync sx={{ animation: isRefreshing ? "spin 1s linear infinite" : "none" }} />}
                onClick={handleRefreshFirebaseData}
                disabled={isRefreshing}
                sx={{
                  "@keyframes spin": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                  },
                }}
              >
                {isRefreshing ? "동기화 중..." : "뽀모도로 데이터 동기화"}
              </Button>
            </Tooltip>
          </Box>
        </Box>

        {/* Firebase 데이터 안내 */}
        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            💡 <strong>뽀모도로에서 생성한 프로젝트와 할일</strong>이 여기에 함께 표시됩니다. 동기화 버튼을 클릭하면
            최신 데이터를 불러올 수 있어요!
          </Typography>
        </Alert>

        {/* 탭 네비게이션 */}
        <Paper sx={{ mb: 3 }}>
          <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} variant="fullWidth">
            <Tab icon={<OverviewIcon />} label="개요" iconPosition="start" />
            <Tab icon={<TodoIcon />} label={`할일 (${todoStats.totalTodos})`} iconPosition="start" />
            <Tab icon={<EpicIcon />} label={`에픽 (${epicStats.totalEpics})`} iconPosition="start" />
            <Tab icon={<ProjectIcon />} label={`프로젝트 (${projects.length})`} iconPosition="start" />
          </Tabs>
        </Paper>

        {/* 탭 컨텐츠 */}
        <Box>
          {activeTab === 0 && renderOverview()}
          {activeTab === 1 && (
            <TodoList
              todos={todos}
              epics={epics}
              projects={projects}
              onAddTodo={handleAddTodo}
              onUpdateTodo={handleUpdateTodo}
              onDeleteTodo={handleDeleteTodo}
              onToggleComplete={handleToggleComplete}
            />
          )}
          {activeTab === 2 && (
            <EpicList
              epics={epics}
              onAddEpic={handleAddEpic}
              onUpdateEpic={handleUpdateEpic}
              onDeleteEpic={handleDeleteEpic}
              onAddProject={handleAddProject}
            />
          )}
          {activeTab === 3 && renderProjectTodos()}
        </Box>
      </Box>
    </Container>
  );
};

export default TodoManager;
