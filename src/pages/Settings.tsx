import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Switch,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Divider,
  Alert,
  Slider,
  useTheme,
  useMediaQuery,
  Avatar,
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Person,
  Notifications,
  Palette,
  Schedule,
  Storage,
  Info,
  Save,
  RestoreFromTrash,
  Download,
  Upload,
  CloudSync,
  CloudUpload,
  CloudDownload,
  ExpandMore,
} from "@mui/icons-material";
import { UserPreferences } from "../types";
import {
  migrateLocalDataToFirebase,
  downloadFirebaseDataToLocal,
  syncDataBidirectional,
  getCurrentUser,
} from "../utils/firebase";

const Settings: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [preferences, setPreferences] = useState<UserPreferences>({
    name: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    workingHours: {
      start: 9,
      end: 18,
    },
    notifications: {
      conditionReminders: true,
      projectDeadlines: true,
      breakReminders: true,
    },
    theme: "light",
    language: "ko",
  });

  const [saveMessage, setSaveMessage] = useState<string>("");
  const [appVersion, setAppVersion] = useState<string>("1.0.0");
  const [syncStatus, setSyncStatus] = useState<string>("");
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const currentUser = getCurrentUser();

  // 설정 로드
  useEffect(() => {
    loadSettings();
    loadAppVersion();
  }, []);

  const loadSettings = async () => {
    try {
      // 실제로는 electron API에서 로드
      if (window.electronAPI) {
        const result = await window.electronAPI.loadData("settings");
        if (result.success && result.data) {
          setPreferences((prev) => ({ ...prev, ...result.data }));
        }
      }
    } catch (error) {
      console.error("설정 로드 실패:", error);
    }
  };

  const loadAppVersion = async () => {
    try {
      if (window.electronAPI) {
        const version = await window.electronAPI.getAppVersion();
        setAppVersion(version);
      }
    } catch (error) {
      console.error("버전 정보 로드 실패:", error);
    }
  };

  // 동기화 함수들
  const handleUploadToFirebase = async () => {
    if (!currentUser) {
      setSyncStatus("❌ 로그인이 필요합니다");
      return;
    }

    setIsSyncing(true);
    setSyncStatus("⬆️ 로컬 데이터를 Firebase로 업로드 중...");

    try {
      const result = await migrateLocalDataToFirebase(currentUser.uid);

      if (result.success) {
        setSyncStatus(`✅ 업로드 완료! ${result.migratedCount}개 데이터 타입 동기화됨`);
      } else {
        setSyncStatus(`⚠️ 일부 업로드 실패: ${result.errors.join(", ")}`);
      }
    } catch (error) {
      setSyncStatus(`❌ 업로드 실패: ${error}`);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleDownloadFromFirebase = async () => {
    if (!currentUser) {
      setSyncStatus("❌ 로그인이 필요합니다");
      return;
    }

    setIsSyncing(true);
    setSyncStatus("⬇️ Firebase에서 로컬로 데이터 다운로드 중...");

    try {
      const result = await downloadFirebaseDataToLocal(currentUser.uid);

      if (result.success) {
        setSyncStatus(`✅ 다운로드 완료! ${result.downloadedCount}개 데이터 타입 동기화됨`);
      } else {
        setSyncStatus(`⚠️ 일부 다운로드 실패: ${result.errors.join(", ")}`);
      }
    } catch (error) {
      setSyncStatus(`❌ 다운로드 실패: ${error}`);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleBidirectionalSync = async () => {
    if (!currentUser) {
      setSyncStatus("❌ 로그인이 필요합니다");
      return;
    }

    setIsSyncing(true);
    setSyncStatus("🔄 양방향 데이터 동기화 중...");

    try {
      const result = await syncDataBidirectional(currentUser.uid);

      if (result.success) {
        setSyncStatus(`✅ 동기화 완료! ⬆️${result.syncedUp}개 업로드, ⬇️${result.syncedDown}개 다운로드`);
      } else {
        setSyncStatus(`⚠️ 일부 동기화 실패: ${result.conflicts.join(", ")}`);
      }
    } catch (error) {
      setSyncStatus(`❌ 동기화 실패: ${error}`);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSave = async () => {
    try {
      if (window.electronAPI) {
        const result = await window.electronAPI.saveData("settings", preferences);
        if (result.success) {
          setSaveMessage("설정이 저장되었습니다! ✅");
          setTimeout(() => setSaveMessage(""), 3000);
        } else {
          setSaveMessage("설정 저장에 실패했습니다. ❌");
        }
      } else {
        // 개발 모드에서는 localStorage 사용
        localStorage.setItem("settings", JSON.stringify(preferences));
        setSaveMessage("설정이 저장되었습니다! ✅");
        setTimeout(() => setSaveMessage(""), 3000);
      }
    } catch (error) {
      console.error("설정 저장 실패:", error);
      setSaveMessage("설정 저장에 실패했습니다. ❌");
    }
  };

  const handleReset = () => {
    setPreferences({
      name: "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      workingHours: {
        start: 9,
        end: 18,
      },
      notifications: {
        conditionReminders: true,
        projectDeadlines: true,
        breakReminders: true,
      },
      theme: "light",
      language: "ko",
    });
    setSaveMessage("설정이 초기화되었습니다.");
  };

  const exportData = () => {
    // 데이터 내보내기 기능
    setSaveMessage("데이터 내보내기 기능은 곧 지원될 예정입니다! 🚀");
  };

  const importData = () => {
    // 데이터 가져오기 기능
    setSaveMessage("데이터 가져오기 기능은 곧 지원될 예정입니다! 🚀");
  };

  const getWorkingHoursText = () => {
    const startTime = preferences.workingHours.start.toString().padStart(2, "0") + ":00";
    const endTime = preferences.workingHours.end.toString().padStart(2, "0") + ":00";
    return `${startTime} - ${endTime}`;
  };

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 3 }}>
        <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold" gutterBottom>
          ⚙️ 설정
        </Typography>
        <Typography variant="body1" color="textSecondary">
          개인 비서 앱을 나에게 맞게 커스터마이징하세요
        </Typography>
      </Box>

      {/* 저장 메시지 */}
      {saveMessage && (
        <Alert severity={saveMessage.includes("실패") ? "error" : "success"} sx={{ mb: 3 }}>
          {saveMessage}
        </Alert>
      )}

      {/* 🔥 모바일에서는 Accordion, 데스크톱에서는 Grid */}
      {isMobile ? (
        <Stack spacing={2}>
          {/* 개인 정보 설정 */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Person sx={{ color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight="bold">
                  개인 정보
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="이름"
                  placeholder="이름을 입력하세요"
                  value={preferences.name}
                  onChange={(e) => setPreferences((prev) => ({ ...prev, name: e.target.value }))}
                />

                <FormControl fullWidth>
                  <InputLabel>언어</InputLabel>
                  <Select
                    value={preferences.language}
                    label="언어"
                    onChange={(e) => setPreferences((prev) => ({ ...prev, language: e.target.value as "ko" | "en" }))}
                  >
                    <MenuItem value="ko">한국어 🇰🇷</MenuItem>
                    <MenuItem value="en">English 🇺🇸</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>시간대</InputLabel>
                  <Select
                    value={preferences.timezone}
                    label="시간대"
                    onChange={(e) => setPreferences((prev) => ({ ...prev, timezone: e.target.value }))}
                  >
                    <MenuItem value="Asia/Seoul">서울 (GMT+9) 🇰🇷</MenuItem>
                    <MenuItem value="America/New_York">뉴욕 (GMT-5) 🇺🇸</MenuItem>
                    <MenuItem value="Europe/London">런던 (GMT+0) 🇬🇧</MenuItem>
                    <MenuItem value="Asia/Tokyo">도쿄 (GMT+9) 🇯🇵</MenuItem>
                  </Select>
                </FormControl>

                {/* 프로필 카드 */}
                <Card variant="outlined">
                  <CardContent sx={{ textAlign: "center" }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        mx: "auto",
                        mb: 2,
                        bgcolor: theme.palette.primary.main,
                        fontSize: "1.5rem",
                      }}
                    >
                      {preferences.name ? preferences.name.charAt(0).toUpperCase() : "😊"}
                    </Avatar>

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {preferences.name || "사용자님"}
                    </Typography>

                    <Chip label="활성 사용자" color="success" size="small" sx={{ mb: 2 }} />

                    <Typography variant="body2" color="textSecondary">
                      개인 비서와 함께 체계적인 인생을 만들어가고 있어요! 🚀
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* 근무 시간 설정 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Schedule sx={{ color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight="bold">
                  근무 시간 설정
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={3}>
                <Typography variant="body2" color="text.secondary">
                  현재 근무 시간: <strong>{getWorkingHoursText()}</strong>
                </Typography>

                <Box>
                  <Typography variant="body2" gutterBottom>
                    시작 시간: {preferences.workingHours.start}:00
                  </Typography>
                  <Slider
                    value={preferences.workingHours.start}
                    onChange={(_, value) =>
                      setPreferences((prev) => ({
                        ...prev,
                        workingHours: { ...prev.workingHours, start: value as number },
                      }))
                    }
                    min={0}
                    max={23}
                    step={1}
                    marks={[
                      { value: 6, label: "6시" },
                      { value: 9, label: "9시" },
                      { value: 12, label: "12시" },
                    ]}
                    valueLabelDisplay="auto"
                  />
                </Box>

                <Box>
                  <Typography variant="body2" gutterBottom>
                    종료 시간: {preferences.workingHours.end}:00
                  </Typography>
                  <Slider
                    value={preferences.workingHours.end}
                    onChange={(_, value) =>
                      setPreferences((prev) => ({
                        ...prev,
                        workingHours: { ...prev.workingHours, end: value as number },
                      }))
                    }
                    min={12}
                    max={23}
                    step={1}
                    marks={[
                      { value: 15, label: "15시" },
                      { value: 18, label: "18시" },
                      { value: 21, label: "21시" },
                    ]}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* 알림 설정 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Notifications sx={{ color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight="bold">
                  알림 설정
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2} divider={<Divider />}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography variant="body1">컨디션 리마인더</Typography>
                    <Typography variant="body2" color="textSecondary">
                      정기적으로 컨디션 기록을 알려줍니다
                    </Typography>
                  </Box>
                  <Switch
                    checked={preferences.notifications.conditionReminders}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        notifications: { ...prev.notifications, conditionReminders: e.target.checked },
                      }))
                    }
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography variant="body1">프로젝트 마감일</Typography>
                    <Typography variant="body2" color="textSecondary">
                      프로젝트 마감일이 다가오면 알려줍니다
                    </Typography>
                  </Box>
                  <Switch
                    checked={preferences.notifications.projectDeadlines}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        notifications: { ...prev.notifications, projectDeadlines: e.target.checked },
                      }))
                    }
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography variant="body1">휴식 리마인더</Typography>
                    <Typography variant="body2" color="textSecondary">
                      적절한 휴식 시간을 알려줍니다
                    </Typography>
                  </Box>
                  <Switch
                    checked={preferences.notifications.breakReminders}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        notifications: { ...prev.notifications, breakReminders: e.target.checked },
                      }))
                    }
                  />
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* 테마 및 외관 설정 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Palette sx={{ color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight="bold">
                  테마 및 외관
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel>테마</InputLabel>
                  <Select
                    value={preferences.theme}
                    label="테마"
                    onChange={(e) => {
                      const newTheme = e.target.value as "light" | "dark" | "auto";
                      setPreferences((prev) => ({ ...prev, theme: newTheme }));

                      // 즉시 테마 적용을 위해 설정 저장
                      const updatedPreferences = { ...preferences, theme: newTheme };
                      localStorage.setItem("settings", JSON.stringify(updatedPreferences));

                      // 페이지 새로고침으로 테마 즉시 적용
                      window.location.reload();
                    }}
                  >
                    <MenuItem value="light">라이트 모드 ☀️</MenuItem>
                    <MenuItem value="dark">다크 모드 🌙</MenuItem>
                    <MenuItem value="auto">시스템 설정 따라가기 🔄</MenuItem>
                  </Select>
                </FormControl>

                <Typography variant="body2" color="textSecondary">
                  테마 변경이 즉시 적용됩니다! ✨
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* 데이터 관리 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Storage sx={{ color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight="bold">
                  데이터 관리
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <Button fullWidth variant="outlined" startIcon={<Download />} onClick={exportData}>
                  데이터 내보내기
                </Button>
                <Button fullWidth variant="outlined" startIcon={<Upload />} onClick={importData}>
                  데이터 가져오기
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="warning"
                  startIcon={<RestoreFromTrash />}
                  onClick={handleReset}
                >
                  설정 초기화
                </Button>
                <Button fullWidth variant="contained" startIcon={<Save />} onClick={handleSave}>
                  설정 저장
                </Button>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* 데이터 동기화 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Storage sx={{ color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight="bold">
                  📊 데이터 동기화 & 백업
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <Typography variant="body2" color="textSecondary">
                  로컬 저장소와 Firebase 클라우드 간 데이터를 동기화하세요. 로그인 상태:{" "}
                  {currentUser ? `✅ ${currentUser.email}` : "❌ 로그아웃됨"}
                </Typography>

                {syncStatus && (
                  <Alert
                    severity={
                      syncStatus.includes("✅")
                        ? "success"
                        : syncStatus.includes("⚠️")
                        ? "warning"
                        : syncStatus.includes("❌")
                        ? "error"
                        : "info"
                    }
                  >
                    {syncStatus}
                  </Alert>
                )}

                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  startIcon={<CloudUpload />}
                  onClick={handleUploadToFirebase}
                  disabled={isSyncing || !currentUser}
                >
                  ⬆️ 업로드 (로컬 → Firebase)
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  startIcon={<CloudDownload />}
                  onClick={handleDownloadFromFirebase}
                  disabled={isSyncing || !currentUser}
                >
                  ⬇️ 다운로드 (Firebase → 로컬)
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  size="large"
                  startIcon={<CloudSync />}
                  onClick={handleBidirectionalSync}
                  disabled={isSyncing || !currentUser}
                >
                  🔄 스마트 동기화 (추천)
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  color="warning"
                  startIcon={<RestoreFromTrash />}
                  onClick={() => {
                    if (window.confirm("정말로 모든 로컬 데이터를 삭제하시겠습니까?")) {
                      localStorage.clear();
                      setSyncStatus("🗑️ 로컬 데이터가 모두 삭제되었습니다");
                    }
                  }}
                  disabled={isSyncing}
                >
                  🗑️ 로컬 데이터 삭제
                </Button>

                <Box sx={{ p: 2, bgcolor: theme.palette.grey[50], borderRadius: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    <strong>💡 동기화 가이드:</strong>
                    <br />• <strong>스마트 동기화</strong>: 최신 데이터를 자동으로 선택해서 양방향 동기화 (추천) 🌟
                    <br />• <strong>업로드</strong>: 로컬 데이터를 클라우드에 강제 업로드
                    <br />• <strong>다운로드</strong>: 클라우드 데이터를 로컬에 강제 다운로드
                    <br />• 로그인 시 자동으로 스마트 동기화가 실행됩니다 🚀
                  </Typography>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* 앱 정보 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Info sx={{ color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight="bold">
                  앱 정보
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    앱 이름
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    개인 비서 🤖
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="textSecondary">
                    버전
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    v{appVersion}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="textSecondary">
                    개발자
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    Your Name
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="textSecondary">
                    마지막 업데이트
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    2024년 7월
                  </Typography>
                </Box>

                <Typography variant="body2" color="textSecondary">
                  체계적인 인생을 위한 개인 비서 애플리케이션입니다. 컨디션 관리, 프로젝트 추적, AI 상담 기능을 통해 더
                  나은 일상을 만들어가세요! 💪
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>
      ) : (
        // 🖥️ 데스크톱 Grid 레이아웃 (기존 코드 유지)
        <Grid container spacing={3}>
          {/* 개인 정보 설정 */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Person sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    개인 정보
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="이름"
                      placeholder="이름을 입력하세요"
                      value={preferences.name}
                      onChange={(e) => setPreferences((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>언어</InputLabel>
                      <Select
                        value={preferences.language}
                        label="언어"
                        onChange={(e) =>
                          setPreferences((prev) => ({ ...prev, language: e.target.value as "ko" | "en" }))
                        }
                      >
                        <MenuItem value="ko">한국어 🇰🇷</MenuItem>
                        <MenuItem value="en">English 🇺🇸</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>시간대</InputLabel>
                      <Select
                        value={preferences.timezone}
                        label="시간대"
                        onChange={(e) => setPreferences((prev) => ({ ...prev, timezone: e.target.value }))}
                      >
                        <MenuItem value="Asia/Seoul">서울 (GMT+9) 🇰🇷</MenuItem>
                        <MenuItem value="America/New_York">뉴욕 (GMT-5) 🇺🇸</MenuItem>
                        <MenuItem value="Europe/London">런던 (GMT+0) 🇬🇧</MenuItem>
                        <MenuItem value="Asia/Tokyo">도쿄 (GMT+9) 🇯🇵</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* 프로필 카드 */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    bgcolor: theme.palette.primary.main,
                    fontSize: "2rem",
                  }}
                >
                  {preferences.name ? preferences.name.charAt(0).toUpperCase() : "😊"}
                </Avatar>

                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {preferences.name || "사용자님"}
                </Typography>

                <Chip label="활성 사용자" color="success" size="small" sx={{ mb: 2 }} />

                <Typography variant="body2" color="textSecondary">
                  개인 비서와 함께 체계적인 인생을 만들어가고 있어요! 🚀
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 근무 시간 설정 */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Schedule sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    근무 시간 설정
                  </Typography>
                </Box>

                <Typography variant="body2" color="textSecondary" gutterBottom>
                  현재 근무 시간: <strong>{getWorkingHoursText()}</strong>
                </Typography>

                <Grid container spacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" gutterBottom>
                      시작 시간: {preferences.workingHours.start}:00
                    </Typography>
                    <Slider
                      value={preferences.workingHours.start}
                      onChange={(_, value) =>
                        setPreferences((prev) => ({
                          ...prev,
                          workingHours: { ...prev.workingHours, start: value as number },
                        }))
                      }
                      min={0}
                      max={23}
                      step={1}
                      marks={[
                        { value: 6, label: "6시" },
                        { value: 9, label: "9시" },
                        { value: 12, label: "12시" },
                      ]}
                      valueLabelDisplay="auto"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" gutterBottom>
                      종료 시간: {preferences.workingHours.end}:00
                    </Typography>
                    <Slider
                      value={preferences.workingHours.end}
                      onChange={(_, value) =>
                        setPreferences((prev) => ({
                          ...prev,
                          workingHours: { ...prev.workingHours, end: value as number },
                        }))
                      }
                      min={12}
                      max={23}
                      step={1}
                      marks={[
                        { value: 15, label: "15시" },
                        { value: 18, label: "18시" },
                        { value: 21, label: "21시" },
                      ]}
                      valueLabelDisplay="auto"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* 알림 설정 */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Notifications sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    알림 설정
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography variant="body1">컨디션 리마인더</Typography>
                      <Typography variant="body2" color="textSecondary">
                        정기적으로 컨디션 기록을 알려줍니다
                      </Typography>
                    </Box>
                    <Switch
                      checked={preferences.notifications.conditionReminders}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          notifications: { ...prev.notifications, conditionReminders: e.target.checked },
                        }))
                      }
                    />
                  </Box>

                  <Divider />

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography variant="body1">프로젝트 마감일</Typography>
                      <Typography variant="body2" color="textSecondary">
                        프로젝트 마감일이 다가오면 알려줍니다
                      </Typography>
                    </Box>
                    <Switch
                      checked={preferences.notifications.projectDeadlines}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          notifications: { ...prev.notifications, projectDeadlines: e.target.checked },
                        }))
                      }
                    />
                  </Box>

                  <Divider />

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography variant="body1">휴식 리마인더</Typography>
                      <Typography variant="body2" color="textSecondary">
                        적절한 휴식 시간을 알려줍니다
                      </Typography>
                    </Box>
                    <Switch
                      checked={preferences.notifications.breakReminders}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          notifications: { ...prev.notifications, breakReminders: e.target.checked },
                        }))
                      }
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* 테마 및 외관 설정 */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Palette sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    테마 및 외관
                  </Typography>
                </Box>

                <FormControl fullWidth>
                  <InputLabel>테마</InputLabel>
                  <Select
                    value={preferences.theme}
                    label="테마"
                    onChange={(e) => {
                      const newTheme = e.target.value as "light" | "dark" | "auto";
                      setPreferences((prev) => ({ ...prev, theme: newTheme }));

                      // 즉시 테마 적용을 위해 설정 저장
                      const updatedPreferences = { ...preferences, theme: newTheme };
                      localStorage.setItem("settings", JSON.stringify(updatedPreferences));

                      // 페이지 새로고침으로 테마 즉시 적용
                      window.location.reload();
                    }}
                  >
                    <MenuItem value="light">라이트 모드 ☀️</MenuItem>
                    <MenuItem value="dark">다크 모드 🌙</MenuItem>
                    <MenuItem value="auto">시스템 설정 따라가기 🔄</MenuItem>
                  </Select>
                </FormControl>

                <Typography variant="body2" color="textSecondary">
                  테마 변경이 즉시 적용됩니다! ✨
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 데이터 관리 */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Storage sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    데이터 관리
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Button fullWidth variant="outlined" startIcon={<Download />} onClick={exportData}>
                      데이터 내보내기
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button fullWidth variant="outlined" startIcon={<Upload />} onClick={importData}>
                      데이터 가져오기
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="warning"
                      startIcon={<RestoreFromTrash />}
                      onClick={handleReset}
                    >
                      설정 초기화
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button fullWidth variant="contained" startIcon={<Save />} onClick={handleSave}>
                      설정 저장
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* 데이터 동기화 */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Storage sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    📊 데이터 동기화 & 백업
                  </Typography>
                </Box>

                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                  로컬 저장소와 Firebase 클라우드 간 데이터를 동기화하세요. 로그인 상태:{" "}
                  {currentUser ? `✅ ${currentUser.email}` : "❌ 로그아웃됨"}
                </Typography>

                {syncStatus && (
                  <Alert
                    severity={
                      syncStatus.includes("✅")
                        ? "success"
                        : syncStatus.includes("⚠️")
                        ? "warning"
                        : syncStatus.includes("❌")
                        ? "error"
                        : "info"
                    }
                    sx={{ mb: 3 }}
                  >
                    {syncStatus}
                  </Alert>
                )}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      startIcon={<CloudUpload />}
                      onClick={handleUploadToFirebase}
                      disabled={isSyncing || !currentUser}
                    >
                      ⬆️ 업로드
                    </Button>
                    <Typography variant="caption" display="block" sx={{ mt: 1, textAlign: "center" }}>
                      로컬 → Firebase
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      startIcon={<CloudDownload />}
                      onClick={handleDownloadFromFirebase}
                      disabled={isSyncing || !currentUser}
                    >
                      ⬇️ 다운로드
                    </Button>
                    <Typography variant="caption" display="block" sx={{ mt: 1, textAlign: "center" }}>
                      Firebase → 로컬
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      startIcon={<CloudSync />}
                      onClick={handleBidirectionalSync}
                      disabled={isSyncing || !currentUser}
                    >
                      🔄 스마트 동기화
                    </Button>
                    <Typography variant="caption" display="block" sx={{ mt: 1, textAlign: "center" }}>
                      자동 충돌 해결
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="warning"
                      startIcon={<RestoreFromTrash />}
                      onClick={() => {
                        if (window.confirm("정말로 모든 로컬 데이터를 삭제하시겠습니까?")) {
                          localStorage.clear();
                          setSyncStatus("🗑️ 로컬 데이터가 모두 삭제되었습니다");
                        }
                      }}
                      disabled={isSyncing}
                    >
                      🗑️ 로컬 삭제
                    </Button>
                    <Typography variant="caption" display="block" sx={{ mt: 1, textAlign: "center" }}>
                      로컬 저장소 초기화
                    </Typography>
                  </Grid>
                </Grid>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 3, p: 2, bgcolor: theme.palette.grey[50], borderRadius: 2 }}
                >
                  <strong>💡 동기화 가이드:</strong>
                  <br />• <strong>스마트 동기화</strong>: 최신 데이터를 자동으로 선택해서 양방향 동기화 (추천) 🌟
                  <br />• <strong>업로드</strong>: 로컬 데이터를 클라우드에 강제 업로드
                  <br />• <strong>다운로드</strong>: 클라우드 데이터를 로컬에 강제 다운로드
                  <br />• 로그인 시 자동으로 스마트 동기화가 실행됩니다 🚀
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 앱 정보 */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Info sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="h6" fontWeight="bold">
                    앱 정보
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="textSecondary">
                      앱 이름
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      개인 비서 🤖
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="textSecondary">
                      버전
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      v{appVersion}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="textSecondary">
                      개발자
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Your Name
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="textSecondary">
                      마지막 업데이트
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      2024년 7월
                    </Typography>
                  </Grid>
                </Grid>

                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                  체계적인 인생을 위한 개인 비서 애플리케이션입니다. 컨디션 관리, 프로젝트 추적, AI 상담 기능을 통해 더
                  나은 일상을 만들어가세요! 💪
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Settings;
