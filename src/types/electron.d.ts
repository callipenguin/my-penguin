// Electron preload API 타입 정의
export interface ElectronAPI {
  saveData: (filename: string, data: any) => Promise<{ success: boolean; error?: any }>;
  loadData: (filename: string) => Promise<{ success: boolean; data?: any; error?: any }>;
  getAppVersion: () => Promise<string>;
}

// 전역 Window 인터페이스 확장
declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}
