import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
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
  useTheme,
  Fab,
} from "@mui/material";
import { Add, Edit, Delete, PlayArrow, Pause, CheckCircle, Assignment, Schedule, Flag } from "@mui/icons-material";
import { Project, ProjectStatus, Priority, Task } from "../types";
import dayjs from "dayjs";
import { loadUserData, saveUserData, getCurrentUser } from "../utils/firebase";

const ProjectManager: React.FC = () => {
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

  const statusColumns: { status: ProjectStatus; title: string; color: string; emoji: string }[] = [
    { status: "planning", title: "계획 중", color: theme.palette.info.main, emoji: "🧊" },
    { status: "active", title: "진행 중", color: theme.palette.primary.main, emoji: "🐧" },
    { status: "paused", title: "일시 중단", color: theme.palette.warning.main, emoji: "❄️" },
    { status: "completed", title: "완료", color: theme.palette.success.main, emoji: "🐟" },
  ];

  const priorityInfo: Record<Priority, { color: string; label: string }> = {
    low: { color: theme.palette.success.main, label: "낮음" },
    medium: { color: theme.palette.warning.main, label: "보통" },
    high: { color: theme.palette.error.main, label: "높음" },
    urgent: { color: theme.palette.error.dark, label: "긴급" },
  };

  // 프로젝트 데이터 로드
  useEffect(() => {
    loadProjects();
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

  return (
    <Box sx={{ p: 3 }}>
      {/* 헤더 */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🏔️ 프로젝트 빙하
          </Typography>
          <Typography variant="body1" color="textSecondary">
            펭귄처럼 체계적으로 프로젝트를 관리하고 추적하세요
          </Typography>
        </Box>

        <Button variant="contained" startIcon={<Add />} onClick={() => setDialogOpen(true)} size="large">
          새 프로젝트
        </Button>
      </Box>

      {/* 통계 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statusColumns.map((column) => {
          const count = getProjectsByStatus(column.status).length;
          return (
            <Grid item xs={12} sm={6} md={3} key={column.status}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: "2rem", mb: 1 }}>{column.emoji}</Typography>
                  <Typography variant="h4" color={column.color} gutterBottom>
                    {count}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {column.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* 칸반 보드 */}
      <Box sx={{ overflowX: "auto" }}>
        <Box sx={{ display: "flex", gap: 3, minWidth: 1000 }}>
          {statusColumns.map((column) => (
            <Box key={column.status} sx={{ minWidth: 300, flex: 1 }}>
              {/* 컬럼 헤더 */}
              <Box
                sx={{
                  p: 2,
                  mb: 2,
                  backgroundColor: column.color + "15",
                  borderRadius: 2,
                  border: `2px solid ${column.color}30`,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                    }}
                  />
                </Box>
              </Box>

              {/* 프로젝트 카드들 */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {getProjectsByStatus(column.status).map((project) => {
                  const daysUntilDue = getDaysUntilDue(project.dueDate);

                  return (
                    <Card
                      key={project.id}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          boxShadow: theme.shadows[4],
                        },
                      }}
                    >
                      <CardContent>
                        {/* 프로젝트 헤더 */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
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
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>

                        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                          {project.description}
                        </Typography>

                        {/* 우선순위 */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                          <Chip
                            icon={<Flag />}
                            label={priorityInfo[project.priority].label}
                            size="small"
                            sx={{
                              backgroundColor: priorityInfo[project.priority].color + "20",
                              color: priorityInfo[project.priority].color,
                            }}
                          />

                          {daysUntilDue !== null && (
                            <Typography
                              variant="caption"
                              sx={{
                                color:
                                  daysUntilDue < 0
                                    ? theme.palette.error.main
                                    : daysUntilDue < 7
                                    ? theme.palette.warning.main
                                    : theme.palette.text.secondary,
                                fontWeight: 500,
                              }}
                            >
                              {daysUntilDue < 0
                                ? `${Math.abs(daysUntilDue)}일 지연`
                                : daysUntilDue === 0
                                ? "오늘 마감"
                                : `${daysUntilDue}일 남음`}
                            </Typography>
                          )}
                        </Box>

                        {/* 진행률 */}
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="body2" color="textSecondary">
                              진행률
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                              {project.progress}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={project.progress}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: theme.palette.grey[200],
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: column.color,
                              },
                            }}
                          />
                        </Box>

                        {/* 태그 */}
                        {project.tags && project.tags.length > 0 && (
                          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                            {project.tags.map((tag) => (
                              <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontSize: "0.7rem" }} />
                            ))}
                          </Box>
                        )}

                        {/* 상태 변경 버튼들 */}
                        <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                          {statusColumns
                            .filter((s) => s.status !== project.status)
                            .map((status) => (
                              <Button
                                key={status.status}
                                size="small"
                                variant="outlined"
                                startIcon={getStatusIcon(status.status)}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStatusChange(project.id, status.status);
                                }}
                                sx={{
                                  borderColor: status.color,
                                  color: status.color,
                                  "&:hover": {
                                    backgroundColor: status.color + "10",
                                    borderColor: status.color,
                                  },
                                }}
                              >
                                {status.title}
                              </Button>
                            ))}
                        </Box>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

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
