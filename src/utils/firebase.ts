import { signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, googleProvider, db, AUTHORIZED_EMAILS } from "../config/firebase";
import { PomodoroSession, WeeklyPomodoroStats } from "../types";

// 인증 관련 함수들
export const signInWithGoogle = async () => {
  try {
    // Cross-Origin-Opener-Policy 에러를 줄이기 위한 설정
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });

    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // 권한 체크 없이 로그인만 수행
    console.log("✅ Google 로그인 성공:", user.email);
    return user;
  } catch (error: any) {
    // Firebase Auth 에러 처리 개선
    if (error.code === "auth/popup-closed-by-user") {
      console.log("사용자가 로그인 팝업을 닫았습니다.");
      return null;
    } else if (error.code === "auth/cancelled-popup-request") {
      console.log("중복된 팝업 요청이 취소되었습니다.");
      return null;
    }

    console.error("로그인 실패:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("로그아웃 실패:", error);
    throw error;
  }
};

// 사용자의 접근 상태를 자세히 확인
export const getUserAccessStatus = async (
  email: string | null
): Promise<{
  status: "approved" | "pending" | "rejected" | "not_found";
  data?: any;
}> => {
  if (!email) return { status: "not_found" };

  // 관리자는 항상 승인됨
  if (email === "sbseok12@gmail.com") return { status: "approved" };

  try {
    const docRef = doc(db, "accessRequests", email.replace(".", "_"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        status: data.status as "approved" | "pending" | "rejected",
        data,
      };
    }

    return { status: "not_found" };
  } catch (error) {
    console.error("사용자 접근 상태 확인 실패:", error);
    return { status: "not_found" };
  }
};

// 승인된 사용자인지 확인 (Firestore에서 동적으로 확인)
export const isAuthorizedUser = async (email: string | null): Promise<boolean> => {
  const result = await getUserAccessStatus(email);
  return result.status === "approved";
};

