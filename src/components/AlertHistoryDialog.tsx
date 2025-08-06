import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Chip,
  Divider,
  Tab,
  Tabs,
  Badge,
  Card,
  CardContent,
  Collapse,
} from "@mui/material";
import {
  History,
  Close,
  Warning,
  Error,
  Info,
  CheckCircle,
  NotificationsActive,
  Notifications,
  ExpandMore,
  ExpandLess,
  Circle,
  CheckCircleOutline,
} from "@mui/icons-material";
import { EmergencyAlert } from "../types";
import { getAlertHistory, getActiveAlerts, getUnreadAlerts, markAlertAsRead } from "../utils/emergencyAlerts";
import dayjs from "dayjs";

interface AlertHistoryDialogProps {
  open: boolean;
  onClose: () => void;
}

const AlertHistoryDialog: React.FC<AlertHistoryDialogProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [alerts, setAlerts] = useState<EmergencyAlert[]>([]);
  const [activeAlerts, setActiveAlerts] = useState<EmergencyAlert[]>([]);
  const [unreadAlerts, setUnreadAlerts] = useState<EmergencyAlert[]>([]);
  const [expandedAlert, setExpandedAlert] = useState<string | null>(null);

  // 알림 데이터 로드
  useEffect(() => {
    if (open) {
      loadAlerts();
    }
  }, [open]);

  const loadAlerts = () => {
    setAlerts(getAlertHistory());
    setActiveAlerts(getActiveAlerts());
    setUnreadAlerts(getUnreadAlerts());
  };

  // 알림 아이콘 가져오기
  const getAlertIcon = (type: EmergencyAlert["type"], severity: EmergencyAlert["severity"]) => {
    const getColor = () => {
      switch (severity) {
        case "critical":
          return "error.main";
        case "high":
          return "warning.main";
        case "medium":
          return "info.main";
        case "low":
          return "success.main";
        default:
          return "info.main";
      }
    };

    const iconProps = { sx: { color: getColor() } };

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

  // 알림 읽음 처리
  const handleMarkAsRead = (alertId: string) => {
    markAlertAsRead(alertId);
    loadAlerts(); // 데이터 새로고침
  };

  // 알림 카드 렌더링
  const renderAlertCard = (alert: EmergencyAlert & { read?: boolean }) => {
    const isExpanded = expandedAlert === alert.id;
    const isRead = (alert as any).read || false; // dismissed와 별개로 read 상태만 확인

    return (
      <Card
        key={alert.id}
        sx={{
          mb: 1,
          border: `1px solid`,
          borderColor: `${getSeverityColor(alert.severity)}.main`,
          backgroundColor: isRead ? "grey.50" : "background.paper",
          opacity: isRead ? 0.7 : 1,
          borderRadius: 2, // 적당히 둥글게
        }}
      >
        <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
            <Box display="flex" alignItems="center" gap={1} flex={1}>
              {getAlertIcon(alert.type, alert.severity)}
              <Typography variant="subtitle1" fontWeight="bold" sx={{ mr: 1 }}>
                {alert.title}
              </Typography>
              <Chip
                label={getSeverityLabel(alert.severity)}
                size="small"
                color={getSeverityColor(alert.severity) as any}
                sx={{ fontSize: "0.7rem" }}
              />
              {!isRead && (
                <Chip
                  icon={<Circle sx={{ fontSize: "0.5rem !important" }} />}
                  label="새 알림"
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ fontSize: "0.6rem", height: "20px" }}
                />
              )}
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              {!isRead && (
                <IconButton size="small" onClick={() => handleMarkAsRead(alert.id)} title="읽음으로 표시">
                  <CheckCircleOutline fontSize="small" />
                </IconButton>
              )}
              <IconButton size="small" onClick={() => setExpandedAlert(isExpanded ? null : alert.id)}>
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
          </Box>

          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            📅 {dayjs(alert.createdAt).format("MM/DD HH:mm")}
            {alert.expiresAt && <> • ⏰ 만료: {dayjs(alert.expiresAt).format("MM/DD HH:mm")}</>}
          </Typography>

          <Collapse in={isExpanded}>
            <Box sx={{ mt: 1, p: 2, backgroundColor: "grey.50", borderRadius: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 2 }}>
                {alert.message}
              </Typography>

              <Box display="flex" gap={1} flexWrap="wrap">
                <Chip label={alert.type} size="small" variant="outlined" />
                {alert.persistent && <Chip label="📌 지속적" size="small" color="warning" variant="outlined" />}
                {alert.dismissible && <Chip label="✅ 닫기 가능" size="small" color="success" variant="outlined" />}
              </Box>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    );
  };

  // 현재 탭의 알림 목록 가져오기
  const getCurrentAlerts = () => {
    switch (activeTab) {
      case 0:
        return activeAlerts; // 활성 알림
      case 1:
        return unreadAlerts; // 읽지 않은 알림
      case 2:
        return alerts; // 전체 히스토리
      default:
        return alerts;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <History color="primary" />
          <Typography variant="h6">알림 관리 센터 📬</Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        {/* 탭 설명 */}
        <Box sx={{ p: 2, backgroundColor: "grey.50", borderBottom: 1, borderColor: "divider" }}>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {activeTab === 0 && "🚨 현재 표시 중인 긴급 알림들"}
            {activeTab === 1 && "📢 아직 읽음 처리하지 않은 모든 알림들"}
            {activeTab === 2 && "📚 모든 알림의 완전한 기록 (시간순 정렬)"}
          </Typography>
        </Box>

        {/* 탭 네비게이션 */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} variant="fullWidth">
            <Tab
              icon={
                <Badge badgeContent={activeAlerts.length} color="error" showZero>
                  <NotificationsActive />
                </Badge>
              }
              label="현재 활성"
              iconPosition="start"
            />
            <Tab
              icon={
                <Badge badgeContent={unreadAlerts.length} color="primary" showZero>
                  <Notifications />
                </Badge>
              }
              label="미확인"
              iconPosition="start"
            />
            <Tab icon={<History />} label={`전체 (${alerts.length})`} iconPosition="start" />
          </Tabs>
        </Box>

        {/* 알림 목록 */}
        <Box sx={{ p: 2, maxHeight: 500, overflow: "auto" }}>
          {getCurrentAlerts().length === 0 ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                {activeTab === 0 && "현재 활성화된 알림이 없습니다 ✨"}
                {activeTab === 1 && "모든 알림을 확인했습니다! 👏"}
                {activeTab === 2 && "알림 히스토리가 없습니다 📭"}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {activeTab === 0 && "새로운 알림이 있으면 여기에 표시됩니다"}
                {activeTab === 1 && "읽음 처리하지 않은 알림이 여기에 표시됩니다"}
                {activeTab === 2 && "모든 알림의 기록이 여기에 저장됩니다"}
              </Typography>
            </Box>
          ) : (
            <Box>{getCurrentAlerts().map((alert) => renderAlertCard(alert))}</Box>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="contained">
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertHistoryDialog;
