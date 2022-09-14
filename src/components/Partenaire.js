import React, { components } from "react";
import { Routes, Route, Link } from "react-router-dom";
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



      <div class="breatcome_area d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breatcome_title">
                <div class="breatcome_title_inner pb-2">
                  <h2>Partenaire </h2>
                </div>
                <div class="breatcome_content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


     
      <div class="service_area bg_color2 pt-80 pb-70">
        <div class="container">
          <div class="row">
            {/* <!-- Start Section Tile --> */}
            <div class="col-lg-12">
              <div class="section_title text-center mb-50">
                <div class="section_sub_title uppercase mb-3">
                  <h6></h6>
                </div>
                <div class="section_main_title">
                  <h1> Partenaires</h1>
                  <h1></h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog_area bg_color2 pt-85 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-9"></div>
            <div className="col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/ministre.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html">
                      Ministère de l’Enseignement Supérieur, de la Recherche
                      Scientifique et de la Formation des cadres (Maroc)
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/cadi1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html"></a>
                    UNIVERSITÉ CADI AYYAD
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/ocp1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html"></a>Le groupe OCP (anciennement
                    Office chérifien des phosphates)
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/CGEM.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html"></a>
                    Confédération générale des entreprises du Maroc
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/cjd.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html"></a>Centre des Jeunes Dirigeants
                    d'Entreprises - CJD Maroc <br></br>
                    <br></br>
                  </h3>
                  <br></br>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/Emerging.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html"></a> Emerging Business Factory,
                    premier incubateur privé IT et Médias dans la région de
                    Marrakech
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/cluster.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html"></a>
                    Association marocaine spécialisée dans les industries
                    agroalimentaires et cosmétiques du luxe
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/Royaume.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="blog_page_title pb-35">
                  <h3>
                    <a href="blog-details.html">
                      Ministère de l’Industrie, du Commerce de l’Investissement
                      et de l’Economie
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* footer */}

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
