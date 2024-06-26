import React, { useState} from 'react';
import './UpdateProfil.css'; // Import du fichier CSS
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProfil = () => {

    const { id } = useParams(); // Obtenez userId de l'URL
    const [formData, setFormData] = useState({
        name: '',
        domain: '',
        password: '',
        countryCity: '',
        age: '',
        summary: '',
        skills: '',
        gender: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3000/User/updateIntern/${id}`, formData); // Remplacez userId par l'ID de l'utilisateur approprié

            if (response.status === 200) {
                console.log('Profil mis à jour avec succès:', response.data);
            } else {
                console.error('Erreur de mise à jour du profil');
            }
        } catch (error) {
            console.error('Erreur de requête', error);
        }
    };


    console.log(id);

    return (
        <div className="update-profil-container">
            <div className="update-profil-content">
                <form onSubmit={handleSubmit}>
                    <div className="section-title">
                        <h2 className="bold">Update Information</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="domain">Domain:</label>
                        <input type="text" id="domain" name="domain" value={formData.domain} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="countryCity">Country/City:</label>
                        <input type="text" id="countryCity" name="countryCity" value={formData.countryCity} onChange={handleChange} />
                    </div>
                    {/* Remove the CV file input section */}
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="summary">Summary:</label>
                        <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="skills">Skills:</label>
                        <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <button type="submit" className="update-button">Update Information</button>
                </form>
                <Link to="/User" className="back-btn">Back</Link>
            </div>
        </div>
    );
};

export default UpdateProfil;
