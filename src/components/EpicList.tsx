import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  InputAdornment,
  Grid,
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
import { Epic, EpicStatus, Priority, Project } from "../types";
import { EpicCard } from "./EpicCard";

interface EpicListProps {
  epics: Epic[];
  onAddEpic: (epic: Omit<Epic, "id" | "createdAt" | "updatedAt" | "projects" | "progress">) => void;
  onUpdateEpic: (epic: Epic) => void;
  onDeleteEpic: (id: string) => void;
  onAddProject: (epicId: string) => void;
}

const statusLabels = {
  planning: "계획중",
  active: "진행중",
  paused: "일시정지",
  completed: "완료",
  cancelled: "취소됨",
};

const priorityLabels = {
  urgent: "긴급",
  high: "높음",
  medium: "보통",
  low: "낮음",
};

export const EpicList: React.FC<EpicListProps> = ({ epics, onAddEpic, onUpdateEpic, onDeleteEpic, onAddProject }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<EpicStatus | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<Priority | "all">("all");
  const [activeTab, setActiveTab] = useState(0); // 0: 전체, 1: 진행중, 2: 완료됨
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newEpicForm, setNewEpicForm] = useState({
    title: "",
    description: "",
    status: "planning" as EpicStatus,
    priority: "medium" as Priority,
    startDate: "",
    dueDate: "",
    color: "#2196f3",
    emoji: "🏛️",
    tags: "",
  });

  // 필터링된 에픽 목록
  const filteredEpics = useMemo(() => {
    let filtered = epics;

    // 탭별 필터링
    switch (activeTab) {
      case 1: // 진행중
        filtered = filtered.filter((epic) => epic.status === "active");
        break;
      case 2: // 완료됨
        filtered = filtered.filter((epic) => epic.status === "completed");
        break;
      default: // 전체
        break;
    }

    // 검색 쿼리 필터링
    if (searchQuery) {
      filtered = filtered.filter(
        (epic) =>
          epic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          epic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          epic.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // 상태 필터링
    if (statusFilter !== "all") {
      filtered = filtered.filter((epic) => epic.status === statusFilter);
    }

    // 우선순위 필터링
    if (priorityFilter !== "all") {
      filtered = filtered.filter((epic) => epic.priority === priorityFilter);
    }

    // 우선순위별 정렬 (긴급 > 높음 > 보통 > 낮음)
    const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
    return filtered.sort((a, b) => {
      if (a.status === "completed" && b.status !== "completed") return 1;
      if (a.status !== "completed" && b.status === "completed") return -1;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }, [epics, searchQuery, statusFilter, priorityFilter, activeTab]);

  // 통계 계산
  const stats = useMemo(() => {
    const total = epics.length;
    const active = epics.filter((e) => e.status === "active").length;
    const completed = epics.filter((e) => e.status === "completed").length;
    const planning = epics.filter((e) => e.status === "planning").length;

    return { total, active, completed, planning };
  }, [epics]);

  const handleAddEpic = () => {
    if (!newEpicForm.title.trim()) return;

    const newEpic = {
      title: newEpicForm.title,
      description: newEpicForm.description,
      status: newEpicForm.status,
      priority: newEpicForm.priority,
      startDate: newEpicForm.startDate || undefined,
      dueDate: newEpicForm.dueDate || undefined,
      color: newEpicForm.color,
      emoji: newEpicForm.emoji || undefined,
      tags: newEpicForm.tags
        ? newEpicForm.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : undefined,
    };

    onAddEpic(newEpic);

    // 폼 초기화
    setNewEpicForm({
      title: "",
      description: "",
      status: "planning",
      priority: "medium",
      startDate: "",
      dueDate: "",
      color: "#2196f3",
      emoji: "🏛️",
      tags: "",
    });
    setIsAddDialogOpen(false);
  };

  const resetFilters = () => {
    setStatusFilter("all");
    setPriorityFilter("all");
    setSearchQuery("");
  };

  return (
    <Box>
      {/* 헤더 */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1">
          에픽 관리 🏛️
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setIsAddDialogOpen(true)}>
          에픽 추가
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
            <Typography variant="h6" color="primary">
              {stats.active}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              진행중
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
            <Typography variant="h6" color="warning.main">
              {stats.planning}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              계획중
            </Typography>
          </Box>
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
            <Badge badgeContent={stats.active} color="primary">
              진행중
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
          placeholder="에픽 검색..."
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
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as EpicStatus | "all")}
            label="상태"
          >
            <MenuItem value="all">전체</MenuItem>
            <MenuItem value="planning">계획중</MenuItem>
            <MenuItem value="active">진행중</MenuItem>
            <MenuItem value="paused">일시정지</MenuItem>
            <MenuItem value="completed">완료</MenuItem>
            <MenuItem value="cancelled">취소됨</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>우선순위</InputLabel>
          <Select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value as Priority | "all")}
            label="우선순위"
          >
            <MenuItem value="all">전체</MenuItem>
            <MenuItem value="urgent">긴급</MenuItem>
            <MenuItem value="high">높음</MenuItem>
            <MenuItem value="medium">보통</MenuItem>
            <MenuItem value="low">낮음</MenuItem>
          </Select>
        </FormControl>

        <Button startIcon={<FilterIcon />} onClick={resetFilters} variant="outlined">
          필터 초기화
        </Button>
      </Box>

      {/* 에픽 목록 */}
      <Box>
        {filteredEpics.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h6" color="text.secondary">
              {searchQuery || statusFilter !== "all" || priorityFilter !== "all"
                ? "조건에 맞는 에픽이 없습니다 🔍"
                : "아직 에픽이 없습니다. 새로운 에픽을 추가해보세요! 🏛️"}
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={2}>
            {filteredEpics.map((epic) => (
              <Grid item xs={12} key={epic.id}>
                <EpicCard epic={epic} onUpdate={onUpdateEpic} onDelete={onDeleteEpic} onAddProject={onAddProject} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* 에픽 추가 다이얼로그 */}
      <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>새 에픽 추가 🏛️</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <Box display="flex" gap={2}>
              <TextField
                label="제목"
                value={newEpicForm.title}
                onChange={(e) => setNewEpicForm((prev) => ({ ...prev, title: e.target.value }))}
                fullWidth
                required
              />

              <TextField
                label="이모지"
                value={newEpicForm.emoji}
                onChange={(e) => setNewEpicForm((prev) => ({ ...prev, emoji: e.target.value }))}
                sx={{ width: 100 }}
                placeholder="🏛️"
              />
            </Box>

            <TextField
              label="설명"
              value={newEpicForm.description}
              onChange={(e) => setNewEpicForm((prev) => ({ ...prev, description: e.target.value }))}
              fullWidth
              multiline
              rows={3}
              required
            />

            <Box display="flex" gap={2}>
              <FormControl fullWidth>
                <InputLabel>상태</InputLabel>
                <Select
                  value={newEpicForm.status}
                  onChange={(e) => setNewEpicForm((prev) => ({ ...prev, status: e.target.value as EpicStatus }))}
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
                  value={newEpicForm.priority}
                  onChange={(e) => setNewEpicForm((prev) => ({ ...prev, priority: e.target.value as Priority }))}
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
                value={newEpicForm.startDate}
                onChange={(e) => setNewEpicForm((prev) => ({ ...prev, startDate: e.target.value }))}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="마감일"
                type="date"
                value={newEpicForm.dueDate}
                onChange={(e) => setNewEpicForm((prev) => ({ ...prev, dueDate: e.target.value }))}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <TextField
              label="색상"
              type="color"
              value={newEpicForm.color}
              onChange={(e) => setNewEpicForm((prev) => ({ ...prev, color: e.target.value }))}
              fullWidth
            />

            <TextField
              label="태그 (쉼표로 구분)"
              value={newEpicForm.tags}
              onChange={(e) => setNewEpicForm((prev) => ({ ...prev, tags: e.target.value }))}
              fullWidth
              placeholder="업무, 개인, 프로젝트"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddDialogOpen(false)} startIcon={<CancelIcon />}>
            취소
          </Button>
          <Button
            onClick={handleAddEpic}
            variant="contained"
            startIcon={<SaveIcon />}
            disabled={!newEpicForm.title.trim() || !newEpicForm.description.trim()}
          >
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
