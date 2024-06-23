import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminJobs"

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Function to fetch jobs posted by the current recruiter
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Jobs/GetJobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    // Call the fetchJobs function
    fetchJobs();
  }, []);

  return (
    <div className="container-fluid px-4">
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
        <li className="breadcrumb-item active">Jobs</li>
      </ol>

      <div className="card mb-4">
        <div className="card-body">
          DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://datatables.net/">official DataTables documentation</a>.
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Date Posted</th>
                  <th scope="col">Location</th>
                  <th scope="col">Description</th>
                  <th scope="col">Requirements</th>
                  <th scope="col">Responsibilities</th>
                  <th scope="col">Company</th>
                  <th scope="col">Assigned To</th>
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
                      {job.assignedTo.map((intern) => (
                        <div key={intern._id}>{intern.name}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
