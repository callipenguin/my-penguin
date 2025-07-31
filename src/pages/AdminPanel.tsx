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
} from "@mui/material";
import { CheckCircle, Cancel, Pending, SupervisorAccount, People, PersonAdd, Block } from "@mui/icons-material";
import { getAccessRequests, updateAccessRequest, isAdmin, getCurrentUser } from "../utils/firebase";
import dayjs from "dayjs";

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

const AdminPanel: React.FC = () => {
  const theme = useTheme();
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<AccessRequest | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [adminNotes, setAdminNotes] = useState("");
  const [actionType, setActionType] = useState<"approve" | "reject">("approve");

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
      if (result.success) {
        setRequests(result.data);
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
      await updateAccessRequest(selectedRequest.email, actionType, adminNotes);
      await loadRequests(); // 목록 새로고침
      setDialogOpen(false);
      setSelectedRequest(null);
      setAdminNotes("");
    } catch (error) {
      console.error("요청 처리 실패:", error);
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
        return "대기 중";
      case "approved":
        return "승인됨";
      case "rejected":
        return "거부됨";
      default:
        return "알 수 없음";
    }
  };

  if (!isUserAdmin) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Alert severity="error">관리자만 접근할 수 있는 페이지입니다. 🐧</Alert>
      </Box>
    );
  }

  const pendingRequests = requests.filter((r) => r.status === "pending");
  const approvedRequests = requests.filter((r) => r.status === "approved");
  const rejectedRequests = requests.filter((r) => r.status === "rejected");

  return (
    <Box sx={{ p: 3 }}>
      {/* 헤더 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          🐻‍❄️ 관리자 패널
        </Typography>
        <Typography variant="body1" color="textSecondary">
          펭귄 비서 접근 권한 요청을 관리하세요
        </Typography>
      </Box>

      {/* 통계 카드 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Pending sx={{ fontSize: 40, color: theme.palette.warning.main, mb: 1 }} />
              <Typography variant="h4" color="warning.main">
                {pendingRequests.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                대기 중
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <CheckCircle sx={{ fontSize: 40, color: theme.palette.success.main, mb: 1 }} />
              <Typography variant="h4" color="success.main">
                {approvedRequests.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                승인됨
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Cancel sx={{ fontSize: 40, color: theme.palette.error.main, mb: 1 }} />
              <Typography variant="h4" color="error.main">
                {rejectedRequests.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                거부됨
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <People sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="h4" color="primary.main">
                {requests.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                총 요청
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 요청 목록 */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🐧 접근 권한 요청 목록
          </Typography>

          {requests.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography color="textSecondary">아직 접근 권한 요청이 없습니다 ❄️</Typography>
            </Box>
          ) : (
            <List>
              {requests.map((request, index) => (
                <React.Fragment key={request.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src={request.photoURL} sx={{ width: 48, height: 48 }}>
                        {request.displayName?.[0] || request.email?.[0]}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {request.displayName || "이름 없음"}
                          </Typography>
                          <Chip
                            icon={getStatusIcon(request.status)}
                            label={getStatusLabel(request.status)}
                            size="small"
                            sx={{
                              backgroundColor: getStatusColor(request.status) + "20",
                              color: getStatusColor(request.status),
                            }}
                          />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="textSecondary">
                            {request.email}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            신청일: {dayjs(request.requestedAt).format("YYYY-MM-DD HH:mm")}
                          </Typography>
                          {request.reason && (
                            <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic" }}>
                              사유: {request.reason}
                            </Typography>
                          )}
                          {request.adminNotes && (
                            <Typography variant="body2" sx={{ mt: 1, color: "primary.main" }}>
                              관리자 메모: {request.adminNotes}
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
                            size="small"
                            startIcon={<CheckCircle />}
                            onClick={() => handleAction(request, "approve")}
                          >
                            승인
                          </Button>
                          <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            startIcon={<Cancel />}
                            onClick={() => handleAction(request, "reject")}
                          >
                            거부
                          </Button>
                        </Box>
                      </ListItemSecondaryAction>
                    )}
                  </ListItem>
                  {index < requests.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}
        </CardContent>
      </Card>

      {/* 승인/거부 확인 다이얼로그 */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{actionType === "approve" ? "접근 권한 승인" : "접근 권한 거부"}</DialogTitle>
        <DialogContent>
          {selectedRequest && (
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Avatar src={selectedRequest.photoURL} sx={{ width: 60, height: 60 }}>
                  {selectedRequest.displayName?.[0] || selectedRequest.email?.[0]}
                </Avatar>
                <Box>
                  <Typography variant="h6">{selectedRequest.displayName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {selectedRequest.email}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" sx={{ mb: 2 }}>
                {actionType === "approve"
                  ? "이 사용자에게 펭귄 비서 접근 권한을 승인하시겠습니까? 🐧"
                  : "이 사용자의 접근 권한 요청을 거부하시겠습니까? ❄️"}
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={3}
                label="관리자 메모 (선택사항)"
                placeholder={
                  actionType === "approve" ? "승인 사유나 추가 안내사항을 입력하세요..." : "거부 사유를 입력하세요..."
                }
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>취소</Button>
          <Button onClick={confirmAction} variant="contained" color={actionType === "approve" ? "success" : "error"}>
            {actionType === "approve" ? "승인하기" : "거부하기"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPanel;
