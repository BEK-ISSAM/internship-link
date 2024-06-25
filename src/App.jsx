import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginCard from '../components/LoginCard';
import SignUpCard from '../components/SignUpCard';
import AuthCard from '../components/AuthCard';
import GridHome from '../components/GridHome/GridHome';
import Test from '../components/Test/Test';
import NavbarContainer from '../components/Navbar/NavBar';
import HomePage from '../components/Home/HomePage';
import HowWorks from '../components/Home/SectionHowWorks/HowWorks';
import JobsCategories from '../components/Home/Categorie/Categories';
import AppAdmin from '../components/AdminPages/Home/AppAdmin';
import TaskList from '../components/TaskList/TaskList';
import Details from '../components/Test/Details/Details';
import AppUser from '../components/UserPages/Home/AppUser';
import UpdateProfil from '../components/UserPages/CrudUser/UpdateProfil';

const App = () => {
  return (
    <>  
    
    
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<AuthCard />} />
          <Route path="/Admin" element={<AppAdmin />} />
          
          <Route path="/Jobs/*" element={<Test />} />
          <Route path="/Home" element={< HomePage/>} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/User" element={<AppUser />} />
          <Route path="/UpdateProfil/:id" element={<UpdateProfil />} />

          
          

          
          
        </Routes>
      </div>
    </Router>
    </>

  );
};

export default App;
