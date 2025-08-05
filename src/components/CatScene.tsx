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
  isHovered: boolean;
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
        isHovered: false,
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

        // hover 중이거나 고양이가 아니면 움직이지 않음
        if (newCat.isHovered || newCat.emoji !== "🐱") {
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

  const handleCatHover = (cat: CatEntity, isHovering: boolean) => {
    setCats((prevCats) => prevCats.map((c) => (c.id === cat.id ? { ...c, isHovered: isHovering } : c)));

    if (isHovering && cat.project && cat.emoji === "🐱") {
      setHoveredProject(cat.project);
    } else if (!isHovering) {
      setHoveredProject(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    setCats((prevCats) => prevCats.map((c) => ({ ...c, isHovered: false })));
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

  // 고정된 집 내부 장식 요소들
  const staticHomeElements = [
    { emoji: "🪟", x: "85%", y: "15%", size: "40px", opacity: 0.8 },
    { emoji: "🔥", x: "15%", y: "80%", size: "30px", opacity: 0.9 },
    { emoji: "📚", x: "20%", y: "25%", size: "25px", opacity: 0.7 },
    { emoji: "🖼️", x: "70%", y: "20%", size: "35px", opacity: 0.6 },
    { emoji: "🪴", x: "90%", y: "70%", size: "28px", opacity: 0.8 },
    { emoji: "🕯️", x: "25%", y: "70%", size: "20px", opacity: 0.7 },
    { emoji: "✨", x: "60%", y: "85%", size: "18px", opacity: 0.6 },
  ];

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: width,
        height: height,
        background: "linear-gradient(135deg, #FFF8E1 0%, #FFCC02 25%, #FF8A65 50%, #FF7043 100%)",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 고정된 집 내부 장식 요소들 */}
      {staticHomeElements.map((element, index) => (
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
            transform: `translate(-50%, -50%) ${
              cat.isHovered ? "scale(1.3)" : cat.isPouncing ? "scale(1.3) rotate(10deg)" : "scale(1)"
            }`,
            transition: cat.isPouncing || cat.isHovered ? "transform 0.1s ease" : "transform 0.3s ease",
            zIndex: cat.emoji === "🐱" ? 10 : 5,
            filter: cat.isHovered ? "drop-shadow(0 0 8px rgba(255, 112, 67, 0.8))" : "none",
          }}
          onMouseEnter={() => handleCatHover(cat, true)}
          onMouseLeave={() => handleCatHover(cat, false)}
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
            backdropFilter: "blur(8px)",
            backgroundColor: theme.palette.mode === "dark" ? "rgba(40, 30, 20, 0.95)" : "rgba(255, 248, 225, 0.95)",
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: theme.palette.mode === "dark" ? "#FF8A65" : "#ff7043",
              }}
            >
              🐱 {hoveredProject.title}
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
