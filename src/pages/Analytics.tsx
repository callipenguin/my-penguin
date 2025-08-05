import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  CircularProgress,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Alert,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import {
  Timeline,
  Schedule,
  CalendarMonth,
  Timer,
  Assignment,
  AccessTime,
  ExpandMore,
  Refresh,
  TrendingUp,
  PieChart,
  Assessment,
} from "@mui/icons-material";
import { ConditionEntry, ConditionLevel, WeeklyPomodoroStats, PomodoroSession, ThemeConfigExtended } from "../types";
import { loadUserData, getCurrentUser, loadPomodoroSessions, getWeeklyPomodoroStats } from "../utils/firebase";
import dayjs from "dayjs";

interface AnalyticsProps {
  themeConfig?: ThemeConfigExtended;
}

interface DailyPomodoroDetail {
  date: string;
  sessions: PomodoroSession[];
  totalMinutes: number;
  projectBreakdown: { [projectId: string]: { title: string; minutes: number; sessions: number } };
}

interface ProjectTimeStats {
  projectId: string;
  projectTitle: string;
  totalMinutes: number;
  totalSessions: number;
  percentage: number;
  tasks: { [taskId: string]: { title: string; minutes: number; sessions: number } };
}

const Analytics: React.FC<AnalyticsProps> = ({ themeConfig }) => {
  const theme = useTheme();
  const [conditions, setConditions] = useState<ConditionEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [pomodoroStats, setPomodoroStats] = useState<WeeklyPomodoroStats | null>(null);
  const [pomodoroLoading, setPomodoroLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState<string>(dayjs().startOf("week").format("YYYY-MM-DD"));
  const [dailyDetails, setDailyDetails] = useState<DailyPomodoroDetail[]>([]);
  const [projectStats, setProjectStats] = useState<ProjectTimeStats[]>([]);
  const [allPomodoroSessions, setAllPomodoroSessions] = useState<PomodoroSession[]>([]);

  // 테마별 컨디션 레벨
  const getConditionLevels = () => {
    const baseConfig = {
      excellent: { label: "최고", score: 5, color: theme.palette.success.dark },
      good: { label: "좋음", score: 4, color: theme.palette.success.main },
      normal: { label: "보통", score: 3, color: theme.palette.warning.main },
      tired: { label: "피곤", score: 2, color: theme.palette.warning.dark },
      exhausted: { label: "매우 피곤", score: 1, color: theme.palette.error.main },
    };

    // 테마별 이모지
    const themeEmojis = {
      penguin: {
        excellent: "🐧",
        good: "🐟",
        normal: "❄️",
        tired: "🧊",
        exhausted: "🐻‍❄️",
      },
      "desert-fox": {
        excellent: "🦊",
        good: "🌵",
        normal: "☀️",
        tired: "🏜️",
        exhausted: "🔥",
      },
      sheep: {
        excellent: "🐑",
        good: "🌿",
        normal: "🌱",
        tired: "🍃",
        exhausted: "🌾",
      },
      cat: {
        excellent: "🐱",
        good: "🐟",
        normal: "🧶",
        tired: "🐾",
        exhausted: "😿",
      },
    };

    const currentTheme = themeConfig?.id || "penguin";
    const emojis = themeEmojis[currentTheme] || themeEmojis.penguin;

    return Object.keys(baseConfig).reduce((acc, key) => {
      acc[key as ConditionLevel] = {
        ...baseConfig[key as ConditionLevel],
        emoji: emojis[key as ConditionLevel],
      };
      return acc;
    }, {} as Record<ConditionLevel, { emoji: string; label: string; score: number; color: string }>);
  };

  const conditionLevels = getConditionLevels();

  useEffect(() => {
    loadConditions();
    loadPomodoroData();
    loadDetailedPomodoroData();
  }, [selectedWeek]);

  const loadConditions = async () => {
    try {
      setLoading(true);
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "conditions");
        if (result.success && result.data) {
          setConditions(result.data);
        }
      }
    } catch (error) {
      console.error("컨디션 데이터 로드 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadPomodoroData = async () => {
    try {
      setPomodoroLoading(true);
      const user = getCurrentUser();
      if (user) {
        const result = await getWeeklyPomodoroStats(user.uid, selectedWeek);
        if (result.success && result.data) {
          setPomodoroStats(result.data);
        }
      }
    } catch (error) {
      console.error("뽀모도로 통계 로드 실패:", error);
    } finally {
      setPomodoroLoading(false);
    }
  };

  const loadDetailedPomodoroData = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        // 주차의 시작일과 끝일 계산
        const weekStart = dayjs(selectedWeek);
        const weekEnd = weekStart.add(6, "day");

        const result = await loadPomodoroSessions(
          user.uid,
          weekStart.format("YYYY-MM-DD"),
          weekEnd.format("YYYY-MM-DD")
        );
        if (result.success && result.data) {
          const sessions = result.data as PomodoroSession[];
          setAllPomodoroSessions(sessions);

          // 선택된 주차의 세션들 필터링
          const weekStartFilter = weekStart;
          const weekEndFilter = weekEnd;

          const weekSessions = sessions.filter((session) => {
            const sessionDate = dayjs(session.startTime);
            return (
              sessionDate.isAfter(weekStartFilter.subtract(1, "day")) &&
              sessionDate.isBefore(weekEndFilter.add(1, "day")) &&
              session.completed &&
              session.sessionType === "work"
            );
          });

          // 일별 상세 데이터 생성
          const dailyData: DailyPomodoroDetail[] = [];
          for (let i = 0; i < 7; i++) {
            const date = weekStartFilter.add(i, "day");
            const dayStr = date.format("YYYY-MM-DD");
            const daySessions = weekSessions.filter(
              (session) => dayjs(session.startTime).format("YYYY-MM-DD") === dayStr
            );

            const projectBreakdown: { [projectId: string]: { title: string; minutes: number; sessions: number } } = {};
            let totalMinutes = 0;

            daySessions.forEach((session) => {
              totalMinutes += session.duration;

              if (!projectBreakdown[session.projectId]) {
                projectBreakdown[session.projectId] = {
                  title: session.projectTitle,
                  minutes: 0,
                  sessions: 0,
                };
              }

              projectBreakdown[session.projectId].minutes += session.duration;
              projectBreakdown[session.projectId].sessions += 1;
            });

            dailyData.push({
              date: dayStr,
              sessions: daySessions,
              totalMinutes,
              projectBreakdown,
            });
          }

          setDailyDetails(dailyData);

          // 프로젝트별 통계 생성
          const projectMap: { [projectId: string]: ProjectTimeStats } = {};
          const totalWeekMinutes = weekSessions.reduce((sum, session) => sum + session.duration, 0);

          weekSessions.forEach((session) => {
            if (!projectMap[session.projectId]) {
              projectMap[session.projectId] = {
                projectId: session.projectId,
                projectTitle: session.projectTitle,
                totalMinutes: 0,
                totalSessions: 0,
                percentage: 0,
                tasks: {},
              };
            }

            const project = projectMap[session.projectId];
            project.totalMinutes += session.duration;
            project.totalSessions += 1;

            if (!project.tasks[session.taskId]) {
              project.tasks[session.taskId] = {
                title: session.taskTitle,
                minutes: 0,
                sessions: 0,
              };
            }

            project.tasks[session.taskId].minutes += session.duration;
            project.tasks[session.taskId].sessions += 1;
          });

          // 비율 계산 및 정렬
          const projectStatsArray = Object.values(projectMap)
            .map((project) => ({
              ...project,
              percentage: totalWeekMinutes > 0 ? (project.totalMinutes / totalWeekMinutes) * 100 : 0,
            }))
            .sort((a, b) => b.totalMinutes - a.totalMinutes);

          setProjectStats(projectStatsArray);
        }
      }
    } catch (error) {
      console.error("상세 뽀모도로 데이터 로드 실패:", error);
    }
  };

  // 컨디션 분석
  const getWeeklyConditionStats = () => {
    if (!conditions.length) return { weeklyStats: {}, totalEntries: 0, averageScore: 0 };

    const weekStart = dayjs(selectedWeek);
    const weekEnd = weekStart.add(6, "day");

    const weekConditions = conditions.filter((condition) => {
      const conditionDate = dayjs(condition.date);
      return conditionDate.isAfter(weekStart.subtract(1, "day")) && conditionDate.isBefore(weekEnd.add(1, "day"));
    });

    const weeklyStats: { [day: number]: { count: number; total: number; average: number } } = {};
    let totalScore = 0;
    let totalEntries = weekConditions.length;

    for (let i = 0; i < 7; i++) {
      weeklyStats[i] = { count: 0, total: 0, average: 0 };
    }

    weekConditions.forEach((condition) => {
      const day = dayjs(condition.date).day();
      const score = conditionLevels[condition.condition].score;
      weeklyStats[day].count++;
      weeklyStats[day].total += score;
      totalScore += score;
    });

    Object.keys(weeklyStats).forEach((day) => {
      const dayNum = parseInt(day);
      if (weeklyStats[dayNum].count > 0) {
        weeklyStats[dayNum].average = weeklyStats[dayNum].total / weeklyStats[dayNum].count;
      }
    });

    const averageScore = totalEntries > 0 ? totalScore / totalEntries : 0;

    return { weeklyStats, totalEntries, averageScore };
  };

  const { weeklyStats, totalEntries, averageScore } = getWeeklyConditionStats();
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}시간 ${mins}분`;
    }
    return `${mins}분`;
  };

  const getThemeBasedTitle = () => {
    const environment = themeConfig?.concepts?.environment || "빙하";
    const animal = themeConfig?.concepts?.animal || "펭귄";
    return `📊 ${environment} 분석`;
  };

  const getThemeBasedDescription = () => {
    const animal = themeConfig?.concepts?.animal || "펭귄";
    return `${animal}의 생활 패턴과 뽀모도로 집중 세션을 분석해서 최적의 시간을 찾아드려요`;
  };

  const bestDay = Object.entries(weeklyStats)
    .filter(([_, data]) => data.count > 0)
    .sort((a, b) => b[1].average - a[1].average)[0];

  return (
    <Box sx={{ p: 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {getThemeBasedTitle()}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {getThemeBasedDescription()}
        </Typography>
      </Box>

      {/* 🍅 뽀모도로 통계 섹션 */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(45deg, #ff6b6b 30%, #feca57 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🍅 뽀모도로 분석
          </Typography>
          <Chip
            label={`${selectedWeek.split("-")[1]}월 ${selectedWeek.split("-")[2]}일 주차`}
            variant="outlined"
            size="small"
          />
          <Button
            size="small"
            startIcon={<Refresh />}
            onClick={() => {
              loadPomodoroData();
              loadDetailedPomodoroData();
            }}
          >
            새로고침
          </Button>
        </Box>

        {pomodoroLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {/* 주간 요약 */}
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Timer color="primary" /> 주간 총 집중시간
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    {formatTime(projectStats.reduce((sum, project) => sum + project.totalMinutes, 0))}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    총 {projectStats.reduce((sum, project) => sum + project.totalSessions, 0)}회 세션
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Assignment color="primary" /> 활동한 프로젝트
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    {projectStats.length}개
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    이번 주 작업 프로젝트
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <TrendingUp color="primary" /> 일평균 집중시간
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    {formatTime(Math.round(projectStats.reduce((sum, project) => sum + project.totalMinutes, 0) / 7))}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    하루 평균 집중시간
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTime color="primary" /> 가장 활발한 날
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    {dailyDetails.length > 0
                      ? dayNames[dayjs(dailyDetails.sort((a, b) => b.totalMinutes - a.totalMinutes)[0]?.date).day()] +
                        "요일"
                      : "-"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dailyDetails.length > 0
                      ? formatTime(Math.max(...dailyDetails.map((d) => d.totalMinutes)))
                      : "데이터 없음"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* 프로젝트별 시간 투자 비율 */}
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PieChart color="primary" /> 프로젝트별 시간 투자 비율
                  </Typography>
                  {projectStats.length > 0 ? (
                    <Box>
                      {projectStats.map((project, index) => (
                        <Box key={project.projectId} sx={{ mb: 2 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="body2" fontWeight="medium">
                              {project.projectTitle}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <Chip label={`${project.percentage.toFixed(1)}%`} size="small" variant="outlined" />
                              <Typography variant="body2" color="text.secondary">
                                {formatTime(project.totalMinutes)}
                              </Typography>
                            </Box>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={project.percentage}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: theme.palette.grey[200],
                              "& .MuiLinearProgress-bar": {
                                borderRadius: 4,
                                backgroundColor: theme.palette.primary.main,
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Alert severity="info">
                      이번 주에는 뽀모도로 세션이 없어요. 집중 시간을 기록해보세요! {themeConfig?.emoji}
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* 일별 활동 요약 */}
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarMonth color="primary" /> 일별 활동 요약
                  </Typography>
                  <List dense>
                    {dailyDetails.map((day, index) => (
                      <ListItem key={day.date} sx={{ px: 0 }}>
                        <ListItemText
                          primary={
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <Typography variant="body2">
                                {dayNames[dayjs(day.date).day()]}요일 ({dayjs(day.date).format("M/D")})
                              </Typography>
                              <Chip
                                label={day.totalMinutes > 0 ? formatTime(day.totalMinutes) : "휴식"}
                                size="small"
                                color={day.totalMinutes > 0 ? "primary" : "default"}
                                variant={day.totalMinutes > 0 ? "filled" : "outlined"}
                              />
                            </Box>
                          }
                          secondary={
                            day.sessions.length > 0
                              ? `${day.sessions.length}회 세션 • ${Object.keys(day.projectBreakdown).length}개 프로젝트`
                              : "활동 없음"
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* 상세 일별 분석 (아코디언) */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Assessment color="primary" /> 📅 상세 일별 활동 분석
                  </Typography>
                  {dailyDetails.some((day) => day.sessions.length > 0) ? (
                    dailyDetails
                      .filter((day) => day.sessions.length > 0)
                      .map((day) => (
                        <Accordion key={day.date} sx={{ mt: 1 }}>
                          <AccordionSummary expandIcon={<ExpandMore />}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                pr: 2,
                              }}
                            >
                              <Typography variant="body1" fontWeight="medium">
                                {dayNames[dayjs(day.date).day()]}요일 ({dayjs(day.date).format("YYYY년 M월 D일")})
                              </Typography>
                              <Box sx={{ display: "flex", gap: 1 }}>
                                <Chip label={`${formatTime(day.totalMinutes)}`} size="small" color="primary" />
                                <Chip label={`${day.sessions.length}회 세션`} size="small" variant="outlined" />
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box>
                              {/* 프로젝트별 활동 */}
                              <Typography variant="subtitle2" gutterBottom sx={{ mt: 1 }}>
                                프로젝트별 활동:
                              </Typography>
                              {Object.entries(day.projectBreakdown).map(([projectId, project]) => (
                                <Box
                                  key={projectId}
                                  sx={{ mb: 2, pl: 2, borderLeft: `3px solid ${theme.palette.primary.main}` }}
                                >
                                  <Typography variant="body2" fontWeight="medium">
                                    📁 {project.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {formatTime(project.minutes)} • {project.sessions}회 세션
                                  </Typography>
                                </Box>
                              ))}

                              {/* 세션 상세 내역 */}
                              <Divider sx={{ my: 2 }} />
                              <Typography variant="subtitle2" gutterBottom>
                                세션 상세 내역:
                              </Typography>
                              <TableContainer component={Paper} variant="outlined">
                                <Table size="small">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>시간</TableCell>
                                      <TableCell>프로젝트</TableCell>
                                      <TableCell>작업</TableCell>
                                      <TableCell align="right">집중시간</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {day.sessions
                                      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
                                      .map((session, idx) => (
                                        <TableRow key={idx}>
                                          <TableCell>{dayjs(session.startTime).format("HH:mm")}</TableCell>
                                          <TableCell>{session.projectTitle}</TableCell>
                                          <TableCell>{session.taskTitle}</TableCell>
                                          <TableCell align="right">{session.duration}분</TableCell>
                                        </TableRow>
                                      ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                      ))
                  ) : (
                    <Alert severity="info" sx={{ mt: 2 }}>
                      이번 주에는 뽀모도로 활동이 없어요. {themeConfig?.emoji} 타이머에서 집중 세션을 시작해보세요!
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>

      {/* 컨디션 분석 */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Timeline /> 주간 컨디션 평균
              </Typography>
              {loading ? (
                <CircularProgress size={24} />
              ) : totalEntries > 0 ? (
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <CircularProgress
                      variant="determinate"
                      value={(averageScore / 5) * 100}
                      size={60}
                      sx={{
                        color:
                          averageScore >= 4
                            ? theme.palette.success.main
                            : averageScore >= 3
                            ? theme.palette.warning.main
                            : theme.palette.error.main,
                      }}
                    />
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {averageScore.toFixed(1)}점
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {totalEntries}회 기록
                      </Typography>
                    </Box>
                  </Box>
                  {bestDay && (
                    <Alert severity="success" icon={conditionLevels.excellent.emoji}>
                      <Typography variant="body2">
                        <strong>{dayNames[parseInt(bestDay[0])]}요일</strong>이 가장 좋았어요! (
                        {bestDay[1].average.toFixed(1)}점)
                      </Typography>
                    </Alert>
                  )}
                </Box>
              ) : (
                <Alert severity="info">
                  이번 주 컨디션 기록이 없어요. {themeConfig?.emoji} 건강 탭에서 컨디션을 기록해보세요!
                </Alert>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* 요일별 순위 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CalendarMonth /> 요일별 컨디션 순위
              </Typography>
              <List dense>
                {Object.entries(weeklyStats)
                  .filter(([_, data]) => data.count > 0)
                  .sort((a, b) => b[1].average - a[1].average)
                  .map(([day, data], index) => (
                    <ListItem key={day} sx={{ px: 0 }}>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography variant="body2">
                              #{index + 1} {dayNames[parseInt(day)]}요일
                            </Typography>
                            <Chip
                              label={`${data.average.toFixed(1)}점`}
                              size="small"
                              color={data.average >= 4 ? "success" : data.average >= 3 ? "warning" : "error"}
                            />
                          </Box>
                        }
                        secondary={`${data.count}회 기록`}
                      />
                    </ListItem>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
