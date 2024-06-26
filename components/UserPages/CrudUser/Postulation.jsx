import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Postulation.css"; // Import CSS file for component-specific styles

export default function Postulation() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = JSON.parse(localStorage.getItem("user_data"))._id;

    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/User/applications/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setJobs(response.data);
      } catch (err) {
        setError(`${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleCancelApplication = async (jobId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(
        `http://localhost:3000/User/applications/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update state to reflect the removed job application
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (err) {
      setError(`${err.message}`);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="postulation-container">
      <h1>Your Job Applications</h1>
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date of Creation</th>
            <th>Location</th>
            <th>Description</th>
            <th>Requirements</th>
            <th>Responsibilities</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{new Date(job.datePosted).toLocaleDateString()}</td>
              <td>{job.location}</td>
              <td>{job.description}</td>
              <td>{job.requirements}</td>
              <td>{job.responsibilities}</td>
              <td>{job.company.name}</td>
              <td>
                <button onClick={() => handleCancelApplication(job._id)}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
