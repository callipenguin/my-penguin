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
  Divider,
} from "@mui/material";
import {
  Timeline,
  TrendingUp,
  Schedule,
  CalendarMonth,
  Psychology,
  EmojiEmotions,
  Lightbulb,
} from "@mui/icons-material";
import { ConditionEntry, ConditionLevel } from "../types";
import dayjs from "dayjs";
import { loadUserData, getCurrentUser } from "../utils/firebase";

const Analytics: React.FC = () => {
  const theme = useTheme();
  const [conditions, setConditions] = useState<ConditionEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const conditionLevels: Record<ConditionLevel, { emoji: string; label: string; score: number; color: string }> = {
    excellent: { emoji: "🐧", label: "최고", score: 5, color: theme.palette.success.dark },
    good: { emoji: "🐟", label: "좋음", score: 4, color: theme.palette.success.main },
    normal: { emoji: "❄️", label: "보통", score: 3, color: theme.palette.warning.main },
    tired: { emoji: "🧊", label: "피곤", score: 2, color: theme.palette.warning.dark },
    exhausted: { emoji: "🐻‍❄️", label: "매우 피곤", score: 1, color: theme.palette.error.main },
  };

  useEffect(() => {
    loadConditions();
  }, []);

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
    } finally {
      setLoading(false);
    }
  };

  const getScoreForCondition = (level: ConditionLevel): number => {
    return conditionLevels[level].score;
  };

  const getConditionInfo = (level: ConditionLevel) => {
    return conditionLevels[level];
  };

  const getHourlyStats = () => {
    const hourlyData: Record<number, { total: number; count: number; average: number }> = {};

    // 0-23시간 초기화
    for (let i = 0; i < 24; i++) {
      hourlyData[i] = { total: 0, count: 0, average: 0 };
    }

    conditions.forEach((condition) => {
      const hour = dayjs(condition.date).hour();
      const score = getScoreForCondition(condition.condition);
      hourlyData[hour].total += score;
      hourlyData[hour].count += 1;
    });

    // 평균 계산
    Object.keys(hourlyData).forEach((hour) => {
      const h = parseInt(hour);
      if (hourlyData[h].count > 0) {
        hourlyData[h].average = hourlyData[h].total / hourlyData[h].count;
      }
    });

    return hourlyData;
  };

  const getWeeklyStats = () => {
    const weeklyData: Record<number, { total: number; count: number; average: number }> = {};

    // 0-6 (일-토) 초기화
    for (let i = 0; i < 7; i++) {
      weeklyData[i] = { total: 0, count: 0, average: 0 };
    }

    conditions.forEach((condition) => {
      const dayOfWeek = dayjs(condition.date).day();
      const score = getScoreForCondition(condition.condition);
      weeklyData[dayOfWeek].total += score;
      weeklyData[dayOfWeek].count += 1;
    });

    // 평균 계산
    Object.keys(weeklyData).forEach((day) => {
      const d = parseInt(day);
      if (weeklyData[d].count > 0) {
        weeklyData[d].average = weeklyData[d].total / weeklyData[d].count;
      }
    });

    return weeklyData;
  };

  const getCurrentTimeRecommendation = () => {
    const now = dayjs();
    const currentHour = now.hour();
    const currentDay = now.day();
    const hourlyStats = getHourlyStats();
    const weeklyStats = getWeeklyStats();

    const hourAvg = hourlyStats[currentHour]?.average || 0;
    const dayAvg = weeklyStats[currentDay]?.average || 0;
    const overallAvg = (hourAvg + dayAvg) / 2;

    let recommendation = "";
    let color = theme.palette.text.secondary;
    let emoji = "🤔";

    if (overallAvg >= 4) {
      recommendation = "지금은 펭귄이 가장 활발한 시간이에요! 중요한 물고기를 잡으세요 🐟";
      color = theme.palette.success.main;
      emoji = "🐧";
    } else if (overallAvg >= 3.5) {
      recommendation = "좋은 컨디션이에요! 빙하 위에서 집중해보세요 🏔️";
      color = theme.palette.success.main;
      emoji = "🐟";
    } else if (overallAvg >= 2.5) {
      recommendation = "보통 컨디션이에요. 눈송이처럼 가벼운 일을 추천해요 ❄️";
      color = theme.palette.warning.main;
      emoji = "❄️";
    } else if (overallAvg >= 1.5) {
      recommendation = "좀 피곤한 시간이에요. 빙하에서 휴식을 취하세요 🧊";
      color = theme.palette.warning.dark;
      emoji = "🧊";
    } else {
      recommendation = "북극곰처럼 깊은 잠에 들 시간이에요. 충분한 휴식을 취하세요 💤";
      color = theme.palette.error.main;
      emoji = "🐻‍❄️";
    }

    return { recommendation, color, emoji, score: overallAvg };
  };

  const getOverallStats = () => {
    if (conditions.length === 0) {
      return { average: 0, total: 0, distribution: {} };
    }

    const total = conditions.reduce((sum, condition) => sum + getScoreForCondition(condition.condition), 0);
    const average = total / conditions.length;

    const distribution: Record<ConditionLevel, number> = {
      excellent: 0,
      good: 0,
      normal: 0,
      tired: 0,
      exhausted: 0,
    };

    conditions.forEach((condition) => {
      distribution[condition.condition]++;
    });

    return { average, total: conditions.length, distribution };
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  const hourlyStats = getHourlyStats();
  const weeklyStats = getWeeklyStats();
  const currentRecommendation = getCurrentTimeRecommendation();
  const overallStats = getOverallStats();

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

  // 시간대별 최고/최저 찾기
  const bestHour = Object.entries(hourlyStats)
    .filter(([_, data]) => data.count > 0)
    .sort((a, b) => b[1].average - a[1].average)[0];

  const bestDay = Object.entries(weeklyStats)
    .filter(([_, data]) => data.count > 0)
    .sort((a, b) => b[1].average - a[1].average)[0];

  return (
    <Box sx={{ p: 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          ❄️ 컨디션 분석
        </Typography>
        <Typography variant="body1" color="textSecondary">
          펭귄의 생활 패턴을 분석해서 최적의 시간을 찾아드려요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* 현재 시간 추천 */}
        <Grid item xs={12}>
          <Card
            sx={{
              mb: 2,
              background: `linear-gradient(135deg, ${currentRecommendation.color}20, ${currentRecommendation.color}10)`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: currentRecommendation.color, width: 56, height: 56, fontSize: "1.5rem" }}>
                  {currentRecommendation.emoji}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    지금 이 시간 ({dayjs().format("HH:mm")}) 추천
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {currentRecommendation.recommendation}
                  </Typography>
                  <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
                    예상 컨디션 점수: {currentRecommendation.score.toFixed(1)}/5.0
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 전체 통계 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Timeline sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                전체 평균
              </Typography>
              <Typography variant="h3" color="primary" gutterBottom>
                {overallStats.average.toFixed(1)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                총 {overallStats.total}개 기록
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(overallStats.average / 5) * 100}
                sx={{ mt: 2, height: 8, borderRadius: 4 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* 최고의 시간 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Schedule sx={{ fontSize: 48, color: theme.palette.success.main, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                골든 타임
              </Typography>
              {bestHour ? (
                <>
                  <Typography variant="h4" color="success.main" gutterBottom>
                    {bestHour[0]}시
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    평균 {bestHour[1].average.toFixed(1)}점
                  </Typography>
                  <Chip label={`${bestHour[1].count}회 기록`} size="small" sx={{ mt: 1 }} />
                </>
              ) : (
                <Typography color="textSecondary">데이터 없음</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* 최고의 요일 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <CalendarMonth sx={{ fontSize: 48, color: theme.palette.info.main, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                최고의 요일
              </Typography>
              {bestDay ? (
                <>
                  <Typography variant="h4" color="info.main" gutterBottom>
                    {dayNames[parseInt(bestDay[0])]}요일
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    평균 {bestDay[1].average.toFixed(1)}점
                  </Typography>
                  <Chip label={`${bestDay[1].count}회 기록`} size="small" sx={{ mt: 1 }} />
                </>
              ) : (
                <Typography color="textSecondary">데이터 없음</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* 시간대별 순위 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Schedule /> 시간대별 컨디션 순위
              </Typography>
              <List dense>
                {Object.entries(hourlyStats)
                  .filter(([_, data]) => data.count > 0)
                  .sort((a, b) => b[1].average - a[1].average)
                  .slice(0, 8)
                  .map(([hour, data], index) => (
                    <ListItem key={hour} sx={{ px: 0 }}>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography variant="body2">
                              #{index + 1} {hour}시
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
