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
        {activeContent === "Jobs" && <AdminJobs></AdminJobs>}
        {activeContent === "AddJobs" && <AddJobs></AddJobs>}
        {activeContent === "Postulation" && <ShowApplications />}
        {activeContent === "Tasks" && <ShowLists />}
      </div>
    </div>
  );
};

export default AdminHome;
