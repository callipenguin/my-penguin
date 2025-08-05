import {
  ThemeType,
  ColorMode,
  ThemeConfig,
  ThemeConfigExtended,
  ThemeColorSet,
  ThemeConcepts,
  ThemeUIConfig,
  ThemeGameConfig,
  ThemeAnimationConfig,
} from "../types";

// 기본 설정값들 (새 테마에서 누락된 설정이 있을 때 사용)
const DEFAULT_UI: ThemeUIConfig = {
  background: {
    primary: "#f5f5f5",
    secondary: "#ffffff",
    pattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%23f5f5f5'/%3E%3C/svg%3E")`,
    gradient: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
  },
  border: {
    color: "#cccccc",
    shadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  path: {
    color: "rgba(128,128,128,0.3)",
    opacity: 0.5,
  },
};

const DEFAULT_GAME: ThemeGameConfig = {
  blocks: {
    emoji: "⬜",
    type: "블록",
    collectName: "아이템",
  },
  building: {
    name: "구조물",
    description: "기본 구조물",
    completionMessage: "완성되었습니다!",
  },
  collectInterval: 30,
  maxBlocks: 25,
  progressPerBlock: 4, // 25개 블록 = 100%
};

const DEFAULT_ANIMATION: ThemeAnimationConfig = {
  animal: {
    speed: 0.5,
    radius: 35,
    bounceHeight: 0.1,
  },
  blocks: {
    popDuration: "0.3s",
    arrangement: "tower",
    spacing: {
      horizontal: 20,
      vertical: 15,
    },
  },
};

// 🐧 펭귄 테마 (완전한 확장 버전)
export const penguinTheme: ThemeConfigExtended = {
  id: "penguin",
  name: "펭귄 테마",
  emoji: "🐧",
  description: "차가운 빙하와 남극의 평온함",
  colors: {
    light: {
      primary: "#2196F3",
      primaryLight: "#64B5F6",
      primaryDark: "#1976D2",
      secondary: "#03DAC6",
      secondaryLight: "#66FFF9",
      secondaryDark: "#00BCD4",
      background: "#FAFAFA",
      paper: "#FFFFFF",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#F44336",
    },
    dark: {
      primary: "#90CAF9",
      primaryLight: "#BBDEFB",
      primaryDark: "#42A5F5",
      secondary: "#80DEEA",
      secondaryLight: "#B2EBF2",
      secondaryDark: "#4DD0E1",
      background: "#121212",
      paper: "#1E1E1E",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#F44336",
    },
  },
  concepts: {
    loading: "펭귄이 빙하를 준비하는 중이에요...",
    welcome: "남극 빙하 기지에 온 것을 환영해요!",
    appName: "펭귄 비서",
    appDescription: "차가운 빙하에서 따뜻한 도움을 드리는 펭귄 비서입니다",
    environment: "남극의 차가운 빙하 🧊",
    animal: "펭귄",
    greeting: "안녕하세요! 오늘도 빙하에서 멋진 하루 보내세요!",
    farewell: "빙하에서 따뜻한 하루 되세요!",
    baseTitle: "🏔️ 빙하 기지",
    baseWelcome: "펭귄 비서의 빙하 기지에 오신 것을 환영해요!",
    liveView: "빙하 실시간 뷰",
    liveViewDescription: "남극 빙하의 실시간 상황을 확인하세요",
    quickActions: "빙하 퀵 액션",
    activeProjects: "진행 중인 탐험",
    projectStats: "탐험 통계",
    animalSaying: "펭귄이 말하길",
    temperatureMoods: {
      cold: "❄️ 완벽한 빙하 날씨에요!",
      cool: "🧊 시원한 빙하가 좋아요",
      mild: "🌨️ 따뜻해져서 조금 이상해요",
      warm: "☀️ 너무 따뜻해서 걱정이에요",
      hot: "🔥 빙하가 녹고 있어요!",
    },
    projectType: "탐험",
    projectCreate: "새로운 탐험 시작하기",
    projectManage: "탐험 관리하기",
  },
  ui: {
    background: {
      primary: "#E3F2FD",
      secondary: "#BBDEFB",
      pattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='ice' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23E3F2FD'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23BBDEFB'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23ice)'/%3E%3C/svg%3E")`,
      gradient: "radial-gradient(circle at 20% 20%, #E3F2FD 0%, #BBDEFB 40%, #90CAF9 100%)",
    },
    border: {
      color: "#2196F3",
      shadow: "inset 0 0 20px rgba(33, 150, 243, 0.3)",
    },
    path: {
      color: "rgba(33, 150, 243, 0.3)",
      opacity: 0.5,
    },
  },
  game: {
    blocks: {
      emoji: "🧊",
      type: "얼음 블록",
      collectName: "얼음 블록 수집",
    },
    building: {
      name: "얼음 성",
      description: "웅장한 얼음 성",
      completionMessage: "멋진 얼음 성이 완성되었어요! ❄️🏰",
    },
    collectInterval: 30,
    maxBlocks: 25,
    progressPerBlock: 4,
  },
  animation: {
    animal: {
      speed: 0.5,
      radius: 35,
      bounceHeight: 0.15,
    },
    blocks: {
      popDuration: "0.3s",
      arrangement: "tower",
      spacing: {
        horizontal: 20,
        vertical: 15,
      },
    },
  },
};

