import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUpCard";
import AuthCard from "../components/AuthCard";

const App = () => {
  return (
    <div className="body-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="">
              <FontAwesomeIcon className="faLandmark" icon={faLandmark} />
            </a>
          </li>
          <li className="navbar-item">
            <a href="">Find Jobs</a>
          </li>
          <li className="navbar-item">
            <a href="">Companies</a>
          </li>
          <li className="navbar-item">
            <a href="">Post A Job</a>
          </li>
          <li className="navbar-item profile">
            <a href="">
              <img src="../images/user.png" alt="Profile" />
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* <div className="login-card-container">
        <LoginCard className="login-card"></LoginCard>
      </div>
      <div className="sign-up-card-container">
        <SignUpCard className="sign-up-card"></SignUpCard>
      </div> */}

      <AuthCard></AuthCard>
      
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
      <h1>ashdgjhsagda</h1>
    </div>
  );
};

export default App;
