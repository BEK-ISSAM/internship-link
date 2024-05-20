// NavbarContainer.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavbarInfo from "./NavbarInfo";
import Navbar from "./Navbar";
import Test from "../Test/Test";
import "./style.css";

export default function NavbarContainer() {
  return (
    <div className="container-fluid">
      <div className="fixed-top">
        <NavbarInfo />
      </div>
      <div className="container px-0">
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/offres" element={<Test />} />
          <Route path="/entreprises" element={<Test />} />
          <Route path="/contact" element={<Test />} />
        </Routes>
      </div>
      <Navbar className="container px-0" />
    </div>
  );
}
