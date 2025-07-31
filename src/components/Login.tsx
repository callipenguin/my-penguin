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
    setError(null);
    setSuccess(null);

    try {
      const user = await signInWithGoogle();
      // 이미 승인된 사용자라면 성공
      setSuccess("로그인 성공!");
    } catch (error: any) {
      if (error.message.includes("승인되지 않은 사용자")) {
        // 승인되지 않은 사용자인 경우 - 구글 로그인은 성공했지만 앱 접근 권한이 없음
        // 여기서 사용자 정보를 가져와서 신청 다이얼로그를 열어야 함
        try {
          // Google 로그인을 다시 시도해서 사용자 정보만 가져오기
          const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
          const { auth } = await import("../config/firebase");
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider);
          setPendingUser(result.user);
          setRequestDialogOpen(true);
        } catch (innerError) {
          setError("로그인 중 오류가 발생했습니다.");
        }
      } else {
        setError(error.message || "로그인에 실패했습니다.");
      }
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