// 🦊 사막여우 테마 (완전한 확장 버전)
export const desertFoxTheme: ThemeConfigExtended = {
  id: "desert-fox",
  name: "사막여우 테마",
  emoji: "🦊",
  description: "따뜻한 사막과 오아시스의 활기",
  colors: {
    light: {
      primary: "#FF8C00",
      primaryLight: "#FFB74D",
      primaryDark: "#F57C00",
      secondary: "#FFC107",
      secondaryLight: "#FFEB3B",
      secondaryDark: "#FF9800",
      background: "#FFF8E1",
      paper: "#FFFFFF",
      info: "#2196F3",
      success: "#8BC34A",
      warning: "#FF9800",
      error: "#F44336",
    },
    dark: {
      primary: "#FFB74D",
      primaryLight: "#FFCC02",
      primaryDark: "#FF8F00",
      secondary: "#FFCC02",
      secondaryLight: "#FFEB3B",
      secondaryDark: "#FFC107",
      background: "#1A1A1A",
      paper: "#2A2A2A",
      info: "#2196F3",
      success: "#8BC34A",
      warning: "#FF9800",
      error: "#F44336",
    },
  },
  concepts: {
    loading: "사막여우가 오아시스를 준비하는 중이에요...",
    welcome: "따뜻한 사막 오아시스에 온 것을 환영해요!",
    appName: "사막여우 비서",
    appDescription: "뜨거운 사막에서 시원한 도움을 드리는 사막여우 비서입니다",
    environment: "따뜻한 사막과 오아시스 🏜️",
    animal: "사막여우",
    greeting: "안녕하세요! 오늘도 사막에서 활기찬 하루 보내세요!",
    farewell: "사막에서 멋진 하루 되세요!",
    baseTitle: "🏜️ 사막 오아시스",
    baseWelcome: "사막여우 비서의 오아시스에 오신 것을 환영해요!",
    liveView: "사막 실시간 뷰",
    liveViewDescription: "사막 오아시스의 실시간 상황을 확인하세요",
    quickActions: "사막 퀵 액션",
    activeProjects: "진행 중인 모험",
    projectStats: "모험 통계",
    animalSaying: "사막여우가 말하길",
    temperatureMoods: {
      cold: "🧊 사막에 너무 춥네요",
      cool: "🌤️ 시원한 사막이 좋아요",
      mild: "☀️ 완벽한 사막 날씨에요!",
      warm: "🌵 따뜻한 사막이 최고에요",
      hot: "🔥 뜨거운 사막도 문제없어요!",
    },
    projectType: "모험",
    projectCreate: "새로운 모험 시작하기",
    projectManage: "모험 관리하기",
  },
  ui: {
    background: {
      primary: "#FFF3E0",
      secondary: "#FFCC02",
      pattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='sand' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFF3E0'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23FFCC02'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23sand)'/%3E%3C/svg%3E")`,
      gradient: "radial-gradient(circle at 30% 70%, #FFF3E0 0%, #FFCC02 40%, #FF8F00 100%)",
    },
    border: {
      color: "#FF8F00",
      shadow: "inset 0 0 20px rgba(255, 143, 0, 0.3)",
    },
    path: {
      color: "rgba(255, 143, 0, 0.3)",
      opacity: 0.5,
    },
  },
  game: {
    blocks: {
      emoji: "🔺",
      type: "피라미드 블록",
      collectName: "피라미드 블록 수집",
    },
    building: {
      name: "피라미드",
      description: "웅장한 사막 피라미드",
      completionMessage: "멋진 피라미드가 완성되었어요! 🏜️🔺",
    },
    collectInterval: 30,
    maxBlocks: 25,
    progressPerBlock: 4,
  },
  animation: {
    animal: {
      speed: 0.5,
      radius: 35,
      bounceHeight: 0.1,
    },
    blocks: {
      popDuration: "0.3s",
      arrangement: "pyramid",
      spacing: {
        horizontal: 20,
        vertical: 15,
      },
    },
  },
};

