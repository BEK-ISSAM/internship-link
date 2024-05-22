import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

const JobsCategories = () => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    setSelectedItem(selectedItem - 1);
  };

  const handleNextClick = () => {
    setSelectedItem(selectedItem + 1);
  };

  return (
    <div className="section-full p-t120 p-b90 site-bg-gray twm-job-categories-area">
      <div className="container">
        <div className="wt-separator-two-part">
          <div className="row wt-separator-two-part-row">
            <div className="col-xl-5 col-lg-5 col-md-12 wt-separator-two-part-left">
              <div className="section-head left wt-small-separator-outer">
                <div className="wt-small-separator site-text-primary">
                  <div>Jobs by Categories</div>
                </div>
                <h2 className="wt-title">Choose Your Desire Category</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.</p>
            </div>
          </div>
        </div>

        <div className="twm-job-categories-section">
          <div className="job-categories-style1 m-b30">
            <Carousel
              ref={carouselRef}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              emulateTouch={true}
              showIndicators={false}
              interval={5000}
              axis="horizontal"
              centerMode={true}
              centerSlidePercentage={33.33}
              className="job-categories-carousel owl-btn-left-bottom"
            >
              {[...Array(21)].map((_, index) => (
                <div key={index} className="item" style={{ marginRight: '30px' }}>
                  <div className="job-categories-block">
                    <div className={`twm-media flaticon-${icons[index % 7]}`}></div>
                    <div className="twm-content">
                      <div className="twm-jobs-available">{jobsAvailable[index % 7]}</div>
                      <a href="job-detail.html">{jobTitles[index % 7]}</a>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
         
        </div>
      </div>
    </div>
  );
};

const icons = [
  'dashboard', 'project-management', 'note', 'customer-support', 'bars', 'user', 'computer'
];

const jobsAvailable = [
  '9,185 Jobs', '3,205 Jobs', '2,100 Jobs', '1,500 Jobs', '9,185 Jobs', '3,205 Jobs', '2,100 Jobs'
];

const jobTitles = [
  'Business Development', 'Project Management', 'Content Writer', 'Costomer Services', 'Accounting / Finance',
  'Marketing', 'Design & Art'
];

export default JobsCategories;
