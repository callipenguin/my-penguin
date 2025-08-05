import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { Project } from "../types";

interface DesertFoxSceneProps {
  width?: number;
  height?: number;
  projects?: Project[];
}

interface FoxEntity {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  emoji: string;
  project?: Project;
  lastMove: number;
  isHovered: boolean;
}

const DesertFoxScene: React.FC<DesertFoxSceneProps> = ({ width = 800, height = 400, projects = [] }) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [foxes, setFoxes] = useState<FoxEntity[]>([]);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 여우 개체 생성
  const createFoxes = useCallback(() => {
    const newFoxes: FoxEntity[] = [];
    const foxCount = Math.max(3, Math.min(projects.length + 2, 8)); // 최소 3마리, 프로젝트 수에 따라 증가

    for (let i = 0; i < foxCount; i++) {
      const fox: FoxEntity = {
        id: i,
        x: Math.random() * (width - 60) + 30,
        y: Math.random() * (height - 60) + 30,
        targetX: Math.random() * (width - 60) + 30,
        targetY: Math.random() * (height - 60) + 30,
        speed: 0.3 + Math.random() * 0.4, // 0.3~0.7 속도 (사막여우 기본 0.5)
        emoji: i % 2 === 0 ? "🦊" : "🌵", // 여우와 선인장을 번갈아
        project: projects[i] || undefined,
        lastMove: Date.now(),
        isHovered: false,
      };
      newFoxes.push(fox);
    }

    setFoxes(newFoxes);
  }, [width, height, projects]);

  // 여우 움직임 업데이트
  const updateFoxes = useCallback(() => {
    setFoxes((prevFoxes) =>
      prevFoxes.map((fox) => {
        const now = Date.now();
        let newFox = { ...fox };

        // hover 중이거나 선인장이면 움직이지 않음
        if (newFox.isHovered || newFox.emoji !== "🦊") {
          return newFox;
        }

        // 목표 지점에 도달했거나 일정 시간 후 새 목표 설정
        const distance = Math.sqrt(Math.pow(fox.x - fox.targetX, 2) + Math.pow(fox.y - fox.targetY, 2));

        if (distance < 5 || now - fox.lastMove > 3000 + Math.random() * 2000) {
          newFox.targetX = Math.random() * (width - 60) + 30;
          newFox.targetY = Math.random() * (height - 60) + 30;
          newFox.lastMove = now;
        }

        // 부드럽게 목표 지점으로 이동
        const dx = newFox.targetX - newFox.x;
        const dy = newFox.targetY - newFox.y;
        const moveDistance = Math.min(newFox.speed, distance);

        if (distance > 0) {
          newFox.x += (dx / distance) * moveDistance;
          newFox.y += (dy / distance) * moveDistance;
        }

        return newFox;
      })
    );
  }, [width, height]);

  // 애니메이션 루프
  const animate = useCallback(() => {
    updateFoxes();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateFoxes]);

  // 마우스 이벤트 처리
  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleFoxHover = (fox: FoxEntity, isHovering: boolean) => {
    setFoxes((prevFoxes) => prevFoxes.map((f) => (f.id === fox.id ? { ...f, isHovered: isHovering } : f)));

    if (isHovering && fox.project && fox.emoji === "🦊") {
      setHoveredProject(fox.project);
    } else if (!isHovering) {
      setHoveredProject(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    setFoxes((prevFoxes) => prevFoxes.map((f) => ({ ...f, isHovered: false })));
  };

  // 초기화 및 애니메이션 시작
  useEffect(() => {
    createFoxes();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createFoxes, animate]);

  // 고정된 사막 장식 요소들
  const staticDesertElements = [
    { emoji: "☀️", x: "85%", y: "15%", size: "40px", opacity: 0.8 },
    { emoji: "🏜️", x: "20%", y: "80%", size: "35px", opacity: 0.6 },
    { emoji: "🌵", x: "90%", y: "70%", size: "30px", opacity: 0.7 },
    { emoji: "🏔️", x: "10%", y: "20%", size: "45px", opacity: 0.5 },
    { emoji: "🐪", x: "70%", y: "85%", size: "25px", opacity: 0.6 },
  ];

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: width,
        height: height,
        background: "linear-gradient(135deg, #FFF3E0 0%, #FFCC02 25%, #FF8F00 50%, #E65100 100%)",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 고정된 사막 장식 요소들 */}
      {staticDesertElements.map((element, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            left: element.x,
            top: element.y,
            fontSize: element.size,
            opacity: element.opacity,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {element.emoji}
        </Box>
      ))}

      {/* 여우들 */}
      {foxes.map((fox) => (
        <Box
          key={fox.id}
          sx={{
            position: "absolute",
            left: fox.x,
            top: fox.y,
            fontSize: fox.emoji === "🦊" ? "24px" : "20px",
            cursor: fox.project ? "pointer" : "default",
            transform: `translate(-50%, -50%) ${fox.isHovered ? "scale(1.3)" : "scale(1)"}`,
            transition: "transform 0.2s ease",
            zIndex: fox.emoji === "🦊" ? 10 : 5,
            filter: fox.isHovered ? "drop-shadow(0 0 8px rgba(255, 143, 0, 0.8))" : "none",
          }}
          onMouseEnter={() => handleFoxHover(fox, true)}
          onMouseLeave={() => handleFoxHover(fox, false)}
        >
          {fox.emoji}
        </Box>
      ))}

      {/* 프로젝트 정보 툴팁 */}
      {hoveredProject && (
        <Card
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            minWidth: 200,
            maxWidth: 300,
            zIndex: 1000,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            borderRadius: 2,
            border: "2px solid #ff8f00",
            backdropFilter: "blur(8px)",
            backgroundColor: theme.palette.mode === "dark" ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 248, 225, 0.95)",
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: theme.palette.mode === "dark" ? "#FFB74D" : "#ff8f00",
              }}
            >
              🦊 {hoveredProject.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.6)",
              }}
            >
              {hoveredProject.description}
            </Typography>
            <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.8)",
                }}
              >
                진행률: {hoveredProject.progress}%
              </Typography>
              <Box
                sx={{
                  flex: 1,
                  height: 4,
                  backgroundColor: "rgba(255, 143, 0, 0.2)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: `${hoveredProject.progress}%`,
                    backgroundColor: "#ff8f00",
                    transition: "width 0.3s ease",
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default DesertFoxScene;
