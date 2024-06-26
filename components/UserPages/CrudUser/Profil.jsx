import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profil.css";
import { Link } from "react-router-dom";

const Profil = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user_data")));

  const token = localStorage.getItem("token");
  const companyId = userData && userData.company;

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/User/company/${companyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCompany(response.data);
      } catch (err) {
        setError(`${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (companyId) {
      fetchCompany();
    } else {
      setLoading(false);
    }
  }, [companyId, token, userData]); // Include userData in dependency array

  useEffect(() => {
    const handleStorageChange = () => {
      setUserData(JSON.parse(localStorage.getItem("user_data")));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!userData) {
    return (
      <div className="error-message">UserData not found in localStorage</div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Splitting skills string into an array of skills
  const skillsArray =
    userData.skills != null
      ? userData.skills.split(",").map((skill) => skill.trim())
      : ["No skills yet"];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-title">
          <p className="profile-name">{userData.name}</p>
          <p className="profile-role">
            {userData.role === "admin" ? "Recruiter" : "Intern"} at{" "}
            {company ? company.name : "Unknown Company"}
          </p>
        </div>
        <div>
          <Link to={`/UpdateProfil/${userData._id}`} className="update-button">
            Update Information
          </Link>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <h2>Information</h2>
          <ul>
            <li>
              <label>Age: {userData.age}</label>
            </li>
            <li>
              <label>Country/City: {userData.countryCity}</label>
            </li>
            <li>
              <label>Email: {userData.email}</label>
            </li>
            <li>
              <label>Gender: {userData.gender}</label>
            </li>
            <li>
              <label>Phone: {userData.phone}</label>
            </li>
          </ul>
        </div>
        <div className="profile-skills">
          <h2>Skills</h2>
          <ul>
            {skillsArray.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="profile-summary">
          <h2>Summary</h2>
          <p>{userData.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
