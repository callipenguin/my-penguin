import { contextBridge, ipcRenderer } from "electron";

// 렌더러 프로세스에서 사용할 API 정의
export interface ElectronAPI {
  saveData: (filename: string, data: any) => Promise<{ success: boolean; error?: any }>;
  loadData: (filename: string) => Promise<{ success: boolean; data?: any; error?: any }>;
  getAppVersion: () => Promise<string>;
}

// 안전한 API를 window 객체에 노출
contextBridge.exposeInMainWorld("electronAPI", {
  saveData: (filename: string, data: any) => ipcRenderer.invoke("save-data", filename, data),
  loadData: (filename: string) => ipcRenderer.invoke("load-data", filename),
  getAppVersion: () => ipcRenderer.invoke("get-app-version"),
} as ElectronAPI);

// TypeScript를 위한 전역 타입 선언
declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