// 🐑 양 테마 (완전한 확장 버전)
export const sheepTheme: ThemeConfigExtended = {
  id: "sheep",
  name: "양 테마",
  emoji: "🐑",
  description: "평화로운 목초지와 푸른 언덕",
  colors: {
    light: {
      primary: "#4CAF50", // 목초지 초록색
      primaryLight: "#81C784",
      primaryDark: "#388E3C",
      secondary: "#8BC34A", // 연한 초록색
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
      background: "#0D1B0F", // 어두운 목초지 배경
      paper: "#1B2E1D",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#F44336",
    },
  },
  concepts: {
    loading: "양이 목초지를 준비하는 중이에요...",
    welcome: "평화로운 목초지에 온 것을 환영해요!",
    appName: "양 비서",
    appDescription: "푸른 목초지에서 평온한 도움을 드리는 양 비서입니다",
    environment: "평화로운 푸른 목초지 🌱",
    animal: "양",
    greeting: "안녕하세요! 오늘도 목초지에서 평온한 하루 보내세요!",
    farewell: "목초지에서 평화로운 하루 되세요!",
    baseTitle: "🌱 목초지 농장",
    baseWelcome: "양 비서의 목초지에 오신 것을 환영해요!",
    liveView: "목초지 실시간 뷰",
    liveViewDescription: "푸른 목초지의 실시간 상황을 확인하세요",
    quickActions: "목초지 퀵 액션",
    activeProjects: "진행 중인 목장일",
    projectStats: "목장일 통계",
    animalSaying: "양이 말하길",
    temperatureMoods: {
      cold: "❄️ 목초지가 시원하고 좋아요",
      cool: "🍃 시원한 바람이 상쾌해요",
      mild: "🌿 완벽한 목초지 날씨에요!",
      warm: "☀️ 따뜻한 햇살이 좋아요",
      hot: "🌞 그늘에서 쉬어가야겠어요!",
    },
    projectType: "목장일",
    projectCreate: "새로운 목장일 시작하기",
    projectManage: "목장일 관리하기",
  },
  ui: {
    background: {
      primary: "#F1F8E9",
      secondary: "#C8E6C9",
      pattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grass' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F1F8E9'/%3E%3Cpath d='M0,20 Q5,10 10,20 Q15,10 20,20' stroke='%23C8E6C9' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grass)'/%3E%3C/svg%3E")`,
      gradient: "radial-gradient(circle at 30% 70%, #F1F8E9 0%, #C8E6C9 40%, #4CAF50 100%)",
    },
    border: {
      color: "#4CAF50",
      shadow: "inset 0 0 20px rgba(76, 175, 80, 0.3)",
    },
    path: {
      color: "rgba(76, 175, 80, 0.4)",
      opacity: 0.6,
    },
  },
  game: {
    blocks: {
      emoji: "🌾",
      type: "건초 더미",
      collectName: "건초 더미 수집",
    },
    building: {
      name: "목장 헛간",
      description: "아늑한 목장 헛간",
      completionMessage: "멋진 목장 헛간이 완성되었어요! 🌾🏠",
    },
    collectInterval: 35, // 양은 좀 더 느긋하게
    maxBlocks: 25,
    progressPerBlock: 4,
  },
  animation: {
    animal: {
      speed: 0.3, // 양은 느긋하게 움직임
      radius: 30,
      bounceHeight: 0.05, // 부드러운 움직임
    },
    blocks: {
      popDuration: "0.4s", // 느긋하게 나타남
      arrangement: "tower", // 헛간은 타워 형태
      spacing: {
        horizontal: 18,
        vertical: 12,
      },
    },
  },
};

