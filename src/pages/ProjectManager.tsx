import React, { useState } from "react";
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
  MenuItem,
  LinearProgress,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Divider,
  Tooltip,
  Container,
} from "@mui/material";
import { Add, Edit, Delete, Assignment, CheckCircle, Flag, ExpandMore, Explore } from "@mui/icons-material";
import { Project, ProjectStatus, Priority, Todo, ThemeConfigExtended } from "../types";
import dayjs from "dayjs";
import { useTodo } from "../contexts/TodoContext";

interface ProjectManagerProps {
  themeConfig?: ThemeConfigExtended;
}

const ProjectManager: React.FC<ProjectManagerProps> = ({ themeConfig }) => {
  const theme = useTheme();

  // TodoContext 사용
  const {
    projects,
    todos,
    epics,
    addProject,
    updateProject,
    deleteProject,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoComplete,
    getTodosByProjectId,
    getEpicById,
  } = useTodo();

  // 상태 관리
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [todoDialogOpen, setTodoDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");

  // 프로젝트 폼 상태
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectStatus, setProjectStatus] = useState<ProjectStatus>("active");
  const [projectPriority, setProjectPriority] = useState<Priority>("medium");
  const [projectDueDate, setProjectDueDate] = useState("");

  // 할일 폼 상태
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoPriority, setTodoPriority] = useState<Priority>("medium");
  const [todoDueDate, setTodoDueDate] = useState("");

  // 프로젝트 추가/수정
  const handleProjectSubmit = () => {
    if (!projectTitle.trim()) return;

    const projectData = {
      title: projectTitle.trim(),
      description: projectDescription.trim(),
      status: projectStatus,
      priority: projectPriority,
      startDate: dayjs().toISOString(),
      dueDate: projectDueDate || undefined,
      progress: editingProject?.progress || 0,
      tags: [],
    };

    if (editingProject) {
      updateProject({
        ...editingProject,
        ...projectData,
      });
    } else {
      addProject(projectData);
    }

    resetProjectForm();
  };

  // 할일 추가/수정
  const handleTodoSubmit = () => {
    if (!todoTitle.trim()) return;

    const todoData = {
      title: todoTitle.trim(),
      description: todoDescription.trim(),
      completed: editingTodo?.completed || false,
      priority: todoPriority,
      dueDate: todoDueDate || undefined,
      tags: [],
      projectId: selectedProjectId || undefined,
    };

    if (editingTodo) {
      updateTodo({
        ...editingTodo,
        ...todoData,
      });
    } else {
      addTodo(todoData);
    }

    resetTodoForm();
  };

  // 폼 초기화
  const resetProjectForm = () => {
    setProjectTitle("");
    setProjectDescription("");
    setProjectStatus("active");
    setProjectPriority("medium");
    setProjectDueDate("");
    setEditingProject(null);
    setProjectDialogOpen(false);
  };

  const resetTodoForm = () => {
    setTodoTitle("");
    setTodoDescription("");
    setTodoPriority("medium");
    setTodoDueDate("");
    setEditingTodo(null);
    setSelectedProjectId("");
    setTodoDialogOpen(false);
  };

  // 편집 모드 시작
  const startEditProject = (project: Project) => {
    setEditingProject(project);
    setProjectTitle(project.title);
    setProjectDescription(project.description);
    setProjectStatus(project.status);
    setProjectPriority(project.priority);
    setProjectDueDate(project.dueDate ? dayjs(project.dueDate).format("YYYY-MM-DD") : "");
    setProjectDialogOpen(true);
  };

  const startEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setTodoTitle(todo.title);
    setTodoDescription(todo.description || "");
    setTodoPriority(todo.priority);
    setTodoDueDate(todo.dueDate ? dayjs(todo.dueDate).format("YYYY-MM-DD") : "");
    setSelectedProjectId(todo.projectId || "");
    setTodoDialogOpen(true);
  };

  const startAddTodo = (projectId: string) => {
    setSelectedProjectId(projectId);
    setTodoDialogOpen(true);
  };

  // 상태별 색상
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case "active":
        return theme.palette.success.main;
      case "completed":
        return theme.palette.info.main;
      case "paused":
        return theme.palette.warning.main;
      case "planning":
        return theme.palette.secondary.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getStatusLabel = (status: ProjectStatus) => {
    switch (status) {
      case "active":
        return "진행중";
      case "completed":
        return "완료";
      case "paused":
        return "일시정지";
      case "planning":
        return "계획중";
      default:
        return status;
    }
  };

  return (
    <Container maxWidth="xl">
      <Box py={3}>
        {/* 헤더 */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" component="h1">
            {themeConfig?.concepts?.projectType || "🚀 프로젝트"} 관리
          </Typography>
          <Button variant="contained" startIcon={<Add />} onClick={() => setProjectDialogOpen(true)}>
            새 프로젝트
          </Button>
        </Box>

        {/* 프로젝트 목록 */}
        <Grid container spacing={3}>
          {projects.length === 0 ? (
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent sx={{ textAlign: "center", py: 6 }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    아직 프로젝트가 없어요! 🚀
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    새로운 프로젝트를 만들어서 할일을 체계적으로 관리해보세요!
                  </Typography>
                  <Button variant="contained" startIcon={<Add />} onClick={() => setProjectDialogOpen(true)}>
                    첫 번째 프로젝트 만들기
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ) : (
            projects.map((project) => {
              const projectTodos = getTodosByProjectId(project.id);
              const completedTodos = projectTodos.filter((t) => t.completed).length;
              const epic = getEpicById(project.epicId || "");

              return (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <Card sx={{ height: "100%", borderRadius: 2 }}>
                    <CardContent>
                      {/* 프로젝트 헤더 */}
                      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                        <Box flex={1}>
                          <Typography variant="h6" fontWeight="bold" gutterBottom>
                            {project.title}
                          </Typography>
                          {epic && (
                            <Chip
                              size="small"
                              label={`${epic.emoji} ${epic.title}`}
                              sx={{
                                fontSize: "0.7rem",
                                backgroundColor: epic.color + "20",
                                color: epic.color,
                                border: `1px solid ${epic.color}40`,
                                mb: 1,
                                borderRadius: 2,
                              }}
                            />
                          )}
                        </Box>
                        <Box display="flex" gap={0.5}>
                          <Tooltip title="수정">
                            <IconButton size="small" onClick={() => startEditProject(project)}>
                              <Edit fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="삭제">
                            <IconButton size="small" color="error" onClick={() => deleteProject(project.id)}>
                              <Delete fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>

                      {/* 프로젝트 정보 */}
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>

                      <Box display="flex" gap={1} mb={2}>
                        <Chip
                          size="small"
                          label={getStatusLabel(project.status)}
                          sx={{
                            backgroundColor: getStatusColor(project.status) + "20",
                            color: getStatusColor(project.status),
                            borderRadius: 2,
                          }}
                        />
                        <Chip
                          size="small"
                          label={
                            project.priority === "urgent"
                              ? "긴급"
                              : project.priority === "high"
                              ? "높음"
                              : project.priority === "medium"
                              ? "보통"
                              : "낮음"
                          }
                          color={
                            project.priority === "urgent"
                              ? "error"
                              : project.priority === "high"
                              ? "warning"
                              : project.priority === "medium"
                              ? "primary"
                              : "success"
                          }
                          sx={{ borderRadius: 2 }}
                        />
                      </Box>

                      {/* 진행률 */}
                      <Box mb={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                          <Typography variant="body2">진행률</Typography>
                          <Typography variant="body2">{Math.round(project.progress)}%</Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={project.progress}
                          sx={{ height: 8, borderRadius: 2 }}
                        />
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      {/* 할일 목록 */}
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        <Typography variant="subtitle2">
                          할일 ({projectTodos.length}) - 완료 ({completedTodos})
                        </Typography>
                        <Tooltip title="할일 추가">
                          <IconButton size="small" onClick={() => startAddTodo(project.id)}>
                            <Add fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>

                      <List dense sx={{ maxHeight: 200, overflow: "auto" }}>
                        {projectTodos.length === 0 ? (
                          <ListItem>
                            <ListItemText
                              primary={
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                  할일이 없어요. 추가해보세요! ✨
                                </Typography>
                              }
                            />
                          </ListItem>
                        ) : (
                          projectTodos.slice(0, 5).map((todo) => (
                            <ListItem key={todo.id} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <Checkbox
                                  size="small"
                                  checked={todo.completed}
                                  onChange={() => toggleTodoComplete(todo.id)}
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
                              />
                              <Box display="flex" gap={0.5}>
                                <Tooltip title="수정">
                                  <IconButton size="small" onClick={() => startEditTodo(todo)}>
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
                          ))
                        )}
                      </List>

                      {projectTodos.length > 5 && (
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                          +{projectTodos.length - 5}개 더...
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          )}
        </Grid>

        {/* 프로젝트 추가/수정 다이얼로그 */}
        <Dialog open={projectDialogOpen} onClose={resetProjectForm} maxWidth="sm" fullWidth>
          <DialogTitle>{editingProject ? "프로젝트 수정" : "새 프로젝트 추가"} 🚀</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="프로젝트 제목"
              fullWidth
              variant="outlined"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="설명"
              fullWidth
              variant="outlined"
              multiline
              rows={3}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  select
                  margin="dense"
                  label="상태"
                  fullWidth
                  variant="outlined"
                  value={projectStatus}
                  onChange={(e) => setProjectStatus(e.target.value as ProjectStatus)}
                >
                  <MenuItem value="planning">계획중</MenuItem>
                  <MenuItem value="active">진행중</MenuItem>
                  <MenuItem value="paused">일시정지</MenuItem>
                  <MenuItem value="completed">완료</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  margin="dense"
                  label="우선순위"
                  fullWidth
                  variant="outlined"
                  value={projectPriority}
                  onChange={(e) => setProjectPriority(e.target.value as Priority)}
                >
                  <MenuItem value="low">낮음</MenuItem>
                  <MenuItem value="medium">보통</MenuItem>
                  <MenuItem value="high">높음</MenuItem>
                  <MenuItem value="urgent">긴급</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <TextField
              type="date"
              margin="dense"
              label="마감일"
              fullWidth
              variant="outlined"
              value={projectDueDate}
              onChange={(e) => setProjectDueDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={resetProjectForm}>취소</Button>
            <Button onClick={handleProjectSubmit} variant="contained" disabled={!projectTitle.trim()}>
              {editingProject ? "수정" : "추가"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* 할일 추가/수정 다이얼로그 */}
        <Dialog open={todoDialogOpen} onClose={resetTodoForm} maxWidth="sm" fullWidth>
          <DialogTitle>{editingTodo ? "할일 수정" : "새 할일 추가"} 📝</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="할일 제목"
              fullWidth
              variant="outlined"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="설명"
              fullWidth
              variant="outlined"
              multiline
              rows={2}
              value={todoDescription}
              onChange={(e) => setTodoDescription(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  select
                  margin="dense"
                  label="프로젝트"
                  fullWidth
                  variant="outlined"
                  value={selectedProjectId}
                  onChange={(e) => setSelectedProjectId(e.target.value)}
                >
                  <MenuItem value="">프로젝트 없음</MenuItem>
                  {projects.map((project) => (
                    <MenuItem key={project.id} value={project.id}>
                      {project.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  margin="dense"
                  label="우선순위"
                  fullWidth
                  variant="outlined"
                  value={todoPriority}
                  onChange={(e) => setTodoPriority(e.target.value as Priority)}
                >
                  <MenuItem value="low">낮음</MenuItem>
                  <MenuItem value="medium">보통</MenuItem>
                  <MenuItem value="high">높음</MenuItem>
                  <MenuItem value="urgent">긴급</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <TextField
              type="date"
              margin="dense"
              label="마감일"
              fullWidth
              variant="outlined"
              value={todoDueDate}
              onChange={(e) => setTodoDueDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={resetTodoForm}>취소</Button>
            <Button onClick={handleTodoSubmit} variant="contained" disabled={!todoTitle.trim()}>
              {editingTodo ? "수정" : "추가"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default ProjectManager;
