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
  Avatar,
  Chip,
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
} from "@mui/icons-material";
import { UserPreferences } from "../types";

const Settings: React.FC = () => {
  const theme = useTheme();
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
    <Box sx={{ p: 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
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
                      onChange={(e) => setPreferences((prev) => ({ ...prev, language: e.target.value as "ko" | "en" }))}
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
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, theme: e.target.value as "light" | "dark" | "auto" }))
                  }
                >
                  <MenuItem value="light">라이트 모드 ☀️</MenuItem>
                  <MenuItem value="dark">다크 모드 🌙</MenuItem>
                  <MenuItem value="auto">시스템 설정 따라가기 🔄</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                테마 변경은 앱을 다시 시작한 후 적용됩니다.
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
    </Box>
  );
};

export default Settings;
