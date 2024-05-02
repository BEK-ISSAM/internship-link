import React from "react";
import "./SignUpCard.css";

const SignUpCard = () => {
  return (
    <div className="signup-card">
      <h1 className="signup-title">Sign Up</h1>
      <form action="" className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            placeholder="Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="example@example.com"
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
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
            placeholder="********"
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpCard;
