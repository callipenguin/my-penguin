import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  InputAdornment,
  Tabs,
  Tab,
  Badge,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  FilterList as FilterIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { Todo, TodoFilter, Priority, Epic, Project } from "../types";
import { TodoItem } from "./TodoItem";
import dayjs from "dayjs";

interface TodoListProps {
  todos: Todo[];
  epics: Epic[];
  projects: Project[];
  onAddTodo: (todo: Omit<Todo, "id" | "createdAt" | "updatedAt">) => void;
  onUpdateTodo: (todo: Todo) => void;
  onDeleteTodo: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const priorityLabels = {
  urgent: "긴급",
  high: "높음",
  medium: "보통",
  low: "낮음",
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  epics,
  projects,
  onAddTodo,
  onUpdateTodo,
  onDeleteTodo,
  onToggleComplete,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<TodoFilter>({
    status: "all",
    priority: "all",
    epicId: "all",
    projectId: "all",
  });
  const [activeTab, setActiveTab] = useState(0); // 0: 전체, 1: 오늘, 2: 이번주, 3: 완료됨
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newTodoForm, setNewTodoForm] = useState({
    title: "",
    description: "",
    priority: "medium" as Priority,
    dueDate: "",
    tags: "",
    epicId: "",
    projectId: "",
  });

