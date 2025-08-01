# 🐧 My Penguin Assistant

나만의 똑똑한 펭귄 개인 비서 - 컨디션 관리부터 프로젝트 관리까지! 🐟

## ✨ 주요 기능

### 🐟 컨디션 빙하

- 시간별 컨디션을 펭귄처럼 체계적으로 기록
- 일주일 단위 그리드로 시각화
- 메모와 함께 상세한 컨디션 추적

### 🏔️ 프로젝트 빙하

- 칸반 보드 스타일의 프로젝트 관리
- 계획 중(🧊) → 진행 중(🐧) → 일시중단(❄️) → 완료(🐟)
- 진행률 추적 및 우선순위 관리

### ❄️ 컨디션 분석

- 시간대별/요일별 컨디션 패턴 분석
- 골든 타임 및 최적의 시간 추천
- 펭귄의 생활 패턴을 기반한 개인화된 인사이트

### 🐻‍❄️ 프로필 분석

- 북극곰의 지혜로 성격 분석
- 컨디션과 프로젝트 데이터 기반 개인화 추천
- 펭귄 같은 생활 습관 개선 제안

### 🐧 AI 채팅

- 펭귄 비서와의 대화
- 로컬 AI (Ollama) 지원
- 상황별 맞춤 조언 제공

### 🐻‍❄️ 관리자 기능 (관리자 전용)

- 사용자 접근 권한 요청 관리
- 승인/거부 처리 및 관리자 메모
- 사용자 활동 통계

## 🚀 시작하기

### 📋 필요 사항

- Node.js 18+
- Firebase 프로젝트
- Gmail 계정

### 🛠️ 설치 및 실행

1. **저장소 클론**

```bash
git clone https://github.com/your-username/my-penguin.git
cd my-penguin
```

2. **의존성 설치**

```bash
npm install
```

3. **Firebase 설정**

- Firebase Console에서 새 프로젝트 생성
- Authentication에서 Google 로그인 활성화
- Firestore Database 생성
- `src/config/firebase.ts`에서 설정 값 업데이트

4. **개발 서버 실행**

```bash
npm run dev
```

### 🌐 GitHub Pages 배포

1. **빌드 및 배포**

```bash
npm run build
npm run deploy
```

2. **GitHub Pages 설정**

- Repository Settings > Pages
- Source: Deploy from a branch
- Branch: gh-pages

## 🔧 기술 스택

### Frontend 🐧

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Material-UI** - 펭귄 테마 UI 컴포넌트
- **Day.js** - 날짜 처리
- **React Router** - 라우팅

### Backend 🐟

- **Firebase Authentication** - Google 로그인
- **Firestore** - NoSQL 데이터베이스
- **Firebase Security Rules** - 데이터 보안

### AI 🧠

- **Ollama** - 로컬 LLM 서버
- **Qwen2.5:7b** - 한국어 특화 모델

### 배포 ❄️

- **GitHub Pages** - 정적 사이트 호스팅
- **Vite** - 빌드 도구
- **gh-pages** - 배포 자동화

## 🐧 펭귄 테마 디자인

### 🎨 색상 팔레트

- **주색상**: 펭귄 검은색 (#2c2c2c)
- **보조색상**: 부리 노란색 (#ffeb3b)
- **배경색**: 빙하 흰색 (#ffffff)
- **액센트**: 바다 청록색 (#00bcd4)

### 🎭 이모지 가이드

- 🐧 홈, 최고 컨디션, 활발한 상태
- 🐟 컨디션 기록, 좋은 상태, 완료된 작업
- ❄️ 분석, 보통 상태, 차분한 활동
- 🧊 계획, 피곤한 상태, 휴식 필요
- 🐻‍❄️ 관리자, 매우 피곤, 깊은 휴식
- 🏔️ 프로젝트, 목표, 도전

## 📱 모바일 지원

완전 반응형 디자인으로 모든 기기에서 펭귄 비서를 만날 수 있어요!

- 📱 스마트폰
- 📱 태블릿
- 💻 데스크톱

## 🔐 보안 & 권한

### 사용자 인증

- Google OAuth 2.0
- 승인된 이메일만 접근 가능
- 관리자 승인 시스템

### 데이터 보안

- Firestore Security Rules
- 사용자별 데이터 격리
- HTTPS 통신

## 🤝 기여하기

펭귄 가족이 되어 프로젝트에 기여해주세요! 🐧

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스로 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🙏 감사의 말

- 🐧 모든 펭귄들에게 영감을 받았습니다
- 🐟 북극의 아름다운 자연에서 색상을 가져왔습니다
- ❄️ 빙하의 순수함을 UI에 담았습니다

---

**Made with 🐧 by Penguin Developer**

펭귄처럼 차분하고 체계적인 삶을 위해! 🐟
