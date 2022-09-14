import React, { components } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";

export default function Motdedirecteur() {
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
                  <h1>Mot de Directeur</h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-details-area pt-85 pb-70">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="single-case-study-details ">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="case-study-details-thumb">
                      <img height="520" src="assets/images/driss.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="case-study-details-full">
                <div class="case-study-details-full-inner">
                  <div class="case-study-details-full-title pt-5 pb-3">
                    <h3></h3>
                  </div>
                  <div class="case-study-details-full-content">
                    <p>
                      La richesse d'un pays sur ses jeunes et sur leurs
                      potentialités débordantes à créer et à produire dans un
                      environnement direct propice à cet effet. Dans ce sens la
                      cité de l'innovation de Marrakech a pour objectif de
                      développer et de promouvoir l'innovation au Maroc et plus
                      particuliérement dans sa région,à travers ses quatres pôle
                      de compétence. Le programme Saphit de la CIM consistura
                      une expérimentation nouvelle pour permettre au maximum
                      d'étudiants de l'Université Cadi Ayyad de découvrir leur
                      talent d'entrepreneur. L'ambition majeure est de recueilir
                      plusieurs milliers d'idées de projet provenant de
                      plusieurs milliersd'étudiants.
                    </p>
                    <p>
                      Tous les moyens seront déployés pour donner vie à ces
                      idées et permettreleur réalisation par des projets et des
                      créations de startups. Les multiples activités programmées
                      par les Saphirs seront des opportunités permanentes à
                      saisir par chaque jeune pour se réaliser et réaliser son
                      reve.
                    </p>
                  </div>
                </div>
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
                  <p>© 2022 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
