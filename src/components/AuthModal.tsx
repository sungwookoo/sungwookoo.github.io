"use client";

import { useState } from "react";
import styles from "./AuthModal.module.css";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface User {
  email: string;
  password: string;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // 로그인 로직
      const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];
      const user = users.find(
        (u: User) =>
          u.email === formData.email && u.password === formData.password
      );
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        onClose();
        window.location.reload();
      } else {
        alert("Invalid credentials");
      }
    } else {
      // 회원가입 로직
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push({ email: formData.email, password: formData.password });
      localStorage.setItem("users", JSON.stringify(users));
      setIsLogin(true);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>{isLogin ? "로그인" : "회원가입"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          )}
          <button type="submit">{isLogin ? "로그인" : "회원가입"}</button>
        </form>
        <p>
          {isLogin ? "계정이 없으신가요? " : "이미 계정이 있으신가요? "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "회원가입" : "로그인"}
          </button>
        </p>
      </div>
    </div>
  );
}
