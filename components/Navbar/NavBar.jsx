import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMapMarkerAlt, faEnvelope, faShoppingBag, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

function NavBars() {
    return (
        <div className="container topbar bg-primary d-none d-lg-block">
            <div className="d-flex justify-content-between">
                <div className="top-info ps-2">
                    <small className="me-3"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-secondary" /> <a href="#" className="text-white">123 Street, New York</a></small>
                    <small className="me-3"><FontAwesomeIcon icon={faEnvelope} className="me-2 text-secondary" /><a href="#" className="text-white">Email@Example.com</a></small>
                </div>
                <div className="top-link pe-2">
                    <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                    <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                    <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                </div>
            </div>
        </div>
    );
}

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">InterLink</h1></a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <FontAwesomeIcon icon={faBars} className="text-primary" />
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="shop.html" className="nav-item nav-link">Offres</a>
                    <a href="shop-detail.html" className="nav-item nav-link">Mes Emplois</a>
                    <a href="shop-detail.html" className="nav-item nav-link">Entreprises</a>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="d-flex m-3 me-0">
                <div className="input-group me-4">
                        <input type="text" className="form-control" placeholder="Rechercher..." />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <a href="#" className="position-relative me-4 my-auto">
                       
                        <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>3</span>
                    </a>
                    <a href="#" className="my-auto">
                        <FontAwesomeIcon icon={faUser} className="fa-2x" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default function NavbarContainer() {
    return (
        <div className="container-fluid fixed-top">
            <NavBars />
            <div className="container px-0">
                <Navbar />
            </div>
        </div>
    );
}
