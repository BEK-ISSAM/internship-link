import React from 'react';
import './FilterJob.css'; // Assurez-vous d'avoir un fichier FilterJob.css avec les styles que vous avez fournis

export default function FilterJob() {
  return (
    <div>
    <div className="filter-job-container">
      <form>

        <div className="category-filter">
          <h3>Category</h3>
          <select className="wt-select-bar-large selectpicker" data-live-search="true" data-bv-field="size">
            <option selected>All Category</option>
            <option>Web Designer</option>
            <option>Developer</option>
            <option>Acountant</option>
          </select>
        </div>

        <div className="job-type-filter twm-sidebar-ele-filter">
          <h3 className="section-head-small mb-4">Job Type</h3>
          <ul>
            <li>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Freelance</label>
              </div>
            </li>
            {/* Ajoutez les autres options de type de travail ici */}
          </ul>
        </div>

        <div className="date-posts-filter twm-sidebar-ele-filter">
          <h3 className="section-head-small mb-4">Date Posts</h3>
          <ul>
            <li>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="exampleradio1" />
                <label className="form-check-label" htmlFor="exampleradio1">Last hour</label>
              </div>
            </li>
            {/* Ajoutez les autres options de date ici */}
          </ul>
        </div>

      </form>
    </div>
    </div>
  );
}
