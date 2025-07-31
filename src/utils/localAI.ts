// 로컬 AI (Ollama) 연동 유틸리티

export interface AIContext {
  conditions?: any[];
  projects?: any[];
  currentTime?: string;
  userPreferences?: any;
}

export async function callLocalAI(message: string, context: AIContext = {}): Promise<string> {
  try {
    // Ollama 서버 연결 확인
    const checkResponse = await fetch("http://localhost:11434/api/tags", {
      method: "GET",
    });

    if (!checkResponse.ok) {
      throw new Error("Ollama 서버가 실행되지 않았습니다");
    }

    // 컨텍스트 정보 정리
    const contextString = buildContextString(context);

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen2.5:7b", // 한국어 특화 모델로 변경
        prompt: `당신은 한국인 개인 비서 AI입니다. 반드시 순수한 한국어만 사용해야 합니다.

중요한 규칙:
- 오직 한국어(Korean)만 사용하세요
- 영어, 중국어, 일본어, 태국어, 베트남어 등 다른 언어는 절대 사용하지 마세요
- 한자나 외국어 단어가 들어가면 안 됩니다
- 모든 단어를 한글로만 표현하세요

${contextString}

사용자 질문: "${message}"

다음 규칙을 엄격히 따라 답변하세요:
1. 100% 순수한 한국어만 사용 (한자, 영어, 기타 외국어 금지)
2. 친근한 반말로 대화
3. 이모지 적절히 사용 (🤖💪📊🚀😊 등)
4. 실용적이고 구체적인 조언 제공
5. 150자 이내로 간결하게
6. ADHD 특성 고려해서 단순하고 명확하게

한국어 답변:`,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          top_k: 40,
          repeat_penalty: 1.1,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("AI 요청 실패");
    }

    const data = await response.json();

    // 응답 정리 및 외국어 필터링
    let aiResponse = data.response || "";
    aiResponse = aiResponse.replace(/^한국어 답변:\s*/, ""); // 프리픽스 제거
    aiResponse = aiResponse.replace(/^답변:\s*/, ""); // "답변:" 프리픽스 제거
    aiResponse = aiResponse.trim();

    // 외국어가 섞인 경우 기본 답변으로 대체
    if (containsForeignLanguage(aiResponse)) {
      console.log("외국어 감지됨, 기본 답변 사용:", aiResponse);
      return generateFallbackResponse(message);
    }

    return aiResponse || generateFallbackResponse(message);
  } catch (error) {
    console.log("로컬 AI 연결 실패:", error);
    return generateFallbackResponse(message);
  }
}

function buildContextString(context: AIContext): string {
  let contextParts: string[] = [];

  if (context.currentTime) {
    contextParts.push(`현재 시간: ${context.currentTime}`);
  }

  if (context.conditions && context.conditions.length > 0) {
    const recentConditions = context.conditions.slice(-5); // 최근 5개
    contextParts.push(`최근 컨디션: ${recentConditions.map((c) => `${c.hour}시-${c.condition}`).join(", ")}`);
  }

  if (context.projects && context.projects.length > 0) {
    const activeProjects = context.projects.filter((p) => p.status === "active").slice(0, 3);
    contextParts.push(`활성 프로젝트: ${activeProjects.map((p) => `${p.title}(${p.progress}%)`).join(", ")}`);
  }

  return contextParts.length > 0
    ? `사용자 정보:\n${contextParts.join("\n")}\n\n`
    : "사용자 정보: 아직 데이터가 없습니다.\n\n";
}

// 로컬 AI 실패시 기본 답변
function generateFallbackResponse(message: string): string {
  const msg = message.toLowerCase();

  if (msg.includes("컨디션") || msg.includes("상태")) {
    return "컨디션을 체크해보니 좋아 보여! 😊 컨디션 노트에서 더 자세히 기록해보는 건 어때? 💪";
  }

  if (msg.includes("프로젝트")) {
    return "프로젝트 관리는 정말 중요하지! 🚀 우선순위를 정해서 하나씩 처리해보자! 📋";
  }

  if (msg.includes("집중")) {
    return "집중이 안 될 때는 25분 집중 + 5분 휴식하는 포모도로 기법을 추천해! ⏰🧠";
  }

  if (msg.includes("피곤") || msg.includes("휴식")) {
    return "피곤할 때는 무리하지 말고 잠시 휴식을 취하는 게 좋아! 😴 10분 명상이나 가벼운 산책 어때? 🚶‍♀️";
  }

  return "흥미로운 질문이야! 🤔 더 구체적으로 물어보면 더 정확한 도움을 줄 수 있어! 💡";
}

// Ollama 설치 상태 확인
export async function checkOllamaStatus(): Promise<boolean> {
  try {
    const response = await fetch("http://localhost:11434/api/tags");
    return response.ok;
  } catch {
    return false;
  }
}

// 사용 가능한 모델 목록 가져오기
export async function getAvailableModels(): Promise<string[]> {
  try {
    const response = await fetch("http://localhost:11434/api/tags");
    if (!response.ok) return [];

    const data = await response.json();
    return data.models?.map((m: any) => m.name) || [];
  } catch {
    return [];
  }
}

// 외국어 감지 함수
function containsForeignLanguage(text: string): boolean {
  // 한자 감지 (CJK Unified Ideographs)
  const chinesePattern = /[\u4e00-\u9fff]/g;

  // 태국어 감지
  const thaiPattern = /[\u0e00-\u0e7f]/g;

  // 베트남어 특수문자 감지
  const vietnamesePattern = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/g;

  return chinesePattern.test(text) || thaiPattern.test(text) || vietnamesePattern.test(text);
}
