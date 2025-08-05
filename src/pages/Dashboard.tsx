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
  useMediaQuery,
  Fade,
  Slide,
  Tooltip,
} from "@mui/material";
import {
  TrendingUp,
  Lightbulb,
  Explore,
  AcUnit,
  LocalHospital,
  Analytics,
  Home as HomeIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Project } from "../types";
import dayjs from "dayjs";
import { loadUserData, getCurrentUser } from "../utils/firebase";
import ModernPenguinScene from "../components/ModernPenguinScene";
import { ThemeConfigExtended } from "../types";

// 심플한 Todo 타입
interface SimpleTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface DashboardProps {
  themeConfig?: ThemeConfigExtended;
}

const Dashboard: React.FC<DashboardProps> = ({ themeConfig }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
          // fallback to localStorage
          try {
            const localProjects = localStorage.getItem("projects");
            if (localProjects) {
              setProjects(JSON.parse(localProjects));
            }
          } catch (error) {
            console.error("로컬 프로젝트 로드 실패:", error);
          }
        }
      }
    } catch (error) {
      console.error("프로젝트 로드 실패:", error);
    }
  };

  const getGreeting = () => {
    const hour = currentTime.hour();
    if (hour < 6) return "🌙 깊은 밤이에요";
    if (hour < 12) return "🌅 좋은 아침이에요";
    if (hour < 18) return "☀️ 좋은 오후에요";
    if (hour < 22) return "🌆 좋은 저녁이에요";
    return "🌙 늦은 밤이에요";
  };

  const getTemperatureMood = () => {
    const temp = Math.floor(Math.random() * 10) - 5; // -5도에서 5도 사이
    if (temp < -3)
      return {
        temp: `${temp}°C`,
        mood: themeConfig?.concepts.temperatureMoods.cold || "🥶 완전 추워요!",
        color: theme.palette.info.main,
      };
    if (temp < 0)
      return {
        temp: `${temp}°C`,
        mood: themeConfig?.concepts.temperatureMoods.cold || "❄️ 시원해요",
        color: theme.palette.primary.main,
      };
    if (temp < 3)
      return {
        temp: `${temp}°C`,
        mood: themeConfig?.concepts.temperatureMoods.mild || "🐧 적당해요",
        color: theme.palette.success.main,
      };
    return {
      temp: `${temp}°C`,
      mood: themeConfig?.concepts.temperatureMoods.warm || "🌡️ 따뜻해요",
      color: theme.palette.warning.main,
    };
  };

  const activeProjects = projects.filter((p) => p.status === "active");
  const completedProjects = projects.filter((p) => p.status === "completed");
  const weatherInfo = getTemperatureMood();

  const quickActions = [
    {
      title: "건강 체크",
      description: "오늘의 컨디션을 기록하세요",
      icon: <LocalHospital />,
      color: theme.palette.success.main,
      path: "/condition",
      emoji: themeConfig?.emoji || "🐧",
    },
    {
      title: themeConfig?.concepts.projectCreate?.replace("새로운 ", "새 ").replace(" 시작하기", "") || "새 탐험 시작",
      description: themeConfig?.concepts.projectCreate || "새로운 프로젝트를 계획하세요",
      icon: <Explore />,
      color: theme.palette.warning.main,
      path: "/projects",
      emoji: "🗺️",
    },
    {
      title: "데이터 분석",
      description: "데이터를 분석해보세요",
      icon: <Analytics />,
      color: theme.palette.info.main,
      path: "/analytics",
      emoji: "📊",
    },
  ];

  return (
    <Box
      sx={{ p: isMobile ? 2 : 3, minHeight: "100vh", background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)" }}
    >
      {/* 메인 헤더 - 빙하 기지 */}
      <Fade in={true} timeout={800}>
        <Card
          sx={{
            mb: 4,
            borderRadius: 4,
            background: "linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)",
            color: "white",
            boxShadow: "0 8px 32px rgba(33, 150, 243, 0.3)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <CardContent sx={{ py: isMobile ? 4 : 6, px: isMobile ? 3 : 5, position: "relative", zIndex: 1 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" sx={{ mb: 2 }}>
                {themeConfig?.concepts.baseTitle || "❄️ 빙하 기지에 오신 걸 환영해요!"}
              </Typography>
              <Typography variant={isMobile ? "h6" : "h5"} sx={{ opacity: 0.9, mb: 1 }}>
                {getGreeting()}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                {currentTime.format("YYYY년 M월 D일 (ddd) HH:mm")} • {weatherInfo.temp} {weatherInfo.mood}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Fade>

      {/* 3D 펭귄 씬 - 메인 피처 */}
      <Slide direction="up" in={true} timeout={1000}>
        <Card
          sx={{
            mb: 4,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
            border: "2px solid rgba(33, 150, 243, 0.2)",
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ textAlign: "center", p: 3, pb: 2 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <HomeIcon /> {themeConfig?.concepts.liveView || "🏠 빙하 기지 라이브 뷰"}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                {themeConfig?.concepts.liveViewDescription || "우리의 펭귄 친구가 빙하 위를 걸어다니고 있어요! 🐧❄️"}
              </Typography>
            </Box>
            {/* 3D 씬 렌더링 - 테마별로 다른 컴포넌트 */}
            {themeConfig?.id === "penguin" ? (
              <ModernPenguinScene
                width={isMobile ? Math.min(window.innerWidth - 32, 800) : Math.min(window.innerWidth - 200, 1200)}
                height={isMobile ? 300 : 400}
                projects={projects}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: isMobile ? 300 : 400,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #f4a261 0%, #e76f51 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* 테마별 배경 */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle at 30% 70%, #e9c46a 0%, transparent 50%), radial-gradient(circle at 70% 30%, #f4a261 0%, transparent 50%)",
                    opacity: 0.7,
                  }}
                />

                {/* 테마별 동물 이모티콘들 */}
                <Box sx={{ textAlign: "center", zIndex: 1 }}>
                  <Typography variant="h1" sx={{ fontSize: "4rem", mb: 2 }}>
                    {themeConfig?.emoji || "🦊"}
                  </Typography>
                  <Typography variant="h6" color="white" fontWeight="bold">
                    {themeConfig?.concepts?.animal || "동물"}의{" "}
                    {themeConfig?.concepts?.environment?.split(" ")[0] || "환경"} 탐험!
                  </Typography>
                  <Typography variant="body2" color="white" sx={{ opacity: 0.8, mt: 1 }}>
                    {themeConfig?.emoji || "🦊"} 곧 3D {themeConfig?.concepts?.animal || "동물"} 씬이 추가될 예정입니다{" "}
                    {themeConfig?.concepts?.environment?.split(" ")[2] || "🏜️"}
                  </Typography>
                </Box>

                {/* 장식용 요소들 */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    fontSize: "2rem",
                    opacity: 0.6,
                  }}
                >
                  🌵
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 30,
                    right: 30,
                    fontSize: "1.5rem",
                    opacity: 0.6,
                  }}
                >
                  🌞
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 40,
                    right: 40,
                    fontSize: "1.8rem",
                    opacity: 0.6,
                  }}
                >
                  🏜️
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      </Slide>

      {/* 대시보드 그리드 */}
      <Grid container spacing={3}>
        {/* 빠른 액션 카드들 */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Lightbulb color="primary" />
            빠른 액션
          </Typography>
          <Grid container spacing={2}>
            {quickActions.map((action, index) => (
              <Grid item xs={12} sm={6} md={4} key={action.title}>
                <Fade in={true} timeout={600 + index * 200}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      border: `1px solid ${action.color}30`,
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 8px 25px ${action.color}40`,
                        borderColor: action.color,
                      },
                    }}
                    onClick={() => navigate(action.path)}
                  >
                    <CardContent sx={{ textAlign: "center", py: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          backgroundColor: `${action.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        {React.cloneElement(action.icon, {
                          sx: { fontSize: "1.8rem", color: action.color },
                        })}
                      </Box>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {action.emoji} {action.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {action.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* 진행 중인 탐험 */}
        <Grid item xs={12} md={6}>
          <Slide direction="right" in={true} timeout={800}>
            <Card sx={{ height: "100%", borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Explore sx={{ mr: 1, color: theme.palette.warning.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    {themeConfig?.concepts.activeProjects || "🗺️ 진행 중인 탐험"} ({activeProjects.length})
                  </Typography>
                </Box>

                {activeProjects.length > 0 ? (
                  <List dense sx={{ py: 0 }}>
                    {activeProjects.slice(0, 3).map((project, index) => (
                      <React.Fragment key={project.id}>
                        <ListItem sx={{ px: 0, py: 2 }}>
                          <ListItemText
                            primary={
                              <Box
                                sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}
                              >
                                <Typography variant="body1" fontWeight="medium">
                                  {project.title}
                                </Typography>
                                <Chip
                                  label={`${project.progress}%`}
                                  size="small"
                                  color={
                                    project.progress > 70 ? "success" : project.progress > 30 ? "warning" : "error"
                                  }
                                  sx={{ borderRadius: 2 }}
                                />
                              </Box>
                            }
                            secondary={
                              <LinearProgress
                                value={project.progress}
                                variant="determinate"
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  "& .MuiLinearProgress-bar": {
                                    borderRadius: 4,
                                  },
                                }}
                              />
                            }
                          />
                        </ListItem>
                        {index < activeProjects.slice(0, 3).length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                ) : (
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                      🧊 진행 중인 {themeConfig?.concepts.projectType || "탐험"}이 없어요
                    </Typography>
                    <Button variant="outlined" onClick={() => navigate("/projects")} sx={{ borderRadius: 3, mt: 2 }}>
                      {themeConfig?.concepts.projectCreate || "새 탐험 시작하기"}
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Slide>
        </Grid>

        {/* 탐험 통계 */}
        <Grid item xs={12} md={6}>
          <Slide direction="left" in={true} timeout={800}>
            <Card sx={{ height: "100%", borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <TrendingUp sx={{ mr: 1, color: theme.palette.success.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    {themeConfig?.concepts.projectStats || "📊 탐험 현황"}
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h3" color="primary.main" fontWeight="bold">
                        {projects.length}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        총 {themeConfig?.concepts.projectType || "탐험"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h3" color="success.main" fontWeight="bold">
                        {completedProjects.length}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        완료된 {themeConfig?.concepts.projectType || "탐험"}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    {themeConfig?.emoji} {themeConfig?.concepts.animal}의 한마디
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "primary.main",
                      backgroundColor: "primary.main",
                      backgroundImage: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "medium",
                    }}
                  >
                    {themeConfig?.concepts.greeting || "오늘도 멋진 하루 보내세요! ✨"}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
