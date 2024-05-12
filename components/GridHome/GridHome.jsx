import React from 'react';
import './GridHome.css'; // Assurez-vous d'avoir un fichier styles.css avec les styles que vous avez fournis
import GridJob from '../GridCard/GridJob'
import FilterJob from '../FilterJob/FilterJob';


function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="item1">
          Filter
        </div>
        <div className="item2">
          <FilterJob></FilterJob>
        </div>
        <div className="item3">
            <div>
                <GridJob></GridJob>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
