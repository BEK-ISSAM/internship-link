import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-white navbar-expand-xl">
        <a href="index.html" className="navbar-brand">
          <h1 className="text-primary display-6">InterLink</h1>
        </a>
        <button
          className="navbar-toggler py-2 px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <FontAwesomeIcon icon={faBars} className="text-primary" />
        </button>
        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/test" className="nav-item nav-link">
              Test
            </Link>
            <Link to="/offres" className="nav-item nav-link">
              Offres
            </Link>
            <Link to="/entreprises" className="nav-item nav-link">
              Entreprises
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <div className="d-flex m-3 me-0">
            <div className="input-group me-4">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher..."
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <a href="#" className="position-relative me-4 my-auto">
              <span
                className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                style={{
                  top: "-5px",
                  left: "15px",
                  height: "20px",
                  minWidth: "20px",
                }}
              >
                3
              </span>
            </a>
            <a href="#" className="my-auto">
              <FontAwesomeIcon icon={faUser} className="fa-2x" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
