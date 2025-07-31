import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, CircularProgress, Typography, Avatar, TextField, Button } from "@mui/material";
import { User } from "firebase/auth";
import "dayjs/locale/ko";

// Components
import Layout from "./components/Layout";
import Login from "./components/Login";

// Pages
import Dashboard from "./pages/Dashboard";
import ConditionTracker from "./pages/ConditionTracker";
import ProjectManager from "./pages/ProjectManager";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";

// Firebase
import { onAuthStateChange, getUserAccessStatus } from "./utils/firebase";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c2c2c", // 펭귄 검은색
      light: "#525252",
      dark: "#1a1a1a",
    },
    secondary: {
      main: "#ffeb3b", // 펭귄 부리 노란색
      light: "#ffff72",
      dark: "#c8b900",
    },
    background: {
      default: "#f8f9fa", // 빙하 흰색
      paper: "#ffffff",
    },
    info: {
      main: "#00bcd4", // 바다 청록색
    },
    success: {
      main: "#4caf50", // 생선 초록색
    },
    warning: {
      main: "#ff9800", // 따뜻한 오렌지
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16, // 둥근 펭귄 모양
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 20, // 펭귄처럼 둥글게
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userAccessStatus, setUserAccessStatus] = useState<"approved" | "pending" | "rejected" | "not_found" | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (user) => {
      if (user) {
        // 사용자의 접근 상태 확인
        const accessStatus = await getUserAccessStatus(user.email);
        setUser(user);
        setUserAccessStatus(accessStatus.status);
      } else {
        setUser(null);
        setUserAccessStatus(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 로딩 화면
  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <CircularProgress size={60} sx={{ mb: 2 }} />
          <Typography variant="h6" color="white">
            로딩 중... 🐧
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }

  // 로그인되지 않은 사용자
  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    );
  }

  // 로그인된 사용자의 접근 상태별 화면
  if (userAccessStatus === "approved") {
    // 승인된 사용자 - 메인 앱
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Box sx={{ height: "100vh", display: "flex" }}>
              <Layout user={user}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/condition" element={<ConditionTracker />} />
                  <Route path="/projects" element={<ProjectManager />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Layout>
            </Box>
          </Router>
        </ThemeProvider>
      </LocalizationProvider>
    );
  }

  // 기타 상태 (pending, rejected, not_found) - 상태별 메시지 화면
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AccessStatusScreen user={user} status={userAccessStatus} />
    </ThemeProvider>
  );
}

// 접근 상태별 화면 컴포넌트
const AccessStatusScreen: React.FC<{
  user: User;
  status: "pending" | "rejected" | "not_found" | null;
}> = ({ user, status }) => {
  const renderContent = () => {
    switch (status) {
      case "pending":
        return (
          <Box sx={{ textAlign: "center", maxWidth: 600 }}>
            <Typography variant="h4" gutterBottom>
              ⏳ 승인 대기 중
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              안녕하세요, {user.displayName}님! 🐧
              <br />
              펭귄 비서 접근 권한 요청이 검토 중입니다.
              <br />
              관리자의 승인을 기다려주세요.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              승인이 완료되면 자동으로 서비스를 이용하실 수 있습니다.
            </Typography>
          </Box>
        );

      case "rejected":
        return (
          <Box sx={{ textAlign: "center", maxWidth: 600 }}>
            <Typography variant="h4" gutterBottom color="error">
              ❌ 접근 권한 거부됨
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              죄송합니다, {user.displayName}님.
              <br />
              펭귄 비서 접근 권한이 거부되었습니다. ❄️
              <br />
              자세한 사항은 관리자에게 문의해주세요.
            </Typography>
          </Box>
        );

      case "not_found":
      default:
        return <AccessRequestForm user={user} />;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        p: 3,
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          p: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          maxWidth: 800,
          width: "100%",
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

// 접근 권한 요청 폼 컴포넌트
const AccessRequestForm: React.FC<{ user: User }> = ({ user }) => {
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.email) return;

    setSubmitting(true);
    try {
      const { saveAccessRequest } = await import("./utils/firebase");
      const result = await saveAccessRequest({
        email: user.email,
        displayName: user.displayName || "이름 없음",
        photoURL: user.photoURL || undefined,
        reason: reason.trim() || undefined,
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error("요청 저장 실패");
      }
    } catch (error) {
      console.error("접근 권한 요청 실패:", error);
      alert("요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Box sx={{ textAlign: "center", maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom color="success.main">
          ✅ 접근 권한 요청 완료!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          안녕하세요, {user.displayName}님! 🎉
          <br />
          펭귄 비서 접근 권한 요청이 성공적으로 전송되었습니다.
          <br />
          관리자의 승인을 기다려주세요.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          승인이 완료되면 이 화면에서 자동으로 서비스로 이동됩니다.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          🐧 펭귄 비서 접근 권한 요청
        </Typography>
        <Typography variant="body1" color="textSecondary">
          안녕하세요, {user.displayName}님!
          <br />
          펭귄 비서를 이용하기 위해 접근 권한을 요청해주세요.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, p: 2, bgcolor: "grey.50", borderRadius: 2 }}>
        <Avatar src={user.photoURL || undefined} sx={{ width: 60, height: 60 }}>
          {user.displayName?.[0] || user.email?.[0]}
        </Avatar>
        <Box>
          <Typography variant="h6">{user.displayName}</Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </Box>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="사용 목적 (선택사항)"
          placeholder="펭귄 비서를 어떤 용도로 사용하고 싶으신지 간단히 설명해주세요..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={submitting}
            startIcon={submitting ? <CircularProgress size={20} /> : undefined}
            sx={{ minWidth: 200 }}
          >
            {submitting ? "요청 중..." : "접근 권한 요청하기"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default App;
