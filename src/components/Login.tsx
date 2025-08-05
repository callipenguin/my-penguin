import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Alert,
  CircularProgress,
  Avatar,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Google, Send } from "@mui/icons-material";
import { signInWithGoogle, saveAccessRequest } from "../utils/firebase";
import { User } from "firebase/auth";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [pendingUser, setPendingUser] = useState<User | null>(null);
  const [accessReason, setAccessReason] = useState("");

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const user = await signInWithGoogle();
      if (user) {
        console.log("로그인 성공! App.tsx에서 권한 상태를 확인합니다. 🐧");
        // App.tsx에서 자동으로 사용자 상태에 따른 화면을 보여줌
      } else {
        // 사용자가 팝업을 닫은 경우
        console.log("로그인이 취소되었습니다.");
      }
    } catch (error: any) {
      console.error("로그인 실패:", error);
      setError(error.message || "로그인에 실패했습니다. 다시 시도해주세요. 🐧");
    } finally {
      setLoading(false);
    }
  };

  const handleAccessRequest = async () => {
    if (!pendingUser) return;

    setLoading(true);
    try {
      await saveAccessRequest({
        email: pendingUser.email!,
        displayName: pendingUser.displayName || "",
        photoURL: pendingUser.photoURL || undefined,
        reason: accessReason,
      });

      setSuccess("접근 권한 신청이 완료되었습니다! 관리자의 승인을 기다려주세요.");
      setRequestDialogOpen(false);
      setPendingUser(null);
      setAccessReason("");
    } catch (error) {
      setError("신청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        <CardContent sx={{ p: 4 }}>
          {/* 로고/아이콘 */}
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: "auto",
              mb: 3,
              bgcolor: "primary.main",
              fontSize: "2rem",
            }}
          >
            🐧
          </Avatar>

          {/* 제목 */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            펭귄 비서
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
            나만의 똑똑한 펭귄과 함께하세요 🐟
          </Typography>

          {/* 성공 메시지 */}
          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}

          {/* 에러 메시지 */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* 로그인 버튼 */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleGoogleLogin}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <Google />}
            sx={{
              py: 1.5,
              fontSize: "1.1rem",
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            {loading ? "로그인 중..." : "Google로 로그인"}
          </Button>

          <Typography variant="caption" color="textSecondary" sx={{ mt: 3, display: "block" }}>
            승인된 사용자만 접근할 수 있습니다 🔒
            <br />
            처음 사용하시는 경우 접근 권한을 신청해주세요
          </Typography>
        </CardContent>
      </Card>

      {/* 접근 권한 신청 다이얼로그 */}
      <Dialog open={requestDialogOpen} onClose={() => setRequestDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>접근 권한 신청</DialogTitle>
        <DialogContent>
          {pendingUser && (
            <Box sx={{ mb: 3, textAlign: "center" }}>
              <Avatar src={pendingUser.photoURL || undefined} sx={{ width: 60, height: 60, mx: "auto", mb: 2 }}>
                {pendingUser.displayName?.[0] || pendingUser.email?.[0]}
              </Avatar>
              <Typography variant="h6">{pendingUser.displayName}</Typography>
              <Typography variant="body2" color="textSecondary">
                {pendingUser.email}
              </Typography>
            </Box>
          )}

          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            개인 비서 앱 사용을 위한 접근 권한을 신청합니다. 관리자가 검토 후 승인해드릴게요! 🚀
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="신청 사유 (선택사항)"
            placeholder="개인 비서 앱을 사용하고 싶은 이유를 간단히 적어주세요..."
            value={accessReason}
            onChange={(e) => setAccessReason(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRequestDialogOpen(false)}>취소</Button>
          <Button onClick={handleAccessRequest} variant="contained" startIcon={<Send />} disabled={loading}>
            신청하기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Login;
