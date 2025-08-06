import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  LinearProgress,
  Box,
  Chip,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Add as AddIcon,
  CalendarToday as CalendarIcon,
  Assignment as ProjectIcon,
  CheckCircle as CompletedIcon,
  Schedule as ActiveIcon,
  Pause as PausedIcon,
  Cancel as CancelledIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Schedule,
} from "@mui/icons-material";
import { Epic, EpicStatus, Priority, Project } from "../types";
import dayjs from "dayjs";

interface EpicCardProps {
  epic: Epic;
  onUpdate: (epic: Epic) => void;
  onDelete: (id: string) => void;
  onAddProject: (epicId: string) => void;
}

const statusColors = {
  planning: "#9e9e9e",
  active: "#4caf50",
  paused: "#ff9800",
  completed: "#2196f3",
  cancelled: "#f44336",
};

const statusLabels = {
  planning: "계획중",
  active: "진행중",
  paused: "일시정지",
  completed: "완료",
  cancelled: "취소됨",
};

const statusIcons = {
  planning: <Schedule />,
  active: <ActiveIcon />,
  paused: <PausedIcon />,
  completed: <CompletedIcon />,
  cancelled: <CancelledIcon />,
};

const priorityColors = {
  urgent: "#f44336",
  high: "#ff9800",
  medium: "#2196f3",
  low: "#4caf50",
};

const priorityLabels = {
  urgent: "긴급",
  high: "높음",
  medium: "보통",
  low: "낮음",
};

