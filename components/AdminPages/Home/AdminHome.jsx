import React, { useEffect, useState } from 'react';
import AdminJobs from '../AdminJobs/AdminJobs';
import AddJobs from '../CrudJobs/AddJobs';
import { useNavigate } from 'react-router-dom';

const AdminHome = ({ activeContent }) => {

  const navigate = useNavigate();

  const[UserConect , setUserConect]=useState(null);

  const getUserConnected = () => {
    const userData = localStorage.getItem("user_data");
    if (userData) {
      setUserConect(JSON.parse(userData));
    } else {
      navigate('/');  // Redirige vers la page de login si aucune donnée utilisateur n'est trouvée
    }
  };

  useEffect((e)=>{
    
    getUserConnected();
    
  


  },[])


  return (
    <div className="container-fluid px-4">
          <h2>{UserConect ? `Hello ${UserConect.name}` : 'Loading...'}</h2>
      <h1 className="mt-4">{activeContent}</h1>
       
      <div className="row">
        {activeContent === 'AdminHome' && (
          <>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-primary text-white mb-4">
                <div className="card-body">Primary Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-warning text-white mb-4">
                <div className="card-body">Warning Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-success text-white mb-4">
                <div className="card-body">Success Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-danger text-white mb-4">
                <div className="card-body">Danger Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">View Details</a>
                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeContent === 'Jobs' && (
          <AdminJobs></AdminJobs>
        )}
        {activeContent === 'AddJobs' && (
          <AddJobs></AddJobs>
        )}
        {activeContent === 'Postulation' && (
          <div>Content for Light Sidenav</div>
        )}
        {/* {activeContent === 'Pages' && (
          <div>Content for Pages</div>
        )}
        {activeContent === 'Authentication' && (
          <div>Content for Authentication</div>
        )}
        {activeContent === 'Login' && (
          <div>Content for Login</div>
        )}
        {activeContent === 'Register' && (
          <div>Content for Register</div>
        )}
        {activeContent === 'Forgot Password' && (
          <div>Content for Forgot Password</div>
        )}
        {activeContent === 'Error' && (
          <div>Content for Error</div>
        )}
        {activeContent === '401 Page' && (
          <div>Content for 401 Page</div>
        )}
        {activeContent === '404 Page' && (
          <div>Content for 404 Page</div>
        )}
        {activeContent === '500 Page' && (
          <div>Content for 500 Page</div>
        )}
        {activeContent === 'Charts' && (
          <div>Content for Charts</div>
        )}
        {activeContent === 'Tables' && (
          <div>Content for Tables</div>
        )} */}
      </div>
    </div>
  );
}

export default AdminHome;
