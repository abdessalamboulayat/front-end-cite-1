import React, { Component } from "react";
export default function Footer() {
  return (
    <div>
      <div
        className="footer-middle pt-95"
        styles="background-image:url(assets/images/call-bg.png)"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="widget widgets-company-info">
                <div className="footer-bottom-logo pb-40">
                  <img
                    width="190"
                    height="100"
                    src="assets/images/logoCuca.png"
                    alt=""
                  />
                </div>
                <div className="company-info-desc">
                  <p></p>
                </div>
                <div className="follow-company-info pt-3">
                  <div className="follow-company-text mr-3">
                    <a href="#">
                      <p>Follow Us</p>
                    </a>
                  </div>
                  <div className="follow-company-icon">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-skype"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title pb-4">Our Services</h4>
                <div className="menu-quick-link-container ml-4">
                  <ul id="menu-quick-link" className="menu">
                    <li>
                      <a href="#">Marketing Strategy</a>
                    </li>
                    <li>
                      <a href="#">Interior Design</a>
                    </li>
                    <li>
                      <a href="#">Digital Services</a>
                    </li>
                    <li>
                      <a href="#">Product Selling</a>
                    </li>
                    <li>
                      <a href="#">Product Design</a>
                    </li>
                    <li>
                      <a href="#">Social Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="widget widgets-company-info">
                <h3 className="widget-title pb-4">Company Address</h3>
                <div className="company-info-desc">
                  <p></p>
                </div>
                <div className="footer-social-info">
                  <p>
                    <span>Address :</span>
                    Avenue Abdelkrim Khattabi B.P. 511 Marrakech Maroc
                  </p>
                </div>
                <div className="footer-social-info">
                  <p>
                    <span>Phone :</span>+ (212) 05.24.35.12.50
                  </p>
                </div>
                <div className="footer-social-info">
                  <p>
                    <span>Email :</span>
                    citeinnovation.marrakech@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer-bottom mt-70 pt-3 pb-1">
            <div class="col-lg-6 col-md-6">
              <div class="footer-bottom-content">
                <div class="footer-bottom-content-copy">
                  <p>©2022 PORTAIL UCA Cité D'INNOVATION Marrakech. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="footer-bottom-right">
                <div class="footer-bottom-right-text">
                  <a class="absod" href="#">
                    Privacy Policy{" "}
                  </a>
                  <a href="#"> Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
