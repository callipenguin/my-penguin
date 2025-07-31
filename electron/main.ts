import { app, BrowserWindow, Menu, ipcMain } from "electron";
import { join } from "path";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";

// 개발 모드 확인
const isDev = process.env.NODE_ENV === "development";

// 메인 윈도우 변수
let mainWindow: BrowserWindow | null = null;

// 데이터 저장 경로
const userDataPath = app.getPath("userData");
const dataDir = join(userDataPath, "data");

// 데이터 디렉토리 생성
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

function createWindow(): void {
  // 메인 윈도우 생성
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: "hiddenInset", // macOS 스타일
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
    show: false, // 준비될 때까지 숨김
  });

  // React 앱 로드
  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(join(__dirname, "../build/index.html"));
  }

  // 윈도우가 준비되면 표시
  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  // 윈도우가 닫힐 때
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// 앱이 준비되면 윈도우 생성
app.whenReady().then(() => {
  createWindow();

  // macOS에서 독에 클릭했을 때 윈도우 다시 열기
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // 메뉴 설정
  createMenu();
});

// 모든 윈도우가 닫히면 앱 종료 (macOS 제외)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// 메뉴 생성
function createMenu(): void {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: "개인 비서",
      submenu: [
        { role: "about", label: "개인 비서 정보" },
        { type: "separator" },
        { role: "services", label: "서비스" },
        { type: "separator" },
        { role: "hide", label: "개인 비서 숨기기" },
        { role: "hideOthers", label: "다른 앱 숨기기" },
        { role: "unhide", label: "모두 보기" },
        { type: "separator" },
        { role: "quit", label: "개인 비서 종료" },
      ],
    },
    {
      label: "편집",
      submenu: [
        { role: "undo", label: "실행 취소" },
        { role: "redo", label: "다시 실행" },
        { type: "separator" },
        { role: "cut", label: "잘라내기" },
        { role: "copy", label: "복사" },
        { role: "paste", label: "붙여넣기" },
        { role: "selectAll", label: "모두 선택" },
      ],
    },
    {
      label: "보기",
      submenu: [
        { role: "reload", label: "새로고침" },
        { role: "forceReload", label: "강제 새로고침" },
        { role: "toggleDevTools", label: "개발자 도구" },
        { type: "separator" },
        { role: "resetZoom", label: "실제 크기" },
        { role: "zoomIn", label: "확대" },
        { role: "zoomOut", label: "축소" },
        { type: "separator" },
        { role: "togglefullscreen", label: "전체 화면" },
      ],
    },
    {
      label: "창",
      submenu: [
        { role: "minimize", label: "최소화" },
        { role: "close", label: "닫기" },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// IPC 핸들러들 - 데이터 저장/로드
ipcMain.handle("save-data", async (event, filename: string, data: any) => {
  try {
    const filePath = join(dataDir, `${filename}.json`);
    writeFileSync(filePath, JSON.stringify(data, null, 2));
    return { success: true };
  } catch (error) {
    console.error("데이터 저장 실패:", error);
    return { success: false, error: error };
  }
});

ipcMain.handle("load-data", async (event, filename: string) => {
  try {
    const filePath = join(dataDir, `${filename}.json`);
    if (existsSync(filePath)) {
      const data = readFileSync(filePath, "utf8");
      return { success: true, data: JSON.parse(data) };
    }
    return { success: true, data: null };
  } catch (error) {
    console.error("데이터 로드 실패:", error);
    return { success: false, error: error };
  }
});

ipcMain.handle("get-app-version", async () => {
  return app.getVersion();
});
