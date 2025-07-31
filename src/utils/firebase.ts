import { signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, googleProvider, db, AUTHORIZED_EMAILS } from "../config/firebase";

// 인증 관련 함수들
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // 승인된 이메일인지 확인
    if (!isAuthorizedUser(user.email)) {
      await firebaseSignOut(auth);
      throw new Error("승인되지 않은 사용자입니다. 관리자에게 문의하세요.");
    }

    return user;
  } catch (error) {
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

export const isAuthorizedUser = (email: string | null): boolean => {
  if (!email) return false;
  return AUTHORIZED_EMAILS.includes(email);
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Firestore 데이터 관리 함수들
export const saveUserData = async (userId: string, dataType: string, data: any) => {
  try {
    const docRef = doc(db, "users", userId, "data", dataType);
    await setDoc(docRef, {
      data: data,
      updatedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("데이터 저장 실패:", error);
    return { success: false, error };
  }
};

export const loadUserData = async (userId: string, dataType: string) => {
  try {
    const docRef = doc(db, "users", userId, "data", dataType);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docData = docSnap.data();
      return { success: true, data: docData.data };
    } else {
      return { success: true, data: null };
    }
  } catch (error) {
    console.error("데이터 로드 실패:", error);
    return { success: false, error };
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

// 접근 신청 승인/거부 (관리자용)
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
    return { success: true };
  } catch (error) {
    console.error("접근 신청 처리 실패:", error);
    return { success: false, error };
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
