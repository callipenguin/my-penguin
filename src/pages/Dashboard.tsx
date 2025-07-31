import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  Avatar,
  useTheme,
  Button,
  Divider,
} from "@mui/material";
import { TrendingUp, Assignment, Psychology, EmojiEmotions, Lightbulb } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Project } from "../types";
import dayjs from "dayjs";
import { loadUserData, getCurrentUser } from "../utils/firebase";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentTime, setCurrentTime] = useState(dayjs());

  // 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(timer);
  }, []);

  // 프로젝트 데이터 로드
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        // Firebase에서 로드
        const result = await loadUserData(user.uid, "projects");
        if (result.success && result.data) {
          setProjects(result.data);
        } else {
          setProjects([]);
        }
      } else {
        // 로그인되지 않은 경우 (fallback)
        const savedData = localStorage.getItem("projects");
        if (savedData) {
          setProjects(JSON.parse(savedData));
        } else {
          setProjects([]);
        }
      }
    } catch (error) {
      console.error("프로젝트 로드 실패:", error);
      setProjects([]);
    }
  };

  const activeProjects = projects.filter((p) => p.status === "active" || p.status === "planning").slice(0, 3);
  const getGreeting = () => {
    const hour = currentTime.hour();
    if (hour < 12) return "좋은 아침이에요! 🐧";
    if (hour < 18) return "좋은 오후예요! 🐟";
    return "좋은 저녁이에요! ❄️";
  };

  const todaysTips = [
    { icon: "🐧", text: "펭귄처럼 차분하게 25분 집중 + 5분 휴식", color: theme.palette.info.main },
    { icon: "🐟", text: "물고기를 잡듯 목표를 향해 수영하기", color: theme.palette.success.main },
    { icon: "❄️", text: "빙하처럼 차가운 머리로 가장 중요한 일 1개만", color: theme.palette.warning.main },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      {/* 인사말 섹션 */}
      <Card
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          border: "none",
          boxShadow: 2,
        }}
      >
        <CardContent sx={{ py: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {getGreeting()}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {currentTime.format("M월 D일 (ddd) HH:mm")}
              </Typography>
            </Box>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: theme.palette.primary.main,
                fontSize: "2rem",
              }}
            >
              🐧
            </Avatar>
          </Box>
        </CardContent>
      </Card>

      {/* 메인 콘텐츠 그리드 */}
      <Grid container spacing={3} sx={{ flexGrow: 1, overflow: "hidden" }}>
        {/* 컨디션 카드 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1, textAlign: "center", py: 4 }}>
              <EmojiEmotions sx={{ fontSize: 48, color: theme.palette.success.main, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                오늘 컨디션
              </Typography>
              <Chip
                label="보통 🐟"
                size="medium"
                sx={{
                  fontSize: "1rem",
                  py: 1,
                  px: 2,
                  bgcolor: theme.palette.warning.main + "20",
                  color: theme.palette.warning.main,
                  fontWeight: "bold",
                  height: "auto",
                  "& .MuiChip-label": {
                    fontSize: "1rem",
                    py: 0.5,
                  },
                }}
              />
              <Box sx={{ mt: 3 }}>
                <Button variant="outlined" size="small" onClick={() => navigate("/condition")}>
                  기록하기 🐟
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 프로젝트 카드 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Assignment sx={{ mr: 1, color: theme.palette.info.main }} />
                <Typography variant="h6" fontWeight="bold">
                  진행 프로젝트 ({activeProjects.length}/{projects.length})
                </Typography>
              </Box>

              {activeProjects.length > 0 ? (
                <List dense sx={{ py: 0 }}>
                  {activeProjects.map((project) => (
                    <ListItem key={project.id} sx={{ px: 0, py: 1 }}>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography variant="body2" fontWeight="medium">
                              {project.title}
                            </Typography>
                            <Chip
                              label={`${project.progress}%`}
                              size="small"
                              color={project.progress > 70 ? "success" : project.progress > 30 ? "warning" : "error"}
                            />
                          </Box>
                        }
                        secondary={
                          <LinearProgress
                            value={project.progress}
                            variant="determinate"
                            sx={{ mt: 1, height: 6, borderRadius: 3 }}
                          />
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Box sx={{ textAlign: "center", py: 3 }}>
                  <Typography color="textSecondary" gutterBottom>
                    {projects.length === 0 ? "프로젝트가 없어요 🐧" : "활성 프로젝트가 없어요 ❄️"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {projects.length === 0 ? "새로운 빙하를 만들어보세요!" : "프로젝트를 따뜻하게 녹여보세요!"}
                  </Typography>
                  <Button variant="outlined" size="small" onClick={() => navigate("/projects")}>
                    {projects.length === 0 ? "만들기 🏔️" : "관리하기 ⚙️"}
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* 오늘의 팁 카드 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Lightbulb sx={{ mr: 1, color: theme.palette.warning.main }} />
                <Typography variant="h6" fontWeight="bold">
                  오늘의 팁
                </Typography>
              </Box>

              <List dense sx={{ py: 0 }}>
                {todaysTips.map((tip, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{ px: 0, py: 1.5 }}>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Typography sx={{ fontSize: "1.5rem" }}>{tip.icon}</Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                              {tip.text}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < todaysTips.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 빠른 액션 버튼 */}
      <Card>
        <CardContent sx={{ py: 2 }}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            빠른 액션:
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<EmojiEmotions />}
              onClick={() => navigate("/condition")}
            >
              컨디션 기록
            </Button>
            <Button variant="outlined" size="small" startIcon={<Assignment />} onClick={() => navigate("/projects")}>
              프로젝트 관리
            </Button>
            <Button variant="outlined" size="small" startIcon={<TrendingUp />} onClick={() => navigate("/analytics")}>
              데이터 분석
            </Button>
            <Button variant="outlined" size="small" startIcon={<Psychology />} onClick={() => navigate("/chat")}>
              AI 채팅
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
