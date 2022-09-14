import React, { Component } from 'react';
export default function  ExperienceHome() {
    return ( 
        <div>
            <div className="about_area pt-80 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="single_video mb-4">
                <div className="video_thumb experience text_center">
                  <img
                    width="380"
                    height="500"
                    src="assets/images/experience1.png"
                    alt=""
                  />
                  <div className="main_video">
                    <div className="video-icon"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="single_about_content">
                <div className="prfs_experience">
                  <div className="headingh_experience_number">
                    <h1>26</h1>
                  </div>
                  <div className="heading_experience_title">
                    <h2>Years of experience in IT Solution & Business</h2>
                  </div>
                </div>
                <div className="heading_experience_text pt-40">
                  <p>
                    There are many variations of passages of Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing
                  </p>
                </div>
                <div className="heading_experience_text pt-3">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </p>
                </div>
                <div className="about_button pt-4">
                  {/* <div className="button two">
                    <a href="#">More Details</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
     );
}

 ;