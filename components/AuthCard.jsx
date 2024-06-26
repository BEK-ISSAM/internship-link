import React, { useState } from "react";
import "./AuthCard.css";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const switchToSignUp = () => {
    setIsLogin(false);
  };

  return (
    <div className="auth-card">
      <div className="auth-toggle">
        <button className={isLogin ? "active" : ""} onClick={switchToLogin}>
          Sign In
        </button>
        <button className={!isLogin ? "active" : ""} onClick={switchToSignUp}>
          Sign Up
        </button>
      </div>
      {isLogin ? <LoginCard /> : <SignUpCard switchToLogin={switchToLogin} />}
    </div>
  );
};

export default AuthCard;
