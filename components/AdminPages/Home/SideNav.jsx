import React from 'react';

const SideNav = ({ setActiveContent }) => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <a className="nav-link" href="#!" onClick={() => setActiveContent('AdminHome')}>
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
            Dashboard
          </a>
          <div className="sb-sidenav-menu-heading">Interface</div>
          <a className="nav-link collapsed" href="#!" onClick={() => setActiveContent('Jobs')} data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
            Jobs
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>
         
          <a className="nav-link collapsed" href="#!" onClick={() => setActiveContent('AddJobs')} data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Add Job
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>

          <a className="nav-link collapsed" href="#!" onClick={() => setActiveContent('Postulation')} data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Postulation
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </a>
         
          <div className="sb-sidenav-menu-heading">Addons</div>
          <a className="nav-link" href="#!" onClick={() => setActiveContent('Charts')}>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            Suivie
          </a>
         
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  );
}

export default SideNav;
