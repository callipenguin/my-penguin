import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  IconButton,
  Tooltip,
  Fab,
} from "@mui/material";
import {
  Assignment as TodoIcon,
  AccountTree as EpicIcon,
  Dashboard as OverviewIcon,
  Add as AddIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CompletedIcon,
  Schedule as PendingIcon,
} from "@mui/icons-material";
import { TodoList } from "../components/TodoList";
import { EpicList } from "../components/EpicList";
import { Todo, Epic, Project, TodoStats, EpicStats } from "../types";
import dayjs from "dayjs";

// 임시 데이터 생성 함수들
const generateId = () => Math.random().toString(36).substr(2, 9);

const createSampleEpics = (): Epic[] => [
  {
    id: generateId(),
    title: "개인 웹사이트 개발",
    description: "포트폴리오와 블로그 기능을 포함한 개인 웹사이트 구축",
    status: "active",
    priority: "high",
    startDate: "2024-01-01",
    dueDate: "2024-03-31",
    progress: 65,
    projects: [],
    color: "#2196f3",
    emoji: "💻",
    tags: ["개발", "포트폴리오"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: generateId(),
    title: "건강 관리",
    description: "운동과 식단 관리를 통한 건강한 생활 습관 만들기",
    status: "active",
    priority: "medium",
    startDate: "2024-01-15",
    dueDate: "2024-12-31",
    progress: 30,
    projects: [],
    color: "#4caf50",
    emoji: "💪",
    tags: ["건강", "운동", "식단"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const createSampleTodos = (): Todo[] => [
  {
    id: generateId(),
    title: "React 컴포넌트 설계 문서 작성",
    description: "할일 관리 기능의 컴포넌트 구조와 인터페이스 정의",
    completed: false,
    priority: "high",
    dueDate: dayjs().add(2, "day").format("YYYY-MM-DD"),
    tags: ["개발", "문서화"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: generateId(),
    title: "주간 운동 계획 세우기",
    description: "월/수/금 근력 운동, 화/목/토 유산소 운동 스케줄 작성",
    completed: false,
    priority: "medium",
    dueDate: dayjs().format("YYYY-MM-DD"),
    tags: ["건강", "계획"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: generateId(),
    title: "TypeScript 학습",
    description: "고급 타입 시스템과 제네릭 패턴 학습",
    completed: true,
    priority: "medium",
    dueDate: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
    tags: ["학습", "개발"],
    completedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const TodoManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // 0: 개요, 1: 할일, 2: 에픽
  const [todos, setTodos] = useState<Todo[]>([]);
  const [epics, setEpics] = useState<Epic[]>([]);
  const [projects, setProjects] = useState<Project[]>([]); // 기존 프로젝트들

  // 초기 데이터 로드
  useEffect(() => {
    setTodos(createSampleTodos());
    setEpics(createSampleEpics());
  }, []);

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
    const totalProjects = epics.reduce((sum, epic) => sum + epic.projects.length, 0);
    const completedProjects = epics.reduce(
      (sum, epic) => sum + epic.projects.filter((p) => p.status === "completed").length,
      0
    );
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
    };
  }, [epics, todos]);

  // 할일 관리 함수들
  const handleAddTodo = (todoData: Omit<Todo, "id" | "createdAt" | "updatedAt">) => {
    const newTodo: Todo = {
      ...todoData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
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

  // 에픽 관리 함수들
  const handleAddEpic = (epicData: Omit<Epic, "id" | "createdAt" | "updatedAt" | "projects" | "progress">) => {
    const newEpic: Epic = {
      ...epicData,
      id: generateId(),
      projects: [],
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setEpics((prev) => [...prev, newEpic]);
  };

  const handleUpdateEpic = (updatedEpic: Epic) => {
    setEpics((prev) => prev.map((epic) => (epic.id === updatedEpic.id ? updatedEpic : epic)));
  };

  const handleDeleteEpic = (id: string) => {
    setEpics((prev) => prev.filter((epic) => epic.id !== id));
    // 해당 에픽과 연결된 할일들의 epicId 제거
    setTodos((prev) =>
      prev.map((todo) =>
        todo.epicId === id ? { ...todo, epicId: undefined, updatedAt: new Date().toISOString() } : todo
      )
    );
  };

  const handleAddProject = (epicId: string) => {
    // 프로젝트 추가 로직 (기존 ProjectManager와 연동)
    console.log("프로젝트 추가:", epicId);
    // TODO: 기존 프로젝트 관리자와 연동
  };

  // 개요 탭 렌더링
  const renderOverview = () => (
    <Box>
      <Typography variant="h5" gutterBottom>
        할일 & 에픽 관리 개요 📊
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

  return (
    <Container maxWidth="xl">
      <Box py={3}>
        {/* 헤더 */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" component="h1">
            할일 & 에픽 관리자 🎯
          </Typography>
          <Box display="flex" gap={1}>
            <Tooltip title="할일 추가">
              <Fab color="primary" size="small" onClick={() => setActiveTab(1)} sx={{ mr: 1 }}>
                <TodoIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="에픽 추가">
              <Fab color="secondary" size="small" onClick={() => setActiveTab(2)}>
                <EpicIcon />
              </Fab>
            </Tooltip>
          </Box>
        </Box>

        {/* 탭 네비게이션 */}
        <Paper sx={{ mb: 3 }}>
          <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} variant="fullWidth">
            <Tab icon={<OverviewIcon />} label="개요" iconPosition="start" />
            <Tab icon={<TodoIcon />} label={`할일 (${todoStats.totalTodos})`} iconPosition="start" />
            <Tab icon={<EpicIcon />} label={`에픽 (${epicStats.totalEpics})`} iconPosition="start" />
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
        </Box>
      </Box>
    </Container>
  );
};

export default TodoManager;
