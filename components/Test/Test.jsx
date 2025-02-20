import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./style.css";
import NavbarContainer from "../Navbar/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Test() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortBy, setSortBy] = useState("Nothing");

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/Grid/jobs-grid"
        );
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <div className="">
        <NavbarContainer />
        <br />
        <br />
        <br />
      </div>
      <div className="">
        <div className="container-fluid fruite py-5">
          <div className="container-fluid py-5">
            <h1 className="mb-4"></h1>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-xl-3">
                    <div className="input-group w-100 mx-auto d-flex">
                      <input
                        type="search"
                        className="form-control p-3"
                        placeholder="keywords"
                        aria-describedby="search-icon-1"
                        value={searchKeyword}
                        onChange={handleSearchChange}
                      />
                      <span id="search-icon-1" className="input-group-text p-3">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-6"></div>
                </div>

                {/* Remaining HTML code converted to React */}
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Categories</h4>
                          <ul className="list-unstyled fruite-categorie">
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Developpeur
                                </a>
                                <span>(3)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>web
                                  design
                                </a>
                                <span>(5)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  tester
                                </a>
                                <span>(2)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Comptable
                                </a>
                                <span>(8)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2"></i>
                                  Concepteur
                                </a>
                                <span>(5)</span>
                              </div>
                            </li>

                            {/* Other list items */}
                          </ul>
                        </div>
                      </div>
                      {/* Other columns and HTML code */}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row g-4 justify-content-center">
                      {/* debut de grid card  */}
                      <div className="container-fluid">
                        <div className="row">
                          {jobs.map((job) => (
                            <div
                              key={job._id}
                              className="col-md-6 col-lg-6 col-xl-4 mb-4"
                            >
                              <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                  <img
                                    src="../images/user.png"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                  style={{ top: "10px", right: "10px" }}
                                >
                                  {job.type}
                                </div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                  <h4>{job.title}</h4>
                                  <p>{job.description}</p>
                                  <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold fs-6 mb-0">
                                      {job.salary} $ /mois
                                    </p>
                                    <Link
                                      to={`/Details/${job._id}`} // Redirige vers la route des détails du job avec l'ID du job
                                      className="btn border border-secondary rounded-pill px-2 text-primary"
                                    >
                                      <i className="fa fa-shopping-bag text-center"></i>
                                      {" Voir plus"}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* final grid  */}

                      {/* Other columns and HTML code */}
                    </div>
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          &laquo;
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          &raquo;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
