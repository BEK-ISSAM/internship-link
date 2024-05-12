import React from 'react';
import './GridJob.css'; // Assurez-vous d'avoir un fichier styles.css avec les styles que vous avez fournis

function App() {
  return (
    <div className="App">
      
      <div className="row">
        <div className="column">
          <div className="card">
          <div className="logo-container">
              <img src="../images/user.png" alt="Logo" className="logo" />
            </div>
            <p>temps de publiement</p>
            <h3>title</h3>
            <p>information</p>
            <p>type de contrat lo</p>
            <button className="card-button">Voir plus</button> {/* Bouton au bas de la carte */}
          </div>
        </div>

        <div className="column">
          <div className="card">
          <div className="logo-container">
              <img src="../images/user.png" alt="Logo" className="logo" />
            </div>
            <p>temps de publiement</p>
            <h3>title</h3>
            <p>information</p>
            <p>type de contrat</p>
            <button className="card-button">Voir plus</button> {/* Bouton au bas de la carte */}
          </div>
        </div>
        </div>

        <div className="row">
        <div className="column">
          <div className="card">
          <div className="logo-container">
              <img src="../images/user.png" alt="Logo" className="logo" />
            </div>
            <p>temps de publiement</p>
            <h3>title</h3>
            <p>information</p>
            <p>type de contrat</p>
            <button className="card-button">Voir plus</button> {/* Bouton au bas de la carte */}
          </div>
        </div>
        
        <div className="column">
          <div className="card">
          <div className="logo-container">
              <img src="../images/user.png" alt="Logo" className="logo" />
            </div>
            <p>temps de publiement</p>
            <h3>title</h3>
            <p>information</p>
            <p>type de contrat</p>
            <button className="card-button">Voir plus</button> {/* Bouton au bas de la carte */}
          </div>

        </div>
        </div>

        <div className="row">
        <div className="column">
          <div className="card">
          <div className="logo-container">
              <img src="../images/user.png" alt="Logo" className="logo" />
              
            </div>
            <p>temps de publiement</p>
            <h3>title</h3>
            <p>information</p>
            <p>type de contrat</p>
           
            <button className="card-button">Voir plus</button> {/* Bouton au bas de la carte */}
          </div>
        </div>
        <div className="column">
          <div className="card">
          <div className="logo-container">
              <img src="../images/user.png" alt="Logo" className="logo" />
            </div>
            <p>temps de publiement</p>
            <h3>title</h3>
            <p>information</p>
            <p>type de contratada</p>
            <button className="card-button">Voir plus</button> {/* Bouton au bas de la carte */}
          </div>
        </div>
        </div>
        
      </div>
    
  );
}

export default App;
