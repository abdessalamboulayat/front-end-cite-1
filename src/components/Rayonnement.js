import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";


export default function Rayonnement() {
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
                  <h2>Rayonnement </h2>
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
                  <h1> Rayonnement</h1>
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

      <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-12">
          <div class="single_blog text_center mb-4">
            <div class="single_blog_thumb">
              <a href="blog-details.html">
                <img
                   width="250"
                   height="250"
                  src="assets/images/conference kenzi.png"
                  alt=""
                />
              </a>
            </div>
            <div class="single_blog_content pl-4 pr-4">
              <div class="techno_blog_meta shado_bg">
                <a href="#"> </a>
                <span class="meta-date pl-3">3-11-2021</span>
              </div>
              <div class="blog_page_title pb-1 pt-3">
                <h3>
                  <a href="blog-details.html">
                    {" "}
                    Conférence KENZI, classement des 500{" "}
                  </a>
                </h3>
              </div>
              <div class="blog_description">
                <p>
                  L'édition 2021 de la caravane annuelle organisée par les 500
                  entreprises a eu lieu à KENZI hôtel avec thématique les
                  grandes entreprises de la région face aux enjeux du renouveau
                  économique. la CIM était représentée et a participé à
                  l'animation du débat sur le potentiel économique de la région
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 col-sm-12">
          <div class="single_blog text_center mb-4">
            <div class="single_blog_thumb">
              <a href="blog-details.html">
                <img 
                 width="250"
                 height="250"
                
                src="assets/images/pic5.png" alt="" />
              </a>
            </div>
            <div class="single_blog_content pl-4 pr-4">
              <div class="techno_blog_meta shado_bg">
                <a href="#"> </a>
                <span class="meta-date pl-3"> 24-11-2021</span>
              </div>
              <div class="blog_page_title pb-1 pt-3">
                <h3>
                  <a href="blog-details.html">
                    Intervention à une conférence  avec la
                    FNACE
                  </a>
                </h3>
              </div>
              <div class="blog_description">
                <p>
                  {" "}
                  M.BELKHYAT a animé une conférence en ligne sur la thématiques
                  Ecosystemes entrepreneuriaux pour une dynamique
                  entrepreneuriale au service ds territoires. Il a parlé de la
                  mission et du role de la CIM dans la promotion de la culture
                  entrepreneuriale et la culture d'innovation ainsi que dans le
                  dévelloppement socio-économique de la région . L'événement a
                  été oorganisé par la Fédération Nationale pour l'accopagnement
                  à l'entrepreneuriat (FNACE){" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
