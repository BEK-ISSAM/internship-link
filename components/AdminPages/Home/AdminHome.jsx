import React, { useEffect, useState } from "react";
import AdminJobs from "../AdminJobs/AdminJobs";
import AddJobs from "../CrudJobs/AddJobs";
import { useNavigate } from "react-router-dom";
import ShowApplications from "../Applications/ShowApplications";
import ShowLists from "../AdminLists/ShowLists"

const AdminHome = ({ activeContent }) => {
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
      <h2>{UserConect ? `Hello ${UserConect.name}` : "Loading..."}</h2>
      <h1 className="mt-4">{activeContent}</h1>

      <div className="row">
        {activeContent === "AdminHome" && (
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
        {activeContent === "Jobs" && <AdminJobs></AdminJobs>}
        {activeContent === "AddJobs" && <AddJobs></AddJobs>}
        {activeContent === "Postulation" && <ShowApplications />}
        {activeContent === "Tasks" && <ShowLists />}
      </div>
    </div>
  );
};

export default AdminHome;
