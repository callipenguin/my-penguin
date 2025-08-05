import React, { useRef, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import * as THREE from "three";
import { Project } from "../types";

interface ModernPenguinSceneProps {
  width?: number;
  height?: number;
  projects?: Project[];
}

const ModernPenguinScene: React.FC<ModernPenguinSceneProps> = ({ width = 800, height = 400, projects = [] }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const penguinsRef = useRef<THREE.Group[]>([]);
  const animationIdRef = useRef<number>();
  const snowParticlesRef = useRef<THREE.Points>();
  const jumpingFishRef = useRef<
    Array<{
      mesh: THREE.Group;
      startTime: number;
      startPos: THREE.Vector3;
      targetPos: THREE.Vector3;
      duration: number;
    }>
  >([]);

  // 마우스 추적을 위한 상태
  const mousePositionRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const worldMousePositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const [isMouseHovering, setIsMouseHovering] = React.useState(false);
  const [hoveredPenguin, setHoveredPenguin] = React.useState<any>(null);

  // 마우스 이벤트 핸들러
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!mountRef.current || !cameraRef.current || !sceneRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    mousePositionRef.current.set(x, y);

    // 마우스 위치를 3D 월드 좌표로 변환
    const vector = new THREE.Vector3(x, y, 0.5);
    vector.unproject(cameraRef.current);
    const dir = vector.sub(cameraRef.current.position).normalize();
    const distance = -cameraRef.current.position.y / dir.y;
    const pos = cameraRef.current.position.clone().add(dir.multiplyScalar(distance));

    worldMousePositionRef.current.copy(pos);

    // 펭귄 호버 감지 (raycasting)
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mousePositionRef.current, cameraRef.current);

    // 모든 펭귄들과 교차점 계산
    const penguinMeshes: THREE.Mesh[] = [];
    penguinsRef.current.forEach((penguin) => {
      penguin.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.userData.penguin = penguin; // 펭귄 정보 저장
          penguinMeshes.push(child);
        }
      });
    });

    const intersects = raycaster.intersectObjects(penguinMeshes);

    if (intersects.length > 0) {
      const hoveredPenguinGroup = intersects[0].object.userData.penguin;
      setHoveredPenguin(hoveredPenguinGroup.userData.project);
    } else {
      setHoveredPenguin(null);
    }
  };

  const handleMouseEnter = () => {
    setIsMouseHovering(true);
  };

  const handleMouseLeave = () => {
    setIsMouseHovering(false);
  };

  // 프로젝트 상태별 색상 매핑
  const getStatusColor = (status: string, progress: number) => {
    switch (status) {
      case "planning":
        return {
          body: 0x2c2c2c, // 검은색
          accent: 0xff8c00, // 주황색
        };
      case "active":
        return {
          body: progress > 70 ? 0x2e7d32 : 0x2c2c2c,
          accent: 0xff8c00, // 주황색
        };
      case "paused":
        return {
          body: 0x757575,
          accent: 0xff8c00, // 주황색
        };
      case "completed":
        return {
          body: 0x2e7d32,
          accent: 0xff8c00, // 주황색
        };
      case "cancelled":
        return {
          body: 0xd32f2f,
          accent: 0xff8c00, // 주황색
        };
      default:
        return {
          body: 0x2c2c2c,
          accent: 0xff8c00, // 주황색
        };
    }
  };

  // 현실적인 펭귄 생성 함수
  const createModernPenguin = (colors: any, index: number): THREE.Group => {
    const penguinGroup = new THREE.Group();

    // 흰색 몸통 (물방울/배 모양)
    const bodyGeometry = new THREE.SphereGeometry(0.6, 32, 16);
    bodyGeometry.scale(1, 1.5, 1); // 세로로 늘려서 타원형으로
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff, // 펭귄 배는 흰색
      roughness: 0.7,
      metalness: 0.05,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.2;
    body.castShadow = true;
    penguinGroup.add(body);

    // 검은색 등과 머리 덮개 (펭귄의 특징적인 등 부분)
    const backGeometry = new THREE.SphereGeometry(0.55, 32, 16);
    backGeometry.scale(1, 1.6, 0.8); // 약간 납작하게
    const backMaterial = new THREE.MeshStandardMaterial({
      color: colors.body, // 상태별 색상
      roughness: 0.8,
      metalness: 0.1,
    });
    const back = new THREE.Mesh(backGeometry, backMaterial);
    back.position.set(0, 1.3, -0.2); // 약간 뒤쪽에 배치
    back.castShadow = true;
    penguinGroup.add(back);

    // 목 (머리와 몸을 연결)
    const neckGeometry = new THREE.CylinderGeometry(0.25, 0.28, 0.3, 16);
    const neckMaterial = new THREE.MeshStandardMaterial({
      color: colors.body,
      roughness: 0.8,
      metalness: 0.1,
    });
    const neck = new THREE.Mesh(neckGeometry, neckMaterial);
    neck.position.y = 1.8;
    neck.castShadow = true;
    penguinGroup.add(neck);

    // 검은색 머리 (둥근 형태)
    const headGeometry = new THREE.SphereGeometry(0.32, 32, 16);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: colors.body,
      roughness: 0.8,
      metalness: 0.1,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2.1;
    head.castShadow = true;
    penguinGroup.add(head);

    // 왼쪽 날개 (flipper)
    const wingGeometry = new THREE.SphereGeometry(0.15, 16, 8);
    wingGeometry.scale(0.4, 1.2, 0.2); // 납작한 flipper 모양
    const wingMaterial = new THREE.MeshStandardMaterial({
      color: colors.body,
      roughness: 0.8,
      metalness: 0.1,
    });

    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-0.5, 1.2, -0.1);
    leftWing.rotation.z = 0.3; // 자연스러운 각도
    leftWing.castShadow = true;
    penguinGroup.add(leftWing);

    // 오른쪽 날개
    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(0.5, 1.2, -0.1);
    rightWing.rotation.z = -0.3;
    rightWing.castShadow = true;
    penguinGroup.add(rightWing);

    // 주황색 부리 (더 현실적인 길이)
    const beakGeometry = new THREE.ConeGeometry(0.06, 0.25, 8);
    const beakMaterial = new THREE.MeshStandardMaterial({
      color: colors.accent, // 주황색
      roughness: 0.3,
      metalness: 0.2,
    });
    const beak = new THREE.Mesh(beakGeometry, beakMaterial);
    beak.position.set(0, 2.1, 0.4);
    beak.rotation.x = Math.PI / 2;
    beak.castShadow = true;
    penguinGroup.add(beak);

    // 눈 (흰색 바탕)
    const eyeBaseGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeBaseMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.1,
    });

    const leftEyeBase = new THREE.Mesh(eyeBaseGeometry, eyeBaseMaterial);
    leftEyeBase.position.set(-0.15, 2.15, 0.25);
    penguinGroup.add(leftEyeBase);

    const rightEyeBase = new THREE.Mesh(eyeBaseGeometry, eyeBaseMaterial);
    rightEyeBase.position.set(0.15, 2.15, 0.25);
    penguinGroup.add(rightEyeBase);

    // 눈동자 (검은색)
    const pupilGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const pupilMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.1,
      metalness: 0.8,
    });

    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.set(-0.15, 2.15, 0.3);
    penguinGroup.add(leftPupil);

    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.set(0.15, 2.15, 0.3);
    penguinGroup.add(rightPupil);

    // 주황색 발 (webbed feet 모양)
    const footGeometry = new THREE.SphereGeometry(0.12, 16, 8);
    footGeometry.scale(1.5, 0.3, 1); // 납작한 물갈퀴 모양
    const footMaterial = new THREE.MeshStandardMaterial({
      color: colors.accent, // 주황색
      roughness: 0.4,
      metalness: 0.1,
    });

    const leftFoot = new THREE.Mesh(footGeometry, footMaterial);
    leftFoot.position.set(-0.2, 0.12, 0.3);
    leftFoot.castShadow = true;
    penguinGroup.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeometry, footMaterial);
    rightFoot.position.set(0.2, 0.12, 0.3);
    rightFoot.castShadow = true;
    penguinGroup.add(rightFoot);

    return penguinGroup;
  };

  // 빙하 생성 함수
  const createIcebergs = (): THREE.Group => {
    const icebergGroup = new THREE.Group();

    // 여러 개의 빙하들 생성
    for (let i = 0; i < 8; i++) {
      const icebergGeometry = new THREE.ConeGeometry(
        0.5 + Math.random() * 1.5, // 반지름
        1.5 + Math.random() * 2, // 높이
        6 + Math.floor(Math.random() * 4) // 면 개수
      );

      const icebergMaterial = new THREE.MeshStandardMaterial({
        color: 0xe6f3ff, // 빙하 색상
        roughness: 0.8,
        metalness: 0.1,
        transparent: true,
        opacity: 0.9,
      });

      const iceberg = new THREE.Mesh(icebergGeometry, icebergMaterial);

      // 랜덤 위치에 배치 (펭귄들보다 멀리)
      const angle = (i / 8) * Math.PI * 2;
      const distance = 8 + Math.random() * 6;
      iceberg.position.x = Math.sin(angle) * distance;
      iceberg.position.z = Math.cos(angle) * distance;
      iceberg.position.y = 0.3;

      // 랜덤 회전
      iceberg.rotation.y = Math.random() * Math.PI * 2;
      iceberg.rotation.z = (Math.random() - 0.5) * 0.3;

      iceberg.castShadow = true;
      iceberg.receiveShadow = true;

      icebergGroup.add(iceberg);
    }

    return icebergGroup;
  };

  // 바다 바닥 생성 함수
  const createOceanFloor = (): THREE.Mesh => {
    const oceanGeometry = new THREE.PlaneGeometry(50, 50);
    const oceanMaterial = new THREE.MeshStandardMaterial({
      color: 0x006994, // 바다색
      roughness: 0.8,
      metalness: 0.3,
      transparent: true,
      opacity: 0.7,
    });

    const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
    ocean.rotation.x = -Math.PI / 2; // 바닥에 수평으로 배치
    ocean.position.y = -0.1;
    ocean.receiveShadow = true;

    return ocean;
  };

  // 눈 입자 효과 생성
  const createSnowParticles = (): THREE.Points => {
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40; // x
      positions[i + 1] = Math.random() * 20; // y
      positions[i + 2] = (Math.random() - 0.5) * 40; // z
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    });

    return new THREE.Points(particles, particleMaterial);
  };

  // 간단한 물고기 생성 함수
  const createJumpingFish = (): THREE.Group => {
    const fishGroup = new THREE.Group();

    // 물고기 몸통
    const bodyGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    bodyGeometry.scale(1.5, 1, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x4fc3f7, // 밝은 청록색
      roughness: 0.3,
      metalness: 0.2,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    fishGroup.add(body);

    // 물고기 꼬리
    const tailGeometry = new THREE.ConeGeometry(0.04, 0.12, 4);
    const tailMaterial = new THREE.MeshStandardMaterial({
      color: 0x29b6f6,
      roughness: 0.3,
    });
    const tail = new THREE.Mesh(tailGeometry, tailMaterial);
    tail.position.set(-0.12, 0, 0);
    tail.rotation.y = Math.PI / 2;
    fishGroup.add(tail);

    fishGroup.scale.setScalar(0.8); // 작게 만들기
    return fishGroup;
  };

  // 물고기 점프 시작 함수
  const startFishJump = (penguinPosition: THREE.Vector3) => {
    if (jumpingFishRef.current.length > 5) return; // 최대 5마리까지

    const fish = createJumpingFish();
    const startPos = penguinPosition.clone();
    startPos.x += (Math.random() - 0.5) * 2;
    startPos.z += (Math.random() - 0.5) * 2;
    startPos.y = -0.1; // 바다에서 시작

    const targetPos = startPos.clone();
    targetPos.x += (Math.random() - 0.5) * 3;
    targetPos.z += (Math.random() - 0.5) * 3;
    targetPos.y = -0.1; // 바다로 돌아감

    fish.position.copy(startPos);
    sceneRef.current?.add(fish);

    jumpingFishRef.current.push({
      mesh: fish,
      startTime: Date.now(),
      startPos: startPos,
      targetPos: targetPos,
      duration: 2000 + Math.random() * 1000, // 2-3초
    });
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // 씬 생성
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isDark ? 0x1a202c : 0xf0f8ff); // 다크테마: 짙은 회색, 라이트테마: 밝은 하늘색
    sceneRef.current = scene;

    // 카메라 생성
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 6, 12);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 렌더러 생성
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 조명 설정 - 더 부드럽게
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // 펭귄들 생성
    const penguinsToCreate =
      projects.length > 0
        ? projects
        : [
            {
              id: "default",
              title: "Default Penguin",
              status: "active" as const,
              progress: 50,
              tasks: [],
            },
          ];

    const newPenguins: THREE.Group[] = [];

    penguinsToCreate.forEach((project, index) => {
      const colors = getStatusColor(project.status, project.progress);
      const penguin = createModernPenguin(colors, index);
      penguin.userData = { project, index };
      penguin.castShadow = true;
      newPenguins.push(penguin);
      scene.add(penguin);
    });

    penguinsRef.current = newPenguins;

    // 빙하 생성
    const icebergs = createIcebergs();
    scene.add(icebergs);

    // 바다 바닥 생성
    const oceanFloor = createOceanFloor();
    scene.add(oceanFloor);

    // 눈 입자 효과 생성
    const snowParticles = createSnowParticles();
    scene.add(snowParticles);
    snowParticlesRef.current = snowParticles;

    // 애니메이션 시작
    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [width, height, projects, isDark]); // isDark 의존성 추가

  // 애니메이션 함수
  const animate = () => {
    animationIdRef.current = requestAnimationFrame(animate);

    if (penguinsRef.current.length > 0 && sceneRef.current && rendererRef.current && cameraRef.current) {
      const time = Date.now() * 0.001;

      // 각 펭귄들 애니메이션
      penguinsRef.current.forEach((penguin, index) => {
        const project = penguin.userData.project;
        const penguinIndex = penguin.userData.index;

        // 진행중인 프로젝트 무지개색 반짝이 효과
        if (project.status === "active") {
          // 펭귄의 등/머리/목 부분들을 찾아서 무지개색으로 변경
          penguin.children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
              const material = child.material as THREE.MeshStandardMaterial;
              // 흰색(#ffffff)과 주황색(#ff8c00)이 아닌 부분들만 무지개색으로
              const currentColor = material.color.getHex();
              if (currentColor !== 0xffffff && currentColor !== 0xff8c00) {
                const hue = (time * 0.5 + penguinIndex * 0.3) % 1; // 무지개색 순환
                material.color.setHSL(hue, 0.8, 0.4); // 채도 높고 약간 어두운 무지개색
              }
            }
          });
        }

        if (isMouseHovering) {
          // 마우스 호버 시: 펭귄이 마우스를 따라옴
          const targetX = worldMousePositionRef.current.x;
          const targetZ = worldMousePositionRef.current.z;

          // 각 펭귄마다 약간씩 다른 오프셋 적용
          const offsetX = Math.sin(penguinIndex * 2.1) * 1.5;
          const offsetZ = Math.cos(penguinIndex * 2.1) * 1.5;

          const finalTargetX = targetX + offsetX;
          const finalTargetZ = targetZ + offsetZ;

          // 부드럽게 따라오기 (lerp)
          const lerpFactor = 0.02;
          penguin.position.x += (finalTargetX - penguin.position.x) * lerpFactor;
          penguin.position.z += (finalTargetZ - penguin.position.z) * lerpFactor;

          // 마우스 방향을 바라보도록 회전
          const dx = finalTargetX - penguin.position.x;
          const dz = finalTargetZ - penguin.position.z;
          const targetRotation = Math.atan2(dx, dz);
          penguin.rotation.y += (targetRotation - penguin.rotation.y) * 0.05;

          // 살짝 위아래로 움직이는 효과
          penguin.position.y = Math.abs(Math.sin(time * 3 + penguinIndex)) * 0.03;
        } else {
          // 일반 상태: 원형으로 걸어다니기
          const speed = 0.3 + penguinIndex * 0.1;
          const radius = 2.5 + penguinIndex * 0.8;
          const offset = (penguinIndex * Math.PI * 2) / penguinsRef.current.length;

          const baseX = Math.sin(time * speed + offset) * radius;
          const baseZ = Math.cos(time * speed + offset) * radius;

          penguin.position.x = baseX + Math.sin(time * 2 + penguinIndex) * 0.3;
          penguin.position.z = baseZ + Math.cos(time * 2 + penguinIndex) * 0.3;
          penguin.rotation.y = -time * speed + offset + Math.PI / 2;
          penguin.position.y = Math.abs(Math.sin(time * 4 + penguinIndex)) * 0.05;
        }
      });

      // 눈 입자 애니메이션
      if (snowParticlesRef.current) {
        const positions = snowParticlesRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 1; i < positions.length; i += 3) {
          // y 좌표만 수정
          positions[i] -= 0.01; // 천천히 떨어뜨리

          // 바닥에 닿으면 다시 위로
          if (positions[i] < 0) {
            positions[i] = 20;
          }
        }

        snowParticlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // 물고기 점프 애니메이션
      jumpingFishRef.current = jumpingFishRef.current.filter((fishData) => {
        const elapsed = Date.now() - fishData.startTime;
        const progress = elapsed / fishData.duration;

        if (progress >= 1) {
          // 애니메이션 완료, 물고기 제거
          sceneRef.current?.remove(fishData.mesh);
          return false;
        }

        // 포물선 점프 애니메이션
        const t = progress;
        const x = fishData.startPos.x + (fishData.targetPos.x - fishData.startPos.x) * t;
        const z = fishData.startPos.z + (fishData.targetPos.z - fishData.startPos.z) * t;
        const y = -0.1 + Math.sin(t * Math.PI) * 1.5; // 포물선 모양

        fishData.mesh.position.set(x, y, z);

        // 점프 방향으로 회전
        const dx = fishData.targetPos.x - fishData.startPos.x;
        const dz = fishData.targetPos.z - fishData.startPos.z;
        fishData.mesh.rotation.y = Math.atan2(dx, dz);

        return true;
      });

      // 랜덤하게 물고기 점프 생성 (5초마다 한 번씩 확률적으로)
      if (Math.random() < 0.005 && penguinsRef.current.length > 0) {
        const randomPenguin = penguinsRef.current[Math.floor(Math.random() * penguinsRef.current.length)];
        startFishJump(randomPenguin.position);
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  return (
    <Box
      ref={mountRef}
      sx={{
        width: width,
        height: height,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
        border: "2px solid rgba(33, 150, 243, 0.2)",
        background: isDark
          ? "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)"
          : "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        position: "relative",
        cursor: isMouseHovering ? "pointer" : "default",
        "& canvas": {
          borderRadius: 4,
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 호버 안내 텍스트 */}
      {!isMouseHovering && !hoveredPenguin && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 2,
            px: 2,
            py: 1,
            fontSize: "0.8rem",
            color: "text.secondary",
            pointerEvents: "none",
            transition: "opacity 0.3s ease",
          }}
        >
          🐧 마우스를 올려보세요!
        </Box>
      )}

      {/* 펭귄 프로젝트 정보 툴팁 */}
      {hoveredPenguin && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: 3,
            px: 3,
            py: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            border: "2px solid rgba(33, 150, 243, 0.3)",
            pointerEvents: "none",
            zIndex: 10,
            maxWidth: 300,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Box sx={{ fontSize: "1.2rem" }}>
              {hoveredPenguin.status === "planning" && "🧊"}
              {hoveredPenguin.status === "active" && "🌈"}
              {hoveredPenguin.status === "paused" && "❄️"}
              {hoveredPenguin.status === "completed" && "🐟"}
              {hoveredPenguin.status === "cancelled" && "🔴"}
            </Box>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
              {hoveredPenguin.title}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: "0.8rem" }}>
            {hoveredPenguin.description}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                backgroundColor: hoveredPenguin.status === "active" ? "primary.main" : "grey.300",
                color: hoveredPenguin.status === "active" ? "white" : "text.primary",
                fontSize: "0.7rem",
                fontWeight: "bold",
              }}
            >
              {hoveredPenguin.status === "planning" && "계획중"}
              {hoveredPenguin.status === "active" && "진행중 🌈"}
              {hoveredPenguin.status === "paused" && "일시정지"}
              {hoveredPenguin.status === "completed" && "완료"}
              {hoveredPenguin.status === "cancelled" && "취소"}
            </Typography>

            <Typography variant="caption" sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
              {hoveredPenguin.progress}%
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ModernPenguinScene;
