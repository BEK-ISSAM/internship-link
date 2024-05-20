import React from "react";
import "./App.css";
import NavbarContainer from "../components/Navbar/NavbarContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const App = () => {
  return (
    <div className="body-container">
      <Router>
      <NavbarContainer></NavbarContainer>
        <Routes>
          <Route exact path="/" element={<AuthCard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
