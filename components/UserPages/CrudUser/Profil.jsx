import React from 'react';
import './Profil.css';
import { Router , Link } from 'react-router-dom';


const Profil = () => {
    // Récupérer userData depuis localStorage
    const userData = JSON.parse(localStorage.getItem('user_data'));

    if (!userData) {
        return <div className="error-message">UserData not found in localStorage</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src="https://i.imgur.com/eCijVBe.png" alt="Profile Pic" className="profile-pic" />
                <div className="profile-title">
                    <p className="profile-name">{userData.name}</p>
                    <p className="profile-role">{userData.role}</p>
                </div>
                <div>
                    
                     <Link to={`/UpdateProfil/${userData._id}`} className="update-button">Update Information</Link>
                    
                </div>
            </div>
            
            <div className="profile-content">
                <div className="profile-info">
                    <h2>Informations</h2>
                    <ul>
                        <li>
                            <i className="fas fa-map-signs"></i>
                            <span>{userData.address}</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>{userData.email}</span>
                        </li>
                        {/* Ajoutez d'autres informations si nécessaire */}
                    </ul>
                </div>
                <div className="profile-skills">
                    <h2>Compétences</h2>
                    <ul>
                        <li>
                            <span>HTML</span>
                            <div className="skill-progress">
                                <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                            </div>
                            <span>80%</span>
                        </li>
                        <li>
                            <span>CSS</span>
                            <div className="skill-progress">
                                <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                            </div>
                            <span>70%</span>
                        </li>
                        {/* Ajoutez d'autres compétences ici */}
                    </ul>
                </div>
                {/* Ajoutez d'autres sections comme l'éducation, l'expérience professionnelle, etc. */}
            </div>
        </div>
    );
};

export default Profil;
