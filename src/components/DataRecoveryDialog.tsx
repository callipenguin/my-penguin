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
  Divider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import { ExpandMore, Restore, Backup, Delete, Info } from "@mui/icons-material";
import { getCurrentData, backupData, restoreData, clearAllData, recoverUserData } from "../utils/dataRecovery";

interface DataRecoveryDialogProps {
  open: boolean;
  onClose: () => void;
  onDataRecovered: () => void;
}

const DataRecoveryDialog: React.FC<DataRecoveryDialogProps> = ({ open, onClose, onDataRecovered }) => {
  const [currentData, setCurrentData] = useState<any>(null);
  const [backupExists, setBackupExists] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"success" | "error" | "info">("info");

  useEffect(() => {
    if (open) {
      loadCurrentData();
      checkBackupExists();
    }
  }, [open]);

  const loadCurrentData = () => {
    const data = getCurrentData();
    setCurrentData(data);
  };

  const checkBackupExists = () => {
    const backup = localStorage.getItem("data_backup");
    setBackupExists(!!backup);
  };

  const handleBackup = () => {
    try {
      const backup = backupData();
      setMessage(
        `데이터 백업 완료! (${backup.todos.length}개 할일, ${backup.epics.length}개 에픽, ${backup.projects.length}개 프로젝트)`
      );
      setMessageType("success");
      checkBackupExists();
    } catch (error) {
      setMessage("백업 중 오류가 발생했습니다.");
      setMessageType("error");
    }
  };

  const handleRestore = () => {
    try {
      const restored = restoreData();
      if (restored) {
        setMessage(
          `데이터 복구 완료! (${restored.todos.length}개 할일, ${restored.epics.length}개 에픽, ${restored.projects.length}개 프로젝트)`
        );
        setMessageType("success");
        loadCurrentData();
        onDataRecovered();
      } else {
        setMessage("복구할 백업 데이터가 없습니다.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("복구 중 오류가 발생했습니다.");
      setMessageType("error");
    }
  };

  const handleSmartRecover = () => {
    try {
      const recovered = recoverUserData();
      setMessage(`스마트 복구 완료! 기본 데이터로 설정했습니다.`);
      setMessageType("success");
      loadCurrentData();
      onDataRecovered();
    } catch (error) {
      setMessage("스마트 복구 중 오류가 발생했습니다.");
      setMessageType("error");
    }
  };

  const handleClear = () => {
    if (confirm("정말로 모든 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      try {
        clearAllData();
        setMessage("모든 데이터가 삭제되었습니다.");
        setMessageType("info");
        loadCurrentData();
        onDataRecovered();
      } catch (error) {
        setMessage("데이터 삭제 중 오류가 발생했습니다.");
        setMessageType("error");
      }
    }
  };

  const exportData = () => {
    const data = getCurrentData();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `penguin-data-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("데이터 내보내기 완료!");
    setMessageType("success");
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          localStorage.setItem("todos", JSON.stringify(data.todos || []));
          localStorage.setItem("epics", JSON.stringify(data.epics || []));
          localStorage.setItem("projects", JSON.stringify(data.projects || []));
          setMessage("데이터 가져오기 완료!");
          setMessageType("success");
          loadCurrentData();
          onDataRecovered();
        } catch (error) {
          setMessage("파일 형식이 올바르지 않습니다.");
          setMessageType("error");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          <Restore color="primary" />
          데이터 복구 센터 🛠️
        </Box>
      </DialogTitle>

      <DialogContent>
        {message && (
          <Alert severity={messageType} sx={{ mb: 2 }} onClose={() => setMessage("")}>
            {message}
          </Alert>
        )}

        {/* 현재 상태 */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📊 현재 데이터 상태
            </Typography>
            <Box display="flex" gap={2}>
              <Chip label={`할일: ${currentData?.todos?.length || 0}개`} color="primary" />
              <Chip label={`에픽: ${currentData?.epics?.length || 0}개`} color="secondary" />
              <Chip label={`프로젝트: ${currentData?.projects?.length || 0}개`} color="info" />
            </Box>
          </CardContent>
        </Card>

        {/* 빠른 복구 */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              🚀 빠른 복구 (추천)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              데이터가 사라졌거나 샘플 데이터로 덮어써진 경우, 기본 사용자 데이터로 복구합니다.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleSmartRecover} startIcon={<Restore />} fullWidth>
              스마트 복구 실행
            </Button>
          </CardContent>
        </Card>

        {/* 백업 및 복구 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">🔄 백업 및 복구</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display="flex" flexDirection="column" gap={2}>
              <Button variant="outlined" onClick={handleBackup} startIcon={<Backup />} fullWidth>
                현재 데이터 백업하기
              </Button>

              <Button
                variant="outlined"
                onClick={handleRestore}
                startIcon={<Restore />}
                disabled={!backupExists}
                fullWidth
              >
                백업에서 복구하기 {!backupExists && "(백업 없음)"}
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* 가져오기/내보내기 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">📁 가져오기/내보내기</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display="flex" flexDirection="column" gap={2}>
              <Button variant="outlined" onClick={exportData} fullWidth>
                데이터 내보내기 (JSON 파일)
              </Button>

              <Button variant="outlined" component="label" fullWidth>
                데이터 가져오기
                <input type="file" accept=".json" onChange={importData} style={{ display: "none" }} />
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* 위험한 작업 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" color="error">
              ⚠️ 위험한 작업
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button variant="outlined" color="error" onClick={handleClear} startIcon={<Delete />} fullWidth>
              모든 데이터 삭제
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* 브라우저 콘솔 안내 */}
        <Alert severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            💡 <strong>개발자 도구 사용법:</strong>
            <br />
            F12 → Console 탭에서 <code>dataRecovery.current()</code>로 현재 데이터 확인 가능
          </Typography>
        </Alert>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DataRecoveryDialog;
