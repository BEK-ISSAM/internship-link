import React, { useState } from 'react';
import './UpdateProfil.css'; // Import du fichier CSS
import { Link } from 'react-router-dom';
const UpdateProfil = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer le fichier (file) au serveur ou effectuer d'autres traitements ici
        console.log(file); // Exemple : affichage du fichier dans la console
    };

    return (
        <div className="update-profil-container">
            <div className="update-profil-content">
                <form onSubmit={handleSubmit}>
                    <div className="section-title">
                        <h2 className="bold">Update Information</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="domain">Domain:</label>
                        <input type="text" id="domain" name="domain" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="countryCity">Country/City:</label>
                        <input type="text" id="countryCity" name="countryCity" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cv">CV (PDF):</label>
                        <input type="file" id="cv" name="cv" accept=".pdf" onChange={handleFileChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="summary">Summary:</label>
                        <textarea id="summary" name="summary"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="skills">Skills:</label>
                        <input type="text" id="skills" name="skills" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <button type="submit" className="update-button">Update Information</button>
                </form>

                <Link to="/User" className="back-btn">Back</Link>
            </div>
        </div>
    );
};

export default UpdateProfil;
