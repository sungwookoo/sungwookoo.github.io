"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

interface HeaderProps {
  onLoginClick: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    // 로그인 상태 체크
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsLoggedIn(true);
      setUserEmail(JSON.parse(user).email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          SWSTORE
        </Link>
        <div className={styles.links}>
          <Link href="/mac">Mac</Link>
          <Link href="/ipad">iPad</Link>
          <Link href="/iphone">iPhone</Link>
          <Link href="/watch">Watch</Link>
        </div>
        <div className={styles.links}>
          {isLoggedIn ? (
            <div className={styles.userSection}>
              <Link href="/mypage" className={styles.userEmail}>
                {userEmail}
              </Link>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </div>
          ) : (
            <button onClick={onLoginClick} className={styles.loginButton}>
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