// 동기식 권한 확인 (캐시된 정보 사용)
export const isAuthorizedUserSync = (email: string | null): boolean => {
  if (!email) return false;
  return AUTHORIZED_EMAILS.includes(email);
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// 🛡️ Firebase 데이터 정제 함수 - 더 강력한 버전
const sanitizeDataForFirestore = (data: any, path: string = "root"): any => {
  console.log(`🧹 ${path} 정제 중:`, typeof data, Array.isArray(data) ? `배열[${data.length}]` : "");

  // null, undefined, empty string 처리
  if (data === null || data === undefined || data === "") {
    console.log(`❌ ${path}: ${data} 제거됨`);
    return null;
  }

  // 함수 제거
  if (typeof data === "function") {
    console.log(`❌ ${path}: 함수 제거됨`);
    return null;
  }

  // 배열 처리
  if (Array.isArray(data)) {
    const sanitized = data
      .map((item, index) => sanitizeDataForFirestore(item, `${path}[${index}]`))
      .filter((item) => item !== null && item !== undefined);

    console.log(`✅ ${path}: 배열 ${data.length} → ${sanitized.length}개로 정제`);
    return sanitized;
  }

  // 객체 처리
  if (typeof data === "object" && data !== null) {
    const sanitized: any = {};
    let removedCount = 0;

    for (const [key, value] of Object.entries(data)) {
      const cleanValue = sanitizeDataForFirestore(value, `${path}.${key}`);

      if (cleanValue !== null && cleanValue !== undefined) {
        sanitized[key] = cleanValue;
      } else {
        removedCount++;
        console.log(`❌ ${path}.${key}: undefined/null 값 제거`);
      }
    }

    console.log(`✅ ${path}: 객체 정제 완료 (${removedCount}개 필드 제거)`);
    return sanitized;
  }

  // 기본 타입 (string, number, boolean)
  return data;
};

// 💣 핵폭탄급 undefined 제거기
const nuclearUndefinedRemover = (data: any): any => {
  console.log("💣 핵폭탄급 undefined 제거기 작동!");

  try {
    // 1단계: JSON.stringify에서 undefined 처리하는 replacer 함수
    const jsonString = JSON.stringify(data, (key, value) => {
      if (value === undefined) {
        console.log(`💥 핵제거: ${key} = undefined → null`);
        return null;
      }
      if (typeof value === "function") {
        console.log(`💥 핵제거: ${key} = function → null`);
        return null;
      }
      return value;
    });

    console.log("💣 JSON 변환 완료:", jsonString.length + " bytes");

    // 2단계: 혹시 남은 undefined 문자열까지 제거
    const cleanedString = jsonString.replace(/:\s*undefined/g, ": null").replace(/,\s*undefined/g, ", null");

    // 3단계: 다시 객체로 변환
    const cleanData = JSON.parse(cleanedString);

    console.log("💥 핵정제 완료! undefined 완전 박멸!");
    return cleanData;
  } catch (error) {
    console.error("💣 핵정제 실패:", error);
    return data;
  }
};

// 🔍 데이터 내용 분석 함수
const analyzeData = (data: any, dataType: string) => {
  console.log(`🔍 ${dataType} 데이터 분석:`);
  console.log("📊 Raw Data:", JSON.stringify(data, null, 2));

  if (Array.isArray(data)) {
    console.log(`📋 배열 ${data.length}개 항목:`);
    data.forEach((item, index) => {
      console.log(`  [${index}]:`, Object.keys(item || {}));

      // undefined 값이 있는 키 찾기
      const undefinedKeys = Object.entries(item || {})
        .filter(([key, value]) => value === undefined)
        .map(([key]) => key);

      if (undefinedKeys.length > 0) {
        console.warn(`⚠️ [${index}] undefined 필드 발견:`, undefinedKeys);
      }
    });
  } else if (typeof data === "object" && data !== null) {
    console.log("📄 객체 키들:", Object.keys(data));
    const undefinedKeys = Object.entries(data)
      .filter(([key, value]) => value === undefined)
      .map(([key]) => key);

    if (undefinedKeys.length > 0) {
      console.warn(`⚠️ undefined 필드 발견:`, undefinedKeys);
    }
  }
};

// 🔍 Firebase 연결 상태 확인
const checkFirebaseConnection = async (): Promise<{ connected: boolean; error?: string }> => {
  try {
    // 간단한 읽기 테스트로 연결 확인
    const testDoc = doc(db, "test", "connection");
    await getDoc(testDoc);
    return { connected: true };
  } catch (error: any) {
    console.error("🔥 Firebase 연결 테스트 실패:", error);
    return {
      connected: false,
      error: `${error.code}: ${error.message}`,
    };
  }
};

// Firestore 데이터 관리 함수들
export const saveUserData = async (
  userId: string,
  dataType: string,
  data: any
): Promise<{
  success: boolean;
  error?: string;
  code?: string;
  message?: string;
  source?: string;
  fallback?: boolean;
}> => {
  console.log(`💾 ${dataType} 저장 시작:`, {
    userId: userId?.substring(0, 8) + "...",
    dataType,
    dataLength: Array.isArray(data) ? data.length : typeof data,
  });

  // 🔍 원본 데이터 분석
  analyzeData(data, dataType);

  try {
    // 🔍 Firebase 연결 상태 확인
    const connectionStatus = await checkFirebaseConnection();
    if (!connectionStatus.connected) {
      console.warn("🔥 Firebase 연결 실패:", connectionStatus.error);

      // localStorage에 fallback 저장
      try {
        localStorage.setItem(dataType, JSON.stringify(data));
        console.log(`💾 ${dataType}: localStorage에 fallback 저장 완료`);
        return { success: true, source: "localStorage", fallback: true };
      } catch (localError) {
        console.error("❌ localStorage 저장도 실패:", localError);
        return { success: false, error: "Firebase 및 localStorage 모두 실패" };
      }
    }

    // 🔥 1차 데이터 정제 - 일반 정제
    console.log("🧹 1차 데이터 정제 시작...");
    let sanitizedData = sanitizeDataForFirestore(data, dataType);

    // 💣 2차 핵폭탄급 정제
    console.log("💣 2차 핵폭탄급 정제 시작...");
    sanitizedData = nuclearUndefinedRemover(sanitizedData);

    console.log(`🧹 ${dataType} 데이터 정제 완료:`, {
      originalSize: JSON.stringify(data).length + " bytes",
      sanitizedSize: JSON.stringify(sanitizedData).length + " bytes",
      hasUndefinedBefore: JSON.stringify(data).includes("undefined"),
      hasUndefinedAfter: JSON.stringify(sanitizedData).includes("undefined"),
    });

    // �� 여전히 undefined가 있는지 최종 검사
    const finalCheck = JSON.stringify(sanitizedData);
    if (finalCheck.includes("undefined")) {
      console.error("🚨 최종 검사 실패! 여전히 undefined 존재:", finalCheck);

      // 🆘 비상 수술 - 모든 undefined를 null로 강제 변경
      const emergencyClean = JSON.parse(finalCheck.replace(/undefined/g, "null"));
      console.log("🆘 비상 수술 완료:", emergencyClean);
      sanitizedData = emergencyClean;
    }

    if (!sanitizedData || (Array.isArray(sanitizedData) && sanitizedData.length === 0)) {
      console.log(`💾 ${dataType}: 저장할 데이터가 없습니다.`);
      return { success: true, message: "No data to save" };
    }

    const docRef = doc(db, "users", userId, "data", dataType);
    const docData = {
      data: sanitizedData,
      updatedAt: new Date().toISOString(),
      dataType: dataType,
      version: "1.0",
      source: "web-app",
    };

    // 🔥 최종 저장 전 마지막 undefined 체크
    const docDataString = JSON.stringify(docData);
    if (docDataString.includes("undefined")) {
      console.error("🚨🚨🚨 docData에서도 undefined 발견!", docDataString);
      throw new Error("Critical: undefined found in final docData");
    }

    console.log(`🔥 Firestore 저장 시도:`, {
      collection: `users/${userId}/data`,
      document: dataType,
      docSize: docDataString.length + " bytes",
      hasUndefined: docDataString.includes("undefined"),
    });

    await setDoc(docRef, docData);

    console.log(
      `✅ ${dataType}: ${Array.isArray(sanitizedData) ? sanitizedData.length + "개 항목" : "데이터"} 저장 완료! 🎉`
    );
    return { success: true };
  } catch (error: any) {
    console.error(`❌ ${dataType} 데이터 저장 실패:`, {
      errorCode: error.code,
      errorMessage: error.message,
      userId: userId?.substring(0, 8) + "...",
      dataType,
      fullError: error,
    });

    // 🔥 Firebase 연결 오류 처리
    if (error.code === "unavailable" || error.code === "permission-denied" || error.code === "unauthenticated") {
      console.warn(`🔄 ${dataType}: Firebase 오류 → localStorage fallback`);

      try {
        localStorage.setItem(dataType, JSON.stringify(data));
        console.log(`💾 ${dataType}: localStorage에 fallback 저장 완료`);
        return { success: true, source: "localStorage", fallback: true };
      } catch (localError) {
        console.error("❌ localStorage 저장도 실패:", localError);
      }
    }

    return { success: false, error: error.message || error, code: error.code };
  }
};

export const loadUserData = async (userId: string, dataType: string) => {
  try {
    const docRef = doc(db, "users", userId, "data", dataType);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log(
        `✅ ${dataType}: Firebase에서 ${Array.isArray(data.data) ? data.data.length + "개 항목" : "데이터"} 로드 완료`
      );
      return { success: true, data: data.data };
    } else {
      console.log(`📭 ${dataType}: Firebase에 데이터가 없습니다`);
      return { success: true, data: null };
    }
  } catch (error: any) {
    console.error(`❌ ${dataType} 데이터 로드 실패:`, error);

    // 🔥 Firebase 연결 오류 시 localStorage fallback
    if (error.code === "unavailable" || error.code === "permission-denied" || error.code === "unauthenticated") {
      console.warn(`🔄 ${dataType}: Firebase 연결 실패, localStorage 사용`);

      try {
        const localData = localStorage.getItem(dataType);
        if (localData) {
          const parsedData = JSON.parse(localData);
          console.log(
            `💾 ${dataType}: localStorage에서 ${
              Array.isArray(parsedData) ? parsedData.length + "개 항목" : "데이터"
            } 로드`
          );
          return { success: true, data: parsedData, source: "localStorage" };
        }
      } catch (localError) {
        console.error(`❌ ${dataType}: localStorage 로드 실패`, localError);
      }

      return { success: true, data: null, source: "localStorage" };
    }

    return { success: false, error: error.message || error };
  }
};

