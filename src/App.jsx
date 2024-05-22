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
import HomePage from "../components/Home/HomePage";
import HowWorks from "../components/Home/SectionHowWorks/HowWorks";
import JobsCategories from "../components/Home/Categorie/Categories";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppAdmin from "../components/AdminPages/Home/AppAdmin"




const App = () => {
  return (
    <div className="body-container">
      < NavbarContainer></ NavbarContainer>
     {/* <Test></Test> */}
     <HomePage></HomePage>
     <HowWorks></HowWorks>
     <JobsCategories></JobsCategories>
     

      {/* <AppAdmin></AppAdmin> */}
   
     
    </div>
  );
};

export default App;
