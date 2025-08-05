import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
  Chip,
  useTheme,
  Fade,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Send, SmartToy, Person, Lightbulb, Warning } from "@mui/icons-material";
import { ChatMessage, ConditionLevel } from "../types";
import { callLocalAI, checkOllamaStatus, AIContext } from "../utils/localAI";
import dayjs from "dayjs";

const Chat: React.FC = () => {
  const theme = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [ollamaStatus, setOllamaStatus] = useState<boolean | null>(null);

  // 자동 스크롤
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Ollama 상태 확인
  useEffect(() => {
    checkOllamaConnection();
  }, []);

  const checkOllamaConnection = async () => {
    const isConnected = await checkOllamaStatus();
    setOllamaStatus(isConnected);
  };

  // 초기 메시지
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: "1",
      type: "assistant",
      content: `안녕하세요! 👋 저는 당신의 개인 비서 AI예요! 🤖

${
  ollamaStatus === true
    ? "✅ 로컬 AI가 연결되어 더욱 똑똑한 답변을 드릴 수 있어요!"
    : ollamaStatus === false
    ? "⚠️ 로컬 AI 연결 안됨 - 기본 응답 모드로 동작합니다."
    : "🔄 AI 연결 상태 확인 중..."
}

오늘 컨디션은 어떠신가요? 다음과 같은 도움을 드릴 수 있어요:

💪 **컨디션 관리**: 현재 상태에 맞는 솔루션 추천
🚀 **프로젝트 관리**: 진행상황 정리 및 우선순위 조언  
📊 **데이터 분석**: 패턴 분석과 개선 방안 제시
💡 **생산성 팁**: 개인 맞춤형 라이프 해킹 추천

궁금한 것이 있으면 언제든 물어보세요!`,
      timestamp: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
  }, [ollamaStatus]);

  const quickReplies = [
    { text: "오늘 컨디션 어때?", emoji: "💪" },
    { text: "프로젝트 우선순위 정하기", emoji: "🚀" },
    { text: "집중력 높이는 방법", emoji: "🧠" },
    { text: "휴식 추천해줘", emoji: "😴" },
    { text: "이번 주 분석 보여줘", emoji: "📊" },
  ];

  const handleSendMessage = async (content?: string) => {
    const messageContent = content || inputValue.trim();
    if (!messageContent) return;

    // 사용자 메시지 추가
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: messageContent,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // 컨텍스트 데이터 수집
      const context: AIContext = {
        currentTime: new Date().toLocaleString("ko-KR"),
        conditions: await loadUserConditions(),
        projects: await loadUserProjects(),
      };

      // 로컬 AI 호출
      const aiResponse = await callLocalAI(messageContent, context);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: aiResponse,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI 응답 생성 실패:", error);

      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "죄송해요, 일시적으로 응답을 생성할 수 없어요. 😅 다시 시도해주세요!",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // 사용자 컨디션 데이터 로드
  const loadUserConditions = async () => {
    try {
      if (window.electronAPI) {
        const result = await window.electronAPI.loadData("conditions");
        return result.success ? result.data : [];
      }
      return [];
    } catch {
      return [];
    }
  };

  // 사용자 프로젝트 데이터 로드
  const loadUserProjects = async () => {
    try {
      if (window.electronAPI) {
        const result = await window.electronAPI.loadData("projects");
        return result.success ? result.data : [];
      }
      return [];
    } catch {
      return [];
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return dayjs(timestamp).format("HH:mm");
  };

  return (
    <Box sx={{ p: 3, height: "calc(100vh - 48px)", display: "flex", flexDirection: "column" }}>
      {/* 헤더 */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          🤖 AI 비서 채팅
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body1" color="textSecondary">
            개인 맞춤형 조언과 솔루션을 받아보세요
          </Typography>

          {/* AI 상태 표시 */}
          <Chip
            icon={ollamaStatus === true ? <SmartToy /> : <Warning />}
            label={
              ollamaStatus === true
                ? "Qwen2.5 (한국어 특화) 🇰🇷"
                : ollamaStatus === false
                ? "AI 연결 안됨"
                : "연결 확인 중..."
            }
            color={ollamaStatus === true ? "success" : ollamaStatus === false ? "warning" : "default"}
            size="small"
            onClick={checkOllamaConnection}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Box>

      {/* Ollama 설치 안내 */}
      {ollamaStatus === false && (
        <Alert
          severity="info"
          sx={{ mb: 2 }}
          action={
            <Button color="inherit" size="small" onClick={() => window.open("https://ollama.com/", "_blank")}>
              설치하기
            </Button>
          }
        >
          <strong>한국어 특화 AI 설치 방법:</strong> <code>brew install ollama</code> →{" "}
          <code>ollama pull qwen2.5:7b</code> → <code>ollama serve</code>
        </Alert>
      )}

      {/* 채팅 영역 */}
      <Card sx={{ flexGrow: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* 메시지 목록 */}
        <CardContent
          sx={{
            flexGrow: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pb: 1,
          }}
        >
          {messages.map((message) => (
            <Fade key={message.id} in timeout={500}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: message.type === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                {message.type === "assistant" && (
                  <Avatar
                    sx={{
                      bgcolor: ollamaStatus === true ? theme.palette.success.main : theme.palette.primary.main,
                      color: "white",
                      width: 36,
                      height: 36,
                    }}
                  >
                    <SmartToy fontSize="small" />
                  </Avatar>
                )}

                <Box
                  sx={{
                    maxWidth: "70%",
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: message.type === "user" ? theme.palette.primary.main : theme.palette.grey[100],
                    color: message.type === "user" ? "white" : "inherit",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "pre-wrap",
                      lineHeight: 1.6,
                    }}
                  >
                    {message.content}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      mt: 1,
                      opacity: 0.7,
                      textAlign: message.type === "user" ? "right" : "left",
                    }}
                  >
                    {formatTimestamp(message.timestamp)}
                  </Typography>
                </Box>

                {message.type === "user" && (
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.secondary.main,
                      color: "white",
                      width: 36,
                      height: 36,
                    }}
                  >
                    <Person fontSize="small" />
                  </Avatar>
                )}
              </Box>
            </Fade>
          ))}

          {/* 타이핑 인디케이터 */}
          {isTyping && (
            <Fade in timeout={300}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: ollamaStatus === true ? theme.palette.success.main : theme.palette.primary.main,
                    color: "white",
                    width: 36,
                    height: 36,
                  }}
                >
                  <SmartToy fontSize="small" />
                </Avatar>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: theme.palette.grey[100],
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CircularProgress size={16} />
                  <Typography variant="body2" color="textSecondary">
                    {ollamaStatus === true ? "AI가 답변을 생각하고 있어요..." : "답변을 생각하고 있어요..."}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          )}

          <div ref={messagesEndRef} />
        </CardContent>

        {/* 빠른 답장 버튼들 */}
        <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            빠른 질문:
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            {quickReplies.map((reply) => (
              <Chip
                key={reply.text}
                label={`${reply.emoji} ${reply.text}`}
                variant="outlined"
                clickable
                onClick={() => handleSendMessage(reply.text)}
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main + "10",
                    borderColor: theme.palette.primary.main,
                  },
                }}
              />
            ))}
          </Box>

          {/* 메시지 입력 */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              multiline
              maxRows={3}
              placeholder="메시지를 입력하세요... (Shift+Enter로 줄바꿈)"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
            />
            <IconButton
              color="primary"
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isTyping}
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "white",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
                "&.Mui-disabled": {
                  bgcolor: theme.palette.grey[300],
                  color: theme.palette.grey[500],
                },
              }}
            >
              <Send />
            </IconButton>
          </Box>
        </Box>
      </Card>

      {/* 도움말 카드 */}
      <Card sx={{ mt: 2 }}>
        <CardContent sx={{ py: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Lightbulb sx={{ color: theme.palette.warning.main }} />
            <Typography variant="body2">
              <strong>💡 팁:</strong>{" "}
              {ollamaStatus === true
                ? "한국어 특화 AI가 연결되어 완벽한 한국어로 개인화된 조언을 받을 수 있어요! 🇰🇷✨"
                : "구체적인 상황을 알려주시면 더 정확한 조언을 드릴 수 있어요!"}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Chat;