  // 필터링된 할일 목록
  const filteredTodos = useMemo(() => {
    let filtered = todos;

    // 탭별 필터링
    switch (activeTab) {
      case 1: // 오늘
        filtered = filtered.filter((todo) => todo.dueDate && dayjs(todo.dueDate).isSame(dayjs(), "day"));
        break;
      case 2: // 이번주
        filtered = filtered.filter((todo) => todo.dueDate && dayjs(todo.dueDate).isSame(dayjs(), "week"));
        break;
      case 3: // 완료됨
        filtered = filtered.filter((todo) => todo.completed);
        break;
      default: // 전체
        break;
    }

    // 검색 쿼리 필터링
    if (searchQuery) {
      filtered = filtered.filter(
        (todo) =>
          todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // 상태 필터링
    if (filter.status && filter.status !== "all") {
      filtered = filtered.filter((todo) => (filter.status === "completed" ? todo.completed : !todo.completed));
    }

    // 우선순위 필터링
    if (filter.priority && filter.priority !== "all") {
      filtered = filtered.filter((todo) => todo.priority === filter.priority);
    }

    // 에픽 필터링
    if (filter.epicId && filter.epicId !== "all") {
      filtered = filtered.filter((todo) => todo.epicId === filter.epicId);
    }

    // 프로젝트 필터링
    if (filter.projectId && filter.projectId !== "all") {
      filtered = filtered.filter((todo) => todo.projectId === filter.projectId);
    }

    // 우선순위별 정렬 (긴급 > 높음 > 보통 > 낮음)
    const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
    return filtered.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1; // 완료되지 않은 것을 먼저
      }
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }, [todos, searchQuery, filter, activeTab]);

  // 통계 계산
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const today = todos.filter((t) => t.dueDate && dayjs(t.dueDate).isSame(dayjs(), "day")).length;
    const overdue = todos.filter((t) => t.dueDate && !t.completed && dayjs(t.dueDate).isBefore(dayjs(), "day")).length;

    return { total, completed, today, overdue };
  }, [todos]);

  const handleAddTodo = () => {
    if (!newTodoForm.title.trim()) return;

    const newTodo = {
      title: newTodoForm.title,
      description: newTodoForm.description || undefined,
      completed: false,
      priority: newTodoForm.priority,
      dueDate: newTodoForm.dueDate || undefined,
      tags: newTodoForm.tags
        ? newTodoForm.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : undefined,
      epicId: newTodoForm.epicId || undefined,
      projectId: newTodoForm.projectId || undefined,
    };

    onAddTodo(newTodo);

    // 폼 초기화
    setNewTodoForm({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
      tags: "",
      epicId: "",
      projectId: "",
    });
    setIsAddDialogOpen(false);
  };

  const resetFilters = () => {
    setFilter({
      status: "all",
      priority: "all",
      epicId: "all",
      projectId: "all",
    });
    setSearchQuery("");
  };

  return (
    <Box>
      {/* 헤더 */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1">
          할일 관리 📝
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setIsAddDialogOpen(true)}>
          할일 추가
        </Button>
      </Box>

      {/* 통계 */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box display="flex" gap={4}>
          <Box textAlign="center">
            <Typography variant="h6">{stats.total}</Typography>
            <Typography variant="body2" color="text.secondary">
              전체
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6" color="success.main">
              {stats.completed}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              완료
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6" color="primary">
              {stats.today}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              오늘
            </Typography>
          </Box>
          {stats.overdue > 0 && (
            <Box textAlign="center">
              <Typography variant="h6" color="error">
                {stats.overdue}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                지연
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>

      {/* 탭 */}
      <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} sx={{ mb: 2 }}>
        <Tab
          label={
            <Badge badgeContent={stats.total} color="primary">
              전체
            </Badge>
          }
        />
        <Tab
          label={
            <Badge badgeContent={stats.today} color="primary">
              오늘
            </Badge>
          }
        />
        <Tab
          label={
            <Badge
              badgeContent={todos.filter((t) => t.dueDate && dayjs(t.dueDate).isSame(dayjs(), "week")).length}
              color="primary"
            >
              이번주
            </Badge>
          }
        />
        <Tab
          label={
            <Badge badgeContent={stats.completed} color="success">
              완료
            </Badge>
          }
        />
      </Tabs>

      {/* 검색 및 필터 */}
      <Box display="flex" gap={2} mb={3} flexWrap="wrap">
        <TextField
          placeholder="할일 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ minWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>상태</InputLabel>
          <Select
            value={filter.status ?? "all"}
            onChange={(e) => setFilter((prev) => ({ ...prev, status: e.target.value as any }))}
            label="상태"
          >
            <MenuItem value="all">전체</MenuItem>
            <MenuItem value="pending">진행중</MenuItem>
            <MenuItem value="completed">완료</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>우선순위</InputLabel>
          <Select
            value={filter.priority ?? "all"}
            onChange={(e) => setFilter((prev) => ({ ...prev, priority: e.target.value as any }))}
            label="우선순위"
          >
            <MenuItem value="all">전체</MenuItem>
            <MenuItem value="urgent">긴급</MenuItem>
            <MenuItem value="high">높음</MenuItem>
            <MenuItem value="medium">보통</MenuItem>
            <MenuItem value="low">낮음</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>에픽</InputLabel>
          <Select
            value={filter.epicId ?? "all"}
            onChange={(e) => setFilter((prev) => ({ ...prev, epicId: e.target.value }))}
            label="에픽"
          >
            <MenuItem value="all">전체</MenuItem>
            {epics.map((epic) => (
              <MenuItem key={epic.id} value={epic.id}>
                {epic.emoji} {epic.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button startIcon={<FilterIcon />} onClick={resetFilters} variant="outlined">
          필터 초기화
        </Button>
      </Box>

      {/* 할일 목록 */}
      <Box>
        {filteredTodos.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h6" color="text.secondary">
              {searchQuery || Object.values(filter).some((v) => v !== "all")
                ? "조건에 맞는 할일이 없습니다 🔍"
                : "아직 할일이 없습니다. 새로운 할일을 추가해보세요! ✨"}
            </Typography>
          </Paper>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={onUpdateTodo}
              onDelete={onDeleteTodo}
              onToggleComplete={onToggleComplete}
            />
          ))
        )}
      </Box>

      {/* 할일 추가 다이얼로그 */}
      <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>새 할일 추가 ✨</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="제목"
              value={newTodoForm.title}
              onChange={(e) => setNewTodoForm((prev) => ({ ...prev, title: e.target.value }))}
              fullWidth
              required
            />

            <TextField
              label="설명"
              value={newTodoForm.description}
              onChange={(e) => setNewTodoForm((prev) => ({ ...prev, description: e.target.value }))}
              fullWidth
              multiline
              rows={3}
            />

            <FormControl fullWidth>
              <InputLabel>우선순위</InputLabel>
              <Select
                value={newTodoForm.priority}
                onChange={(e) => setNewTodoForm((prev) => ({ ...prev, priority: e.target.value as Priority }))}
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
              value={newTodoForm.dueDate}
              onChange={(e) => setNewTodoForm((prev) => ({ ...prev, dueDate: e.target.value }))}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />

            <FormControl fullWidth>
              <InputLabel>에픽</InputLabel>
              <Select
                value={newTodoForm.epicId}
                onChange={(e) => setNewTodoForm((prev) => ({ ...prev, epicId: e.target.value }))}
                label="에픽"
              >
                <MenuItem value="">선택 안함</MenuItem>
                {epics.map((epic) => (
                  <MenuItem key={epic.id} value={epic.id}>
                    {epic.emoji} {epic.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>프로젝트</InputLabel>
              <Select
                value={newTodoForm.projectId}
                onChange={(e) => setNewTodoForm((prev) => ({ ...prev, projectId: e.target.value }))}
                label="프로젝트"
              >
                <MenuItem value="">선택 안함</MenuItem>
                {projects.map((project) => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="태그 (쉼표로 구분)"
              value={newTodoForm.tags}
              onChange={(e) => setNewTodoForm((prev) => ({ ...prev, tags: e.target.value }))}
              fullWidth
              placeholder="업무, 개인, 공부"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddDialogOpen(false)} startIcon={<CancelIcon />}>
            취소
          </Button>
          <Button
            onClick={handleAddTodo}
            variant="contained"
            startIcon={<SaveIcon />}
            disabled={!newTodoForm.title.trim()}
          >
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
