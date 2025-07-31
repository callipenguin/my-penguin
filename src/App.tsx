import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, CircularProgress, Typography } from "@mui/material";
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
import { onAuthStateChange, isAuthorizedUser } from "./utils/firebase";

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
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      if (user) {
        // 승인된 사용자인지 확인
        if (isAuthorizedUser(user.email)) {
          setUser(user);
          setAuthError(null);
        } else {
          setUser(null);
          setAuthError("승인되지 않은 사용자입니다. 관리자에게 문의하세요.");
        }
      } else {
        setUser(null);
        setAuthError(null);
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
            로딩 중...
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }

  // 로그인되지 않았거나 승인되지 않은 사용자
  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
        {authError && (
          <Box
            sx={{
              position: "fixed",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor: "error.main",
              color: "white",
              px: 3,
              py: 1,
              borderRadius: 1,
            }}
          >
            {authError}
          </Box>
        )}
      </ThemeProvider>
    );
  }

  // 인증된 사용자 - 메인 앱
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

export default App;
