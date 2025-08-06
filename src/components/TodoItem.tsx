import React, { useState } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Typography,
  IconButton,
  Chip,
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  CalendarToday as CalendarIcon,
  Flag as FlagIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { Todo, Priority } from "../types";
import dayjs from "dayjs";

interface TodoItemProps {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

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

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: todo.title,
    description: todo.description ?? "",
    priority: todo.priority,
    dueDate: todo.dueDate ?? "",
    tags: todo.tags?.join(", ") ?? "",
  });

  const handleSave = () => {
    const updatedTodo: Todo = {
      ...todo,
      title: editForm.title,
      description: editForm.description || undefined,
      priority: editForm.priority,
      dueDate: editForm.dueDate || undefined,
      tags: editForm.tags
        ? editForm.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : undefined,
      updatedAt: new Date().toISOString(),
    };

    onUpdate(updatedTodo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      title: todo.title,
      description: todo.description ?? "",
      priority: todo.priority,
      dueDate: todo.dueDate ?? "",
      tags: todo.tags?.join(", ") ?? "",
    });
    setIsEditing(false);
  };

  const isOverdue = todo.dueDate && !todo.completed && dayjs(todo.dueDate).isBefore(dayjs(), "day");
  const isDueToday = todo.dueDate && dayjs(todo.dueDate).isSame(dayjs(), "day");

  return (
    <>
      <Card
        sx={{
          mb: 2,
          opacity: todo.completed ? 0.7 : 1,
          borderLeft: `4px solid ${priorityColors[todo.priority]}`,
          backgroundColor: isOverdue ? "#ffebee" : isDueToday ? "#fff3e0" : "inherit",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Checkbox checked={todo.completed} onChange={() => onToggleComplete(todo.id)} sx={{ mt: -1 }} />

            <Box flex={1}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    flex: 1,
                  }}
                >
                  {todo.title}
                </Typography>

                <Chip
                  size="small"
                  icon={<FlagIcon />}
                  label={priorityLabels[todo.priority]}
                  sx={{
                    backgroundColor: priorityColors[todo.priority],
                    color: "white",
                    fontSize: "0.75rem",
                  }}
                />
              </Box>

              {todo.description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.description}
                </Typography>
              )}

              <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                {todo.dueDate && (
                  <Chip
                    size="small"
                    icon={<CalendarIcon />}
                    label={dayjs(todo.dueDate).format("MM/DD")}
                    color={isOverdue ? "error" : isDueToday ? "warning" : "default"}
                    variant="outlined"
                  />
                )}

                {todo.tags?.map((tag, index) => (
                  <Chip key={index} size="small" label={tag} variant="outlined" sx={{ fontSize: "0.7rem" }} />
                ))}
              </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Tooltip title="수정">
                <IconButton size="small" onClick={() => setIsEditing(true)} disabled={todo.completed}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="삭제">
                <IconButton size="small" onClick={() => onDelete(todo.id)} color="error">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* 편집 다이얼로그 */}
      <Dialog open={isEditing} onClose={handleCancel} maxWidth="sm" fullWidth>
        <DialogTitle>할일 수정 ✏️</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="제목"
              value={editForm.title}
              onChange={(e) => setEditForm((prev) => ({ ...prev, title: e.target.value }))}
              fullWidth
              required
            />

            <TextField
              label="설명"
              value={editForm.description}
              onChange={(e) => setEditForm((prev) => ({ ...prev, description: e.target.value }))}
              fullWidth
              multiline
              rows={3}
            />

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

            <TextField
              label="마감일"
              type="date"
              value={editForm.dueDate}
              onChange={(e) => setEditForm((prev) => ({ ...prev, dueDate: e.target.value }))}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="태그 (쉼표로 구분)"
              value={editForm.tags}
              onChange={(e) => setEditForm((prev) => ({ ...prev, tags: e.target.value }))}
              fullWidth
              placeholder="업무, 개인, 공부"
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
