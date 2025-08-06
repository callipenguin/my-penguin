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
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import { Warning, Restore, GetApp, Backup, CheckCircle, Error, Info, TableChart } from "@mui/icons-material";

interface DataLossNoticeProps {
  open: boolean;
  onClose: () => void;
  onOpenDataRecovery: () => void;
}

const DataLossNotice: React.FC<DataLossNoticeProps> = ({ open, onClose, onOpenDataRecovery }) => {
  const [acknowledged, setAcknowledged] = useState(false);

  useEffect(() => {
    // 공지 확인 상태 로드
    const hasAcknowledged = localStorage.getItem("dataLossNoticeAcknowledged");
    if (hasAcknowledged === "true") {
      setAcknowledged(true);
    }
  }, []);

  const handleAcknowledge = () => {
    setAcknowledged(true);
    localStorage.setItem("dataLossNoticeAcknowledged", "true");
    onClose();
  };

  const handleOpenRecovery = () => {
    handleAcknowledge();
    onOpenDataRecovery();
  };

  if (acknowledged) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(255, 152, 0, 0.3)",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "warning.main",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Warning />
        <Typography variant="h6" fontWeight="bold">
          🚨 중요 공지: 데이터 손실 발생
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        <Alert severity="warning" sx={{ mb: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            ⚠️ 시스템 업데이트로 인한 데이터 손실 안내
          </Typography>
          <Typography variant="body2">
            최근 시스템 업데이트 과정에서 일부 사용자의 할일, 프로젝트 데이터가 샘플 데이터로 초기화되는 문제가
            발생했습니다.
          </Typography>
        </Alert>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom color="error">
            📋 확인된 문제점
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Error color="error" />
              </ListItemIcon>
              <ListItemText
                primary="기존 할일 데이터가 샘플 데이터로 교체됨"
                secondary="개인이 작성한 할일들이 테스트 데이터로 변경"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Error color="error" />
              </ListItemIcon>
              <ListItemText primary="프로젝트 정보 초기화" secondary="사용자가 생성한 프로젝트가 기본 샘플로 변경" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Error color="error" />
              </ListItemIcon>
              <ListItemText primary="에픽 연결 정보 손실" secondary="에픽-프로젝트-할일 간의 연결 관계 초기화" />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom color="success.main">
            🛠️ 해결 방법
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText
                primary="데이터 복구 센터 이용"
                secondary="우측 상단 '⚙️' 버튼 → '복구' 탭에서 스마트 복구 실행"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText
                primary="백업 파일이 있는 경우"
                secondary="이전에 내보낸 엑셀/JSON 파일을 '가져오기' 탭에서 복원"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText
                primary="브라우저 백업 확인"
                secondary="F12 → Console → dataRecovery.restore() 명령어로 자동 백업 복원"
              />
            </ListItem>
          </List>
        </Box>

        <Card
          sx={{
            backgroundColor: "info.main",
            color: "white",
            borderRadius: 2,
            mb: 2,
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Info />
              <Typography variant="h6">💡 향후 예방 조치</Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              이런 문제를 예방하기 위해 정기적인 데이터 백업을 권장합니다:
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              <Chip
                icon={<TableChart />}
                label="엑셀 백업"
                size="small"
                sx={{ color: "white", borderColor: "white" }}
                variant="outlined"
              />
              <Chip
                icon={<GetApp />}
                label="JSON 백업"
                size="small"
                sx={{ color: "white", borderColor: "white" }}
                variant="outlined"
              />
              <Chip
                icon={<Backup />}
                label="자동 백업"
                size="small"
                sx={{ color: "white", borderColor: "white" }}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>

        <Alert severity="info" sx={{ borderRadius: 2 }}>
          <Typography variant="body2">
            <strong>📞 문의사항:</strong> 데이터 복구에 어려움이 있으시면 개발자 도구(F12) → Console에서{" "}
            <code>dataRecovery.current()</code>로 현재 상태를 확인해주세요.
          </Typography>
        </Alert>
      </DialogContent>

      <DialogActions sx={{ p: 3, gap: 1 }}>
        <Button onClick={handleAcknowledge} variant="outlined" sx={{ minWidth: 120 }}>
          나중에 처리
        </Button>
        <Button onClick={handleOpenRecovery} variant="contained" startIcon={<Restore />} sx={{ minWidth: 150 }}>
          지금 복구하기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DataLossNotice;
