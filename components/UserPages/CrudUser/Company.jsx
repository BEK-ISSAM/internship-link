import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Company.css'; // Import your CSS file for styling

export default function Company() {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const token = localStorage.getItem("token");
  const companyId = JSON.parse(localStorage.getItem("user_data")).company;

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/User/company/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
  }, [companyId, token]);

  if (loading) {
    return <p className="loading-message">Loading...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  if (!company) {
    return (
      <div className="company-container">
        <h1>Company Information</h1>
        <div className="no-data-message">
          <p>No company data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="company-container">
      <h1>Company Information</h1>
      <div className="company-info">
        <p><strong>Name:</strong> {company.name}</p>
        <p><strong>Headquarters:</strong> {company.headquarters}</p>
        <p><strong>Email:</strong> {company.email}</p>
        <p><strong>Phone:</strong> {company.phone}</p>
        <p><strong>Number of Job Posts:</strong> {company.numberOfJobPosts}</p>
        <p><strong>Number of Staff:</strong> {company.numberOfStaff}</p>
        <p><strong>Field of Work:</strong> {company.fieldOfWork}</p>
      </div>
    </div>
  );
}
