import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { Project } from "../types";

interface CatSceneProps {
  width?: number;
  height?: number;
  projects?: Project[];
}

interface CatEntity {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  emoji: string;
  project?: Project;
  lastMove: number;
  isPouncing: boolean;
  pounceEndTime: number;
}

const CatScene: React.FC<CatSceneProps> = ({ width = 800, height = 400, projects = [] }) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [cats, setCats] = useState<CatEntity[]>([]);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 고양이 개체 생성
  const createCats = useCallback(() => {
    const newCats: CatEntity[] = [];
    const catCount = Math.max(3, Math.min(projects.length + 2, 8));

    for (let i = 0; i < catCount; i++) {
      const cat: CatEntity = {
        id: i,
        x: Math.random() * (width - 60) + 30,
        y: Math.random() * (height - 60) + 30,
        targetX: Math.random() * (width - 60) + 30,
        targetY: Math.random() * (height - 60) + 30,
        speed: 0.5 + Math.random() * 0.4, // 0.5~0.9 속도 (고양이는 빠름)
        emoji: i % 4 === 0 ? "🐱" : i % 4 === 1 ? "🧶" : i % 4 === 2 ? "🪑" : "🛏️", // 고양이, 실뭉치, 가구들
        project: projects[i] || undefined,
        lastMove: Date.now(),
        isPouncing: false,
        pounceEndTime: 0,
      };
      newCats.push(cat);
    }

    setCats(newCats);
  }, [width, height, projects]);

  // 고양이 움직임 업데이트
  const updateCats = useCallback(() => {
    setCats((prevCats) =>
      prevCats.map((cat) => {
        const now = Date.now();
        let newCat = { ...cat };

        // 점프 중인지 체크
        if (newCat.isPouncing && now > newCat.pounceEndTime) {
          newCat.isPouncing = false;
        }

        // 고양이 이모지만 움직임
        if (newCat.emoji !== "🐱") {
          return newCat;
        }

        // 목표 지점에 도달했거나 일정 시간 후 새 목표 설정
        const distance = Math.sqrt(Math.pow(newCat.x - newCat.targetX, 2) + Math.pow(newCat.y - newCat.targetY, 2));

        if (distance < 5 || now - newCat.lastMove > 2000 + Math.random() * 2000) {
          // 때때로 점프 모션
          if (Math.random() < 0.3) {
            newCat.isPouncing = true;
            newCat.pounceEndTime = now + 500;
          }

          newCat.targetX = Math.random() * (width - 60) + 30;
          newCat.targetY = Math.random() * (height - 60) + 30;
          newCat.lastMove = now;
        }

        // 부드럽게 목표 지점으로 이동 (점프 중일 때는 더 빠르게)
        const dx = newCat.targetX - newCat.x;
        const dy = newCat.targetY - newCat.y;
        const currentSpeed = newCat.isPouncing ? newCat.speed * 2 : newCat.speed;
        const moveDistance = Math.min(currentSpeed, distance);

        if (distance > 0) {
          newCat.x += (dx / distance) * moveDistance;
          newCat.y += (dy / distance) * moveDistance;
        }

        return newCat;
      })
    );
  }, [width, height]);

  // 애니메이션 루프
  const animate = useCallback(() => {
    updateCats();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateCats]);

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

  const handleCatHover = (cat: CatEntity) => {
    if (cat.project && cat.emoji === "🐱") {
      setHoveredProject(cat.project);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  // 초기화 및 애니메이션 시작
  useEffect(() => {
    createCats();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createCats, animate]);

  // 집 내부 장식 요소들
  const homeElements = Array.from({ length: 12 }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        fontSize: "14px",
        opacity: 0.6,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
        "@keyframes twinkle": {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.1)" },
        },
      }}
    >
      {i % 5 === 0 ? "✨" : i % 5 === 1 ? "🕯️" : i % 5 === 2 ? "📚" : i % 5 === 3 ? "🖼️" : "🪴"}
    </Box>
  ));

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: width,
        height: height,
        background: "radial-gradient(circle at 50% 30%, #fff8e1 0%, #ffcc02 40%, #ff7043 100%)",
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
          background: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='home' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFF8E1'/%3E%3Ccircle cx='5' cy='5' r='2' fill='%23FFCC02'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%23FFCC02'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23home)'/%3E%3C/svg%3E")`,
          opacity: 0.3,
          pointerEvents: "none",
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 집 내부 장식 요소들 */}
      {homeElements}

      {/* 창문 */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "30px",
          fontSize: "35px",
          opacity: 0.8,
          animation: "sunshine 6s ease-in-out infinite",
          "@keyframes sunshine": {
            "0%, 100%": { opacity: 0.8 },
            "50%": { opacity: 1 },
          },
        }}
      >
        🪟
      </Box>

      {/* 벽난로 */}
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          fontSize: "25px",
          opacity: 0.9,
          animation: "flicker 2s ease-in-out infinite",
          "@keyframes flicker": {
            "0%, 100%": { opacity: 0.9 },
            "50%": { opacity: 0.7 },
          },
        }}
      >
        🔥
      </Box>

      {/* 고양이들과 집 안 요소들 */}
      {cats.map((cat) => (
        <Box
          key={cat.id}
          sx={{
            position: "absolute",
            left: cat.x,
            top: cat.y,
            fontSize: cat.emoji === "🐱" ? "24px" : "18px",
            cursor: cat.project ? "pointer" : "default",
            transform: `translate(-50%, -50%) ${cat.isPouncing ? "scale(1.3) rotate(10deg)" : "scale(1)"}`,
            transition: cat.isPouncing ? "transform 0.1s ease" : "transform 0.3s ease",
            zIndex: cat.emoji === "🐱" ? 10 : 5,
            "&:hover": {
              transform: "translate(-50%, -50%) scale(1.2)",
            },
          }}
          onMouseEnter={() => handleCatHover(cat)}
        >
          {cat.emoji}
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
            border: "2px solid #ff7043",
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="#ff7043">
              🐱 {hoveredProject.title}
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
                  backgroundColor: "rgba(255, 112, 67, 0.2)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: `${hoveredProject.progress}%`,
                    backgroundColor: "#ff7043",
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

export default CatScene;
