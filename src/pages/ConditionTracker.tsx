import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  ButtonGroup,
  TextField,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  Tooltip,
} from "@mui/material";
import { TrendingUp, Analytics, CalendarMonth } from "@mui/icons-material";
import { ConditionLevel, ConditionEntry, ThemeConfigExtended } from "../types";
import dayjs from "dayjs";
import { loadUserData, saveUserData, getCurrentUser } from "../utils/firebase";

interface ConditionTrackerProps {
  themeConfig?: ThemeConfigExtended;
}

const ConditionTracker: React.FC<ConditionTrackerProps> = ({ themeConfig }) => {
  const theme = useTheme();
  const [selectedWeek, setSelectedWeek] = useState(dayjs().startOf("week"));
  const [conditions, setConditions] = useState<ConditionEntry[]>([]);
  const [selectedCell, setSelectedCell] = useState<{ date: string; hour: number } | null>(null);
  const [memoDialogOpen, setMemoDialogOpen] = useState(false);
  const [currentMemo, setCurrentMemo] = useState("");

  // 테마별 컨디션 이모지
  const getConditionEmojis = () => {
    switch (themeConfig?.id) {
      case "desert-fox":
        return {
          excellent: "🦊",
          good: "🌵",
          normal: "☀️",
          tired: "🏜️",
          exhausted: "🔥",
        };
      case "sheep":
        return {
          excellent: "🐑",
          good: "🌿",
          normal: "🌱",
          tired: "🍃",
          exhausted: "🌾",
        };
      case "cat":
        return {
          excellent: "🐱",
          good: "🐟",
          normal: "🧶",
          tired: "🐾",
          exhausted: "😿",
        };
      default: // penguin
        return {
          excellent: "🐧",
          good: "🐟",
          normal: "❄️",
          tired: "🧊",
          exhausted: "🐻‍❄️",
        };
    }
  };

  const conditionEmojis = getConditionEmojis();

  const conditionLevels: { level: ConditionLevel; emoji: string; color: string; label: string }[] = [
    { level: "excellent", emoji: conditionEmojis.excellent, color: "#4caf50", label: "최고" },
    { level: "good", emoji: conditionEmojis.good, color: "#8bc34a", label: "좋음" },
    { level: "normal", emoji: conditionEmojis.normal, color: "#ffc107", label: "보통" },
    { level: "tired", emoji: conditionEmojis.tired, color: "#ff9800", label: "피곤" },
    { level: "exhausted", emoji: conditionEmojis.exhausted, color: "#f44336", label: "매우 피곤" },
  ];

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const weekDays = Array.from({ length: 7 }, (_, i) => selectedWeek.add(i, "day"));

  // 요일별 배경색 정의
  const getDayBackgroundColor = (dayIndex: number) => {
    const colors = [
      theme.palette.error.main + "08", // 일요일 - 빨강
      theme.palette.info.main + "08", // 월요일 - 파랑
      theme.palette.success.main + "08", // 화요일 - 초록
      theme.palette.warning.main + "08", // 수요일 - 노랑
      theme.palette.secondary.main + "08", // 목요일 - 보라
      theme.palette.primary.main + "08", // 금요일 - 주색상
      theme.palette.grey[500] + "08", // 토요일 - 회색
    ];
    return colors[dayIndex] || theme.palette.grey[100];
  };

  const getDayHeaderColor = (dayIndex: number) => {
    const colors = [
      theme.palette.error.main, // 일요일
      theme.palette.info.main, // 월요일
      theme.palette.success.main, // 화요일
      theme.palette.warning.main, // 수요일
      theme.palette.secondary.main, // 목요일
      theme.palette.primary.main, // 금요일
      theme.palette.grey[600], // 토요일
    ];
    return colors[dayIndex] || theme.palette.text.primary;
  };

  // 컨디션 데이터 로드
  useEffect(() => {
    loadConditions();
  }, [selectedWeek]);

  const loadConditions = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "conditions");
        if (result.success && result.data) {
          setConditions(result.data);
        } else {
          setConditions([]);
        }
      } else {
        // 로그인되지 않은 경우 fallback
        const savedData = localStorage.getItem("conditions");
        if (savedData) {
          setConditions(JSON.parse(savedData));
        } else {
          setConditions([]);
        }
      }
    } catch (error) {
      console.error("컨디션 데이터 로드 실패:", error);
      setConditions([]);
    }
  };

  const saveConditions = async (newConditions: ConditionEntry[]) => {
    try {
      const user = getCurrentUser();
      if (user) {
        await saveUserData(user.uid, "conditions", newConditions);
      } else {
        // 로그인되지 않은 경우 fallback
        localStorage.setItem("conditions", JSON.stringify(newConditions));
      }
    } catch (error) {
      console.error("컨디션 데이터 저장 실패:", error);
    }
  };

  const getConditionForCell = (date: string, hour: number): ConditionEntry | undefined => {
    return conditions.find((c) => c.date === date && c.hour === hour);
  };

  const handleCellClick = (date: string, hour: number, condition?: ConditionEntry) => {
    setSelectedCell({ date, hour });
    setCurrentMemo(condition?.memo ?? "");
    setMemoDialogOpen(true);
  };

  const handleConditionSelect = async (level: ConditionLevel) => {
    if (!selectedCell) return;

    const existingCondition = getConditionForCell(selectedCell.date, selectedCell.hour);
    let newConditions: ConditionEntry[];

    if (existingCondition) {
      // 기존 컨디션 업데이트
      newConditions = conditions.map((c) =>
        c.id === existingCondition.id
          ? { ...c, condition: level, memo: currentMemo, updatedAt: new Date().toISOString() }
          : c
      );
    } else {
      // 새 컨디션 추가
      const newCondition: ConditionEntry = {
        id: Date.now().toString(),
        date: selectedCell.date,
        hour: selectedCell.hour,
        condition: level,
        memo: currentMemo,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      newConditions = [...conditions, newCondition];
    }

    setConditions(newConditions);
    await saveConditions(newConditions);
    setMemoDialogOpen(false);
    setSelectedCell(null);
    setCurrentMemo("");
  };

  const handleSaveMemo = async () => {
    if (!selectedCell) return;

    const existingCondition = getConditionForCell(selectedCell.date, selectedCell.hour);
    if (existingCondition) {
      const newConditions = conditions.map((c) =>
        c.id === existingCondition.id ? { ...c, memo: currentMemo, updatedAt: new Date().toISOString() } : c
      );
      setConditions(newConditions);
      await saveConditions(newConditions);
    }

    setMemoDialogOpen(false);
    setSelectedCell(null);
    setCurrentMemo("");
  };

  const getConditionInfo = (level: ConditionLevel) => {
    return conditionLevels.find((c) => c.level === level);
  };

  const getCellBackground = (condition?: ConditionEntry, dayIndex?: number) => {
    const dayBg = dayIndex !== undefined ? getDayBackgroundColor(dayIndex) : "transparent";

    if (!condition) return dayBg;

    const info = getConditionInfo(condition.condition);
    if (!info) return dayBg;

    // 컨디션 색상과 요일 배경색을 조합
    return `linear-gradient(135deg, ${info.color}30, ${dayBg})`;
  };

  const getCellBorder = (condition?: ConditionEntry) => {
    if (!condition) return `1px solid ${theme.palette.divider}`;
    const info = getConditionInfo(condition.condition);
    return info ? `2px solid ${info.color}` : `1px solid ${theme.palette.divider}`;
  };

  const getWeekStats = () => {
    const weekStart = selectedWeek.format("YYYY-MM-DD");
    const weekEnd = selectedWeek.add(6, "day").format("YYYY-MM-DD");

    const weekConditions = conditions.filter((c) => c.date >= weekStart && c.date <= weekEnd);

    const conditionCounts = conditionLevels.reduce((acc, level) => {
      acc[level.level] = weekConditions.filter((c) => c.condition === level.level).length;
      return acc;
    }, {} as Record<ConditionLevel, number>);

    return { weekConditions, conditionCounts };
  };

  const { weekConditions, conditionCounts } = getWeekStats();

  return (
    <Box sx={{ p: 3 }}>
      {/* 헤더 */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {themeConfig?.emoji || "🐟"} 컨디션 {themeConfig?.concepts?.environment?.split(" ")[0] || "추적"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {themeConfig?.concepts?.animal || "동물"}처럼 시간별 컨디션을 기록하고 패턴을 분석해보세요
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button startIcon={<CalendarMonth />} onClick={() => setSelectedWeek(selectedWeek.subtract(1, "week"))}>
            이전 주
          </Button>
          <Button variant="contained" onClick={() => setSelectedWeek(dayjs().startOf("week"))}>
            이번 주
          </Button>
          <Button startIcon={<CalendarMonth />} onClick={() => setSelectedWeek(selectedWeek.add(1, "week"))}>
            다음 주
          </Button>
        </Box>
      </Box>

      {/* 주간 통계 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                📊 이번 주 통계 ({selectedWeek.format("MM/DD")} - {selectedWeek.add(6, "day").format("MM/DD")})
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {conditionLevels.map((level) => (
                  <Chip
                    key={level.level}
                    label={`${level.emoji} ${level.label}: ${conditionCounts[level.level]}회`}
                    sx={{
                      bgcolor: level.color + "20",
                      color: level.color,
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                총 {weekConditions.length}개의 컨디션이 기록되었습니다
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <TrendingUp sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                주간 평균
              </Typography>
              <Typography variant="h4" color="primary">
                3.2/5
              </Typography>
              <Button size="small" startIcon={<Analytics />} sx={{ mt: 1 }}>
                분석 보기
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 컨디션 그리드 */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🗓️ 시간별 컨디션 그리드
          </Typography>

          {/* 범례 */}
          <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
            {conditionLevels.map((level) => (
              <Box key={level.level} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    backgroundColor: level.color + "30",
                    border: `2px solid ${level.color}`,
                    borderRadius: 1,
                  }}
                />
                <Typography variant="caption">
                  {level.emoji} {level.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 그리드 */}
          <Box sx={{ overflowX: "auto", position: "relative", maxHeight: "70vh", overflowY: "auto" }}>
            <Box sx={{ minWidth: 800 }}>
              {/* Sticky 헤더 - 요일 */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "80px repeat(7, 1fr)",
                  gap: 1,
                  mb: 1,
                  position: "sticky",
                  top: 0,
                  backgroundColor: theme.palette.background.paper,
                  zIndex: 10,
                  borderBottom: `2px solid ${theme.palette.divider}`,
                  pb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    backgroundColor: theme.palette.grey[100],
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    시간
                  </Typography>
                </Box>
                {weekDays.map((day, index) => (
                  <Box
                    key={day.format("YYYY-MM-DD")}
                    sx={{
                      textAlign: "center",
                      p: 1.5,
                      backgroundColor: getDayBackgroundColor(index),
                      borderRadius: 2,
                      border: `2px solid ${getDayHeaderColor(index)}30`,
                      boxShadow: 1,
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold" sx={{ color: getDayHeaderColor(index) }}>
                      {day.format("ddd")}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: getDayHeaderColor(index),
                        opacity: 0.8,
                        display: "block",
                        mt: 0.5,
                      }}
                    >
                      {day.format("MM/DD")}
                    </Typography>
                    {/* 오늘 표시 */}
                    {day.isSame(dayjs(), "day") && (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          backgroundColor: getDayHeaderColor(index),
                          borderRadius: "50%",
                          mx: "auto",
                          mt: 0.5,
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>

              {/* 시간별 행 */}
              {hours.map((hour) => (
                <Box
                  key={hour}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "80px repeat(7, 1fr)",
                    gap: 1,
                    mb: 1,
                    "&:hover": {
                      "& > div": {
                        transform: "scale(1.01)",
                        transition: "transform 0.1s ease",
                      },
                    },
                  }}
                >
                  {/* Sticky 시간 라벨 */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1,
                      backgroundColor: theme.palette.grey[50],
                      borderRadius: 1,
                      border: `1px solid ${theme.palette.divider}`,
                      position: "sticky",
                      left: 0,
                      zIndex: 5,
                      minHeight: 50,
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      {hour.toString().padStart(2, "0")}:00
                    </Typography>
                  </Box>

                  {/* 각 요일별 셀 */}
                  {weekDays.map((day, dayIndex) => {
                    const dateStr = day.format("YYYY-MM-DD");
                    const condition = getConditionForCell(dateStr, hour);
                    const conditionInfo = condition ? getConditionInfo(condition.condition) : null;
                    const isToday = day.isSame(dayjs(), "day");
                    const isCurrentHour = isToday && hour === dayjs().hour();

                    return (
                      <Tooltip
                        key={`${dateStr}-${hour}`}
                        title={
                          condition
                            ? `${day.format("ddd")} ${hour}시 - ${conditionInfo?.emoji} ${conditionInfo?.label}${
                                condition.memo ? ` - ${condition.memo}` : ""
                              }`
                            : `${day.format("ddd")} ${hour}시 - 컨디션 기록하기`
                        }
                        arrow
                      >
                        <Box
                          onClick={() => handleCellClick(dateStr, hour, condition)}
                          sx={{
                            minHeight: 50,
                            backgroundColor: getCellBackground(condition, dayIndex),
                            border: condition
                              ? `3px solid ${getConditionInfo(condition.condition)?.color || theme.palette.divider}`
                              : `2px solid ${getDayHeaderColor(dayIndex)}20`,
                            borderRadius: 2,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                              boxShadow: 2,
                              borderColor: condition
                                ? getConditionInfo(condition.condition)?.color
                                : getDayHeaderColor(dayIndex),
                            },
                            // 현재 시간 강조
                            ...(isCurrentHour && {
                              boxShadow: `0 0 0 3px ${theme.palette.primary.main}40`,
                              borderColor: theme.palette.primary.main,
                            }),
                          }}
                        >
                          {condition && conditionInfo && (
                            <Typography sx={{ fontSize: "1.5rem" }}>{conditionInfo.emoji}</Typography>
                          )}

                          {/* 현재 시간 표시 */}
                          {isCurrentHour && (
                            <Box
                              sx={{
                                position: "absolute",
                                top: 2,
                                right: 2,
                                width: 8,
                                height: 8,
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: "50%",
                                animation: "pulse 2s infinite",
                              }}
                            />
                          )}

                          {/* 메모 표시 */}
                          {condition?.memo && (
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 2,
                                left: 2,
                                width: 6,
                                height: 6,
                                backgroundColor: theme.palette.info.main,
                                borderRadius: "50%",
                              }}
                            />
                          )}
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* 컨디션 입력 다이얼로그 */}
      <Dialog open={memoDialogOpen} onClose={() => setMemoDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedCell &&
            `컨디션 기록 - ${dayjs(selectedCell.date).format("MM/DD")} ${selectedCell.hour
              .toString()
              .padStart(2, "0")}:00`}
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            컨디션을 선택하세요:
          </Typography>
          <ButtonGroup variant="outlined" sx={{ mb: 3, flexWrap: "wrap" }}>
            {conditionLevels.map((level) => (
              <Button
                key={level.level}
                onClick={() => handleConditionSelect(level.level)}
                sx={{
                  bgcolor: level.color + "20",
                  borderColor: level.color,
                  color: level.color,
                  "&:hover": {
                    bgcolor: level.color + "30",
                    borderColor: level.color,
                  },
                }}
              >
                {level.emoji} {level.label}
              </Button>
            ))}
          </ButtonGroup>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="메모 (선택사항)"
            placeholder="컨디션에 대한 상세한 기록을 남겨보세요..."
            value={currentMemo}
            onChange={(e) => setCurrentMemo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setMemoDialogOpen(false)}>취소</Button>
          <Button onClick={handleSaveMemo} variant="contained">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ConditionTracker;
