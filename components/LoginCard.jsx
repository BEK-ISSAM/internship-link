import React, { useState } from "react";
import "./LoginCard.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
    const navigate = useNavigate();
    const[email , setEmail]=useState('');
    const[password , setPassword]=useState('');

      const Submit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/User/loginUser' ,{ email , password} )
        .then(result=>{
          toast.success("reussit");
          localStorage.setItem('user_data' , JSON.stringify( result.data.intern))
          localStorage.setItem('token' , result.data.token  )
          console.log(result);
          navigate('/User');
         
        })
      
        
      
        .catch(err=>console.log(err))

       


      }
    
  return (
    <div className="login-card">
     
      <h1 className="login-title">Sign In</h1>
      <form onSubmit={Submit} className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="username"
            name="username"
            className="form-input"
            placeholder="John Doe"
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
        <button type="submit" className="submit-btn">Sign In</button>
      </form>
    </div>
  );
};

export default LoginCard;
