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

  const handleFoxHover = (fox: FoxEntity) => {
    if (fox.project && fox.emoji === "🦊") {
      setHoveredProject(fox.project);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
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

  // 사막 배경 입자들
  const sandParticles = Array.from({ length: 15 }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        width: "4px",
        height: "4px",
        backgroundColor: "#f4a261",
        borderRadius: "50%",
        opacity: 0.6,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      }}
    />
  ));

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: width,
        height: height,
        background: "radial-gradient(circle at 30% 70%, #fff3e0 0%, #ffcc02 40%, #ff8f00 100%)",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='sand' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFF3E0'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23FFCC02'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23sand)'/%3E%3C/svg%3E")`,
          opacity: 0.3,
          pointerEvents: "none",
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 사막 배경 입자들 */}
      {sandParticles}

      {/* 태양 */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "30px",
          fontSize: "40px",
          opacity: 0.8,
          animation: "pulse 4s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.8 },
            "50%": { transform: "scale(1.1)", opacity: 1 },
          },
        }}
      >
        ☀️
      </Box>

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
            transform: `translate(-50%, -50%)`,
            transition: "transform 0.1s ease",
            zIndex: fox.emoji === "🦊" ? 10 : 5,
            "&:hover": {
              transform: "translate(-50%, -50%) scale(1.2)",
            },
          }}
          onMouseEnter={() => handleFoxHover(fox)}
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
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="#ff8f00">
              🦊 {hoveredProject.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              {hoveredProject.description}
            </Typography>
            <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="caption" color="textPrimary">
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
