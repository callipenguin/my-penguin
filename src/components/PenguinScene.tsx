import React, { useRef, useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import * as THREE from "three";
import { Project } from "../types";

interface PenguinSceneProps {
  width?: number;
  height?: number;
  projects?: Project[];
}

const PenguinScene: React.FC<PenguinSceneProps> = ({ width = 800, height = 400, projects = [] }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const penguinsRef = useRef<THREE.Group[]>([]);
  const fishGroupsRef = useRef<THREE.Group[]>([]);
  const animationIdRef = useRef<number>();

  // 프로젝트 상태별 색상 매핑
  const getStatusColor = (status: string, progress: number) => {
    switch (status) {
      case "planning":
        return {
          body: 0x4a90e2, // 연한 파란색
          belly: 0xe8f4fd, // 매우 연한 파란색
          accent: 0x2171b5, // 진한 파란색
        };
      case "active":
        return {
          body: progress > 70 ? 0x2e7d32 : 0xff8f00, // 70% 이상이면 초록, 아니면 주황
          belly: progress > 70 ? 0xe8f5e8 : 0xfff3e0, // 연한 초록 또는 연한 주황
          accent: progress > 70 ? 0x1b5e20 : 0xe65100, // 진한 초록 또는 진한 주황
        };
      case "paused":
        return {
          body: 0x757575, // 회색
          belly: 0xf5f5f5, // 연한 회색
          accent: 0x424242, // 진한 회색
        };
      case "completed":
        return {
          body: 0x2e7d32, // 초록색
          belly: 0xe8f5e8, // 연한 초록
          accent: 0x1b5e20, // 진한 초록
        };
      case "cancelled":
        return {
          body: 0xd32f2f, // 빨간색
          belly: 0xffebee, // 연한 빨간색
          accent: 0xb71c1c, // 진한 빨간색
        };
      default:
        return {
          body: 0x2c2c2c, // 기본 검은색
          belly: 0xffffff, // 흰색
          accent: 0xff8c00, // 주황색
        };
    }
  };

  // 물고기 생성 함수
  const createFish = (index: number): THREE.Group => {
    const fishGroup = new THREE.Group();

    // 물고기 몸통 (타원형)
    const bodyGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    bodyGeometry.scale(1.8, 1, 1);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0xff6b6b + index * 0x001122, // 약간씩 다른 색상
      shininess: 50,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.castShadow = true;
    fishGroup.add(body);

    // 물고기 꼬리
    const tailGeometry = new THREE.ConeGeometry(0.08, 0.15, 3);
    const tailMaterial = new THREE.MeshPhongMaterial({
      color: 0xe55555 + index * 0x001122,
      shininess: 30,
    });
    const tail = new THREE.Mesh(tailGeometry, tailMaterial);
    tail.position.set(-0.2, 0, 0);
    tail.rotation.y = Math.PI / 2;
    tail.castShadow = true;
    fishGroup.add(tail);

    // 물고기 지느러미 (작은 삼각형들)
    const finGeometry = new THREE.ConeGeometry(0.04, 0.08, 3);
    const finMaterial = new THREE.MeshPhongMaterial({
      color: 0xcc4444 + index * 0x001122,
      shininess: 20,
    });

    // 위쪽 지느러미
    const topFin = new THREE.Mesh(finGeometry, finMaterial);
    topFin.position.set(0, 0.1, 0);
    topFin.rotation.z = Math.PI;
    fishGroup.add(topFin);

    // 아래쪽 지느러미
    const bottomFin = new THREE.Mesh(finGeometry, finMaterial);
    bottomFin.position.set(0, -0.08, 0);
    fishGroup.add(bottomFin);

    // 물고기 눈 (아주 작은 검은 점)
    const eyeGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(0.15, 0.05, 0.05);
    fishGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 0.05, -0.05);
    fishGroup.add(rightEye);

    return fishGroup;
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // 씬 생성
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isDark ? 0x1a202c : 0xf0f8ff); // 다크테마: 짙은 회색, 라이트테마: 밝은 하늘색
    sceneRef.current = scene;

    // 카메라 생성
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 8, 15);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 렌더러 생성
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 조명 설정 개선
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(15, 15, 8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    // 바닥 생성 (빙하) - 더 현실적으로
    const groundGeometry = new THREE.PlaneGeometry(30, 30, 32, 32);
    const groundMaterial = new THREE.MeshLambertMaterial({
      color: 0xe6f3ff,
      transparent: true,
      opacity: 0.9,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

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
    const newFishGroups: THREE.Group[] = [];

    penguinsToCreate.forEach((project, index) => {
      const colors = getStatusColor(project.status, project.progress);
      const penguin = createRealisticPenguin(colors, index);
      penguin.userData = { project, index };
      penguin.castShadow = true;
      newPenguins.push(penguin);
      scene.add(penguin);

      // 각 프로젝트의 tasks 개수만큼 물고기 생성 (최대 5마리)
      const taskCount = Math.min(project.tasks?.length || 0, 5);
      const fishGroup = new THREE.Group();

      for (let fishIndex = 0; fishIndex < taskCount; fishIndex++) {
        const fish = createFish(fishIndex);
        fish.userData = { fishIndex, penguinIndex: index };
        fish.castShadow = true;
        fishGroup.add(fish);
      }

      if (taskCount === 0 && projects.length === 0) {
        // 기본 펭귄인 경우 물고기 2마리 추가
        for (let i = 0; i < 2; i++) {
          const fish = createFish(i);
          fish.userData = { fishIndex: i, penguinIndex: index };
          fish.castShadow = true;
          fishGroup.add(fish);
        }
      }

      newFishGroups.push(fishGroup);
      scene.add(fishGroup);
    });

    penguinsRef.current = newPenguins;
    fishGroupsRef.current = newFishGroups;

    // 빙산 장식 추가
    createIcebergs(scene);

    // 눈 파티클 추가
    createSnowParticles(scene);

    // 애니메이션 시작
    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [width, height, projects, isDark]);

  // 현실적인 펭귄 생성 함수
  const createRealisticPenguin = (colors: any, index: number): THREE.Group => {
    const penguinGroup = new THREE.Group();

    // 파란색 원형 베이스 플랫폼
    const baseGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a90e2,
      roughness: 0.3,
      metalness: 0.1,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 0.05;
    base.receiveShadow = true;
    penguinGroup.add(base);

    // 흰색 몸통 (세로로 길쭉한 타원 형태)
    const bodyGeometry = new THREE.SphereGeometry(0.35, 32, 32);
    bodyGeometry.scale(1, 2.2, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.05,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.1;
    body.castShadow = true;
    penguinGroup.add(body);

    // 검은색 등과 머리 부분 (타원형)
    const backGeometry = new THREE.SphereGeometry(0.36, 32, 32);
    backGeometry.scale(0.9, 2.1, 0.7);
    const backMaterial = new THREE.MeshStandardMaterial({
      color: colors.body,
      roughness: 0.2,
      metalness: 0.1,
    });
    const back = new THREE.Mesh(backGeometry, backMaterial);
    back.position.set(0, 1.2, -0.1);
    back.castShadow = true;
    penguinGroup.add(back);

    // 검은색 머리 (작고 둥근)
    const headGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: colors.body,
      roughness: 0.2,
      metalness: 0.1,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.9;
    head.castShadow = true;
    penguinGroup.add(head);

    // 빨간색 부리 (삼각형 모양)
    const beakGeometry = new THREE.ConeGeometry(0.06, 0.15, 4);
    const beakMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4444,
      roughness: 0.3,
    });
    const beak = new THREE.Mesh(beakGeometry, beakMaterial);
    beak.position.set(0, 1.9, 0.3);
    beak.rotation.x = Math.PI / 2;
    beak.rotation.z = Math.PI / 4;
    beak.castShadow = true;
    penguinGroup.add(beak);

    // 검은색 눈 (작은 점)
    const eyeGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.1,
      metalness: 0.8,
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.08, 2.0, 0.22);
    penguinGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.08, 2.0, 0.22);
    penguinGroup.add(rightEye);

    // 심플한 날개들
    const wingGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    wingGeometry.scale(0.3, 0.8, 0.5);
    const wingMaterial = new THREE.MeshStandardMaterial({
      color: colors.body,
      roughness: 0.2,
      metalness: 0.1,
    });

    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-0.45, 1.2, -0.05);
    leftWing.rotation.z = 0.3;
    leftWing.castShadow = true;
    penguinGroup.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(0.45, 1.2, -0.05);
    rightWing.rotation.z = -0.3;
    rightWing.castShadow = true;
    penguinGroup.add(rightWing);

    // 빨간색 발 (작은 삼각형들)
    const footGeometry = new THREE.ConeGeometry(0.08, 0.06, 3);
    const footMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4444,
      roughness: 0.4,
    });

    const leftFoot = new THREE.Mesh(footGeometry, footMaterial);
    leftFoot.position.set(-0.15, 0.12, 0.25);
    leftFoot.rotation.x = Math.PI;
    leftFoot.castShadow = true;
    penguinGroup.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeometry, footMaterial);
    rightFoot.position.set(0.15, 0.12, 0.25);
    rightFoot.rotation.x = Math.PI;
    rightFoot.castShadow = true;
    penguinGroup.add(rightFoot);

    return penguinGroup;
  };

  // 빙산 생성 함수 - 더 다양한 크기와 형태
  const createIcebergs = (scene: THREE.Scene) => {
    const icebergCount = Math.max(3, Math.min(8, Math.floor(projects.length * 1.5)));

    for (let i = 0; i < icebergCount; i++) {
      const icebergGeometry = new THREE.ConeGeometry(
        0.8 + Math.random() * 1.2,
        1.5 + Math.random() * 2,
        6 + Math.floor(Math.random() * 3)
      );
      const icebergMaterial = new THREE.MeshLambertMaterial({
        color: 0xe6f3ff,
        transparent: true,
        opacity: 0.8,
      });

      const iceberg = new THREE.Mesh(icebergGeometry, icebergMaterial);
      const angle = (i / icebergCount) * Math.PI * 2;
      const radius = 8 + Math.random() * 4;

      iceberg.position.set(Math.cos(angle) * radius, 0.8 + Math.random() * 0.5, Math.sin(angle) * radius);
      iceberg.scale.set(0.7 + Math.random() * 0.6, 0.7 + Math.random() * 0.6, 0.7 + Math.random() * 0.6);
      iceberg.castShadow = true;
      scene.add(iceberg);
    }
  };

  // 눈 파티클 생성 함수
  const createSnowParticles = (scene: THREE.Scene) => {
    const snowGeometry = new THREE.BufferGeometry();
    const snowCount = 300;
    const snowPositions = new Float32Array(snowCount * 3);

    for (let i = 0; i < snowCount * 3; i += 3) {
      snowPositions[i] = (Math.random() - 0.5) * 30;
      snowPositions[i + 1] = Math.random() * 15;
      snowPositions[i + 2] = (Math.random() - 0.5) * 30;
    }

    snowGeometry.setAttribute("position", new THREE.BufferAttribute(snowPositions, 3));

    const snowMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });

    const snow = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snow);
  };

  // 애니메이션 함수 - 여러 펭귄들이 서로 다른 경로로 이동
  const animate = () => {
    animationIdRef.current = requestAnimationFrame(animate);

    if (penguinsRef.current.length > 0 && sceneRef.current && rendererRef.current && cameraRef.current) {
      const time = Date.now() * 0.001;

      // 각 펭귄들이 서로 다른 경로로 걸어다니기
      penguinsRef.current.forEach((penguin, index) => {
        const project = penguin.userData.project;
        const penguinIndex = penguin.userData.index;

        // 각 펭귄마다 다른 속도와 반지름
        const speed = 0.3 + penguinIndex * 0.1;
        const radius = 2.5 + penguinIndex * 0.8;
        const offset = (penguinIndex * Math.PI * 2) / penguinsRef.current.length;

        // 원형 경로 + 약간의 랜덤성
        const baseX = Math.sin(time * speed + offset) * radius;
        const baseZ = Math.cos(time * speed + offset) * radius;

        // 프로젝트 진행률에 따른 속도 조절
        const progressMultiplier =
          project.status === "completed"
            ? 1.2
            : project.status === "paused"
            ? 0.5
            : project.status === "cancelled"
            ? 0.3
            : project.status === "active"
            ? 1 + project.progress / 100
            : 0.8;

        penguin.position.x = baseX + Math.sin(time * 2 + penguinIndex) * 0.3;
        penguin.position.z = baseZ + Math.cos(time * 2 + penguinIndex) * 0.3;

        // 걷는 방향으로 회전
        penguin.rotation.y = -time * speed * progressMultiplier + offset + Math.PI / 2;

        // 프로젝트 상태에 따른 애니메이션 차이
        if (project.status === "completed") {
          // 완료된 프로젝트는 더 활발하게 움직임
          penguin.rotation.z = Math.sin(time * 6 + penguinIndex) * 0.08;
          penguin.position.y = Math.abs(Math.sin(time * 8 + penguinIndex)) * 0.15;
        } else if (project.status === "paused") {
          // 일시 정지된 프로젝트는 느리게 움직임
          penguin.rotation.z = Math.sin(time * 2 + penguinIndex) * 0.03;
          penguin.position.y = Math.abs(Math.sin(time * 3 + penguinIndex)) * 0.05;
        } else if (project.status === "cancelled") {
          // 취소된 프로젝트는 매우 느리고 슬프게 움직임
          penguin.rotation.z = Math.sin(time * 1.5 + penguinIndex) * 0.02;
          penguin.position.y = Math.abs(Math.sin(time * 2 + penguinIndex)) * 0.03;
          // 머리를 살짝 숙인 효과
          penguin.rotation.x = -0.1;
        } else {
          // 일반적인 움직임
          penguin.rotation.z = Math.sin(time * 4 + penguinIndex) * 0.05;
          penguin.position.y = Math.abs(Math.sin(time * 6 + penguinIndex)) * 0.1;
        }
      });

      // 물고기들이 펭귄을 따라다니는 애니메이션
      fishGroupsRef.current.forEach((fishGroup, penguinIndex) => {
        if (!penguinsRef.current[penguinIndex]) return;

        const penguin = penguinsRef.current[penguinIndex];
        const fishArray = fishGroup.children as THREE.Mesh[];

        fishArray.forEach((fish, fishIndex) => {
          const fishSpeed = 2 + fishIndex * 0.5;
          const fishRadius = 0.8 + fishIndex * 0.3;
          const fishOffset = (fishIndex * Math.PI * 2) / fishArray.length;

          // 펭귄 주변을 맴도는 원형 경로
          const fishX = penguin.position.x + Math.sin(time * fishSpeed + fishOffset) * fishRadius;
          const fishZ = penguin.position.z + Math.cos(time * fishSpeed + fishOffset) * fishRadius;
          const fishY = penguin.position.y + 0.5 + Math.sin(time * 3 + fishIndex) * 0.2;

          fish.position.set(fishX, fishY, fishZ);

          // 물고기가 수영하는 방향으로 회전
          fish.rotation.y = time * fishSpeed + fishOffset + Math.PI / 2;

          // 물고기 꼬리 흔들기 애니메이션
          fish.rotation.z = Math.sin(time * 8 + fishIndex) * 0.1;

          // 물고기 몸 살짝 흔들기
          fish.children.forEach((part, partIndex) => {
            if (partIndex === 0) {
              // 몸통
              part.rotation.y = Math.sin(time * 6 + fishIndex) * 0.05;
            }
          });
        });
      });

      // 눈 파티클 애니메이션
      const snow = sceneRef.current.children.find((child) => child instanceof THREE.Points);
      if (snow) {
        const positions = (snow.geometry as THREE.BufferGeometry).attributes.position.array as Float32Array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] -= 0.02;
          if (positions[i] < 0) {
            positions[i] = 15;
          }
        }
        (snow.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
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
        "& canvas": {
          borderRadius: 4,
        },
      }}
    />
  );
};

export default PenguinScene;
