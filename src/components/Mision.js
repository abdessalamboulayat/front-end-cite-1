import React, { components } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";



export default function () {
  return (
    <div>
       <Navbar />      
      <Header />
<HeaderMobile/>



     

      <div class="pricing_area pt-80 pb-70" id="pricing">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-50 mt-3">
                <div class="section_sub_title uppercase mb-3">
                  <h6></h6>
                </div>
                <div class="section_main_title">
                  <h1>Mission du Pole d'incubation</h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-area about-pages">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 main-accordion-lt">
              <div class="acd-items acd-arrow pt-60 pb-60 mr-4">
                <div class="section_title white text_left mb-150 mt-6">
                  <div class="section_sub_title uppercase mb-6"></div>
                  <div class="section_main_title">
                    <h2>Le pôle d'incubation a pour mission</h2>

                    <h2>de soutenir les porteurs de projets</h2>
                  </div>
                  <div class="em_bar">
                    <div class="em_bar_bg"></div>
                  </div>
                </div>
                <div class="panel-group symb" id="accordion">
                  <div class="panel panel-default">
                    <div class="panel-heading mb-3">
                      <h4 class="panel-title"></h4>
                    </div>
                    <div id="ac1" class="panel-collapse in">
                      <div class="panel-body pl-4 pr-4">
                        <p>
                          La mission de pole incubation est d'assurer
                          l'accompagnemenet de porteurs de projets dans la
                          création d'entreprises innovantes. La CIM peut
                          accueillir 60 porteurs de projets innovans en phase
                          d'incubation pendant 18mois , et 12 projets en phase
                          de pré-incubation pendant 6 mois. les appels à projets
                          seront lancés dans les différentes plateformes de
                          l'Université et les candidateures seront soumises à
                          une évaluation par une commission d'expets pour
                          validation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading mb-3">
                      <h4 class="panel-title"></h4>
                    </div>
                    <div id="ac2" class="panel-collapse collapse">
                      <div class="panel-body pl-4 pr-4">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading mb-3">
                      <h4 class="panel-title"></h4>
                    </div>
                    <div id="ac3" class="panel-collapse collapse">
                      <div class="panel-body pl-4 pr-4">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Accordion --> */}
            </div>
            <div class="col-lg-6 absod">
              <div class="single-panel">
                <div class="single-panel-thumb">
                  <div class="single-panel-thumb-inner">
                    <img
                      src="assets/images/video1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="main_video text_center">
                    <div class="video-icon">
                      <a
                        class="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
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
      <br></br>
      <br></br>

      <Footer />
      {/* <div class="footer_middle_area footer_bg_shape bg_color4 pt-250 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer_middle_social">
                <div class="footer_middle_social_icon">
                  <a class="color1" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a class="color2" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a class="color3" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a class="color4" href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                  <a class="color5" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a class="color6" href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a class="color7" href="#">
                    <i class="fa fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="footer_bottom_menu pt-5">
                <div class="footer_bottom_menu_inner">
                  <ul>
                    <li>
                      <a href="#home">Accueil</a>
                    </li>
                    <li>
                      <a href="#company.html">Company</a>
                    </li>
                    <li>
                      <a href="#service.html">Services</a>
                    </li>
                    <li>
                      <a href="evenement.html">Evénement</a>
                    </li>
                    <li>
                      <a href="formulaire.html">Demande d'incubation</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-bottom-content pt-4 text-center">
                <div class="footer-bottom-content-copy">
                  <p>© 2020 Techno.All Rights Reserved. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
