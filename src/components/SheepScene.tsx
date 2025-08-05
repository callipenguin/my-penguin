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
  isHovered: boolean;
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
        isHovered: false,
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

        // hover 중이거나 양이 아니거나 쉬는 중이면 움직이지 않음
        if (newSheep.isHovered || newSheep.emoji !== "🐑" || newSheep.isResting) {
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

  const handleSheepHover = (sheepEntity: SheepEntity, isHovering: boolean) => {
    setSheep((prevSheep) => prevSheep.map((s) => (s.id === sheepEntity.id ? { ...s, isHovered: isHovering } : s)));

    if (isHovering && sheepEntity.project && sheepEntity.emoji === "🐑") {
      setHoveredProject(sheepEntity.project);
    } else if (!isHovering) {
      setHoveredProject(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    setSheep((prevSheep) => prevSheep.map((s) => ({ ...s, isHovered: false })));
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

  // 고정된 목초지 장식 요소들
  const staticMeadowElements = [
    { emoji: "🌳", x: "10%", y: "20%", size: "45px", opacity: 0.8 },
    { emoji: "☁️", x: "80%", y: "15%", size: "35px", opacity: 0.9 },
    { emoji: "🏠", x: "85%", y: "75%", size: "30px", opacity: 0.7 },
    { emoji: "🌻", x: "25%", y: "85%", size: "25px", opacity: 0.8 },
    { emoji: "🦋", x: "70%", y: "30%", size: "20px", opacity: 0.6 },
    { emoji: "🌾", x: "15%", y: "70%", size: "22px", opacity: 0.7 },
    { emoji: "🌿", x: "90%", y: "45%", size: "18px", opacity: 0.6 },
  ];

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: width,
        height: height,
        background: "linear-gradient(135deg, #E8F5E8 0%, #C8E6C9 25%, #81C784 50%, #4CAF50 100%)",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 고정된 목초지 장식 요소들 */}
      {staticMeadowElements.map((element, index) => (
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
            transform: `translate(-50%, -50%) ${
              sheepEntity.isHovered ? "scale(1.3)" : sheepEntity.isResting ? "scale(0.9)" : "scale(1)"
            }`,
            transition: "transform 0.3s ease",
            zIndex: sheepEntity.emoji === "🐑" ? 10 : 5,
            opacity: sheepEntity.isResting ? 0.8 : 1,
            filter: sheepEntity.isHovered ? "drop-shadow(0 0 8px rgba(76, 175, 80, 0.8))" : "none",
          }}
          onMouseEnter={() => handleSheepHover(sheepEntity, true)}
          onMouseLeave={() => handleSheepHover(sheepEntity, false)}
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
            backdropFilter: "blur(8px)",
            backgroundColor: theme.palette.mode === "dark" ? "rgba(20, 40, 20, 0.95)" : "rgba(232, 245, 232, 0.95)",
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: theme.palette.mode === "dark" ? "#81C784" : "#4caf50",
              }}
            >
              🐑 {hoveredProject.title}
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
