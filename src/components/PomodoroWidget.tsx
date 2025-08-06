import React, { useState } from "react";
import { Box, Card, Typography, IconButton, LinearProgress, Chip, Fade, Slide } from "@mui/material";
import { PlayArrow, Pause, Refresh, Timer, Close, Minimize, Maximize } from "@mui/icons-material";
import { usePomodoro, formatTime } from "../contexts/PomodoroContext";
import { useNavigate } from "react-router-dom";

interface PomodoroWidgetProps {
  onClose?: () => void;
}

const PomodoroWidget: React.FC<PomodoroWidgetProps> = ({ onClose }) => {
  const {
    isActive,
    time,
    totalTime,
    selectedProject,
    selectedTask,
    isBreak,
    startTimer,
    pauseTimer,
    resetTimer,
    sessionStartTime,
  } = usePomodoro();

  const navigate = useNavigate();
  const [isMinimized, setIsMinimized] = useState(false); // 작게보기 상태

  // 뽀모도로가 실행 중이거나 일시정지 상태일 때만 표시
  const shouldShow = true; // 임시로 항상 표시

  if (!shouldShow) return null;

  const progress = ((totalTime - time) / totalTime) * 100;

  const handleWidgetClick = () => {
    navigate("/pomodoro");
  };

  return (
    <Slide direction="up" in={shouldShow} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          maxWidth: isMinimized ? 200 : 320,
          minWidth: isMinimized ? 160 : 280,
        }}
      >
        <Fade in={shouldShow}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              background: isBreak
                ? "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)"
                : "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",
              color: "white",
              cursor: isMinimized ? "pointer" : "default",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
              },
            }}
            onClick={isMinimized ? handleWidgetClick : undefined}
          >
            <Box sx={{ p: isMinimized ? 1.5 : 2 }}>
              {/* 헤더 */}
              <Box
                sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: isMinimized ? 0 : 1 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Timer sx={{ fontSize: isMinimized ? "1rem" : "1.2rem" }} />
                  {!isMinimized && (
                    <Typography variant="body2" fontWeight="bold">
                      {isBreak ? "🌱 휴식 시간" : "🍅 집중 시간"}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMinimized(!isMinimized);
                    }}
                    sx={{ color: "white", opacity: 0.7, "&:hover": { opacity: 1 } }}
                  >
                    {isMinimized ? <Maximize fontSize="small" /> : <Minimize fontSize="small" />}
                  </IconButton>
                  {onClose && (
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                      }}
                      sx={{ color: "white", opacity: 0.7, "&:hover": { opacity: 1 } }}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              </Box>

              {/* 시간 표시 */}
              <Typography
                variant={isMinimized ? "h6" : "h4"}
                fontWeight="bold"
                sx={{
                  textAlign: "center",
                  mb: isMinimized ? 0 : 1,
                  fontFamily: "monospace",
                  fontSize: isMinimized ? "1.2rem" : undefined,
                }}
              >
                {formatTime(time)}
              </Typography>

              {!isMinimized && (
                <>
                  {/* 진행률 바 */}
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      mb: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                      },
                    }}
                  />

                  {/* 프로젝트/작업 정보 */}
                  {(selectedProject || selectedTask) && (
                    <Box sx={{ mb: 2 }}>
                      {selectedProject && (
                        <Chip
                          label={selectedProject.title}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            mr: 1,
                            mb: selectedTask ? 0.5 : 0,
                          }}
                        />
                      )}
                      {selectedTask && (
                        <Typography variant="caption" sx={{ display: "block", opacity: 0.9 }}>
                          📝 {selectedTask.title}
                        </Typography>
                      )}
                    </Box>
                  )}

                  {/* 컨트롤 버튼들 */}
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        isActive ? pauseTimer() : startTimer();
                      }}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isActive ? <Pause fontSize="small" /> : <PlayArrow fontSize="small" />}
                    </IconButton>

                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        resetTimer();
                      }}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Refresh fontSize="small" />
                    </IconButton>
                  </Box>

                  {/* 클릭해서 전체 화면으로 이동하라는 힌트 */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      mt: 1,
                      opacity: 0.7,
                      fontSize: "0.7rem",
                    }}
                  >
                    클릭해서 전체 화면으로 📱
                  </Typography>
                </>
              )}

              {/* 작게보기일 때 힌트 */}
              {isMinimized && (
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 0.5,
                    opacity: 0.7,
                    fontSize: "0.6rem",
                  }}
                >
                  클릭해서 확장 ↗️
                </Typography>
              )}
            </Box>
          </Card>
        </Fade>
      </Box>
    </Slide>
  );
};

export default PomodoroWidget;