export const EpicCard: React.FC<EpicCardProps> = ({ epic, onUpdate, onDelete, onAddProject }) => {
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: epic.title,
    description: epic.description,
    status: epic.status,
    priority: epic.priority,
    startDate: epic.startDate ?? "",
    dueDate: epic.dueDate ?? "",
    color: epic.color,
    emoji: epic.emoji ?? "",
    tags: epic.tags?.join(", ") ?? "",
  });

  const handleSave = () => {
    const updatedEpic: Epic = {
      ...epic,
      title: editForm.title,
      description: editForm.description,
      status: editForm.status,
      priority: editForm.priority,
      startDate: editForm.startDate || undefined,
      dueDate: editForm.dueDate || undefined,
      color: editForm.color,
      emoji: editForm.emoji || undefined,
      tags: editForm.tags
        ? editForm.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : undefined,
      updatedAt: new Date().toISOString(),
    };

    onUpdate(updatedEpic);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      title: epic.title,
      description: epic.description,
      status: epic.status,
      priority: epic.priority,
      startDate: epic.startDate ?? "",
      dueDate: epic.dueDate ?? "",
      color: epic.color,
      emoji: epic.emoji ?? "",
      tags: epic.tags?.join(", ") ?? "",
    });
    setIsEditing(false);
  };

  const completedProjects = epic.projects.filter((p) => p.status === "completed").length;
  const totalProjects = epic.projects.length;
  const isOverdue = epic.dueDate && epic.status !== "completed" && dayjs(epic.dueDate).isBefore(dayjs(), "day");

  return (
    <>
      <Card
        sx={{
          mb: 2,
          borderLeft: `6px solid ${epic.color}`,
          backgroundColor: isOverdue ? "#ffebee" : "inherit",
          position: "relative",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="flex-start" gap={2}>
            {epic.emoji && <Avatar sx={{ bgcolor: epic.color, width: 48, height: 48 }}>{epic.emoji}</Avatar>}

            <Box flex={1}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Typography variant="h5" component="h2" sx={{ flex: 1 }}>
                  {epic.title}
                </Typography>

                <Chip
                  size="small"
                  icon={statusIcons[epic.status]}
                  label={statusLabels[epic.status]}
                  sx={{
                    backgroundColor: statusColors[epic.status],
                    color: "white",
                  }}
                />

                <Chip
                  size="small"
                  label={priorityLabels[epic.priority]}
                  sx={{
                    backgroundColor: priorityColors[epic.priority],
                    color: "white",
                    fontSize: "0.75rem",
                  }}
                />
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {epic.description}
              </Typography>

              {/* 진행률 */}
              <Box mb={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="body2">
                    진행률: {completedProjects}/{totalProjects} 프로젝트
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {Math.round(epic.progress)}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={epic.progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: epic.color,
                    },
                  }}
                />
              </Box>

              {/* 날짜 및 태그 */}
              <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                {epic.startDate && (
                  <Chip
                    size="small"
                    icon={<CalendarIcon />}
                    label={`시작: ${dayjs(epic.startDate).format("MM/DD")}`}
                    variant="outlined"
                  />
                )}

                {epic.dueDate && (
                  <Chip
                    size="small"
                    icon={<CalendarIcon />}
                    label={`마감: ${dayjs(epic.dueDate).format("MM/DD")}`}
                    color={isOverdue ? "error" : "default"}
                    variant="outlined"
                  />
                )}

                {epic.tags?.map((tag, index) => (
                  <Chip key={index} size="small" label={tag} variant="outlined" sx={{ fontSize: "0.7rem" }} />
                ))}
              </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Tooltip title="수정">
                <IconButton size="small" onClick={() => setIsEditing(true)}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="삭제">
                <IconButton size="small" onClick={() => onDelete(epic.id)} color="error">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title={expanded ? "접기" : "펼치기"}>
                <IconButton size="small" onClick={() => setExpanded(!expanded)}>
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>

        <Collapse in={expanded}>
          <CardContent sx={{ pt: 0 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                <ProjectIcon /> 프로젝트 ({totalProjects})
              </Typography>
              <Button startIcon={<AddIcon />} onClick={() => onAddProject(epic.id)} variant="outlined" size="small">
                프로젝트 추가
              </Button>
            </Box>

            {epic.projects.length === 0 ? (
              <Typography variant="body2" color="text.secondary" textAlign="center" py={2}>
                아직 프로젝트가 없습니다. 프로젝트를 추가해보세요! 🚀
              </Typography>
            ) : (
              <List dense>
                {epic.projects.map((project) => (
                  <ListItem key={project.id} sx={{ pl: 0 }}>
                    <ListItemText
                      primary={
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography variant="body2">{project.title}</Typography>
                          <Chip
                            size="small"
                            label={project.status}
                            sx={{
                              fontSize: "0.7rem",
                              height: "20px",
                              backgroundColor: statusColors[project.status as keyof typeof statusColors] ?? "#grey",
                              color: "white",
                            }}
                          />
                        </Box>
                      }
                      secondary={`진행률: ${project.progress}% | 태스크: ${project.tasks.length}개`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Collapse>
      </Card>

      {/* 편집 다이얼로그 */}
      <Dialog open={isEditing} onClose={handleCancel} maxWidth="md" fullWidth>
        <DialogTitle>에픽 수정 🏛️</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <Box display="flex" gap={2}>
              <TextField
                label="제목"
                value={editForm.title}
                onChange={(e) => setEditForm((prev) => ({ ...prev, title: e.target.value }))}
                fullWidth
                required
              />

              <TextField
                label="이모지"
                value={editForm.emoji}
                onChange={(e) => setEditForm((prev) => ({ ...prev, emoji: e.target.value }))}
                sx={{ width: 100 }}
                placeholder="🏛️"
              />
            </Box>

            <TextField
              label="설명"
              value={editForm.description}
              onChange={(e) => setEditForm((prev) => ({ ...prev, description: e.target.value }))}
              fullWidth
              multiline
              rows={3}
            />

            <Box display="flex" gap={2}>
              <FormControl fullWidth>
                <InputLabel>상태</InputLabel>
                <Select
                  value={editForm.status}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value as EpicStatus }))}
                  label="상태"
                >
                  <MenuItem value="planning">계획중</MenuItem>
                  <MenuItem value="active">진행중</MenuItem>
                  <MenuItem value="paused">일시정지</MenuItem>
                  <MenuItem value="completed">완료</MenuItem>
                  <MenuItem value="cancelled">취소됨</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>우선순위</InputLabel>
                <Select
                  value={editForm.priority}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, priority: e.target.value as Priority }))}
                  label="우선순위"
                >
                  <MenuItem value="low">낮음</MenuItem>
                  <MenuItem value="medium">보통</MenuItem>
                  <MenuItem value="high">높음</MenuItem>
                  <MenuItem value="urgent">긴급</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box display="flex" gap={2}>
              <TextField
                label="시작일"
                type="date"
                value={editForm.startDate}
                onChange={(e) => setEditForm((prev) => ({ ...prev, startDate: e.target.value }))}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="마감일"
                type="date"
                value={editForm.dueDate}
                onChange={(e) => setEditForm((prev) => ({ ...prev, dueDate: e.target.value }))}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <TextField
              label="색상"
              type="color"
              value={editForm.color}
              onChange={(e) => setEditForm((prev) => ({ ...prev, color: e.target.value }))}
              fullWidth
            />

            <TextField
              label="태그 (쉼표로 구분)"
              value={editForm.tags}
              onChange={(e) => setEditForm((prev) => ({ ...prev, tags: e.target.value }))}
              fullWidth
              placeholder="업무, 개인, 프로젝트"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} startIcon={<CancelIcon />}>
            취소
          </Button>
          <Button onClick={handleSave} variant="contained" startIcon={<SaveIcon />} disabled={!editForm.title.trim()}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
