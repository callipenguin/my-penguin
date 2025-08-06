import { EmergencyAlert, AlertType, AlertSeverity } from "../types";
import dayjs from "dayjs";

const STORAGE_KEY = "emergency_alerts";

// ID 생성 함수
const generateId = (): string => {
  return `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// 긴급알림 생성
export const createEmergencyAlert = (options: {
  title: string;
  message: string;
  type?: AlertType;
  severity?: AlertSeverity;
  dismissible?: boolean;
  persistent?: boolean;
  expiresIn?: number; // 분 단위
  showOnce?: boolean;
}): EmergencyAlert => {
  const alert: EmergencyAlert = {
    id: generateId(),
    title: options.title,
    message: options.message,
    type: options.type || "info",
    severity: options.severity || "medium",
    dismissible: options.dismissible !== false, // 기본값: true
    persistent: options.persistent || false,
    showOnce: options.showOnce || false,
    dismissed: false,
    createdAt: dayjs().toISOString(),
    expiresAt: options.expiresIn ? dayjs().add(options.expiresIn, "minute").toISOString() : undefined,
  };

  // localStorage에 저장
  const alerts = getAllAlerts();
  alerts.push(alert);
  saveAlerts(alerts);

  return alert;
};

// 모든 알림 가져오기
export const getAllAlerts = (): EmergencyAlert[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("긴급알림 로드 실패:", error);
    return [];
  }
};

// 알림 저장
export const saveAlerts = (alerts: EmergencyAlert[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alerts));
  } catch (error) {
    console.error("긴급알림 저장 실패:", error);
  }
};

// 활성 알림 가져오기 (만료되지 않고 닫히지 않은 알림)
export const getActiveAlerts = (): EmergencyAlert[] => {
  const alerts = getAllAlerts();
  const now = dayjs();

  return alerts.filter((alert) => {
    // 이미 닫힌 알림은 제외
    if (alert.dismissed) return false;

    // 만료된 알림은 제외
    if (alert.expiresAt && now.isAfter(dayjs(alert.expiresAt))) {
      return false;
    }

    return true;
  });
};

// 알림 닫기
export const dismissAlert = (alertId: string): void => {
  const alerts = getAllAlerts();
  const alertIndex = alerts.findIndex((alert) => alert.id === alertId);

  if (alertIndex !== -1) {
    alerts[alertIndex].dismissed = true;
    alerts[alertIndex].dismissedAt = dayjs().toISOString();
    saveAlerts(alerts);
  }
};

// 모든 알림 삭제
export const clearAllAlerts = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

// 만료된 알림 정리
export const cleanupExpiredAlerts = (): void => {
  const alerts = getAllAlerts();
  const now = dayjs();

  const validAlerts = alerts.filter((alert) => {
    // 만료된 알림 제거 (단, persistent는 유지)
    if (alert.expiresAt && now.isAfter(dayjs(alert.expiresAt)) && !alert.persistent) {
      return false;
    }
    return true;
  });

  if (validAlerts.length !== alerts.length) {
    saveAlerts(validAlerts);
  }
};

// 관리자용 함수들
export const adminAlertUtils = {
  // 긴급알림 생성
  create: (options: {
    title: string;
    message: string;
    type?: AlertType;
    severity?: AlertSeverity;
    dismissible?: boolean;
    persistent?: boolean;
    expiresIn?: number;
    showOnce?: boolean;
  }) => {
    const alert = createEmergencyAlert(options);
    console.log("🚨 긴급알림이 생성되었습니다:", alert);
    return alert;
  },

  // 현재 알림 목록
  list: () => {
    const alerts = getAllAlerts();
    console.table(alerts);
    return alerts;
  },

  // 활성 알림 목록
  active: () => {
    const alerts = getActiveAlerts();
    console.table(alerts);
    return alerts;
  },

  // 특정 알림 닫기
  dismiss: (alertId: string) => {
    dismissAlert(alertId);
    console.log(`✅ 알림 ${alertId}가 닫혔습니다.`);
  },

  // 모든 알림 삭제
  clear: () => {
    clearAllAlerts();
    console.log("🗑️ 모든 긴급알림이 삭제되었습니다.");
  },

  // 샘플 알림들 생성 (테스트용)
  createSamples: () => {
    const samples = [
      {
        title: "🎉 새로운 기능 업데이트",
        message: "데이터 백업 및 복구 기능이 추가되었습니다! 이제 언제든지 안전하게 데이터를 관리할 수 있어요.",
        type: "success" as AlertType,
        severity: "medium" as AlertSeverity,
        expiresIn: 60 * 24, // 24시간
      },
      {
        title: "⚠️ 시스템 점검 안내",
        message: "내일 오전 2시-4시 시스템 점검이 예정되어 있습니다. 이 시간 동안 서비스 이용이 제한될 수 있습니다.",
        type: "warning" as AlertType,
        severity: "high" as AlertSeverity,
        expiresIn: 60 * 48, // 48시간
      },
      {
        title: "🚨 중요 보안 업데이트",
        message: "보안 강화를 위한 업데이트가 적용되었습니다. 모든 사용자는 비밀번호 변경을 권장합니다.",
        type: "error" as AlertType,
        severity: "critical" as AlertSeverity,
        persistent: true,
        dismissible: true,
      },
    ];

    samples.forEach((sample) => adminAlertUtils.create(sample));
    console.log("📋 샘플 긴급알림들이 생성되었습니다.");
  },
};

// 전역 객체에 관리자 유틸리티 추가
declare global {
  interface Window {
    adminAlert: typeof adminAlertUtils;
  }
}

// 브라우저 환경에서만 전역 객체에 추가
if (typeof window !== "undefined") {
  window.adminAlert = adminAlertUtils;
}

export default {
  createEmergencyAlert,
  getAllAlerts,
  getActiveAlerts,
  dismissAlert,
  clearAllAlerts,
  cleanupExpiredAlerts,
  adminAlertUtils,
};