// 🐱 고양이 테마 (완전한 확장 버전)
export const catTheme: ThemeConfigExtended = {
  id: "cat",
  name: "고양이 테마",
  emoji: "🐱",
  description: "아늑한 집과 도시 생활의 편안함",
  colors: {
    light: {
      primary: "#FF7043", // 고양이 주황색
      primaryLight: "#FF8A65",
      primaryDark: "#F4511E",
      secondary: "#FFC107", // 노란색 (고양이 눈)
      secondaryLight: "#FFEB3B",
      secondaryDark: "#FFA000",
      background: "#FFF8E1", // 연한 크림 배경
      paper: "#FFFFFF",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#F44336",
    },
    dark: {
      primary: "#FF8A65",
      primaryLight: "#FFAB91",
      primaryDark: "#FF5722",
      secondary: "#FFCC02",
      secondaryLight: "#FFEB3B",
      secondaryDark: "#FFC107",
      background: "#1F1611", // 어두운 갈색 배경
      paper: "#2D2419",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#F44336",
    },
  },
  concepts: {
    loading: "고양이가 집을 준비하는 중이에요...",
    welcome: "아늑한 집에 온 것을 환영해요!",
    appName: "고양이 비서",
    appDescription: "따뜻한 집에서 편안한 도움을 드리는 고양이 비서입니다",
    environment: "아늑한 따뜻한 집 🏠",
    animal: "고양이",
    greeting: "안녕하세요! 오늘도 집에서 편안한 하루 보내세요!",
    farewell: "집에서 포근한 하루 되세요!",
    baseTitle: "🏠 아늑한 집",
    baseWelcome: "고양이 비서의 집에 오신 것을 환영해요!",
    liveView: "집 실시간 뷰",
    liveViewDescription: "아늑한 집의 실시간 상황을 확인하세요",
    quickActions: "집 퀵 액션",
    activeProjects: "진행 중인 집안일",
    projectStats: "집안일 통계",
    animalSaying: "고양이가 말하길",
    temperatureMoods: {
      cold: "🐾 집이 따뜻해서 좋아요",
      cool: "🐟 시원한 집이 편안해요",
      mild: "🧶 완벽한 실내 온도에요!",
      warm: "☀️ 햇볕 드는 창가가 좋아요",
      hot: "🌞 시원한 곳을 찾아야겠어요!",
    },
    projectType: "집안일",
    projectCreate: "새로운 집안일 시작하기",
    projectManage: "집안일 관리하기",
  },
  ui: {
    background: {
      primary: "#FFF8E1",
      secondary: "#FFCC02",
      pattern: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='home' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFF8E1'/%3E%3Ccircle cx='5' cy='5' r='2' fill='%23FFCC02'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%23FFCC02'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23home)'/%3E%3C/svg%3E")`,
      gradient: "radial-gradient(circle at 50% 30%, #FFF8E1 0%, #FFCC02 40%, #FF7043 100%)",
    },
    border: {
      color: "#FF7043",
      shadow: "inset 0 0 20px rgba(255, 112, 67, 0.3)",
    },
    path: {
      color: "rgba(255, 112, 67, 0.4)",
      opacity: 0.5,
    },
  },
  game: {
    blocks: {
      emoji: "🧶",
      type: "실뭉치",
      collectName: "실뭉치 수집",
    },
    building: {
      name: "캣타워",
      description: "높고 멋진 캣타워",
      completionMessage: "멋진 캣타워가 완성되었어요! 🐱🗼",
    },
    collectInterval: 25, // 고양이는 빠르게
    maxBlocks: 25,
    progressPerBlock: 4,
  },
  animation: {
    animal: {
      speed: 0.7, // 고양이는 민첩하게 움직임
      radius: 40,
      bounceHeight: 0.2, // 점프를 잘함
    },
    blocks: {
      popDuration: "0.2s", // 빠르게 나타남
      arrangement: "tower", // 캣타워는 높이 쌓기
      spacing: {
        horizontal: 15,
        vertical: 18, // 높게 쌓기
      },
    },
  },
};

