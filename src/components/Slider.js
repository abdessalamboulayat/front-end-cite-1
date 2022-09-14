import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default function Slider () {
    return ( 
        <div>
              <div class="slider_list owl-carousel">
        <div class="slider_area d-flex align-items-center slider1" id="home">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="single_slider">
                  <div class="slider_content">
                    <div class="slider_text">
                      
                      <div class="slider_text_inner">
                       
                        
                      
                      </div>

                      <div class="slider-video">
                        <div class="video-icon">
                          <a
                            class="video-vemo-icon venobox vbox-item"
                            data-vbtype="youtube"
                            data-autoplay="true"
                            href="https://www.youtube.com/watch?v=ryHA5leL6M4"
                          >
                            <i class="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider_area d-flex align-items-center slider2" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="single_slider">
                <div class="slider_content">
                  <div class="slider_text">
                    <div class="slider_text_inner">
                      <h5></h5>
                      <h1></h1>
                      <h1></h1>
                    </div>
                    <div class="slider_button pt-5 d-flex">

                       <div class="button">
                       <a class="active" href="">
                          IT Services <i class="fa fa-long-arrow-right"></i>
                        </a>
                        <a class="active" href="">
                          IT Services <i class="fa fa-long-arrow-right"></i>
                        </a>
                      </div> 
                    </div>
                    <div class="slider-video">
                      <div class="video-icon">
                        <a
                          class="video-vemo-icon venobox vbox-item"
                          data-vbtype="youtube"
                          data-autoplay="true"
                          href="https://www.youtube.com/watch?v=ryHA5leL6M4"
                        >
                          <i class="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
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