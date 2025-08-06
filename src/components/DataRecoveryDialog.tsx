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
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import {
  ExpandMore,
  Restore,
  Backup,
  Delete,
  Info,
  GetApp,
  Publish,
  TableChart,
  DataObject,
  Add,
  MergeType,
} from "@mui/icons-material";
import { getCurrentData, backupData, restoreData, clearAllData, recoverUserData } from "../utils/dataRecovery";
import { exportToExcel, exportToJSON, importFromExcel, importFromJSON } from "../utils/dataExport";
import { useTodo } from "../contexts/TodoContext";

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
  const [activeTab, setActiveTab] = useState(0);
  const [mergeMode, setMergeMode] = useState(false); // 데이터 추가 모드

  // TodoContext 사용
  const { todos, epics, projects, addTodo, addEpic, addProject } = useTodo();

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

  // 엑셀 내보내기
  const handleExportExcel = () => {
    try {
      const fileName = exportToExcel(todos, epics, projects);
      setMessage(`엑셀 파일 내보내기 완료! (${fileName})`);
      setMessageType("success");
    } catch (error) {
      setMessage("엑셀 내보내기 중 오류가 발생했습니다.");
      setMessageType("error");
    }
  };

  // JSON 내보내기 (개선된 버전)
  const handleExportJSON = () => {
    try {
      const data = exportToJSON(todos, epics, projects);
      setMessage(`JSON 파일 내보내기 완료! (통계 포함)`);
      setMessageType("success");
    } catch (error) {
      setMessage("JSON 내보내기 중 오류가 발생했습니다.");
      setMessageType("error");
    }
  };

  // 엑셀 가져오기
  const handleImportExcel = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const importedData = await importFromExcel(file);

        if (mergeMode) {
          // 데이터 추가 모드
          let addedCount = { todos: 0, epics: 0, projects: 0 };

          // 기존 데이터와 중복 확인하여 추가
          importedData.epics.forEach((epic) => {
            if (!epics.find((e) => e.id === epic.id)) {
              addEpic(epic);
              addedCount.epics++;
            }
          });

          importedData.projects.forEach((project) => {
            if (!projects.find((p) => p.id === project.id)) {
              addProject(project);
              addedCount.projects++;
            }
          });

          importedData.todos.forEach((todo) => {
            if (!todos.find((t) => t.id === todo.id)) {
              addTodo(todo);
              addedCount.todos++;
            }
          });

          setMessage(
            `엑셀 데이터 추가 완료! (${addedCount.todos}개 할일, ${addedCount.epics}개 에픽, ${addedCount.projects}개 프로젝트 추가)`
          );
        } else {
          // 데이터 교체 모드
          localStorage.setItem("todos", JSON.stringify(importedData.todos));
          localStorage.setItem("epics", JSON.stringify(importedData.epics));
          localStorage.setItem("projects", JSON.stringify(importedData.projects));
          setMessage(
            `엑셀 데이터 가져오기 완료! (${importedData.todos.length}개 할일, ${importedData.epics.length}개 에픽, ${importedData.projects.length}개 프로젝트)`
          );
        }

        setMessageType("success");
        loadCurrentData();
        onDataRecovered();
      } catch (error) {
        setMessage(`엑셀 가져오기 실패: ${error}`);
        setMessageType("error");
      }
    }
    // 파일 input 초기화
    event.target.value = "";
  };

  // JSON 가져오기
  const handleImportJSON = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const importedData = await importFromJSON(file);

        if (mergeMode) {
          // 데이터 추가 모드
          let addedCount = { todos: 0, epics: 0, projects: 0 };

          importedData.epics.forEach((epic) => {
            if (!epics.find((e) => e.id === epic.id)) {
              addEpic(epic);
              addedCount.epics++;
            }
          });

          importedData.projects.forEach((project) => {
            if (!projects.find((p) => p.id === project.id)) {
              addProject(project);
              addedCount.projects++;
            }
          });

          importedData.todos.forEach((todo) => {
            if (!todos.find((t) => t.id === todo.id)) {
              addTodo(todo);
              addedCount.todos++;
            }
          });

          setMessage(
            `JSON 데이터 추가 완료! (${addedCount.todos}개 할일, ${addedCount.epics}개 에픽, ${addedCount.projects}개 프로젝트 추가)`
          );
        } else {
          // 데이터 교체 모드
          localStorage.setItem("todos", JSON.stringify(importedData.todos));
          localStorage.setItem("epics", JSON.stringify(importedData.epics));
          localStorage.setItem("projects", JSON.stringify(importedData.projects));
          setMessage(
            `JSON 데이터 가져오기 완료! (${importedData.todos.length}개 할일, ${importedData.epics.length}개 에픽, ${importedData.projects.length}개 프로젝트)`
          );
        }

        setMessageType("success");
        loadCurrentData();
        onDataRecovered();
      } catch (error) {
        setMessage(`JSON 가져오기 실패: ${error}`);
        setMessageType("error");
      }
    }
    // 파일 input 초기화
    event.target.value = "";
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          <Restore color="primary" />
          데이터 관리 센터 🛠️
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
            <Box display="flex" gap={2} flexWrap="wrap">
              <Chip label={`할일: ${currentData?.todos?.length || 0}개`} color="primary" />
              <Chip label={`에픽: ${currentData?.epics?.length || 0}개`} color="secondary" />
              <Chip label={`프로젝트: ${currentData?.projects?.length || 0}개`} color="info" />
            </Box>
          </CardContent>
        </Card>

        {/* 탭 네비게이션 */}
        <Paper sx={{ mb: 3 }}>
          <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} variant="fullWidth">
            <Tab icon={<Restore />} label="복구" iconPosition="start" />
            <Tab icon={<GetApp />} label="내보내기" iconPosition="start" />
            <Tab icon={<Publish />} label="가져오기" iconPosition="start" />
          </Tabs>
        </Paper>

        {/* 복구 탭 */}
        {activeTab === 0 && (
          <Box>
            {/* 빠른 복구 */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  🚀 빠른 복구 (추천)
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  데이터가 사라졌거나 샘플 데이터로 덮어써진 경우, 기본 사용자 데이터로 복구합니다.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSmartRecover}
                  startIcon={<Restore />}
                  fullWidth
                >
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
          </Box>
        )}

        {/* 내보내기 탭 */}
        {activeTab === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              📤 데이터 내보내기
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <TableChart color="success" />
                    <Box flex={1}>
                      <Typography variant="h6">엑셀 파일 (.xlsx)</Typography>
                      <Typography variant="body2" color="text.secondary">
                        할일, 에픽, 프로젝트를 각각 시트로 분리하여 엑셀 파일로 내보냅니다.
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleExportExcel}
                    startIcon={<TableChart />}
                    fullWidth
                  >
                    엑셀 파일로 내보내기
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <DataObject color="info" />
                    <Box flex={1}>
                      <Typography variant="h6">JSON 파일 (.json)</Typography>
                      <Typography variant="body2" color="text.secondary">
                        모든 데이터와 통계 정보를 포함한 JSON 파일로 내보냅니다.
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={handleExportJSON}
                    startIcon={<DataObject />}
                    fullWidth
                  >
                    JSON 파일로 내보내기
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        )}

        {/* 가져오기 탭 */}
        {activeTab === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              📥 데이터 가져오기
            </Typography>

            {/* 가져오기 모드 설정 */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  📋 가져오기 모드 설정
                </Typography>
                <FormControlLabel
                  control={
                    <Switch checked={mergeMode} onChange={(e) => setMergeMode(e.target.checked)} color="primary" />
                  }
                  label={
                    <Box>
                      <Typography variant="body2">{mergeMode ? "🔀 추가 모드" : "🔄 교체 모드"}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {mergeMode
                          ? "기존 데이터에 새 데이터를 추가합니다 (중복 제외)"
                          : "기존 데이터를 완전히 교체합니다"}
                      </Typography>
                    </Box>
                  }
                />
              </CardContent>
            </Card>

            <Box display="flex" flexDirection="column" gap={2}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <TableChart color="success" />
                    <Box flex={1}>
                      <Typography variant="h6">엑셀 파일 가져오기</Typography>
                      <Typography variant="body2" color="text.secondary">
                        엑셀 파일(.xlsx)에서 데이터를 가져옵니다. '할일', '에픽', '프로젝트' 시트를 인식합니다.
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    component="label"
                    startIcon={mergeMode ? <Add /> : <TableChart />}
                    fullWidth
                  >
                    {mergeMode ? "엑셀 데이터 추가하기" : "엑셀 파일 가져오기"}
                    <input type="file" accept=".xlsx,.xls" onChange={handleImportExcel} style={{ display: "none" }} />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <DataObject color="info" />
                    <Box flex={1}>
                      <Typography variant="h6">JSON 파일 가져오기</Typography>
                      <Typography variant="body2" color="text.secondary">
                        JSON 파일(.json)에서 데이터를 가져옵니다. 내보낸 형식과 호환됩니다.
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="info"
                    component="label"
                    startIcon={mergeMode ? <Add /> : <DataObject />}
                    fullWidth
                  >
                    {mergeMode ? "JSON 데이터 추가하기" : "JSON 파일 가져오기"}
                    <input type="file" accept=".json" onChange={handleImportJSON} style={{ display: "none" }} />
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        )}

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
