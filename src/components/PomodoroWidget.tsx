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
          maxWidth: isMinimized ? 180 : 280,
          minWidth: isMinimized ? 160 : 260,
        }}
      >
        <Fade in={shouldShow}>
          <Card
            sx={{
              borderRadius: isMinimized ? 2 : 3,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              background: isBreak
                ? "linear-gradient(135deg, #4CAF50 0%, #81C784 100%)"
                : "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",
              color: "white",
              cursor: isMinimized ? "pointer" : "default",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
              },
            }}
            onClick={isMinimized ? handleWidgetClick : undefined}
          >
            <Box sx={{ p: isMinimized ? 1 : 2 }}>
              {/* 헤더 */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: isMinimized ? 0.5 : 1,
                  borderBottom: isMinimized ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
                  pb: isMinimized ? 0 : 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Timer sx={{ fontSize: isMinimized ? "0.9rem" : "1.1rem" }} />
                  {!isMinimized && (
                    <Typography variant="body2" fontWeight="bold" sx={{ fontSize: "0.85rem" }}>
                      {isBreak ? "🌱 BREAK" : "🍅 FOCUS"}
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
                    sx={{
                      color: "white",
                      opacity: 0.7,
                      "&:hover": { opacity: 1 },
                      width: 24,
                      height: 24,
                    }}
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
                      sx={{
                        color: "white",
                        opacity: 0.7,
                        "&:hover": { opacity: 1 },
                        width: 24,
                        height: 24,
                      }}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              </Box>

              {/* 타이머 디스플레이 */}
              <Box
                sx={{
                  textAlign: "center",
                  mb: isMinimized ? 0.5 : 2,
                  py: isMinimized ? 0.5 : 1,
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography
                  variant={isMinimized ? "h5" : "h3"}
                  fontWeight="bold"
                  sx={{
                    fontFamily: "'Roboto Mono', 'Courier New', monospace",
                    fontSize: isMinimized ? "1.5rem" : "2.2rem",
                    letterSpacing: "0.05em",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {formatTime(time)}
                </Typography>
                {!isMinimized && (
                  <Typography
                    variant="caption"
                    sx={{
                      opacity: 0.8,
                      fontSize: "0.7rem",
                      display: "block",
                      mt: 0.5,
                    }}
                  >
                    {Math.floor(progress)}% COMPLETE
                  </Typography>
                )}
              </Box>

              {!isMinimized && (
                <>
                  {/* 진행률 바 */}
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      mb: 2,
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                      },
                    }}
                  />

                  {/* 프로젝트/작업 정보 */}
                  {selectedProject || selectedTask ? (
                    <Box
                      sx={{
                        mb: 2,
                        p: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: 2,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {selectedProject && (
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            opacity: 0.9,
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                          }}
                        >
                          📁 {selectedProject.title}
                        </Typography>
                      )}
                      {selectedTask && (
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            opacity: 0.8,
                            fontSize: "0.7rem",
                            mt: 0.5,
                          }}
                        >
                          📝 {selectedTask.title}
                        </Typography>
                      )}
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        mb: 2,
                        p: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: 2,
                        border: "1px dashed rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          opacity: 0.7,
                          fontSize: "0.65rem",
                          textAlign: "center",
                          fontStyle: "italic",
                        }}
                      >
                        ⚠️ No project/task selected
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          opacity: 0.6,
                          fontSize: "0.6rem",
                          textAlign: "center",
                          mt: 0.5,
                        }}
                      >
                        Click to set up
                      </Typography>
                    </Box>
                  )}

                  {/* 컨트롤 버튼들 */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isActive) {
                          pauseTimer();
                        } else {
                          const success = startTimer();
                          if (!success) {
                            // 시작 실패 시 알림
                            alert("프로젝트와 작업을 먼저 선택해주세요! 🎯\n\n뽀모도로 페이지에서 설정할 수 있습니다.");
                          }
                        }
                      }}
                      disabled={!selectedProject || !selectedTask}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        width: 36,
                        height: 36,
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                          transform: "scale(1.05)",
                        },
                        "&:disabled": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.5)",
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
                        width: 36,
                        height: 36,
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                          transform: "scale(1.05)",
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
                      opacity: 0.6,
                      fontSize: "0.65rem",
                    }}
                  >
                    📱 Click to expand
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
                  ↗️ Click to expand
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
