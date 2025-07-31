import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  CircularProgress,
  Avatar,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
} from "@mui/material";
import {
  Person,
  Psychology,
  TrendingUp,
  Schedule,
  Assignment,
  EmojiEmotions,
  Lightbulb,
  Star,
  Timeline,
  CalendarMonth,
} from "@mui/icons-material";
import { ConditionEntry, ConditionLevel, Project } from "../types";
import dayjs from "dayjs";
import { loadUserData, getCurrentUser } from "../utils/firebase";

const Profile: React.FC = () => {
  const theme = useTheme();
  const [conditions, setConditions] = useState<ConditionEntry[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await Promise.all([loadConditions(), loadProjects()]);
    setLoading(false);
  };

  const loadConditions = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "conditions");
        if (result.success && result.data) {
          setConditions(result.data);
        }
      } else {
        const savedData = localStorage.getItem("conditions");
        if (savedData) {
          setConditions(JSON.parse(savedData));
        }
      }
    } catch (error) {
      console.error("컨디션 데이터 로드 실패:", error);
    }
  };

  const loadProjects = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "projects");
        if (result.success && result.data) {
          setProjects(result.data);
        }
      } else {
        const savedData = localStorage.getItem("projects");
        if (savedData) {
          setProjects(JSON.parse(savedData));
        }
      }
    } catch (error) {
      console.error("프로젝트 데이터 로드 실패:", error);
    }
  };

  const getPersonalityAnalysis = () => {
    if (conditions.length === 0) {
      return { average: 0, consistency: 0, bestHour: null, worstHour: null };
    }

    const conditionScores = {
      excellent: 5,
      good: 4,
      normal: 3,
      tired: 2,
      exhausted: 1,
    };

    const totalScore = conditions.reduce((sum, c) => sum + conditionScores[c.condition], 0);
    const average = totalScore / conditions.length;

    // 일관성 지수 계산 (표준편차의 역수)
    const variance =
      conditions.reduce((sum, c) => {
        const score = conditionScores[c.condition];
        return sum + Math.pow(score - average, 2);
      }, 0) / conditions.length;
    const standardDeviation = Math.sqrt(variance);
    const consistency = standardDeviation === 0 ? 100 : Math.max(0, 100 - standardDeviation * 20);

    // 최고/최악 시간대 찾기
    const hourlyStats: Record<number, { total: number; count: number; average: number }> = {};
    for (let i = 0; i < 24; i++) {
      hourlyStats[i] = { total: 0, count: 0, average: 0 };
    }

    conditions.forEach((condition) => {
      const hour = dayjs(condition.date).hour();
      const score = conditionScores[condition.condition];
      hourlyStats[hour].total += score;
      hourlyStats[hour].count += 1;
    });

    Object.keys(hourlyStats).forEach((hour) => {
      const h = parseInt(hour);
      if (hourlyStats[h].count > 0) {
        hourlyStats[h].average = hourlyStats[h].total / hourlyStats[h].count;
      }
    });

    const validHours = Object.entries(hourlyStats).filter(([_, data]) => data.count > 0);
    const bestHour = validHours.sort((a, b) => b[1].average - a[1].average)[0];
    const worstHour = validHours.sort((a, b) => a[1].average - b[1].average)[0];

    return {
      average,
      consistency,
      bestHour: bestHour ? { hour: parseInt(bestHour[0]), average: bestHour[1].average } : null,
      worstHour: worstHour ? { hour: parseInt(worstHour[0]), average: worstHour[1].average } : null,
    };
  };

  const getProjectAnalysis = () => {
    if (projects.length === 0) {
      return { totalProjects: 0, completedProjects: 0, completionRate: 0, averageProgress: 0 };
    }

    const totalProjects = projects.length;
    const completedProjects = projects.filter((p) => p.status === "completed").length;
    const completionRate = (completedProjects / totalProjects) * 100;
    const averageProgress = projects.reduce((sum, p) => sum + p.progress, 0) / totalProjects;

    return { totalProjects, completedProjects, completionRate, averageProgress };
  };

  const getPersonalityType = () => {
    const analysis = getPersonalityAnalysis();
    const projectAnalysis = getProjectAnalysis();

    if (analysis.consistency >= 80 && analysis.average >= 3.5) {
      return {
        type: "안정형",
        emoji: "🎯",
        color: theme.palette.success.main,
        description: "일관되고 안정적인 컨디션을 유지하는 타입이에요. 꾸준함이 최고의 무기입니다!",
        traits: ["높은 일관성", "안정적 컨디션", "신뢰할 수 있음", "계획적"],
      };
    } else if (analysis.consistency < 60 && analysis.average >= 3) {
      return {
        type: "적응형",
        emoji: "🌊",
        color: theme.palette.info.main,
        description: "변화하는 상황에 잘 적응하는 유연한 타입이에요. 다양성 속에서 빛을 발합니다!",
        traits: ["높은 적응력", "유연한 사고", "창의적", "변화 수용"],
      };
    } else if (analysis.average >= 4 && projectAnalysis.completionRate >= 70) {
      return {
        type: "역동형",
        emoji: "🚀",
        color: theme.palette.primary.main,
        description: "높은 에너지와 실행력을 가진 타입이에요. 도전을 즐기며 목표를 달성합니다!",
        traits: ["높은 에너지", "강한 실행력", "도전 정신", "목표 지향"],
      };
    } else {
      return {
        type: "성장형",
        emoji: "🌱",
        color: theme.palette.warning.main,
        description: "아직 성장하고 있는 단계예요. 꾸준한 관리로 더 나은 모습으로 발전할 수 있어요!",
        traits: ["성장 잠재력", "개선 의지", "학습 지향", "발전 가능성"],
      };
    }
  };

  const getRecommendations = () => {
    const analysis = getPersonalityAnalysis();
    const personalityType = getPersonalityType();
    const recommendations = [];

    if (analysis.consistency < 70) {
      recommendations.push({
        icon: "📊",
        title: "컨디션 일관성 개선",
        description: "매일 같은 시간에 컨디션을 체크하고 패턴을 파악해보세요",
        color: theme.palette.info.main,
      });
    }

    if (analysis.bestHour) {
      recommendations.push({
        icon: "⏰",
        title: "골든타임 활용",
        description: `${analysis.bestHour.hour}시경이 가장 좋은 컨디션이에요. 중요한 일은 이 시간에!`,
        color: theme.palette.success.main,
      });
    }

    if (analysis.average < 3) {
      recommendations.push({
        icon: "💪",
        title: "컨디션 관리 강화",
        description: "충분한 휴식과 규칙적인 생활 패턴으로 컨디션을 개선해보세요",
        color: theme.palette.warning.main,
      });
    }

    if (personalityType.type === "성장형") {
      recommendations.push({
        icon: "🎯",
        title: "목표 설정",
        description: "작은 목표부터 설정해서 성취감을 쌓아가세요",
        color: theme.palette.primary.main,
      });
    }

    return recommendations;
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  const personalityAnalysis = getPersonalityAnalysis();
  const projectAnalysis = getProjectAnalysis();
  const personalityType = getPersonalityType();
  const recommendations = getRecommendations();

  return (
    <Box sx={{ p: 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          👤 내 프로필
        </Typography>
        <Typography variant="body1" color="textSecondary">
          당신의 데이터를 분석해서 개인 성향과 맞춤 추천을 제공해드려요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* 성격 유형 */}
        <Grid item xs={12}>
          <Card
            sx={{
              background: `linear-gradient(135deg, ${personalityType.color}20, ${personalityType.color}10)`,
              border: `2px solid ${personalityType.color}30`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: personalityType.color,
                    fontSize: "2rem",
                  }}
                >
                  {personalityType.emoji}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    당신은 "{personalityType.type}" 타입이에요!
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                    {personalityType.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {personalityType.traits.map((trait) => (
                      <Chip
                        key={trait}
                        label={trait}
                        size="small"
                        sx={{
                          bgcolor: personalityType.color + "20",
                          color: personalityType.color,
                          fontWeight: "medium",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 컨디션 분석 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <EmojiEmotions sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                평균 컨디션
              </Typography>
              <Typography variant="h3" color="primary" gutterBottom>
                {personalityAnalysis.average.toFixed(1)}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                5점 만점 중
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(personalityAnalysis.average / 5) * 100}
                sx={{ height: 8, borderRadius: 4 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Timeline sx={{ fontSize: 48, color: theme.palette.success.main, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                일관성 지수
              </Typography>
              <Typography variant="h3" color="success.main" gutterBottom>
                {personalityAnalysis.consistency.toFixed(0)}%
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                컨디션 안정성
              </Typography>
              <LinearProgress
                variant="determinate"
                value={personalityAnalysis.consistency}
                color="success"
                sx={{ height: 8, borderRadius: 4 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Schedule sx={{ fontSize: 48, color: theme.palette.warning.main, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                골든 타임
              </Typography>
              {personalityAnalysis.bestHour ? (
                <>
                  <Typography variant="h3" color="warning.main" gutterBottom>
                    {personalityAnalysis.bestHour.hour}시
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    평균 {personalityAnalysis.bestHour.average.toFixed(1)}점
                  </Typography>
                </>
              ) : (
                <Typography color="textSecondary">데이터 부족</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* 프로젝트 분석 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Assignment /> 프로젝트 성과
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", p: 2 }}>
                    <Typography variant="h4" color="primary" gutterBottom>
                      {projectAnalysis.totalProjects}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      총 프로젝트
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", p: 2 }}>
                    <Typography variant="h4" color="success.main" gutterBottom>
                      {projectAnalysis.completedProjects}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      완료된 프로젝트
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  완료율: {projectAnalysis.completionRate.toFixed(1)}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={projectAnalysis.completionRate}
                  color="success"
                  sx={{ height: 6, borderRadius: 3 }}
                />
              </Box>

              <Box>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  평균 진행률: {projectAnalysis.averageProgress.toFixed(1)}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={projectAnalysis.averageProgress}
                  sx={{ height: 6, borderRadius: 3 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 맞춤 추천 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Lightbulb /> 맞춤 추천
              </Typography>

              {recommendations.length > 0 ? (
                <List dense>
                  {recommendations.map((rec, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Typography fontSize="1.5rem">{rec.icon}</Typography>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2" fontWeight="medium">
                            {rec.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" color="textSecondary">
                            {rec.description}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Box sx={{ textAlign: "center", py: 3 }}>
                  <Typography color="textSecondary">데이터가 더 쌓이면 맞춤 추천을 제공해드릴게요! 📊</Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
