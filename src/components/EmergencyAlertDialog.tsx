import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Alert,
  IconButton,
  Slide,
  Chip,
  Divider,
} from "@mui/material";
import { Warning, Error, Info, CheckCircle, Close, Notifications, NotificationsActive } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";
import { EmergencyAlert } from "../types";
import { getActiveAlerts, dismissAlert, cleanupExpiredAlerts } from "../utils/emergencyAlerts";
import dayjs from "dayjs";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface EmergencyAlertDialogProps {
  onAlertDismissed?: (alertId: string) => void;
}

const EmergencyAlertDialog: React.FC<EmergencyAlertDialogProps> = ({ onAlertDismissed }) => {
  const [alerts, setAlerts] = useState<EmergencyAlert[]>([]);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // 알림 체크 및 로드
  useEffect(() => {
    const checkAlerts = () => {
      cleanupExpiredAlerts(); // 만료된 알림 정리
      const activeAlerts = getActiveAlerts();

      if (activeAlerts.length > 0) {
        setAlerts(activeAlerts);
        setCurrentAlertIndex(0);
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    // 초기 체크
    checkAlerts();

    // 주기적으로 체크 (30초마다)
    const interval = setInterval(checkAlerts, 30000);

    return () => clearInterval(interval);
  }, []);

  const currentAlert = alerts[currentAlertIndex];

  // 알림 아이콘 가져오기
  const getAlertIcon = (type: EmergencyAlert["type"], severity: EmergencyAlert["severity"]) => {
    const iconProps = {
      fontSize: "large" as const,
      sx: {
        mr: 1,
        color:
          severity === "critical"
            ? "error.main"
            : severity === "high"
            ? "warning.main"
            : severity === "medium"
            ? "info.main"
            : "success.main",
      },
    };

    switch (type) {
      case "error":
        return <Error {...iconProps} />;
      case "warning":
        return <Warning {...iconProps} />;
      case "success":
        return <CheckCircle {...iconProps} />;
      default:
        return severity === "critical" ? <NotificationsActive {...iconProps} /> : <Info {...iconProps} />;
    }
  };

  // 심각도별 색상 가져오기
  const getSeverityColor = (severity: EmergencyAlert["severity"]) => {
    switch (severity) {
      case "critical":
        return "error";
      case "high":
        return "warning";
      case "medium":
        return "info";
      case "low":
        return "success";
      default:
        return "info";
    }
  };

  // 심각도별 라벨 가져오기
  const getSeverityLabel = (severity: EmergencyAlert["severity"]) => {
    switch (severity) {
      case "critical":
        return "🚨 긴급";
      case "high":
        return "⚠️ 높음";
      case "medium":
        return "📢 보통";
      case "low":
        return "💡 낮음";
      default:
        return "📢 보통";
    }
  };

  // 알림 닫기
  const handleDismiss = () => {
    if (currentAlert) {
      dismissAlert(currentAlert.id);
      onAlertDismissed?.(currentAlert.id);

      // 다음 알림으로 이동 또는 다이얼로그 닫기
      const remainingAlerts = alerts.filter((alert) => alert.id !== currentAlert.id);

      if (remainingAlerts.length > 0) {
        setAlerts(remainingAlerts);
        setCurrentAlertIndex(Math.min(currentAlertIndex, remainingAlerts.length - 1));
      } else {
        setOpen(false);
        setAlerts([]);
        setCurrentAlertIndex(0);
      }
    }
  };

  // 다음 알림으로 이동
  const handleNext = () => {
    if (currentAlertIndex < alerts.length - 1) {
      setCurrentAlertIndex(currentAlertIndex + 1);
    }
  };

  // 이전 알림으로 이동
  const handlePrevious = () => {
    if (currentAlertIndex > 0) {
      setCurrentAlertIndex(currentAlertIndex - 1);
    }
  };

  // 모든 알림 닫기
  const handleDismissAll = () => {
    alerts.forEach((alert) => {
      if (alert.dismissible) {
        dismissAlert(alert.id);
        onAlertDismissed?.(alert.id);
      }
    });
    setOpen(false);
    setAlerts([]);
    setCurrentAlertIndex(0);
  };

  if (!currentAlert || !open) {
    return null;
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={currentAlert.dismissible ? handleDismiss : undefined}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          border: `2px solid`,
          borderColor: `${getSeverityColor(currentAlert.severity)}.main`,
          boxShadow: `0 8px 32px rgba(${
            currentAlert.severity === "critical"
              ? "244, 67, 54"
              : currentAlert.severity === "high"
              ? "255, 152, 0"
              : currentAlert.severity === "medium"
              ? "33, 150, 243"
              : "76, 175, 80"
          }, 0.3)`,
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: `${getSeverityColor(currentAlert.severity)}.main`,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 1,
        }}
      >
        <Box display="flex" alignItems="center" flex={1}>
          {getAlertIcon(currentAlert.type, currentAlert.severity)}
          <Typography variant="h6" fontWeight="bold" sx={{ mr: 2 }}>
            {currentAlert.title}
          </Typography>
          <Chip
            label={getSeverityLabel(currentAlert.severity)}
            size="small"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              fontWeight: "bold",
            }}
          />
        </Box>

        {currentAlert.dismissible && (
          <IconButton size="small" onClick={handleDismiss} sx={{ color: "white", ml: 1 }}>
            <Close />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        <Alert severity={currentAlert.type} sx={{ mb: 2, borderRadius: 2 }} icon={false}>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {currentAlert.message}
          </Typography>
        </Alert>

        {/* 알림 메타 정보 */}
        <Box sx={{ mt: 2, p: 2, backgroundColor: "grey.50", borderRadius: 2 }}>
          <Typography variant="caption" color="text.secondary" display="block">
            📅 생성: {dayjs(currentAlert.createdAt).format("YYYY-MM-DD HH:mm")}
          </Typography>
          {currentAlert.expiresAt && (
            <Typography variant="caption" color="text.secondary" display="block">
              ⏰ 만료: {dayjs(currentAlert.expiresAt).format("YYYY-MM-DD HH:mm")}
            </Typography>
          )}
          {currentAlert.persistent && (
            <Typography variant="caption" color="warning.main" display="block">
              📌 지속적 알림 (새로고침해도 계속 표시)
            </Typography>
          )}
        </Box>

        {/* 다중 알림 네비게이션 */}
        {alerts.length > 1 && (
          <>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
              <Button size="small" onClick={handlePrevious} disabled={currentAlertIndex === 0} variant="outlined">
                이전
              </Button>
              <Typography variant="body2" color="text.secondary">
                {currentAlertIndex + 1} / {alerts.length}
              </Typography>
              <Button
                size="small"
                onClick={handleNext}
                disabled={currentAlertIndex === alerts.length - 1}
                variant="outlined"
              >
                다음
              </Button>
            </Box>
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3, gap: 1 }}>
        {alerts.length > 1 && (
          <Button onClick={handleDismissAll} variant="outlined" color="secondary" sx={{ mr: "auto" }}>
            모든 알림 닫기
          </Button>
        )}

        {currentAlert.dismissible && (
          <Button onClick={handleDismiss} variant="contained" color="primary">
            {alerts.length > 1 ? "이 알림 닫기" : "확인"}
          </Button>
        )}

        {!currentAlert.dismissible && (
          <Typography variant="caption" color="text.secondary" sx={{ fontStyle: "italic" }}>
            이 알림은 자동으로 닫을 수 없습니다
          </Typography>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default EmergencyAlertDialog;
