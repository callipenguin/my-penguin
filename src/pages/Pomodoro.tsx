import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  useTheme,
  useMediaQuery,
  Fade,
  Alert,
  IconButton,
} from "@mui/material";
import { PlayArrow, Pause, Stop, Refresh, CheckCircle, Timer, AcUnit, Celebration } from "@mui/icons-material";
import * as THREE from "three";
import { Project, Task } from "../types";
import { loadUserData, getCurrentUser, savePomodoroSession } from "../utils/firebase";

// SimpleTodo 인터페이스 추가
interface SimpleTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

const Pomodoro: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const penguinRef = useRef<THREE.Group>();
  const animationIdRef = useRef<number>();

  // 뽀모도로 상태
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25분 (초 단위)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTask, setSelectedTask] = useState<SimpleTodo | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectTodos, setProjectTodos] = useState<{ [projectId: string]: SimpleTodo[] }>({});
  const [isBreak, setIsBreak] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  // 펭귄 위치 상태
  const [penguinProgress, setPenguinProgress] = useState(0);

  // 현재 세션 추적을 위한 상태
  const [sessionStartTime, setSessionStartTime] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastCompletedSession, setLastCompletedSession] = useState<{
    projectTitle: string;
    taskTitle: string;
    sessionType: string;
    duration: number;
  } | null>(null);

  useEffect(() => {
    loadProjects();
    loadProjectTodos();
    setupThreeJS();

    // 페이지 visibility 변경 시 데이터 새로고침
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log("🐧 Pomodoro 페이지 활성화 - 데이터 새로고침");
        loadProjectTodos();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // 타이머 효과
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
        // 펭귄 진행도 업데이트
        const totalTime = isBreak ? 5 * 60 : 25 * 60;
        setPenguinProgress(((totalTime - time + 1) / totalTime) * 100);
      }, 1000);
    } else if (time === 0) {
      handleTimerComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, isBreak]);

  const loadProjects = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "projects");
        if (result.success && result.data) {
          setProjects(result.data);
        }
      }
    } catch (error) {
      console.error("프로젝트 로드 실패:", error);
    }
  };

  const loadProjectTodos = async () => {
    try {
      const user = getCurrentUser();
      if (user) {
        const result = await loadUserData(user.uid, "projectTodos");
        if (result.success && result.data) {
          console.log("🐧 Pomodoro: Firebase에서 할일 로드 성공:", result.data);
          setProjectTodos(result.data);
        } else {
          console.log("🐧 Pomodoro: Firebase에 할일 데이터 없음");
        }
      } else {
        // 로그인되지 않은 경우 localStorage에서 로드
        const savedTodos = localStorage.getItem("projectTodos");
        if (savedTodos) {
          const parsedTodos = JSON.parse(savedTodos);
          console.log("🐧 Pomodoro: localStorage에서 할일 로드:", parsedTodos);
          setProjectTodos(parsedTodos);
        } else {
          console.log("🐧 Pomodoro: localStorage에도 할일 없음");
        }
      }
    } catch (error) {
      console.error("할일 로드 실패:", error);
      // Fallback to localStorage
      const savedTodos = localStorage.getItem("projectTodos");
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        console.log("🐧 Pomodoro: Fallback - localStorage에서 할일 로드:", parsedTodos);
        setProjectTodos(parsedTodos);
      }
    }
  };

  const setupThreeJS = () => {
    if (!mountRef.current) return;

    // 씬 생성
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f8ff);
    sceneRef.current = scene;

    // 카메라 생성 (더 넓은 시야각으로)
    const camera = new THREE.PerspectiveCamera(75, 400 / 200, 0.1, 1000);
    camera.position.set(0, 4, 12); // 좀 더 높이, 뒤로
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    // 렌더러 생성
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 200);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // 조명
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // 바닥 (빙하) - 더 길게!
    const groundGeometry = new THREE.PlaneGeometry(40, 8); // 20 → 40으로 더 길게
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0xe6f3ff,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 시작점 (더 멀리)
    const startGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.15, 16);
    const startMaterial = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
    const start = new THREE.Mesh(startGeometry, startMaterial);
    start.position.set(-18, 0.08, 0); // -8 → -18로 더 멀리
    scene.add(start);

    // 도착점 (더 멀리)
    const finishGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.15, 16);
    const finishMaterial = new THREE.MeshStandardMaterial({ color: 0xf44336 });
    const finish = new THREE.Mesh(finishGeometry, finishMaterial);
    finish.position.set(18, 0.08, 0); // 8 → 18로 더 멀리
    scene.add(finish);

    // 중간 지점 표시들 (진행상황을 더 잘 보이게)
    for (let i = -15; i <= 15; i += 6) {
      if (i !== -18 && i !== 18) {
        // 시작점, 도착점 제외
        const markerGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.05, 8);
        const markerMaterial = new THREE.MeshStandardMaterial({
          color: 0x81c784,
          transparent: true,
          opacity: 0.7,
        });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.set(i, 0.03, 0);
        scene.add(marker);
      }
    }

    // 펭귄 생성
    const penguin = createPenguin();
    penguin.position.set(-18, 0, 0); // 새로운 시작점
    penguinRef.current = penguin;
    scene.add(penguin);

    animate();
  };

  const createPenguin = (): THREE.Group => {
    const penguinGroup = new THREE.Group();

    // 몸통 (더 귀여운 비율로)
    const bodyGeometry = new THREE.SphereGeometry(0.4, 32, 16);
    bodyGeometry.scale(1, 1.3, 1); // 세로로 약간 늘리기
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.6,
      metalness: 0.1,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.5;
    body.castShadow = true;
    penguinGroup.add(body);

    // 검은색 등 부분
    const backGeometry = new THREE.SphereGeometry(0.38, 32, 16);
    backGeometry.scale(1, 1.3, 0.7);
    const backMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c2c2c,
      roughness: 0.7,
      metalness: 0.1,
    });
    const back = new THREE.Mesh(backGeometry, backMaterial);
    back.position.set(0, 0.55, -0.15);
    back.castShadow = true;
    penguinGroup.add(back);

    // 머리
    const headGeometry = new THREE.SphereGeometry(0.2, 32, 16);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c2c2c,
      roughness: 0.7,
      metalness: 0.1,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.95;
    head.castShadow = true;
    penguinGroup.add(head);

    // 부리 (더 귀여운 크기)
    const beakGeometry = new THREE.ConeGeometry(0.04, 0.1, 8);
    const beakMaterial = new THREE.MeshStandardMaterial({
      color: 0xff8c00,
      roughness: 0.3,
      metalness: 0.2,
    });
    const beak = new THREE.Mesh(beakGeometry, beakMaterial);
    beak.position.set(0, 0.95, 0.22);
    beak.rotation.x = Math.PI / 2;
    penguinGroup.add(beak);

    // 눈 (더 크고 귀엽게)
    const eyeGeometry = new THREE.SphereGeometry(0.06, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.08, 0.98, 0.15);
    penguinGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.08, 0.98, 0.15);
    penguinGroup.add(rightEye);

    // 눈동자
    const pupilGeometry = new THREE.SphereGeometry(0.03, 16, 16);
    const pupilMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.1,
      metalness: 0.8,
    });

    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.set(-0.08, 0.98, 0.18);
    penguinGroup.add(leftPupil);

    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.set(0.08, 0.98, 0.18);
    penguinGroup.add(rightPupil);

    // 발 (더 귀여운 크기)
    const footGeometry = new THREE.SphereGeometry(0.08, 16, 8);
    footGeometry.scale(1.3, 0.3, 1);
    const footMaterial = new THREE.MeshStandardMaterial({
      color: 0xff8c00,
      roughness: 0.4,
      metalness: 0.1,
    });

    const leftFoot = new THREE.Mesh(footGeometry, footMaterial);
    leftFoot.position.set(-0.15, 0.05, 0.2);
    leftFoot.castShadow = true;
    penguinGroup.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeometry, footMaterial);
    rightFoot.position.set(0.15, 0.05, 0.2);
    rightFoot.castShadow = true;
    penguinGroup.add(rightFoot);

    // 전체 크기 조정 (더 크게)
    penguinGroup.scale.setScalar(1.2);

    return penguinGroup;
  };

  const animate = () => {
    animationIdRef.current = requestAnimationFrame(animate);

    if (penguinRef.current && sceneRef.current && rendererRef.current && cameraRef.current) {
      // 펭귄 위치 업데이트 (진행도에 따라)
      const targetX = -18 + (penguinProgress / 100) * 36; // -18에서 18까지
      penguinRef.current.position.x = targetX;

      // 걷는 애니메이션 (더 역동적으로)
      if (isActive) {
        const time = Date.now() * 0.005; // 조금 더 빠르게

        // 기본 걷는 상하 바운스 (걷는 효과)
        const walkBounce = Math.abs(Math.sin(time * 6)) * 0.08;

        // 랜덤 점프 애니메이션 (가끔씩 높이 점프!)
        const jumpTime = time * 0.8; // 점프 주기
        const jumpPhase = jumpTime % (Math.PI * 4); // 4π 주기로 점프
        let jumpHeight = 0;

        // 점프는 주기의 특정 부분에서만 발생
        if (jumpPhase < Math.PI) {
          // 점프 구간: 부드러운 포물선 모양
          jumpHeight = Math.sin(jumpPhase) * 0.4; // 점프 높이
        }

        // 총 높이 = 기본 걸음 + 점프
        penguinRef.current.position.y = walkBounce + jumpHeight + 0.05;

        // 좌우 흔들림 (펭귄스러운 걸음걸이)
        penguinRef.current.rotation.z = Math.sin(time * 4) * 0.15;

        // 앞뒤 기울임 (점프할 때 더 역동적)
        const tiltIntensity = jumpHeight > 0 ? 0.2 : 0.1; // 점프 중일 때 더 기울임
        penguinRef.current.rotation.x = Math.sin(time * 3) * tiltIntensity;

        // 진행 방향으로 살짝 기울기 (점프 중일 때 앞으로 더 기울임)
        const forwardTilt = jumpHeight > 0 ? -0.3 : 0; // 점프할 때 앞으로 기울임
        penguinRef.current.rotation.y = Math.sin(time * 2) * 0.05 + forwardTilt;

        // 날개짓 효과 (점프할 때)
        if (jumpHeight > 0.1) {
          // 점프 중일 때 좌우로 더 크게 흔들림 (날개짓 효과)
          penguinRef.current.rotation.z = Math.sin(time * 12) * 0.3;
        }
      } else {
        // 정지 시 기본 자세로 복귀 (부드럽게)
        penguinRef.current.position.y = THREE.MathUtils.lerp(penguinRef.current.position.y, 0, 0.1);
        penguinRef.current.rotation.x = THREE.MathUtils.lerp(penguinRef.current.rotation.x, 0, 0.1);
        penguinRef.current.rotation.z = THREE.MathUtils.lerp(penguinRef.current.rotation.z, 0, 0.1);
        penguinRef.current.rotation.y = THREE.MathUtils.lerp(penguinRef.current.rotation.y, 0, 0.1);
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsActive(true);
    setSessionStartTime(new Date().toISOString());
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(isBreak ? 5 * 60 : 25 * 60);
    setPenguinProgress(0);
    setSessionStartTime(null);
  };

  const handleTimerComplete = async () => {
    setIsActive(false);
    setPenguinProgress(100);

    // 🍅 뽀모도로 세션 기록 저장
    if (sessionStartTime && selectedProject && selectedTask) {
      try {
        const user = getCurrentUser();
        if (user) {
          const sessionData = {
            projectId: selectedProject.id,
            projectTitle: selectedProject.title,
            taskId: selectedTask.id,
            taskTitle: selectedTask.title,
            sessionType: isBreak ? ("break" as const) : ("work" as const),
            duration: isBreak ? 5 : 25, // 분 단위
            startTime: sessionStartTime,
            endTime: new Date().toISOString(),
            completed: true,
          };

          const result = await savePomodoroSession(user.uid, sessionData);
          if (result.success) {
            console.log("✅ 뽀모도로 세션 저장 완료:", result.data);

            // 완료 정보 저장하고 축하 메시지 표시
            setLastCompletedSession({
              projectTitle: selectedProject.title,
              taskTitle: selectedTask.title,
              sessionType: isBreak ? "휴식" : "집중",
              duration: isBreak ? 5 : 25,
            });
            setShowCelebration(true);

            // 3초 후 축하 메시지 숨기기
            setTimeout(() => {
              setShowCelebration(false);
            }, 5000);
          } else {
            console.error("❌ 뽀모도로 세션 저장 실패:", result.error);
          }
        }
      } catch (error) {
        console.error("뽀모도로 세션 저장 중 오류:", error);
      }
    }

    if (!isBreak) {
      // 작업 완료
      setCompletedSessions((prev) => prev + 1);
      // 5분 휴식 시작
      setIsBreak(true);
      setTime(5 * 60);
    } else {
      // 휴식 완료
      setIsBreak(false);
      setTime(25 * 60);
    }

    setPenguinProgress(0);
    setSessionStartTime(null);

    // 축하 효과
    console.log(
      `🎉 ${isBreak ? "휴식" : "집중"} 완료! 프로젝트: ${selectedProject?.title}, 태스크: ${selectedTask?.title}`
    );
  };

  const availableTasks = selectedProject
    ? (projectTodos[selectedProject.id] || []).filter((todo) => !todo.completed)
    : [];

  // 디버깅: availableTasks 계산 결과 확인
  useEffect(() => {
    if (selectedProject) {
      console.log("🐧 선택된 프로젝트:", selectedProject.title, selectedProject.id);
      console.log("🐧 전체 projectTodos:", projectTodos);
      console.log("🐧 이 프로젝트의 할일들:", projectTodos[selectedProject.id]);
      console.log("🐧 사용 가능한 할일들:", availableTasks);
    }
  }, [selectedProject, projectTodos, availableTasks]);

  return (
    <Box sx={{ p: isMobile ? 2 : 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Timer /> 🐧 펭귄 뽀모도로
        </Typography>
        <Typography variant="body1" color="textSecondary">
          펭귄과 함께 집중해서 작업을 완료해보세요! 🍅
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 3 }}>
        {/* 축하 메시지 (완료 시) */}
        <Fade in={showCelebration}>
          <Card
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              minWidth: 400,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <CardContent sx={{ textAlign: "center", py: 4 }}>
              <Celebration sx={{ fontSize: 80, mb: 2, color: "#FFD700" }} />
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                🎉 완료!
              </Typography>
              {lastCompletedSession && (
                <>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    {lastCompletedSession.duration}분 {lastCompletedSession.sessionType} 세션 완료
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      borderRadius: 2,
                      p: 2,
                      mb: 2,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography variant="body1" fontWeight="bold">
                      📁 {lastCompletedSession.projectTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      ✅ {lastCompletedSession.taskTitle}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    훌륭해요! 계속해서 집중력을 유지해보세요 🐧
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Fade>

        {/* 왼쪽: 설정 패널 */}
        <Card sx={{ flex: 1, maxWidth: isMobile ? "100%" : 400 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AcUnit color="primary" /> 작업 설정
            </Typography>

            {/* 프로젝트 선택 */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>프로젝트 선택</InputLabel>
              <Select
                value={selectedProject?.id || ""}
                label="프로젝트 선택"
                onChange={(e) => {
                  const project = projects.find((p) => p.id === e.target.value);
                  setSelectedProject(project || null);
                  setSelectedTask(null);

                  // 프로젝트 선택 시 할일 데이터 새로고침
                  if (project) {
                    console.log("🐧 프로젝트 선택됨, 할일 데이터 새로고침:", project.title);
                    loadProjectTodos();
                  }
                }}
              >
                {projects.map((project) => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* 태스크 선택 */}
            {selectedProject && (
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>태스크 선택</InputLabel>
                <Select
                  value={selectedTask?.id || ""}
                  label="태스크 선택"
                  onChange={(e) => {
                    const task = availableTasks.find((t) => t.id === e.target.value);
                    setSelectedTask(task || null);
                  }}
                >
                  {availableTasks.map((task) => (
                    <MenuItem key={task.id} value={task.id}>
                      {task.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            {/* 할일이 없을 때 안내 메시지 */}
            {selectedProject && availableTasks.length === 0 && (
              <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  📝 이 프로젝트에는 아직 할일이 없어요!
                  <br />
                  빙하 탐험에서 할일을 추가해보세요! 🐧
                </Typography>
              </Alert>
            )}

            {/* 현재 상태 */}
            <Alert severity={isBreak ? "info" : "success"} sx={{ mb: 2 }}>
              {isBreak ? "🧊 휴식 시간입니다!" : "🐧 집중 시간입니다!"}
            </Alert>

            <Typography variant="body2" color="text.secondary">
              완료된 세션: {completedSessions}개 🎯
            </Typography>
          </CardContent>
        </Card>

        {/* 오른쪽: 타이머 & 펭귄 */}
        <Box sx={{ flex: 1 }}>
          {/* 타이머 디스플레이 */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                {formatTime(time)}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={penguinProgress}
                sx={{
                  height: 12,
                  borderRadius: 6,
                  mb: 3,
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 6,
                    background: "linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)",
                  },
                }}
              />

              {/* 컨트롤 버튼 */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                {!isActive ? (
                  <Button
                    variant="contained"
                    startIcon={<PlayArrow />}
                    onClick={startTimer}
                    size="large"
                    disabled={!selectedTask}
                  >
                    시작
                  </Button>
                ) : (
                  <Button variant="contained" startIcon={<Pause />} onClick={pauseTimer} size="large" color="warning">
                    일시정지
                  </Button>
                )}

                <IconButton onClick={resetTimer} size="large">
                  <Refresh />
                </IconButton>

                {penguinProgress === 100 && (
                  <Button
                    variant="contained"
                    startIcon={<CheckCircle />}
                    color="success"
                    size="large"
                    onClick={() => {
                      // 다음 세션 시작
                      resetTimer();
                    }}
                  >
                    완료! 🎉
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>

          {/* 펭귄 씬 */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
                🐧 펭귄의 여행
              </Typography>
              <Box
                ref={mountRef}
                sx={{
                  width: "100%",
                  height: 200,
                  borderRadius: 2,
                  overflow: "hidden",
                  "& canvas": {
                    width: "100% !important",
                    height: "100% !important",
                  },
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mt: 1 }}>
                시작점에서 도착점까지 펭귄이 걸어갑니다! 🚶‍♂️
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Pomodoro;
