import React, { useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

const AddJobs = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState('');
  const [contract, setContract] = useState('');
  const [location, setLocation] = useState('');
  const [requirements, setRequirements] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting job with data:', {
        title,
        description,
        type,
        salary,
        contract,
        location,
        requirements,
        responsibilities,
        assignedTo: [], // Ensure assignedTo is an empty array if not provided
      });
      const response = await api.post('/Jobs/CreateJob', {
        title,
        description,
        type,
        salary,
        contract,
        location,
        requirements,
        responsibilities,
        assignedTo: [], // Ensure assignedTo is an empty array if not provided
      });
      console.log(response.data);
      // Reset form after successful submission (if needed)
      setTitle('');
      setDescription('');
      setType('');
      setSalary('');
      setContract('');
      setLocation('');
      setRequirements('');
      setResponsibilities('');
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div className="container">
      <h2>Create a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Enter job description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="Enter job type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            className="form-control"
            id="salary"
            placeholder="Enter job salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contract">Contract</label>
          <input
            type="text"
            className="form-control"
            id="contract"
            placeholder="Enter job contract type"
            value={contract}
            onChange={(e) => setContract(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter job location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="requirements">Requirements</label>
          <textarea
            className="form-control"
            id="requirements"
            placeholder="Enter job requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="responsibilities">Responsibilities</label>
          <textarea
            className="form-control"
            id="responsibilities"
            placeholder="Enter job responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJobs;
