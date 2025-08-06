# 🎨 확장 가능한 테마 시스템 가이드

## ✨ 개요

이 프로젝트는 확장 가능한 테마 시스템을 사용하여 쉽게 새로운 테마를 추가할 수 있습니다.

**현재 지원하는 테마들**: 🐧 펭귄, 🦊 사막여우, 🐑 양, 🐱 고양이

## 🏗️ 시스템 구조

### 1. 타입 정의 (`src/types/index.ts`)

```typescript
// 테마별 UI 설정
export interface ThemeUIConfig {
  background: {
    primary: string; // 메인 배경색
    secondary: string; // 보조 배경색
    pattern: string; // SVG 패턴 URL
    gradient: string; // CSS 그라디언트
  };
  border: {
    color: string; // 테두리 색상
    shadow: string; // 박스 섀도우
  };
  path: {
    color: string; // 원형 경로 색상
    opacity: number; // 경로 투명도
  };
}

// 테마별 게임 설정
export interface ThemeGameConfig {
  blocks: {
    emoji: string; // 블록 이모지
    type: string; // 블록 타입 이름
    collectName: string; // 수집 아이템 이름
  };
  building: {
    name: string; // 건축물 이름
    description: string; // 건축물 설명
    completionMessage: string; // 완성 메시지
  };
  collectInterval: number; // 블록 수집 간격 (초)
  maxBlocks: number; // 최대 블록 수
  progressPerBlock: number; // 블록당 진행도 (%)
}

// 테마별 애니메이션 설정
export interface ThemeAnimationConfig {
  animal: {
    speed: number; // 이동 속도
    radius: number; // 이동 반지름 (%)
    bounceHeight: number; // 바운스 높이 효과
  };
  blocks: {
    popDuration: string; // 블록 팝업 애니메이션 시간
    arrangement: "pyramid" | "tower" | "circle" | "spiral"; // 블록 배치 방식
    spacing: {
      horizontal: number; // 가로 간격
      vertical: number; // 세로 간격
    };
  };
}
```

### 2. 테마 레지스트리 (`src/config/themes.ts`)

```typescript
// 🎯 테마 레지스트리 (새 테마 추가하기 쉽게!)
export const THEME_REGISTRY: Record<ThemeType, ThemeConfigExtended> = {
  penguin: penguinTheme,
  "desert-fox": desertFoxTheme,
  sheep: sheepTheme,
  cat: catTheme,
  // 새 테마들을 여기에 추가하면 끝!
  // "forest-bear": forestBearTheme,
  // "ocean-dolphin": oceanDolphinTheme,
};
```

## 🆕 새 테마 추가하기

### 1단계: 타입 정의 추가

`src/types/index.ts`에서 `ThemeType`에 새 테마 추가:

```typescript
export type ThemeType = "penguin" | "desert-fox" | "sheep" | "cat" | "forest-bear";
```

### 2단계: 테마 객체 생성

`src/config/themes.ts`에 새 테마 객체 추가:

```typescript
// 🐻 숲속 곰 테마
export const forestBearTheme: ThemeConfigExtended = {
  id: "forest-bear",
  name: "숲속 곰 테마",
  emoji: "🐻",
  description: "푸른 숲과 자연의 평화로움",
  colors: {
    light: {
      primary: "#4CAF50", // 숲 초록색
      primaryLight: "#81C784",
      primaryDark: "#388E3C",
      secondary: "#8BC34A", // 연두색
      secondaryLight: "#AED581",
      secondaryDark: "#689F38",
      background: "#F1F8E9", // 연한 초록 배경
      paper: "#FFFFFF",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#F44336",
    },
    dark: {
      primary: "#81C784",
      primaryLight: "#AED581",
      primaryDark: "#4CAF50",
      secondary: "#AED581",
      secondaryLight: "#C5E1A5",
      secondaryDark: "#8BC34A",
      background: "#1B2E20", // 어두운 숲 배경
      paper: "#2E4233",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#F44336",
    },
  },
  concepts: {
    loading: "곰이 숲을 준비하는 중이에요...",
    welcome: "푸른 숲에 온 것을 환영해요!",
    appName: "숲속 곰 비서",
    appDescription: "푸른 숲에서 자연의 지혜를 드리는 곰 비서입니다",
    environment: "푸른 숲과 자연 🌲",
    animal: "숲속 곰",
    greeting: "안녕하세요! 오늘도 숲에서 평화로운 하루 보내세요!",
    farewell: "숲에서 자연스러운 하루 되세요!",
    baseTitle: "🌲 숲속 오두막",
    baseWelcome: "숲속 곰 비서의 오두막에 오신 것을 환영해요!",
    liveView: "숲 실시간 뷰",
    liveViewDescription: "푸른 숲의 실시간 상황을 확인하세요",
    quickActions: "숲 퀵 액션",
    activeProjects: "진행 중인 자연 활동",
    projectStats: "자연 활동 통계",
    animalSaying: "숲속 곰이 말하길",
    temperatureMoods: {
      cold: "❄️ 숲이 조용하고 좋아요",
      cool: "🍃 시원한 숲바람이 좋아요",
      mild: "🌿 완벽한 숲 날씨에요!",
      warm: "☀️ 따뜻한 햇살이 나무 사이로 들어와요",
      hot: "🌞 나무 그늘이 시원해요!",
    },
    projectType: "자연 활동",
    projectCreate: "새로운 자연 활동 시작하기",
    projectManage: "자연 활동 관리하기",
  },
  ui: {
    background: {
      primary: "#F1F8E9",
      secondary: "#C8E6C9",
      pattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='forest' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F1F8E9'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23C8E6C9'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23forest)'/%3E%3C/svg%3E")`,
      gradient: "radial-gradient(circle at 50% 50%, #F1F8E9 0%, #C8E6C9 40%, #4CAF50 100%)",
    },
    border: {
      color: "#4CAF50",
      shadow: "inset 0 0 20px rgba(76, 175, 80, 0.3)",
    },
    path: {
      color: "rgba(76, 175, 80, 0.3)",
      opacity: 0.5,
    },
  },
  game: {
    blocks: {
      emoji: "🪵",
      type: "나무 블록",
      collectName: "나무 블록 수집",
    },
    building: {
      name: "통나무집",
      description: "아늑한 숲속 통나무집",
      completionMessage: "멋진 통나무집이 완성되었어요! 🌲🏠",
    },
    collectInterval: 30,
    maxBlocks: 25,
    progressPerBlock: 4,
  },
  animation: {
    animal: {
      speed: 0.3, // 곰은 천천히 움직임
      radius: 40,
      bounceHeight: 0.05, // 무거운 곰이라 바운스 작게
    },
    blocks: {
      popDuration: "0.5s", // 천천히 나타남
      arrangement: "tower", // 통나무집은 타워 형태
      spacing: {
        horizontal: 15,
        vertical: 12,
      },
    },
  },
};
```

### 3단계: 레지스트리에 등록

```typescript
export const THEME_REGISTRY: Record<ThemeType, ThemeConfigExtended> = {
  penguin: penguinTheme,
  "desert-fox": desertFoxTheme,
  sheep: sheepTheme,
  cat: catTheme,
  "forest-bear": forestBearTheme, // ✨ 새 테마 추가!
};
```

## 🎯 **끝!**

이제 Settings 페이지에서 자동으로 새 테마가 나타납니다! 🎉

## 🛠️ 유틸리티 함수들

### 테마 설정 가져오기

```typescript
import { getThemeUI, getThemeGame, getThemeAnimation, isThemeType } from "../config/themes";

