import React from 'react';

import "./HowWorks.css"

const HowWorks = () => {
  return (
    <div className="section-full p-t120 p-b90 site-bg-white twm-how-it-work-area">
      <div className="container">
        {/* TITLE START */}
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <div>Working Process</div>
          </div>
          <h2 className="wt-title">How It Works</h2>
        </div>
        {/* TITLE END */}
        
        <div className="twm-how-it-work-section">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="twm-w-process-steps">
                <span className="twm-large-number">01</span>
                <div className="twm-w-pro-top bg-clr-sky">
                  <div className="twm-media">
                    <span><img src="images/icon1.png" alt="icon1" /></span>
                  </div>
                  <h4 className="twm-title">Register<br />Your Account</h4>
                </div>
                <p>You need to create an account to find the best and preferred job.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="twm-w-process-steps">
                <span className="twm-large-number">02</span>
                <div className="twm-w-pro-top bg-clr-pink">
                  <div className="twm-media">
                    <span><img src="images/icon2.png" alt="icon2" /></span>
                  </div>
                  <h4 className="twm-title">Apply <br />For Dream Job</h4>
                </div>
                <p>You need to create an account to find the best and preferred job.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="twm-w-process-steps">
                <span className="twm-large-number">03</span>
                <div className="twm-w-pro-top bg-clr-green">
                  <div className="twm-media">
                    <span><img src="images/icon3.png" alt="icon3" /></span>
                  </div>
                  <h4 className="twm-title">Upload <br />Your Resume</h4>
                </div>
                <p>You need to create an account to find the best and preferred job.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
