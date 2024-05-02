import React from "react";
import "./LoginCard.css";

const LoginCard = () => {
  return (
    <div className="login-card">
      <h1 className="login-title">Sign In</h1>
      <form action="" className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="********"
          />
        </div>
        <button type="submit" className="submit-btn">Sign In</button>
      </form>
    </div>
  );
};

export default LoginCard;
