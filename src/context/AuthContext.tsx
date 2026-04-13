"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

const AUTH_STORAGE_KEY = "yzastore_users";
const SESSION_KEY = "yzastore_session";

export interface User {
  email: string;
  name: string;
  password: string;
  createdAt: string;
}

interface AuthContextType {
  currentUser: Omit<User, "password"> | null;
  isAuthOpen: boolean;
  authMode: "login" | "register";
  login: (email: string, password: string) => { ok: boolean; error?: string };
  register: (name: string, email: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
  openAuth: (mode?: "login" | "register") => void;
  closeAuth: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function getUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: User[]) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
  console.log(
    "%c[YZAStore Auth] 💾 Kullanıcı veritabanı localStorage'a kaydedildi:",
    "color: #7c3aed; font-weight: bold;",
    users.map((u) => ({ email: u.email, name: u.name, createdAt: u.createdAt }))
  );
}

function getSession(): Omit<User, "password"> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(user: Omit<User, "password"> | null) {
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    console.log(
      "%c[YZAStore Auth] ✅ Oturum açıldı:",
      "color: #059669; font-weight: bold;",
      user
    );
  } else {
    localStorage.removeItem(SESSION_KEY);
    console.log(
      "%c[YZAStore Auth] 🚪 Oturum kapatıldı",
      "color: #e74c3c; font-weight: bold;"
    );
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<Omit<User, "password"> | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  useEffect(() => {
    const session = getSession();
    if (session) {
      setCurrentUser(session);
      console.log(
        "%c[YZAStore Auth] 🔄 Mevcut oturum yüklendi:",
        "color: #059669; font-weight: bold;",
        session
      );
    }
  }, []);

  const register = useCallback(
    (name: string, email: string, password: string) => {
      const users = getUsers();
      if (users.find((u) => u.email === email)) {
        return { ok: false, error: "Bu e-posta adresi zaten kayıtlı." };
      }
      const newUser: User = {
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      saveUsers(users);

      const session = { name, email, createdAt: newUser.createdAt };
      saveSession(session);
      setCurrentUser(session);
      setIsAuthOpen(false);
      console.log(
        "%c[YZAStore Auth] 🎉 Yeni hesap oluşturuldu:",
        "color: #7c3aed; font-weight: bold;",
        { name, email }
      );
      return { ok: true };
    },
    []
  );

  const login = useCallback(
    (email: string, password: string) => {
      const users = getUsers();
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        return { ok: false, error: "E-posta veya şifre hatalı." };
      }
      const session = { name: user.name, email: user.email, createdAt: user.createdAt };
      saveSession(session);
      setCurrentUser(session);
      setIsAuthOpen(false);
      return { ok: true };
    },
    []
  );

  const logout = useCallback(() => {
    saveSession(null);
    setCurrentUser(null);
  }, []);

  const openAuth = useCallback((mode: "login" | "register" = "login") => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  }, []);

  const closeAuth = useCallback(() => setIsAuthOpen(false), []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthOpen,
        authMode,
        login,
        register,
        logout,
        openAuth,
        closeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
