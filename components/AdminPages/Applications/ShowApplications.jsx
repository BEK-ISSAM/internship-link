// ShowApplications.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowApplications.css";

const ShowApplications = () => {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          `http://localhost:3000/applications/show`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setJobs(response.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        // Handle specific errors if needed
      }
    };

    fetchJobs();
  }, [token]);

  const handleAccept = async (jobId, applicantId) => {
    try {
      await axios.post(
        `http://localhost:3000/jobs/accept/${jobId}/${applicantId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === jobId
            ? { ...job, applicants: job.applicants.filter((app) => app._id !== applicantId) }
            : job
        )
      );
    } catch (err) {
      console.error("Error accepting application:", err);
    }
  };

  const handleReject = async (jobId, applicantId) => {
    try {
      await axios.post(
        `http://localhost:3000/jobs/reject/${jobId}/${applicantId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === jobId
            ? { ...job, applicants: job.applicants.filter((app) => app._id !== applicantId) }
            : job
        )
      );
    } catch (err) {
      console.error("Error rejecting application:", err);
    }
  };

  return (
    <div className="job-applications">
      <h1>Job Applications</h1>
      {jobs.length === 0 ? (
        <p>No jobs posted.</p>
      ) : (
        jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Type:</strong> {job.type}
            </p>
            <p>
              <strong>Posted on:</strong>{" "}
              {new Date(job.datePosted).toLocaleDateString()}
            </p>
            <p>
              <strong>Number of Applicants:</strong> {job.applicants.length}
            </p>

            {job.applicants.length === 0 ? (
              <p>No applications for this job.</p>
            ) : (
              <div>
                <h3>Applicants:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Intern Name</th>
                      <th>Email</th>
                      <th>Skills</th>
                      <th>Summary</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {job.applicants.map((applicant) => (
                      <tr key={applicant._id}>
                        <td>{applicant.name}</td>
                        <td>{applicant.email}</td>
                        <td>{applicant.skills}</td>
                        <td>{applicant.summary}</td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="accept-button"
                              onClick={() => handleAccept(job._id, applicant._id)}
                            >
                              Accept
                            </button>
                            <button
                              className="reject-button"
                              onClick={() => handleReject(job._id, applicant._id)}
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ShowApplications;
