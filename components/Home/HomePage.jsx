import React from 'react';
import "./bootstrap.min.css";
import "./style.css";
import NavbarContainer from '../Navbar/NavBar';
import JobsCategories from './Categorie/Categories';
import HowWorks from './SectionHowWorks/HowWorks';





const HomePage = () => {
    return (
        <>
        <NavbarContainer/>
        <div className="container-fluid py-5 mb-5 hero-header ">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">We Have 208,000+ Live Jobs</h4>
                        <h1 className="mb-5 display-3 text">Find the job that fits your life</h1>
                        <div className="position-relative mx-auto">
                            <input
                                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                                type="number"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                                style={{ top: 0, right: '25%' }}
                            >
                                Submit Now
                            </button>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
        <div className=''>
        <HowWorks/>
        </div>
        

    
        </>
    );
};


export default HomePage;
