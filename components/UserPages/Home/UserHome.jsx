import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Postulation from "../CrudUser/Postulation";
import Company from "../CrudUser/Company";
import Profil from "../CrudUser/Profil";
import UserTasks from "../CrudUser/UserTasks";

const UserHome = ({ activeContent }) => {
  const navigate = useNavigate();

  const [UserConect, setUserConect] = useState(null);

  const getUserConnected = () => {
    const userData = localStorage.getItem("user_data");
    if (userData) {
      setUserConect(JSON.parse(userData));
    } else {
      navigate("/");
    }
  };

  useEffect((e) => {
    getUserConnected();
  }, []);

  return (
    <div className="container-fluid px-4">
      <div className="row">
        {activeContent === "UserHome" && (
          <>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-primary text-white mb-4">
                <div className="card-body">Primary Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    View Details
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-warning text-white mb-4">
                <div className="card-body">Warning Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    View Details
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-success text-white mb-4">
                <div className="card-body">Success Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    View Details
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-danger text-white mb-4">
                <div className="card-body">Danger Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    View Details
                  </a>
                  <div className="small text-white">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeContent === "Applications" && <Postulation></Postulation>}
        {activeContent === "Company" && <Company></Company>}
        {activeContent === "Tasks" && <UserTasks />}
        {activeContent === "Profile" && <Profil></Profil>}


      </div>
    </div>
  );
};

export default UserHome;
