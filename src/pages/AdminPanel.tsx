import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  useTheme,
  Divider,
  Snackbar,
  useMediaQuery,
  Fade,
  Slide,
} from "@mui/material";
import {
  CheckCircle,
  Cancel,
  Pending,
  SupervisorAccount,
  People,
  PersonAdd,
  Block,
  AcUnit,
  AdminPanelSettings,
  Security,
} from "@mui/icons-material";
import { getAccessRequests, updateAccessRequest, isAdmin, getCurrentUser } from "../utils/firebase";
import dayjs from "dayjs";
import { ThemeConfigExtended } from "../types";

interface AccessRequest {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  reason?: string;
  status: "pending" | "approved" | "rejected";
  requestedAt: string;
  processedAt?: string;
  adminNotes?: string;
}

interface AdminPanelProps {
  themeConfig?: ThemeConfigExtended;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ themeConfig }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<AccessRequest | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [adminNotes, setAdminNotes] = useState("");
  const [actionType, setActionType] = useState<"approve" | "reject">("approve");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>({
    open: false,
    message: "",
    severity: "success",
  });

  const currentUser = getCurrentUser();
  const isUserAdmin = isAdmin(currentUser?.email || null);

  useEffect(() => {
    if (isUserAdmin) {
      loadRequests();
    }
  }, [isUserAdmin]);

  const loadRequests = async () => {
    try {
      const result = await getAccessRequests();
      if (result.success && result.data) {
        setRequests(result.data as AccessRequest[]);
      }
    } catch (error) {
      console.error("요청 로드 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (request: AccessRequest, action: "approve" | "reject") => {
    setSelectedRequest(request);
    setActionType(action);
    setAdminNotes("");
    setDialogOpen(true);
  };

  const confirmAction = async () => {
    if (!selectedRequest) return;

    try {
      const status = actionType === "approve" ? "approved" : "rejected";
      const result = await updateAccessRequest(selectedRequest.email, status, adminNotes);

      if (result.success) {
        await loadRequests(); // 목록 새로고침
        setDialogOpen(false);
        setSelectedRequest(null);
        setAdminNotes("");

        // 성공 메시지 표시
        const message =
          actionType === "approve"
            ? `✅ ${selectedRequest.displayName ?? selectedRequest.email}님 ${
                themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"
              } 기지 입장 허가! 🎉`
            : `❌ ${selectedRequest.displayName ?? selectedRequest.email}님 ${
                themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"
              } 기지 접근 차단!`;

        setSnackbar({
          open: true,
          message,
          severity: "success",
        });
      } else {
        throw new Error(result.error?.toString() || "처리 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("요청 처리 실패:", error);
      setSnackbar({
        open: true,
        message: `처리 실패: ${error instanceof Error ? error.message : "알 수 없는 오류"}`,
        severity: "error",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return theme.palette.warning.main;
      case "approved":
        return theme.palette.success.main;
      case "rejected":
        return theme.palette.error.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Pending />;
      case "approved":
        return <CheckCircle />;
      case "rejected":
        return <Cancel />;
      default:
        return <Pending />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "입장 대기";
      case "approved":
        return "입장 허가";
      case "rejected":
        return "접근 차단";
      default:
        return "알 수 없음";
    }
  };

  if (!isUserAdmin) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Alert severity="error" sx={{ borderRadius: 3 }}>
          <AcUnit /> {themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"} 관리소는 관리자만 접근할 수 있어요!{" "}
          {themeConfig?.emoji || "🐧"}
        </Alert>
      </Box>
    );
  }

  const pendingRequests = requests.filter((r) => r.status === "pending");
  const approvedRequests = requests.filter((r) => r.status === "approved");
  const rejectedRequests = requests.filter((r) => r.status === "rejected");

  return (
    <Box
      sx={{
        p: isMobile ? 2 : 3,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f4fd 0%, #f0f4ff 100%)",
      }}
    >
      {/* 헤더 - 빙하 관리소 */}
      <Fade in={true} timeout={800}>
        <Card
          sx={{
            mb: 4,
            borderRadius: 4,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            color: "white",
            boxShadow: "0 8px 32px rgba(25, 118, 210, 0.3)",
            overflow: "hidden",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: "200px",
              height: "200px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              transform: "translate(50%, -50%)",
            },
          }}
        >
          <CardContent sx={{ py: 4, position: "relative", zIndex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <AdminPanelSettings sx={{ fontSize: "2.5rem" }} />
              <Typography
                variant={isMobile ? "h4" : "h3"}
                fontWeight="bold"
                sx={{
                  background: "linear-gradient(45deg, #FF6B35 30%, #F7931E 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                🏛️ {themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"} 관리소
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 1 }}>
              {themeConfig?.concepts?.animal || "펭귄"} 비서{" "}
              {themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"} 기지 접근 권한 관리
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              새로운 {themeConfig?.concepts?.animal || "펭귄"}들 입장 요청 검토 및 승인 {themeConfig?.emoji || "❄️"}
            </Typography>
          </CardContent>
        </Card>
      </Fade>

      {/* 통계 카드들 - 빙하 테마 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Slide direction="up" in={true} timeout={600}>
            <Card
              sx={{
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.warning.main}15 0%, ${theme.palette.warning.main}25 100%)`,
                border: `2px solid ${theme.palette.warning.main}30`,
                boxShadow: `0 8px 32px ${theme.palette.warning.main}20`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 12px 40px ${theme.palette.warning.main}30`,
                },
                transition: "all 0.3s ease",
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                <Box sx={{ fontSize: "3rem", mb: 2 }}>⏳</Box>
                <Typography variant="h3" color="warning.main" fontWeight="bold">
                  {pendingRequests.length}
                </Typography>
                <Typography variant="body1" color="textSecondary" fontWeight="medium">
                  입장 대기 중
                </Typography>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Slide direction="up" in={true} timeout={800}>
            <Card
              sx={{
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.success.main}15 0%, ${theme.palette.success.main}25 100%)`,
                border: `2px solid ${theme.palette.success.main}30`,
                boxShadow: `0 8px 32px ${theme.palette.success.main}20`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 12px 40px ${theme.palette.success.main}30`,
                },
                transition: "all 0.3s ease",
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                <Box sx={{ fontSize: "3rem", mb: 2 }}>🐧</Box>
                <Typography variant="h3" color="success.main" fontWeight="bold">
                  {approvedRequests.length}
                </Typography>
                <Typography variant="body1" color="textSecondary" fontWeight="medium">
                  입장 허가됨
                </Typography>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Slide direction="up" in={true} timeout={1000}>
            <Card
              sx={{
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.error.main}15 0%, ${theme.palette.error.main}25 100%)`,
                border: `2px solid ${theme.palette.error.main}30`,
                boxShadow: `0 8px 32px ${theme.palette.error.main}20`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 12px 40px ${theme.palette.error.main}30`,
                },
                transition: "all 0.3s ease",
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                <Box sx={{ fontSize: "3rem", mb: 2 }}>🚫</Box>
                <Typography variant="h3" color="error.main" fontWeight="bold">
                  {rejectedRequests.length}
                </Typography>
                <Typography variant="body1" color="textSecondary" fontWeight="medium">
                  접근 차단됨
                </Typography>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Slide direction="up" in={true} timeout={1200}>
            <Card
              sx={{
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.primary.main}25 100%)`,
                border: `2px solid ${theme.palette.primary.main}30`,
                boxShadow: `0 8px 32px ${theme.palette.primary.main}20`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 12px 40px ${theme.palette.primary.main}30`,
                },
                transition: "all 0.3s ease",
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 3 }}>
                <Box sx={{ fontSize: "3rem", mb: 2 }}>❄️</Box>
                <Typography variant="h3" color="primary.main" fontWeight="bold">
                  {requests.length}
                </Typography>
                <Typography variant="body1" color="textSecondary" fontWeight="medium">
                  총 요청 수
                </Typography>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
      </Grid>

      {/* 요청 목록 */}
      <Fade in={true} timeout={1000}>
        <Card sx={{ borderRadius: 4, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Security color="primary" />
              <Typography variant="h6" fontWeight="bold">
                {themeConfig?.emoji || "🐧"} {themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"} 기지 접근
                요청 목록
              </Typography>
            </Box>

            {requests.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography sx={{ fontSize: "4rem", mb: 2 }}>🏔️</Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"} 기지 접근 요청 대기 중
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  새로운 {themeConfig?.concepts?.animal || "펭귄"}들이 찾아올 예정 {themeConfig?.emoji || "❄️"}
                </Typography>
              </Box>
            ) : (
              <List sx={{ py: 0 }}>
                {requests.map((request, index) => (
                  <React.Fragment key={request.id}>
                    <ListItem
                      alignItems="flex-start"
                      sx={{
                        py: 3,
                        "&:hover": {
                          backgroundColor: "rgba(33, 150, 243, 0.04)",
                          borderRadius: 2,
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          src={request.photoURL}
                          sx={{
                            width: 56,
                            height: 56,
                            border: `3px solid ${getStatusColor(request.status)}40`,
                            boxShadow: `0 4px 12px ${getStatusColor(request.status)}30`,
                          }}
                        >
                          {request.displayName?.[0] || request.email?.[0]}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {request.displayName || `이름 없는 ${themeConfig?.concepts?.animal || "펭귄"}`}
                            </Typography>
                            <Chip
                              icon={getStatusIcon(request.status)}
                              label={getStatusLabel(request.status)}
                              size="small"
                              sx={{
                                backgroundColor: getStatusColor(request.status) + "20",
                                color: getStatusColor(request.status),
                                borderRadius: 3,
                                fontWeight: "bold",
                              }}
                            />
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                              📧 {request.email}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              🕒 신청일: {dayjs(request.requestedAt).format("YYYY년 M월 D일 HH:mm")}
                            </Typography>
                            {request.reason && (
                              <Typography
                                variant="body2"
                                sx={{
                                  mt: 1,
                                  p: 2,
                                  backgroundColor: "rgba(33, 150, 243, 0.08)",
                                  borderRadius: 2,
                                  fontStyle: "italic",
                                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                                }}
                              >
                                💭 사유: {request.reason}
                              </Typography>
                            )}
                            {request.adminNotes && (
                              <Typography
                                variant="body2"
                                sx={{
                                  mt: 1,
                                  p: 2,
                                  backgroundColor: "rgba(76, 175, 80, 0.08)",
                                  borderRadius: 2,
                                  color: "success.main",
                                  borderLeft: `4px solid ${theme.palette.success.main}`,
                                }}
                              >
                                🛡️ 관리자 메모: {request.adminNotes}
                              </Typography>
                            )}
                          </Box>
                        }
                      />
                      {request.status === "pending" && (
                        <ListItemSecondaryAction>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <Button
                              variant="contained"
                              color="success"
                              size={isMobile ? "small" : "medium"}
                              startIcon={<CheckCircle />}
                              onClick={() => handleAction(request, "approve")}
                              sx={{
                                borderRadius: 3,
                                boxShadow: `0 4px 12px ${theme.palette.success.main}40`,
                                "&:hover": {
                                  transform: "translateY(-2px)",
                                  boxShadow: `0 6px 16px ${theme.palette.success.main}50`,
                                },
                                transition: "all 0.2s ease",
                              }}
                            >
                              {isMobile ? "" : "입장 허가"}
                            </Button>
                            <Button
                              variant="outlined"
                              color="error"
                              size={isMobile ? "small" : "medium"}
                              startIcon={<Block />}
                              onClick={() => handleAction(request, "reject")}
                              sx={{
                                borderRadius: 3,
                                "&:hover": {
                                  transform: "translateY(-2px)",
                                  boxShadow: `0 6px 16px ${theme.palette.error.main}30`,
                                },
                                transition: "all 0.2s ease",
                              }}
                            >
                              {isMobile ? "" : "접근 차단"}
                            </Button>
                          </Box>
                        </ListItemSecondaryAction>
                      )}
                    </ListItem>
                    {index < requests.length - 1 && <Divider sx={{ my: 1 }} />}
                  </React.Fragment>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Fade>

      {/* 승인/거부 확인 다이얼로그 - 빙하 테마 */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            boxShadow: "0 24px 48px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          {actionType === "approve"
            ? `🐧 ${themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"} 기지 입장 허가`
            : `🚫 ${themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"} 기지 접근 차단`}
        </DialogTitle>
        <DialogContent sx={{ py: 4 }}>
          {selectedRequest && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  mb: 4,
                  p: 3,
                  backgroundColor: "rgba(33, 150, 243, 0.08)",
                  borderRadius: 3,
                  border: "1px solid rgba(33, 150, 243, 0.2)",
                }}
              >
                <Avatar
                  src={selectedRequest.photoURL}
                  sx={{
                    width: 80,
                    height: 80,
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {selectedRequest.displayName?.[0] || selectedRequest.email?.[0]}
                </Avatar>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {selectedRequest.displayName || "이름 없는 펭귄"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    📧 {selectedRequest.email}
                  </Typography>
                  {selectedRequest.reason && (
                    <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic" }}>
                      💭 "{selectedRequest.reason}"
                    </Typography>
                  )}
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 3, textAlign: "center", fontWeight: "medium" }}>
                {actionType === "approve"
                  ? `🎉 ${themeConfig?.concepts?.animal || "펭귄"} ${
                      themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"
                    } 기지 입장 허가하시겠어요?`
                  : `🚫 ${themeConfig?.concepts?.animal || "펭귄"} ${
                      themeConfig?.concepts?.environment?.split(" ")[0] || "빙하"
                    } 기지 접근 차단하시겠어요?`}
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={4}
                label="관리자 메모 (선택사항)"
                placeholder={
                  actionType === "approve"
                    ? "환영 메시지나 추가 안내사항을 입력하세요... 🐧"
                    : "차단 사유를 입력하세요... ❄️"
                }
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3, gap: 2 }}>
          <Button onClick={() => setDialogOpen(false)} sx={{ borderRadius: 3 }}>
            취소
          </Button>
          <Button
            onClick={confirmAction}
            variant="contained"
            color={actionType === "approve" ? "success" : "error"}
            sx={{
              borderRadius: 3,
              px: 4,
              boxShadow:
                actionType === "approve" ? "0 4px 16px rgba(76, 175, 80, 0.4)" : "0 4px 16px rgba(244, 67, 54, 0.4)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow:
                  actionType === "approve" ? "0 6px 20px rgba(76, 175, 80, 0.5)" : "0 6px 20px rgba(244, 67, 54, 0.5)",
              },
              transition: "all 0.2s ease",
            }}
          >
            {actionType === "approve" ? "🐧 입장 허가하기" : "🚫 접근 차단하기"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* 성공/실패 알림 */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            borderRadius: 3,
            "& .MuiAlert-message": {
              fontSize: "1rem",
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminPanel;
