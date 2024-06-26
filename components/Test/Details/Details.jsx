// Details.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarContainer from '../../Navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID
  const navigate = useNavigate(); // Utilisation de useHistory pour la redirection

  const [job, setJob] = useState(null);

  const formatDate = (isoDateString) => {
    const dateObject = new Date(isoDateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Grid/jobsDetails/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleApply = async () => {
    try {
      if(localStorage.getItem("token") == null){
        navigate("/")
      }

      const userId = JSON.parse(localStorage.getItem("user_data"))._id;
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }

      await axios.post(`http://localhost:3000/Grid/apply/${id}`, { userId });
      navigate('/Jobs'); // Redirection vers la page d'accueil après la candidature
    } catch (error) {
      console.error('Error applying for the job:', error);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarContainer />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid py-5">
        <div className="row g-4 mb-5">
          <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border rounded">
                  <img src={job.image} className="img-fluid rounded" alt={job.title} />
                </div>
              </div>
              <div className="col-lg-6">
                <h4 className="fw-bold mb-3">{job.title}</h4>
                <h5 className="fw-bold mb-3">{job.company.name}</h5>

                <p className="mb-3">Category: {job.category}</p>
                <h5 className="fw-bold mb-3">{job.salary} $</h5>
                <div className="d-flex mb-4">
                  <FontAwesomeIcon icon={faStar} className="text-secondary" />
                  <FontAwesomeIcon icon={faStar} className="text-secondary" />
                  <FontAwesomeIcon icon={faStar} className="text-secondary" />
                  <FontAwesomeIcon icon={faStar} className="text-secondary" />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h5> Descriptions :</h5>
                <p className="mb-4">{job.description}</p>

                <h5> Exigences :</h5>
                <ul>
                  <li className="mb-4">{job.requirements}</li>
                </ul>

                <h5>Responsabilites :</h5>
                <p className="mb-4">{job.responsibilities}</p>

                <p className="mb-4">Date d'expiration: {formatDate(job.postExpiryDate)}</p>

                <button onClick={handleApply} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                  <FontAwesomeIcon icon={faRightToBracket} className="me-2 text-primary" />
                  Apply for this job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