// 🎯 테마 레지스트리 (새 테마 추가하기 쉽게!)
export const THEME_REGISTRY: Record<ThemeType, ThemeConfigExtended> = {
  penguin: penguinTheme,
  "desert-fox": desertFoxTheme,
  sheep: sheepTheme, // ✨ 양 테마 추가!
  cat: catTheme, // ✨ 고양이 테마 추가!
  // 새 테마들을 여기에 추가하면 끝!
  // "forest-bear": forestBearTheme,
  // "ocean-dolphin": oceanDolphinTheme,
};

// 🛠️ 유틸리티 함수들
export const getThemeConfig = (type: ThemeType): ThemeConfigExtended => {
  return THEME_REGISTRY[type] || penguinTheme; // 기본값은 펭귄
};

export const getThemeColors = (type: ThemeType, mode: ColorMode): ThemeColorSet => {
  const themeConfig = getThemeConfig(type);
  const actualMode =
    mode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : mode;
  return themeConfig.colors[actualMode];
};

// 새로운 유틸리티 함수들
export const getThemeUI = (themeConfig?: ThemeConfigExtended): ThemeUIConfig => {
  return themeConfig?.ui || DEFAULT_UI;
};

export const getThemeGame = (themeConfig?: ThemeConfigExtended): ThemeGameConfig => {
  return themeConfig?.game || DEFAULT_GAME;
};

export const getThemeAnimation = (themeConfig?: ThemeConfigExtended): ThemeAnimationConfig => {
  return themeConfig?.animation || DEFAULT_ANIMATION;
};

export const isThemeType = (themeConfig: ThemeConfigExtended | undefined, type: ThemeType): boolean => {
  return themeConfig?.id === type;
};

// 모든 테마 목록 가져오기 (Settings 페이지에서 사용)
export const getAllThemes = (): ThemeConfigExtended[] => {
  return Object.values(THEME_REGISTRY);
};

// 테마 존재 여부 확인
export const themeExists = (type: ThemeType): boolean => {
  return type in THEME_REGISTRY;
};

// 하위 호환성을 위한 기존 함수들 (점진적 마이그레이션)
export const getThemeConfig_Legacy = (type: ThemeType): ThemeConfig => {
  const fullConfig = getThemeConfig(type);
  return {
    name: fullConfig.name,
    emoji: fullConfig.emoji,
    colors: fullConfig.colors,
    concepts: fullConfig.concepts,
  };
};
