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
        {activeContent === "Applications" && <Postulation></Postulation>}
        {activeContent === "Company" && <Company></Company>}
        {activeContent === "Tasks" && <UserTasks />}
        {activeContent === "Profile" && <Profil></Profil>}


      </div>
    </div>
  );
};

export default UserHome;
