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
  const trailGroupRef = useRef<THREE.Group>(); // 궤적을 위한 그룹

  // 🔧 isActive 상태 참조 문제 해결을 위한 ref
  const isActiveRef = useRef(false);
  const penguinProgressRef = useRef(0);

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

  // 궤적 관련 상태
  const [penguinTrail, setPenguinTrail] = useState<Array<{ x: number; y: number; z: number; time: number }>>([]);

  // 현재 세션 추적을 위한 상태
  const [sessionStartTime, setSessionStartTime] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastCompletedSession, setLastCompletedSession] = useState<{
    projectTitle: string;
    taskTitle: string;
    sessionType: string;
    duration: number;
  } | null>(null);

  // 🔧 ref 상태 동기화
  useEffect(() => {
    isActiveRef.current = isActive;
    console.log("🔄 isActive 상태 업데이트:", isActive);
  }, [isActive]);

  useEffect(() => {
    penguinProgressRef.current = penguinProgress;
  }, [penguinProgress]);

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

    // 리사이즈 이벤트 리스너
    const handleResize = () => {
      if (rendererRef.current && cameraRef.current && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = Math.min(400, width * 0.6); // 적절한 비율로 높이 설정
        rendererRef.current.setSize(width, height);
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 궤적 업데이트 (1초마다) - 강화된 버전
  useEffect(() => {
    // 펭귄과 씬이 준비될 때까지 기다리기
    const startTrailSystem = () => {
      if (!penguinRef.current || !sceneRef.current) {
        console.log("⏳ 펭귄이나 씬이 아직 준비되지 않음. 1초 후 재시도...");
        setTimeout(startTrailSystem, 1000);
        return;
      }

      console.log("🚀 궤적 시스템 시작! 펭귄 위치:", penguinRef.current.position);

      // 궤적 생성 (타이머 상태에 따라 빈도 조절)
      const interval = setInterval(() => {
        if (penguinRef.current && sceneRef.current) {
          // 🔧 해결책: 항상 궤적 생성하되 빈도 조절!
          const trailInterval = isActive ? 1000 : 3000; // 활성화: 1초마다, 비활성화: 3초마다

          console.log("✨ 궤적 생성 상태:", {
            isActive: isActive,
            interval: isActive ? "1초" : "3초",
            currentTrailCount: penguinTrail.length,
          });

          const currentPos = penguinRef.current.position;

          // 위치가 유효한지 확인
          if (isNaN(currentPos.x) || isNaN(currentPos.y) || isNaN(currentPos.z)) {
            console.log("❌ 펭귄 위치가 유효하지 않음:", currentPos);
            return;
          }

          const newTrailPoint = {
            x: currentPos.x,
            y: currentPos.y,
            z: currentPos.z,
            time: Date.now(),
          };

          console.log("✨ 새로운 궤적 추가:", {
            position: {
              x: currentPos.x.toFixed(2),
              y: currentPos.y.toFixed(2),
              z: currentPos.z.toFixed(2),
            },
            isActive: isActive,
            currentTrailCount: penguinTrail.length,
          });

          setPenguinTrail((prev) => {
            const updated = [...prev, newTrailPoint];
            // 오래된 궤적 제거 (30초 이상)
            const cutoffTime = Date.now() - 30000;
            const filtered = updated.filter((point) => point.time > cutoffTime);

            if (filtered.length !== updated.length) {
              console.log("🗑️ 오래된 궤적 제거:", updated.length - filtered.length, "개");
            }

            console.log("📊 궤적 상태 업데이트:", {
              이전: prev.length,
              추가후: updated.length,
              정리후: filtered.length,
            });

            return filtered;
          });
        } else {
          console.log("❌ 펭귄 ref가 없어요! penguinRef:", !!penguinRef.current, "sceneRef:", !!sceneRef.current);
        }
      }, 1000); // 일단 1초 고정, 나중에 동적으로 변경 가능

      return () => {
        console.log("🛑 궤적 시스템 정리");
        clearInterval(interval);
      };
    };

    // 시스템 시작
    const cleanup = startTrailSystem();

    return cleanup;
  }, [isActive]); // isActive 상태 변경 시 궤적 시스템 재시작

  // 타이머 효과
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          // 펭귄 진행도 업데이트
          const totalTime = isBreak ? 5 * 60 : 25 * 60;
          const newProgress = ((totalTime - newTime) / totalTime) * 100;

          // 디버깅 로그 (10초마다)
          if (newTime % 10 === 0) {
            console.log("⏰ 타이머 업데이트:", {
              totalTime,
              remainingTime: newTime,
              progress: newProgress,
              isActive,
              isBreak,
            });
          }

          setPenguinProgress(newProgress);
          return newTime;
        });
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

    // 동적 크기 계산
    const width = mountRef.current.clientWidth;
    const height = Math.min(400, width * 0.6);

    // 카메라 생성 (더 가까이, 측면에서 보도록)
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(3, 6, 10); // 약간 측면에서 보도록 조정
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 렌더러 생성 (동적 크기)
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // 조명 강화
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // 더 밝게
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // 더 밝게
    directionalLight.position.set(5, 8, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // 원형 빙하 플랫폼 생성 (더 화려하게)
    const iceGeometry = new THREE.CylinderGeometry(8, 8, 0.5, 32);
    const iceMaterial = new THREE.MeshStandardMaterial({
      color: 0xe6f3ff,
      roughness: 0.2,
      metalness: 0.3,
      transparent: true,
      opacity: 0.8,
    });
    const icePlatform = new THREE.Mesh(iceGeometry, iceMaterial);
    icePlatform.position.y = -0.25;
    icePlatform.receiveShadow = true;
    scene.add(icePlatform);

    // 시작점 표시 (더 눈에 띄게)
    const startGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 16);
    const startMaterial = new THREE.MeshStandardMaterial({
      color: 0x4caf50,
      emissive: 0x4caf50,
      emissiveIntensity: 0.3,
    });
    const start = new THREE.Mesh(startGeometry, startMaterial);
    start.position.set(6, 0.1, 0);
    scene.add(start);

    // 궤적 그룹 생성
    const trailGroup = new THREE.Group();
    trailGroupRef.current = trailGroup;
    scene.add(trailGroup);

    // 펭귄 생성
    const penguin = createPenguin();
    penguin.position.set(6, 0, 0); // 원 가장자리에서 시작
    penguinRef.current = penguin;
    scene.add(penguin);

    console.log("🐧 Three.js 초기화 완료! 펭귄 위치:", penguin.position);

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

    // 부리
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

    // 눈
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

    // 발
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

    // 전체 크기 조정
    penguinGroup.scale.setScalar(1.2);

    return penguinGroup;
  };

  // 궤적 업데이트 함수 (더 화려하고 확실하게)
  const updateTrail = () => {
    if (!trailGroupRef.current) {
      console.log("❌ trailGroupRef가 없어요!");
      return;
    }

    // 기존 궤적 제거
    while (trailGroupRef.current.children.length > 0) {
      const child = trailGroupRef.current.children[0];
      trailGroupRef.current.remove(child);
    }

    // 궤적이 있는지 확인
    if (penguinTrail.length === 0) {
      return;
    }

    console.log(`🎨 궤적 렌더링 중: ${penguinTrail.length}개 점`);

    // 새로운 궤적 추가 (더 화려하고 확실하게)
    penguinTrail.forEach((point, index) => {
      const age = (Date.now() - point.time) / 1000; // 초 단위
      const opacity = Math.max(0.2, 1 - age / 30); // 최소 0.2 투명도 유지
      const scale = Math.max(0.5, 1 - age / 30); // 최소 0.5 크기 유지

      // 더 크고 밝은 궤적 점
      const trailGeometry = new THREE.SphereGeometry(0.15 * scale, 12, 12); // 크기 2배 증가
      const trailMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff, // 더 밝은 사이안 색상
        transparent: true,
        opacity: opacity,
        emissive: 0x00ffff, // 스스로 빛나도록
        emissiveIntensity: 0.6 * opacity, // 더 강한 발광
        metalness: 0.1,
        roughness: 0.1,
      });

      const trailPoint = new THREE.Mesh(trailGeometry, trailMaterial);
      trailPoint.position.set(point.x, 0.2, point.z); // 더 높게 배치

      // 궤적 점이 약간 반짝이도록
      const sparkleTime = Date.now() * 0.005;
      trailPoint.scale.setScalar(1 + Math.sin(sparkleTime + index) * 0.2);

      if (trailGroupRef.current) {
        trailGroupRef.current.add(trailPoint);
      }
    });

    console.log(`✨ 궤적 렌더링 완료: ${trailGroupRef.current.children.length}개 점 표시됨`);
  };

  const animate = () => {
    animationIdRef.current = requestAnimationFrame(animate);

    if (penguinRef.current && sceneRef.current && rendererRef.current && cameraRef.current) {
      const currentTime = Date.now() * 0.001; // 초 단위

      // 🔧 강력한 디버깅 - 항상 상태 추적
      if (Math.random() < 0.1) {
        // 10% 확률로 로그
        console.log("🔍 실시간 상태 추적:", {
          isActive: isActive,
          penguinProgress: penguinProgress,
          time: time,
          currentTime: currentTime.toFixed(2),
        });
      }

      // 🎯 해결책: 항상 움직이되 속도만 조절!
      const progress = penguinProgress / 100;

      // 타이머 상태에 따라 속도 조절 (항상 움직임!)
      const timeSpeed = isActive ? 0.5 : 0.1; // 빠름 vs 느림
      const timeBasedRotation = currentTime * timeSpeed;

      // 원형 경로 계산 (항상 실행!)
      const angle = progress * Math.PI * 2 + timeBasedRotation;
      const radius = 6;
      const targetX = Math.cos(angle) * radius;
      const targetZ = Math.sin(angle) * radius;

      // 펭귄 위치 업데이트 (항상!)
      penguinRef.current.position.x = targetX;
      penguinRef.current.position.z = targetZ;

      // 강화된 걷기 애니메이션 (항상!)
      const animSpeed = isActive ? 8 : 4; // 활성화 시 더 빠른 애니메이션
      const animTime = currentTime * animSpeed;
      const walkBounce = Math.abs(Math.sin(animTime)) * 0.15;

      // 점프 애니메이션 (항상!)
      const jumpPhase = (animTime * 2) % (Math.PI * 1.2);
      let jumpHeight = 0;
      if (jumpPhase < Math.PI * 0.8) {
        jumpHeight = Math.sin(jumpPhase / 0.8) * (isActive ? 1.5 : 0.8); // 활성화 시 더 높은 점프
      }

      // 총 높이 (항상!)
      penguinRef.current.position.y = walkBounce + jumpHeight + 0.1;

      // 펭귄 방향 설정 (항상!)
      const directionAngle = angle + Math.PI / 2;
      penguinRef.current.rotation.y = directionAngle;

      // 걷기 애니메이션 (항상!)
      const walkTilt = Math.sin(animTime) * (isActive ? 0.3 : 0.15); // 활성화 시 더 큰 흔들림
      penguinRef.current.rotation.z = walkTilt;

      // 점프 효과 (항상!)
      if (jumpHeight > 0.5) {
        penguinRef.current.rotation.z = Math.sin(animTime * 3) * 0.6;
        penguinRef.current.rotation.x = -0.4;
      } else {
        penguinRef.current.rotation.x = THREE.MathUtils.lerp(penguinRef.current.rotation.x, 0, 0.1);
      }

      // 매번 움직임 상태 로그
      if (Math.random() < 0.05) {
        // 5% 확률로 위치 로그
        console.log("🐧 펭귄 움직임 확인:", {
          position: {
            x: targetX.toFixed(2),
            z: targetZ.toFixed(2),
            y: penguinRef.current.position.y.toFixed(2),
          },
          angle: angle.toFixed(2),
          isActive: isActive,
          timeSpeed: timeSpeed,
        });
      }

      // 궤적 업데이트
      updateTrail();

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    console.log("🚀🚀🚀 startTimer 호출! 현재 상태:", {
      이전_isActive: isActive,
      현재_time: time,
      penguinProgress: penguinProgress,
    });

    setIsActive(true);
    setSessionStartTime(new Date().toISOString());

    // 즉시 상태 확인
    setTimeout(() => {
      console.log("🔍 startTimer 후 상태 확인:", {
        isActive: isActive,
        time: time,
        penguinProgress: penguinProgress,
      });
    }, 100);

    console.log("✅ startTimer 완료! 펭귄이 움직여야 함!");
  };

  const pauseTimer = () => {
    console.log("⏸️⏸️⏸️ pauseTimer 호출! 현재 상태:", {
      이전_isActive: isActive,
      현재_time: time,
    });

    setIsActive(false);

    // 즉시 상태 확인
    setTimeout(() => {
      console.log("🔍 pauseTimer 후 상태 확인:", {
        isActive: isActive,
        time: time,
      });
    }, 100);

    console.log("⏸️ pauseTimer 완료! 펭귄이 천천히 움직여야 함!");
  };

  const resetTimer = () => {
    console.log("🔄🔄🔄 resetTimer 호출!");

    setIsActive(false);
    setTime(isBreak ? 5 * 60 : 25 * 60);
    setPenguinProgress(0);
    setSessionStartTime(null);
    setPenguinTrail([]); // 궤적도 초기화

    console.log("🔄 resetTimer 완료! 모든 상태 초기화!");
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
          집중할 준비가 되면 시작해보세요! 펭귄이 빙하를 돌며 함께해줄 거예요! 🐧⭐️
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
              minWidth: isMobile ? 300 : 400,
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

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              궤적 포인트: {penguinTrail.length}개 ✨
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
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
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

          {/* 펭귄 씬 - 반응형 크기 */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
                🐧 펭귄의 빙하 한 바퀴 여행
              </Typography>
              <Box
                ref={mountRef}
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 300, md: 400 }, // 반응형 높이
                  borderRadius: 2,
                  overflow: "hidden",
                  bgcolor: "#f0f8ff",
                  "& canvas": {
                    width: "100% !important",
                    height: "100% !important",
                    borderRadius: 2,
                  },
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mt: 2 }}>
                🐧 펭귄이 시작 버튼을 기다리며 대기 중이에요! <br />
                ▶️ 타이머 시작하면 빙하를 빠르게 돌며 청록색 궤적을 남겨요! <br />✨ 궤적은 1초마다 생성되고 30초 후
                자연스럽게 사라져요!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Pomodoro;
