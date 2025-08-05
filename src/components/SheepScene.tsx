import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { Project } from "../types";

interface SheepSceneProps {
  width?: number;
  height?: number;
  projects?: Project[];
}

interface SheepEntity {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  emoji: string;
  project?: Project;
  lastMove: number;
  isResting: boolean;
  restUntil: number;
}

const SheepScene: React.FC<SheepSceneProps> = ({ width = 800, height = 400, projects = [] }) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [sheep, setSheep] = useState<SheepEntity[]>([]);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 양 개체 생성
  const createSheep = useCallback(() => {
    const newSheep: SheepEntity[] = [];
    const sheepCount = Math.max(3, Math.min(projects.length + 2, 8));

    for (let i = 0; i < sheepCount; i++) {
      const sheepEntity: SheepEntity = {
        id: i,
        x: Math.random() * (width - 60) + 30,
        y: Math.random() * (height - 60) + 30,
        targetX: Math.random() * (width - 60) + 30,
        targetY: Math.random() * (height - 60) + 30,
        speed: 0.2 + Math.random() * 0.2, // 0.2~0.4 속도 (양은 느긋함)
        emoji: i % 3 === 0 ? "🐑" : i % 3 === 1 ? "🌿" : "🌸", // 양, 풀, 꽃
        project: projects[i] || undefined,
        lastMove: Date.now(),
        isResting: Math.random() < 0.3, // 30% 확률로 쉬는 중
        restUntil: Date.now() + Math.random() * 5000,
      };
      newSheep.push(sheepEntity);
    }

    setSheep(newSheep);
  }, [width, height, projects]);

  // 양 움직임 업데이트
  const updateSheep = useCallback(() => {
    setSheep((prevSheep) =>
      prevSheep.map((sheepEntity) => {
        const now = Date.now();
        let newSheep = { ...sheepEntity };

        // 쉬는 시간 체크
        if (newSheep.isResting && now > newSheep.restUntil) {
          newSheep.isResting = false;
        }

        // 양은 이모지일 때만 움직임
        if (newSheep.emoji !== "🐑" || newSheep.isResting) {
          return newSheep;
        }

        // 목표 지점에 도달했거나 일정 시간 후 새 목표 설정
        const distance = Math.sqrt(
          Math.pow(newSheep.x - newSheep.targetX, 2) + Math.pow(newSheep.y - newSheep.targetY, 2)
        );

        if (distance < 3 || now - newSheep.lastMove > 4000 + Math.random() * 3000) {
          // 때때로 쉬기
          if (Math.random() < 0.2) {
            newSheep.isResting = true;
            newSheep.restUntil = now + 2000 + Math.random() * 3000;
            return newSheep;
          }

          newSheep.targetX = Math.random() * (width - 60) + 30;
          newSheep.targetY = Math.random() * (height - 60) + 30;
          newSheep.lastMove = now;
        }

        // 부드럽게 목표 지점으로 이동
        const dx = newSheep.targetX - newSheep.x;
        const dy = newSheep.targetY - newSheep.y;
        const moveDistance = Math.min(newSheep.speed, distance);

        if (distance > 0) {
          newSheep.x += (dx / distance) * moveDistance;
          newSheep.y += (dy / distance) * moveDistance;
        }

        return newSheep;
      })
    );
  }, [width, height]);

  // 애니메이션 루프
  const animate = useCallback(() => {
    updateSheep();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateSheep]);

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

  const handleSheepHover = (sheepEntity: SheepEntity) => {
    if (sheepEntity.project && sheepEntity.emoji === "🐑") {
      setHoveredProject(sheepEntity.project);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  // 초기화 및 애니메이션 시작
  useEffect(() => {
    createSheep();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createSheep, animate]);

  // 목초지 배경 요소들
  const grassElements = Array.from({ length: 20 }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        fontSize: "12px",
        opacity: 0.7,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `sway ${2 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
        "@keyframes sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      }}
    >
      {i % 3 === 0 ? "🌱" : i % 3 === 1 ? "🍀" : "🌾"}
    </Box>
  ));

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: width,
        height: height,
        background: "radial-gradient(circle at 30% 70%, #f1f8e9 0%, #c8e6c9 40%, #4caf50 100%)",
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
          background: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grass' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F1F8E9'/%3E%3Cpath d='M0,20 Q5,10 10,20 Q15,10 20,20' stroke='%23C8E6C9' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grass)'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 목초지 배경 요소들 */}
      {grassElements}

      {/* 구름 */}
      <Box
        sx={{
          position: "absolute",
          top: "25px",
          right: "40px",
          fontSize: "30px",
          opacity: 0.9,
          animation: "drift 8s ease-in-out infinite",
          "@keyframes drift": {
            "0%, 100%": { transform: "translateX(0px)" },
            "50%": { transform: "translateX(20px)" },
          },
        }}
      >
        ☁️
      </Box>

      {/* 나무 */}
      <Box
        sx={{
          position: "absolute",
          top: "30px",
          left: "30px",
          fontSize: "35px",
          opacity: 0.8,
        }}
      >
        🌳
      </Box>

      {/* 양들과 목초지 요소들 */}
      {sheep.map((sheepEntity) => (
        <Box
          key={sheepEntity.id}
          sx={{
            position: "absolute",
            left: sheepEntity.x,
            top: sheepEntity.y,
            fontSize: sheepEntity.emoji === "🐑" ? "24px" : "16px",
            cursor: sheepEntity.project ? "pointer" : "default",
            transform: `translate(-50%, -50%) ${sheepEntity.isResting ? "scale(0.9)" : "scale(1)"}`,
            transition: "transform 0.3s ease",
            zIndex: sheepEntity.emoji === "🐑" ? 10 : 5,
            opacity: sheepEntity.isResting ? 0.8 : 1,
            "&:hover": {
              transform: "translate(-50%, -50%) scale(1.2)",
            },
          }}
          onMouseEnter={() => handleSheepHover(sheepEntity)}
        >
          {sheepEntity.emoji}
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
            border: "2px solid #4caf50",
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="#4caf50">
              🐑 {hoveredProject.title}
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
                  backgroundColor: "rgba(76, 175, 80, 0.2)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: `${hoveredProject.progress}%`,
                    backgroundColor: "#4caf50",
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

export default SheepScene;
