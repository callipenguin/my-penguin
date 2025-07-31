import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  FavoriteRounded as HeartIcon,
  Assignment as ProjectIcon,
  Chat as ChatIcon,
  Settings as SettingsIcon,
  Analytics as AnalyticsIcon,
  Person as PersonIcon,
  Logout,
  MoreVert,
  Menu as MenuIcon,
  ChevronLeft,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { signOut, isAdmin } from "../utils/firebase";

const DRAWER_WIDTH = 180;
const MOBILE_DRAWER_WIDTH = 280; // 모바일에서는 조금 더 넓게

interface LayoutProps {
  children: React.ReactNode;
  user: User;
}

const Layout: React.FC<LayoutProps> = ({ children, user }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // 🔥 반응형 및 사이드바 토글 상태
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  const isUserAdmin = isAdmin(user.email);

  // 🎯 사이드바 토글 함수들
  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDesktopDrawerToggle = () => {
    setDesktopCollapsed(!desktopCollapsed);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false); // 모바일에서 메뉴 선택 시 자동 닫기
    }
  };

  const menuItems = [
    {
      text: "홈",
      icon: <DashboardIcon />,
      path: "/",
      emoji: "🐧",
      color: theme.palette.primary.main,
    },
    {
      text: "컨디션",
      icon: <HeartIcon />,
      path: "/condition",
      emoji: "🐟",
      color: theme.palette.success.main,
    },
    {
      text: "분석",
      icon: <AnalyticsIcon />,
      path: "/analytics",
      emoji: "❄️",
      color: theme.palette.info.main,
    },
    {
      text: "프로필",
      icon: <PersonIcon />,
      path: "/profile",
      emoji: "🐻‍❄️",
      color: theme.palette.secondary.main,
    },
    {
      text: "프로젝트",
      icon: <ProjectIcon />,
      path: "/projects",
      emoji: "🏔️",
      color: theme.palette.warning.main,
    },
    {
      text: "채팅",
      icon: <ChatIcon />,
      path: "/chat",
      emoji: "🐧",
      color: theme.palette.primary.dark,
    },
    ...(isUserAdmin
      ? [
          {
            text: "관리자",
            icon: <PersonIcon />,
            path: "/admin",
            emoji: "🐻‍❄️",
            color: theme.palette.error.main,
          },
        ]
      : []),
    {
      text: "설정",
      icon: <SettingsIcon />,
      path: "/settings",
      emoji: "⚙️",
      color: theme.palette.grey[600],
    },
  ];

  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find((item) => item.path === location.pathname);
    return currentItem ? `${currentItem.emoji} ${currentItem.text}` : "개인 비서";
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      handleMenuClose();
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  // 🎨 사이드바 콘텐츠 컴포넌트
  const drawerContent = (
    <>
      {/* 로고 영역 */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: desktopCollapsed && !isMobile ? "center" : "space-between",
          borderBottom: `1px solid ${theme.palette.divider}`,
          minHeight: 64,
        }}
      >
        {(!desktopCollapsed || isMobile) && (
          <Typography variant="h6" fontWeight="bold" color="primary">
            🐧 펭귄비서
          </Typography>
        )}

        {/* 데스크톱 토글 버튼 */}
        {!isMobile && (
          <IconButton
            onClick={handleDesktopDrawerToggle}
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              transform: desktopCollapsed ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}
      </Box>

      {/* 메뉴 목록 */}
      <List sx={{ flexGrow: 1, px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigate(item.path)}
              sx={{
                borderRadius: 2,
                justifyContent: desktopCollapsed && !isMobile ? "center" : "flex-start",
                px: desktopCollapsed && !isMobile ? 1 : 2,
                "&.Mui-selected": {
                  backgroundColor: item.color + "15",
                  "&:hover": {
                    backgroundColor: item.color + "25",
                  },
                },
                "&:hover": {
                  backgroundColor: item.color + "10",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: item.color,
                  minWidth: desktopCollapsed && !isMobile ? "auto" : 35,
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {(!desktopCollapsed || isMobile) && (
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.875rem",
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* 사용자 정보 */}
      <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: desktopCollapsed && !isMobile ? "center" : "flex-start",
          }}
        >
          <Avatar src={user.photoURL || undefined} sx={{ width: 32, height: 32 }}>
            {user.displayName?.[0] || user.email?.[0] || "U"}
          </Avatar>
          {(!desktopCollapsed || isMobile) && (
            <>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="caption" noWrap>
                  {user.displayName || user.email}
                </Typography>
              </Box>
              <IconButton size="small" onClick={handleMenuClick}>
                <MoreVert fontSize="small" />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
    </>
  );

  // 📱 현재 drawer width 계산
  const currentDrawerWidth = isMobile ? MOBILE_DRAWER_WIDTH : desktopCollapsed ? 72 : DRAWER_WIDTH;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {/* 🖥️ 데스크톱 사이드바 */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: currentDrawerWidth,
            flexShrink: 0,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            "& .MuiDrawer-paper": {
              width: currentDrawerWidth,
              boxSizing: "border-box",
              bgcolor: theme.palette.background.paper,
              borderRight: `1px solid ${theme.palette.divider}`,
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: "hidden",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* 📱 모바일 사이드바 */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleMobileDrawerToggle}
          ModalProps={{
            keepMounted: true, // 모바일 성능 향상
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: MOBILE_DRAWER_WIDTH,
              boxSizing: "border-box",
              bgcolor: theme.palette.background.paper,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* 메인 콘텐츠 영역 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          width: isMobile ? "100%" : `calc(100% - ${currentDrawerWidth}px)`,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {/* 상단 앱바 */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: theme.palette.background.paper,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Toolbar>
            {/* 📱 모바일 햄버거 메뉴 */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleMobileDrawerToggle}
                sx={{ mr: 2, color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: theme.palette.text.primary,
                fontSize: isMobile ? "1rem" : "1.25rem", // 모바일에서 폰트 크기 조정
              }}
            >
              {getCurrentPageTitle()}
            </Typography>

            <Avatar src={user.photoURL || undefined} sx={{ width: 32, height: 32 }}>
              {user.displayName?.[0] || user.email?.[0] || "U"}
            </Avatar>
          </Toolbar>
        </AppBar>

        {/* 페이지 콘텐츠 */}
        <Box
          sx={{
            height: "calc(100vh - 64px)",
            overflow: "auto",
            p: 0,
            // 모바일에서 추가 패딩 제거
            "& > *": {
              px: isMobile ? 1 : 3,
              py: isMobile ? 1 : 3,
            },
          }}
        >
          {children}
        </Box>
      </Box>

      {/* 사용자 메뉴 */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/profile");
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>프로필</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/settings");
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>설정</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>로그아웃</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Layout;
