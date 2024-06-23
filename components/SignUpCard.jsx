import React, { useState } from "react";
import "./SignUpCard.css";
import axios from 'axios';
import { toast } from "react-toastify";

const SignUpCard = () => {

  const[name , setFirstname]=useState('');
  const[lastName , setLastname]=useState('');
  const[email , setEmail]=useState('');
  const[password , setPassword]=useState('');

  const Submit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/User/registerUser' ,{name , lastName, email , password})
    .then(result =>{
      toast.success("sucess");
      console.log(result);})
    .catch(err=>console.log(err))
   
}

  return (
    <div className="signup-card">
      <h1 className="signup-title">Sign Up</h1>
      <form onSubmit={Submit} className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            onChange={(e)=>setFirstname(e.target.value)}
            id="firstName"
            name="firstName"
            className="form-input"
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            placeholder="Doe"
            onChange={(e)=>setLastname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="example@example.com"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="********"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
            placeholder="********"
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpCard;
