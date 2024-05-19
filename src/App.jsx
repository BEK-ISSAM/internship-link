import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUpCard";
import AuthCard from "../components/AuthCard";
import GridHome from "../components/GridHome/GridHome"
import Test from "../components/Test/Test"
import  NavbarContainer from "../components/Navbar/NavBar"

const App = () => {
  return (
    <div className="body-container">
      < NavbarContainer></ NavbarContainer>
      <Test></Test>
      
     
    </div>
  );
};

export default App;
