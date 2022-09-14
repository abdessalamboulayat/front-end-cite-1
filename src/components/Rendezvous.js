import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
export default function Rendezvous() {
  return (
    <div>
      <div className="header_top_menu pt-2 pb-2 bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_address_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-o"></i>
                        citeinnovation.marrakech@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker"></i>Avenue Abdelkrim
                        Khattabi B.P. 511 Marrakech Maroc
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>+ (212) 05.24.35.12.50
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="header_top_menu_icon">
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--==================================================-->
	<!----- End	Techno Header Top Menu Area Css ----->
	<!--===================================================-->

	<!--==================================================-->
	<!----- Start Techno Main Menu Area ----->
	<!--==================================================--> */}
      <div
        id="sticky-header"
        className="techno_nav_manu d-md-none d-lg-block d-sm-none d-none"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo mt-1">
                <a className="logo_img" href="index.html" title="techno">
                  <img
                    width="180"
                    height="90"
                    src="assets/images/logoCuca.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <nav class="techno_menu">
                <ul class="nav_scroll">
                  <li>
                    <a href="#home">Accueil</a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/Motdedirecteur">Mot de Directeur</Link>
                      </li>
                      <li>
                        <Link to="/Teams">Teams</Link>
                      </li>
                      <li>
                        <Link to="/Partenaire">Partenaire</Link>
                      </li>

                      <li>
                        <Link to="/Rayonnement">Rayonnement</Link>
                      </li>
                      <li>
                        <Link to="/Visite">Visites Extérne</Link>
                      </li>

                      {/* <li>
                        <Link to="/Magasin">Magasin</Link>
                      </li> */}
                      <li>
                        <Link to="/Contact">Contact</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#company.html">Pôle Incubation </a>

                    <ul class="sub-menu">
                      <li>
                        <Link to="/Mision">Mission Pole incubation</Link>
                      </li>
                      <li>
                        <Link to="/Teams">Equipes </Link>
                      </li>
                      <li>
                        <Link to="/Formulaire">Demande d'ncubation</Link>
                      </li>

                      <li>
                        <Link to="/Evenement">Evenement</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#company.html"> Pôle Formation</a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/MisionPformation">
                          Mission Pole formation
                        </Link>
                      </li>

                      <li>
                        <Link to="/Teams">Equipes </Link>
                      </li>

                      <li>
                        <Link to="/Formation">Formation</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Pôle Valorisation & TTO</a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/MisionPvalorisation">
                          Mission Pole Valorisation
                        </Link>
                      </li>
                      <li>
                        <Link to="/Teams">Equipes </Link>
                      </li>

                      {/* <li>
                        <Link to="/Rendezvous">Rendez-Vous</Link>
                      </li> */}
                    </ul>
                  </li>

                  <li>
                    <a href="">Pole de transverse</a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/MisionPtransverse">
                          Mission Pole transverse
                        </Link>
                      </li>
                      <li>
                        <Link to="/Teams">Equipes</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <!----- Techno Mobile Menu Area -----> */}
      <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu">
          <nav className="techno_menu">
            <ul className="nav_scroll">
              <li>
                <a href="#home">Accueil</a>
                <ul class="sub-menu">
                  <li>
                    <Link to="/Motdedirecteur">Mot de Directeur</Link>
                  </li>
                  <li>
                    <Link to="/Teams">Teams</Link>
                  </li>
                  <li>
                    <Link to="/Partenaire">Partenaire</Link>
                  </li>

                  <li>
                    <Link to="/Rayonnement">Rayonnement</Link>
                  </li>
                  <li>
                    <Link to="/Visite">Visites Extérne</Link>
                  </li>

                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#company.html">Pole Incubation</a>
                <ul class="sub-menu">
                  <li>
                    <Link to="/Mision">Mission Pole incubation</Link>
                  </li>
                  <li>
                    <Link to="/Teams">Equipes </Link>
                  </li>
                  <li>
                    <Link to="/Formulaire">Demande d'ncubation</Link>
                  </li>

                  <li>
                    <Link to="/Evenement">Evenement</Link>
                  </li>
                </ul>
              </li>

              <a href="#company.html"> Pole Formation</a>
              <ul class="sub-menu">
                <li>
                  <Link to="/MisionPformation">Mission Pole formation</Link>
                </li>

                <li>
                  <Link to="/Teams">Equipes </Link>
                </li>

                <li>
                  <Link to="/Formation">Formation</Link>
                </li>
              </ul>

              <li>
                <a href="formulaire.html">Pole Valorisation</a>
                <ul class="sub-menu">
                  <li>
                    <Link to="/MisionPvalorisation">
                      Mission Pole Valorisation
                    </Link>
                  </li>
                  <li>
                    <Link to="/Teams">Equipes </Link>
                  </li>
                  {/* <li>
                    <Link to="/Rendezvous">Rendez-Vous</Link>
                  </li> */}
                </ul>
              </li>

              <li>
                <a href="">Pole Services transverses</a>
                <li>
                  <Link to="/MisionPtransverse">Mission Pole transverse</Link>
                </li>
                <li>
                  <Link to="/Teams">Equipes</Link>
                </li>
                <ul class="sub-menu"></ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* *************************** */}

      <div class="breatcome_area d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breatcome_title">
                <div class="breatcome_title_inner pb-2">
                  <h2>Prenez Votre Rendez-Vous</h2>
                </div>
                <div class="breatcome_content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact_address_area pt-80 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-55">
                <div class="section_sub_title uppercase mb-3">
                  <h6>Prenez Rendez_vous </h6>
                </div>
                <div class="section_main_title">
                  <h1>Nous sommes à votre services</h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_contact_address text_center mb-30">
                <div class="contact_address_icon pb-3">
                  <i class="fa fa-map-o"></i>
                </div>
                <div class="contact_address_title pb-2">
                  <h4>Enter Your Address</h4>
                </div>
                <div class="contact_address_text">
                  <p>54/1 New sorini Asut, Melbord Austria.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_contact_address text_center mb-30">
                <div class="contact_address_icon pb-3">
                  <i class="fa fa-clock-o"></i>
                </div>
                <div class="contact_address_title pb-2">
                  <h4>Opening Hours</h4>
                </div>
                <div class="contact_address_text">
                  <p>lundi- vendredi: 8:00am - 19:00pm</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_contact_address text_center mb-30">
                <div class="contact_address_icon pb-3">
                  <i class="fa fa-volume-control-phone"></i>
                </div>
                <div class="contact_address_title pb-2">
                  <h4>Contact Directly</h4>
                </div>
                <div class="contact_address_text">
                  <p>demo@example.com, 54786547521</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main_contact_area pt-80 bg_color2 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-55">
                <div class="section_sub_title uppercase mb-3">
                  <h6>Rendez-vous</h6>
                </div>
                <div class="section_main_title">
                  <h1></h1>
                  <h1></h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div class="contact_from">
                <form
                  id="contact_form"
                  action="https://html.dreamitsolution.net/techno/mail.php"
                  method="POST"
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input type="text" name="nom" placeholder="Nom" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          type="texte"
                          name=" Prenom"
                          placeholder="Prénom"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          type="text"
                          name="numero"
                          placeholder="Numero de téléphone"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          type="text"
                          name="nom de la sociation"
                          placeholder="Nom de la sociation"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="quote_btn text_center">
                        <button class="btn" type="submit">
                          Validée
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p class="form-message"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="google_map_area">
          <div class="row-fluid">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="google_map_area">
                <iframe
                  class="map"
                  src="https://snazzymaps.com/embed/65241"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer_middle_area footer_bg_shape bg_color4 pt-250 pb-100">
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
      </div>
    </div>
  );
}