// 컴포넌트에서 사용
const themeUI = getThemeUI(themeConfig);
const themeGame = getThemeGame(themeConfig);
const themeAnimation = getThemeAnimation(themeConfig);

// 테마 타입 확인
const isPenguin = isThemeType(themeConfig, "penguin");
```

### 모든 테마 목록

```typescript
import { getAllThemes } from "../config/themes";

const availableThemes = getAllThemes();
// Settings 페이지에서 동적으로 테마 카드 생성
```

## 📁 파일 구조

```
src/
├── types/index.ts          # 테마 타입 정의
├── config/themes.ts        # 테마 설정 및 레지스트리
├── components/Layout.tsx   # 네비게이션 (테마 적용)
├── pages/
│   ├── Settings.tsx       # 테마 선택 UI (자동 생성)
│   ├── Pomodoro.tsx      # 게임 화면 (테마별 설정 적용)
│   └── Dashboard.tsx     # 대시보드 (테마별 텍스트)
└── App.tsx               # 메인 앱 (테마 시스템 통합)
```

## 🎨 현재 테마들

### 🎮 뽀모도로 게임

- **🐧 펭귄 테마**: 빙하 배경, 얼음 블록 🧊, 얼음성 건설
- **🦊 사막여우 테마**: 사막 배경, 피라미드 블록 🔺, 피라미드 건설
- **🐑 양 테마**: 목초지 배경, 건초더미 🌾, 목장 헛간 건설
- **🐱 고양이 테마**: 집 배경, 실뭉치 🧶, 캣타워 건설

### 🎨 UI 요소들

- **🐧 펭귄**: 파란색 계열, 얼음 패턴, 차분한 애니메이션
- **🦊 사막여우**: 주황색 계열, 모래 패턴, 중간 속도 애니메이션
- **🐑 양**: 초록색 계열, 풀 패턴, 느긋한 애니메이션
- **🐱 고양이**: 보라색 계열, 집 패턴, 빠른 애니메이션

### 📝 텍스트 및 개념

- **🐧 펭귄**: 빙하, 탐험, 차가운 컨셉
- **🦊 사막여우**: 사막, 모험, 뜨거운 컨셉
- **🐑 양**: 목초지, 목장일, 평화로운 컨셉
- **🐱 고양이**: 집, 집안일, 아늑한 컨셉

### ⚡ 애니메이션 특성

- **🐧 펭귄**: 속도 0.5, 30초 간격, 얼음성 타워
- **🦊 사막여우**: 속도 0.5, 30초 간격, 피라미드 배치
- **🐑 양**: 속도 0.3, 35초 간격, 헛간 타워 (가장 느긋함)
- **🐱 고양이**: 속도 0.7, 25초 간격, 캣타워 (가장 빠름)

이제 테마 추가가 **타입 하나 추가 + 객체 하나 생성**으로 끝! 🚀✨

## 🎉 최신 업데이트

- ✅ 🐑 양 테마 추가 (목초지 컨셉)
- ✅ 🐱 고양이 테마 추가 (집 컨셉)
- ✅ 총 4개 테마 지원
