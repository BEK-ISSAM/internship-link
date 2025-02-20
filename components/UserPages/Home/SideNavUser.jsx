import React from 'react';

const SideNavUser = ({ setActiveContent }) => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">

          <a className="nav-link collapsed" href="#!" onClick={() => setActiveContent('Applications')} data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Applications
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>
          <a className="nav-link collapsed" href="#!" onClick={() => setActiveContent('Company')} data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Company
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>
          <a className="nav-link collapsed" href="#!" onClick={() => setActiveContent('Tasks')} data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Your Tasks
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>
          <a className="nav-link collapsed" href="#!" onClick={() => setActiveContent('Profile')} data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Profile
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>
          <a href="/jobs" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Job offers
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        {JSON.parse(localStorage.getItem("user_data")).name}
      </div>
    </nav>
  );
}

export default SideNavUser;