// 현재 사용자 정보 가져오기
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// 관리자 권한 확인
export const isAdmin = (email: string | null): boolean => {
  return email === "sbseok12@gmail.com"; // 관리자 이메일
};

// 사용자 접근 신청 저장
export const saveAccessRequest = async (userInfo: {
  email: string;
  displayName: string;
  photoURL?: string;
  reason?: string;
}) => {
  try {
    const docRef = doc(db, "accessRequests", userInfo.email.replace(".", "_"));
    await setDoc(docRef, {
      ...userInfo,
      status: "pending",
      requestedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("접근 신청 저장 실패:", error);
    return { success: false, error };
  }
};

// 모든 접근 신청 가져오기 (관리자용)
export const getAccessRequests = async () => {
  try {
    const requestsRef = collection(db, "accessRequests");
    const snapshot = await getDocs(requestsRef);
    const requests = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { success: true, data: requests };
  } catch (error) {
    console.error("접근 신청 로드 실패:", error);
    return { success: false, error };
  }
};

// 접근 신청 승인/거부 (관리자용) - 개선된 버전
export const updateAccessRequest = async (email: string, status: "approved" | "rejected", adminNotes?: string) => {
  try {
    const docRef = doc(db, "accessRequests", email.replace(".", "_"));
    await setDoc(
      docRef,
      {
        status,
        adminNotes,
        processedAt: new Date().toISOString(),
      },
      { merge: true }
    );

    // 승인된 경우, 승인된 사용자 목록에도 추가
    if (status === "approved") {
      await addToAuthorizedUsers(email);
    }

    return { success: true };
  } catch (error) {
    console.error("접근 신청 처리 실패:", error);
    return { success: false, error };
  }
};

// 승인된 사용자 목록에 추가
export const addToAuthorizedUsers = async (email: string) => {
  try {
    const docRef = doc(db, "authorizedUsers", email.replace(".", "_"));
    await setDoc(docRef, {
      email,
      authorizedAt: new Date().toISOString(),
      status: "active",
    });
    console.log(`✅ 사용자 ${email}를 승인된 사용자 목록에 추가했습니다.`);
  } catch (error) {
    console.error("승인된 사용자 추가 실패:", error);
    throw error;
  }
};

// 승인된 사용자 목록에서 제거
export const removeFromAuthorizedUsers = async (email: string) => {
  try {
    const docRef = doc(db, "authorizedUsers", email.replace(".", "_"));
    await setDoc(
      docRef,
      {
        email,
        removedAt: new Date().toISOString(),
        status: "inactive",
      },
      { merge: true }
    );
    console.log(`🚫 사용자 ${email}를 승인된 사용자 목록에서 제거했습니다.`);
  } catch (error) {
    console.error("승인된 사용자 제거 실패:", error);
    throw error;
  }
};

// 사용자 활동 로그 저장
export const logUserActivity = async (userId: string, activity: string) => {
  try {
    const logRef = doc(collection(db, "userLogs"));
    await setDoc(logRef, {
      userId,
      activity,
      timestamp: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("활동 로그 저장 실패:", error);
    return { success: false, error };
  }
};

// 🔄 데이터 마이그레이션 시스템
export const migrateLocalDataToFirebase = async (
  userId: string
): Promise<{
  success: boolean;
  migratedCount: number;
  errors: string[];
}> => {
  console.log("🚀 로컬 데이터 → Firebase 마이그레이션 시작");

  const errors: string[] = [];
  let migratedCount = 0;

  const dataTypes = ["conditions", "projects", "settings"];

  for (const dataType of dataTypes) {
    try {
      const localData = localStorage.getItem(dataType);
      if (localData) {
        const parsedData = JSON.parse(localData);

        // Firebase에 기존 데이터가 있는지 확인
        const existingResult = await loadUserData(userId, dataType);

        if (!existingResult.success || !existingResult.data || existingResult.data.length === 0) {
          // Firebase에 데이터가 없으면 로컬 데이터 업로드
          await saveUserData(userId, dataType, parsedData);
          migratedCount++;
          console.log(`✅ ${dataType} 마이그레이션 완료 (${parsedData.length || 0}개 항목)`);
        } else {
          console.log(`⚠️ ${dataType}: Firebase에 기존 데이터 존재, 건너뜀`);
        }
      }
    } catch (error) {
      const errorMsg = `${dataType} 마이그레이션 실패: ${error}`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }
  }

  return { success: errors.length === 0, migratedCount, errors };
};

export const downloadFirebaseDataToLocal = async (
  userId: string
): Promise<{
  success: boolean;
  downloadedCount: number;
  errors: string[];
}> => {
  console.log("⬇️ Firebase → 로컬 데이터 다운로드 시작");

  const errors: string[] = [];
  let downloadedCount = 0;

  const dataTypes = ["conditions", "projects", "settings"];

  for (const dataType of dataTypes) {
    try {
      const result = await loadUserData(userId, dataType);
      if (result.success && result.data) {
        localStorage.setItem(dataType, JSON.stringify(result.data));
        downloadedCount++;
        console.log(`✅ ${dataType} 다운로드 완료 (${result.data.length || 0}개 항목)`);
      }
    } catch (error) {
      const errorMsg = `${dataType} 다운로드 실패: ${error}`;
      console.error("❌", errorMsg);
      errors.push(errorMsg);
    }
  }

  return { success: errors.length === 0, downloadedCount, errors };
};

export const syncDataBidirectional = async (
  userId: string
): Promise<{
  success: boolean;
  syncedUp: number;
  syncedDown: number;
  conflicts: string[];
}> => {
  console.log("🔄 양방향 데이터 동기화 시작");

  const conflicts: string[] = [];
  let syncedUp = 0;
  let syncedDown = 0;

  const dataTypes = ["conditions", "projects", "settings"];

  for (const dataType of dataTypes) {
    try {
      const localData = localStorage.getItem(dataType);
      const firebaseResult = await loadUserData(userId, dataType);

      const localExists = localData && JSON.parse(localData).length > 0;
      const firebaseExists = firebaseResult.success && firebaseResult.data && firebaseResult.data.length > 0;

      if (localExists && !firebaseExists) {
        // 로컬만 있음 → Firebase로 업로드
        await saveUserData(userId, dataType, JSON.parse(localData));
        syncedUp++;
        console.log(`⬆️ ${dataType}: 로컬 → Firebase`);
      } else if (!localExists && firebaseExists) {
        // Firebase만 있음 → 로컬로 다운로드
        localStorage.setItem(dataType, JSON.stringify(firebaseResult.data));
        syncedDown++;
        console.log(`⬇️ ${dataType}: Firebase → 로컬`);
      } else if (localExists && firebaseExists) {
        // 양쪽 다 있음 → 충돌 감지
        const localParsed = JSON.parse(localData);
        const localLastModified = getLastModified(localParsed);
        const firebaseLastModified = getLastModified(firebaseResult.data);

        if (localLastModified > firebaseLastModified) {
          await saveUserData(userId, dataType, localParsed);
          syncedUp++;
          console.log(`⬆️ ${dataType}: 로컬이 더 최신 → Firebase 업데이트`);
        } else if (firebaseLastModified > localLastModified) {
          localStorage.setItem(dataType, JSON.stringify(firebaseResult.data));
          syncedDown++;
          console.log(`⬇️ ${dataType}: Firebase가 더 최신 → 로컬 업데이트`);
        } else {
          console.log(`✅ ${dataType}: 이미 동기화됨`);
        }
      }
    } catch (error) {
      console.error(`❌ ${dataType} 동기화 실패:`, error);
      conflicts.push(`${dataType}: ${error}`);
    }
  }

  return { success: conflicts.length === 0, syncedUp, syncedDown, conflicts };
};

// 헬퍼 함수: 데이터의 마지막 수정 시간 가져오기
const getLastModified = (data: any[]): number => {
  if (!Array.isArray(data) || data.length === 0) return 0;

  const timestamps = data
    .map((item) => new Date(item.updatedAt || item.createdAt || 0).getTime())
    .filter((time) => !isNaN(time));

  return Math.max(...timestamps, 0);
};

// 개선된 로그인 함수 - 자동 마이그레이션 포함
export const signInWithGoogleAndSync = async () => {
  try {
    // 권한 체크 없이 로그인만 수행
    const user = await signInWithGoogle();
    if (!user) return { user: null, syncResult: null };

    // 🚀 자동 데이터 동기화
    console.log("🔄 자동 데이터 동기화 시작...");
    const syncResult = await syncDataBidirectional(user.uid);

    if (syncResult.success) {
      console.log(`✅ 동기화 완료! 업로드: ${syncResult.syncedUp}, 다운로드: ${syncResult.syncedDown}`);
    } else {
      console.warn("⚠️ 일부 데이터 동기화 실패:", syncResult.conflicts);
    }

    return { user, syncResult };
  } catch (error) {
    console.error("로그인 실패:", error);
    throw error;
  }
};

// ===========================================
// 🍅 뽀모도로 세션 관리 함수들
// ===========================================

// 뽀모도로 세션 저장
export const savePomodoroSession = async (
  userId: string,
  sessionData: Omit<PomodoroSession, "id" | "userId" | "createdAt" | "updatedAt">
): Promise<{ success: boolean; data?: PomodoroSession; error?: string }> => {
  try {
    const sessionId = `pomodoro_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();

    const session: PomodoroSession = {
      id: sessionId,
      userId,
      ...sessionData,
      createdAt: now,
      updatedAt: now,
    };

    const docRef = doc(db, `users/${userId}/pomodoro_sessions`, sessionId);
    await setDoc(docRef, session);

    console.log("✅ 뽀모도로 세션 저장 성공:", session);
    return { success: true, data: session };
  } catch (error) {
    console.error("❌ 뽀모도로 세션 저장 실패:", error);
    return { success: false, error: error instanceof Error ? error.message : "알 수 없는 오류" };
  }
};

// 뽀모도로 세션 조회 (날짜 범위)
export const loadPomodoroSessions = async (
  userId: string,
  startDate?: string, // YYYY-MM-DD
  endDate?: string // YYYY-MM-DD
): Promise<{ success: boolean; data?: PomodoroSession[]; error?: string }> => {
  try {
    const sessionsRef = collection(db, `users/${userId}/pomodoro_sessions`);
    let q = query(sessionsRef);

    // 날짜 필터가 있으면 적용 (간단하게 문자열 비교로)
    if (startDate) {
      q = query(sessionsRef, where("startTime", ">=", startDate + "T00:00:00.000Z"));
    }
    if (endDate) {
      q = query(sessionsRef, where("startTime", "<=", endDate + "T23:59:59.999Z"));
    }

    const querySnapshot = await getDocs(q);
    const sessions: PomodoroSession[] = [];

    querySnapshot.forEach((doc) => {
      sessions.push(doc.data() as PomodoroSession);
    });

    // 시간순 정렬 (최신순)
    sessions.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

    console.log(`✅ 뽀모도로 세션 조회 성공: ${sessions.length}개`);
    return { success: true, data: sessions };
  } catch (error) {
    console.error("❌ 뽀모도로 세션 조회 실패:", error);
    return { success: false, error: error instanceof Error ? error.message : "알 수 없는 오류" };
  }
};

// 주차별 뽀모도로 통계 생성
export const getWeeklyPomodoroStats = async (
  userId: string,
  weekStart: string // YYYY-MM-DD
): Promise<{ success: boolean; data?: WeeklyPomodoroStats; error?: string }> => {
  try {
    // 주차의 시작과 끝 계산
    const startDate = new Date(weekStart);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);

    const weekStartStr = weekStart;
    const weekEndStr = endDate.toISOString().split("T")[0];

    // 해당 주차의 세션들 조회
    const result = await loadPomodoroSessions(userId, weekStartStr, weekEndStr);
    if (!result.success || !result.data) {
      return { success: false, error: result.error };
    }

    const sessions = result.data.filter((s) => s.completed); // 완료된 세션만

    // 통계 계산
    const stats: WeeklyPomodoroStats = {
      weekStart: weekStartStr,
      weekEnd: weekEndStr,
      totalSessions: sessions.length,
      workSessions: sessions.filter((s) => s.sessionType === "work").length,
      breakSessions: sessions.filter((s) => s.sessionType === "break").length,
      totalMinutes: sessions.reduce((sum, s) => sum + s.duration, 0),
      projectBreakdown: [],
      dailyBreakdown: [],
    };

    // 프로젝트별 그룹화
    const projectGroups: { [projectId: string]: PomodoroSession[] } = {};
    sessions.forEach((session) => {
      if (!projectGroups[session.projectId]) {
        projectGroups[session.projectId] = [];
      }
      projectGroups[session.projectId].push(session);
    });

    // 프로젝트별 통계
    stats.projectBreakdown = Object.entries(projectGroups).map(([projectId, projectSessions]) => {
      const taskGroups: { [taskId: string]: PomodoroSession[] } = {};
      projectSessions.forEach((session) => {
        if (!taskGroups[session.taskId]) {
          taskGroups[session.taskId] = [];
        }
        taskGroups[session.taskId].push(session);
      });

      return {
        projectId,
        projectTitle: projectSessions[0].projectTitle,
        sessions: projectSessions.length,
        minutes: projectSessions.reduce((sum, s) => sum + s.duration, 0),
        tasks: Object.entries(taskGroups).map(([taskId, taskSessions]) => ({
          taskId,
          taskTitle: taskSessions[0].taskTitle,
          sessions: taskSessions.length,
          minutes: taskSessions.reduce((sum, s) => sum + s.duration, 0),
        })),
      };
    });

    // 일별 통계
    const dailyGroups: { [date: string]: PomodoroSession[] } = {};
    sessions.forEach((session) => {
      const date = session.startTime.split("T")[0];
      if (!dailyGroups[date]) {
        dailyGroups[date] = [];
      }
      dailyGroups[date].push(session);
    });

    stats.dailyBreakdown = Object.entries(dailyGroups)
      .map(([date, daySessions]) => ({
        date,
        sessions: daySessions.length,
        minutes: daySessions.reduce((sum, s) => sum + s.duration, 0),
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    console.log("✅ 주차별 뽀모도로 통계 생성 성공:", stats);
    return { success: true, data: stats };
  } catch (error) {
    console.error("❌ 주차별 뽀모도로 통계 생성 실패:", error);
    return { success: false, error: error instanceof Error ? error.message : "알 수 없는 오류" };
  }
};
