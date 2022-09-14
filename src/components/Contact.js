import React, { components } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

export default function Contact() {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setemail] = useState("");
  const [numero, setnumero] = useState("");
  const [message, setmessage] = useState("");

  const getFormulaire = () => {
    const Formulaire = {
      nom: nom,
      prenom: prenom,
      email: email,
      numero: numero,
      message: message,
    };
  };
  const submit = async (e) => {
    //construction dobjet json
    const formData = {
      nom: nom,
      prenom: prenom,
      email: email,
      numero: numero,
      message: message,
    };
    console.log(formData);
    axios
      .post(`http://localhost:8035/api/v1/contact/`, formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {/* <!--==================================================-->
	<!----- End	Techno Header Top Menu Area Css ----->
	<!--===================================================-->

	<!--==================================================-->
	<!----- Start Techno Main Menu Area ----->
	<!--==================================================--> */}

      {/* <!--==================================================-->
	<!----- End	Techno Header Top Menu Area Css ----->
	<!--===================================================-->

	<!--==================================================-->
	<!----- Start Techno Main Menu Area ----->
	<!--==================================================--> */}
      <Navbar />      
      <Header />
<HeaderMobile/>
 
      <div class="contact_address_area pt-80 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-55">
                <div class="section_sub_title uppercase mb-3">
                  <h6>Contactez-nous </h6>
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
                  <h4>Adresse</h4>
                </div>
                <div class="contact_address_text">
                  <p>Avenue Abdelkrim Khattabi B.P. 511 Marrakech Maroc.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_contact_address text_center mb-30">
                <div class="contact_address_icon pb-3">
                  <i class="fa fa-clock-o"></i>
                </div>
                <div class="contact_address_title pb-2">
                  <h4>Horaires d'ouvertures</h4>
                </div>
                <div class="contact_address_text">
                  <p>lundi- vendredi: 8:00am - 19:00pm</p>
                  <br></br>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_contact_address text_center mb-30">
                <div class="contact_address_icon pb-3">
                  <i class="fa fa-volume-control-phone"></i>
                </div>
                <div class="contact_address_title pb-2">
                  <h4>Contact Direct</h4>
                </div>
                <div class="contact_address_text">
                  <p>
                    {" "}
                    citeinnovation.marrakech@gmail.com<br></br>+ (212)
                    05.24.35.12.50
                  </p>
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
                  <h6>Contactez-nous</h6>
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
                <form id="contact_form">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setnom(event.target.value);
                            console.log(nom);
                          }}
                          value={nom}
                          type="text"
                          name="nom"
                          placeholder="Nom"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setprenom(event.target.value);
                            console.log(prenom);
                          }}
                          value={prenom}
                          type="text"
                          name="prenom"
                          placeholder="Prenom"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setnumero(event.target.value);
                            console.log(numero);
                          }}
                          value={numero}
                          type="text"
                          name="Numero"
                          placeholder="Numéro de téléphone"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setemail(event.target.value);
                            console.log(email);
                          }}
                          value={email}
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form_box mb-30">
                        <textarea
                          onChange={(event) => {
                            setmessage(event.target.value);
                            console.log(message);
                          }}
                          value={message}
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div class="quote_btn text_center">
                        <button class="btn" type="submit" onClick={submit}>
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
      <Footer />
    </div>
  );
}
