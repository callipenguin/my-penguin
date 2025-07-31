import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 TODO: Firebase Console에서 복사한 설정으로 교체하세요!
// Firebase Console > 프로젝트 설정 > 일반 > 내 앱 > SDK 설정 및 구성
const firebaseConfig = {
  apiKey: "AIzaSyD0T3knqD57-69U4rKsZ1f-Nb1Kd6Rf5a0",
  authDomain: "my-personnal-penguin.firebaseapp.com",
  projectId: "my-personnal-penguin",
  storageBucket: "my-personnal-penguin.firebasestorage.app",
  messagingSenderId: "278702130293",
  appId: "1:278702130293:web:cd7dad08ee5cd6b183243c",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);

// 🔐 승인된 사용자 이메일 목록 (본인 Gmail 추가!)
export const AUTHORIZED_EMAILS: string[] = [
  "sbseok12@gmail.com", // 관리자 계정
];

export default app;
