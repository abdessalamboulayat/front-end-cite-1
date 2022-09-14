import React, { components, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import EvenementCard from "./EvenementCard";
import OurServices from "./OurServices";
import TeamsHome from "./TeamsHome";
import Slider from "./Slider";
import ExperienceHome from "./ExperienceHome";
import WorkinProcess from "./WorkinProcess";




export default function Home() {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [numero, setnumero] = useState("");
  const [email, setemail] = useState("");
  const [consultation, setconsultation] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:8035/api/v1/evenement/fistThree")
      .then((res) => {
        setEvents([...res.data]);
        console.log(res.data)
      }); 
     
       
  }, []);
 

  const getConsultation = () => {
    const Consultation = {
      nom: nom,
      prenom: prenom,
      numero: numero,
      email: email,
      consultation: consultation,
    };
  };
  const freeconsultation = async (e) => {
    const formdata = {
      nom: nom,
      prenom: prenom,
      numero: numero,
      email: email,
      consultation: consultation,
    };
    console.log(formdata);

    axios
      .post(`http://localhost:8036/api/v1/Consultation/`, formdata)
      .then((res) => {
        // NotificationManager.success('votre demande est bien enregistré', 'succes');
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <Header />
      <HeaderMobile />
      <Slider/>

      {/*<!--==================================================-->
	<!----- end Techno Slider Area ----->
	<!--==================================================--> */}
      <div class="about_area pt-70 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div class="single_about_thumb mb-3">
                <div class="single_about_thumb_inner">
                  <img height="500" src="assets/images/marade.png" alt="" />
                </div>
              </div>
              <div class="single_about_shape">
                <div class="single_about_shape_thumb bounce-animate">
                  <img src="assets/images/about-circle.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div class="section_title text_left mb-40 mt-3">
                <div class="section_sub_title uppercase mb-3">
                  <h6>Qui sommes nous ? </h6>
                </div>
                <div class="section_main_title"></div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
                <div class="section_content_text pt-4">
                  <p>
                    {" "}
                    La création de cité d’innovation de l’université Cadi Ayyad,
                    s’inscrit dans le cadre de la mise en œuvre de la Stratégie
                    Nationale de l’Innovation élaborée conjointement par le
                    Ministère de l’Industrie, du Commerce de l’Investissement et
                    de l’Economie Numérique (MICIEN), le Ministère de
                    l’Education Nationale, de la Formation Professionnelle,
                    l’Enseignement Supérieur et de la Recherche Scientifique
                    ainsi que la Confédération Générale des Entreprises du Maroc
                    (CGEM).{" "}
                  </p>
                </div>
              </div>
              <div class="singel_about_left mb-30">
                <div class="singel_about_left_inner mb-3">
                  <div class="about_icon mr-4">
                    <div class="icon mt-3">
                      <i class="flaticon-padlock"></i>
                    </div>
                  </div>
                  <div class="singel-about-content">
                    <h5>Mission</h5>
                    <p>
                      La principale mission de la Cité de l'innovation est la
                      création de synergies entre les différents de R&D, les
                      incubateurs , et les pépiniéres d'entreeprise innovantes
                    </p>
                  </div>
                </div>
                <div class="singel_about_left_inner">
                  <div class="about_icon mr-4">
                    <div class="icon mt-3">
                      <i class="flaticon-code"></i>
                    </div>
                  </div>
                  <div class="singel-about-content">
                    <h5>Rôle</h5>
                    <p>
                      La Cité de l'innovation de Marrakech (CIM) jouera un rôle
                      précurseur dans le développement de la région via la
                      promotion des capacités de recherche et de développement
                      en niveau de l'Université et la mise en relation avec les
                      industriels et les entreprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <ExperienceHome/>
      <OurServices/>
      <TeamsHome/>
   
      <div className="counter_area">
        <div className="container">
          <div className="row cntr_bg_up nagative_margin pt-50 pb-45">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">+400</span>
                    <span></span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Happy Clients</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">1000</span>
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Account Number</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">10</span>
                    <span></span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Finished Projects</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">992</span>
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Win Awards</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      
<WorkinProcess/>
      <div
        class="contact_area "
        style={{ backgroundImage: "url(assets/images/bg-cnt.jpg)" }}
      >
        <div class="lineaire-simple">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section_title white text_center mb-60 mt-3">
                  <div class="section_sub_title uppercase mb-3"></div>
                  <div class="section_main_title">
                    <h1></h1>
                    <h1>Free Consultant</h1>
                  </div>
                  <div class="em_bar">
                    <div class="em_bar_bg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="quote_wrapper">
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
                            name="phone"
                            placeholder="Numero de telephone"
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
                            type="text"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="form_box mb-30">
                          <textarea
                            onChange={(event) => {
                              setconsultation(event.target.value);
                              console.log(consultation);
                            }}
                            value={consultation}
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div class="quote_btn text_center">
                          <button
                            onClick={freeconsultation}
                            class="btn"
                            type="submit"
                          >
                            Free Consultancy
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
        </div>
      </div>

   
      <div className="blog_area bg_color2 pt-85 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="section_title text_left mb-60 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Derniers evenements</h6>
                </div>
                <div className="section_main_title">
                  <h1></h1>
                  <h1>Evenement</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="section_button mt-50"></div>
            </div>
          </div>
          <div className="row">
            {events.map((evenment, index) => (
            
              <EvenementCard evenment={evenment} />
             
            ))}
            
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img
                      width="300"
                      height="200"
                      src="assets/images/pic4.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="single_blog_content pt-4 pl-4 pr-4">
                  <div className="techno_blog_meta">
                    <span className="meta-date pl-3">Octobre 10, 2021</span>
                  </div>
                  <div className="blog_page_title pb-1">
                    <h3>
                      <a href="blog-details.html">
                        Evenement CJD Maroc et CJD France
                      </a>
                    </h3>
                  </div>
                  <div className="blog_description">
                    <p>
                      L'évènement de rencontre entre les membres du centre des
                      jeunes dirigeants Maroc et les membres du centre des
                      jeunes dirigeants France était une occasion en or pour
                      échanger sur l'entreprenariat et partager les expériences
                      des chefs d'entreprises venus de divers horizons c'était
                      également une opportunité de réseautage pour les étudiants
                      universitaires
                    </p>
                  </div>
                  <div className="blog_page_button pb-4">
                    <a href="blog-details.html">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_blog mb-4">
                <div className="single_blog_thumb">
                  <a href="blog-details.html">
                    <img src="assets/images/blog3.jpg" alt="" />
                  </a>
                </div>
                <div className="single_blog_content pl-4 pt-4 pr-4">
                  <div className="techno_blog_meta">
                    <a href="#">Techno </a>
                    <span className="meta-date pl-3">Augost 5, 2020</span>
                  </div>
                  <div className="blog_page_title pb-1">
                    <h3>
                      <a href="blog-details.html">
                        The five devices you need to work anytime
                      </a>
                    </h3>
                  </div>
                  <div className="blog_description">
                    <p>
                      Lorem ipsum dolor sit amet consectet adipisie cing elit
                      sed eiusmod tempor incididunt on labore et dolore.{" "}
                    </p>
                  </div>
                  <div className="blog_page_button pb-4">
                    <a href="blog-details.html">
                      Read More <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
      {/* <!-- jquery js -->	 */}
      <script
        type="text/javascript"
        src="assets/js/vendor/jquery-3.2.1.min.js"
      ></script>
      {/* <!-- bootstrap js -->	 */}
      <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
      {/* <!-- carousel js --> */}
      <script
        type="text/javascript"
        src="assets/js/owl.carousel.min.js"
      ></script>
      {/* <!-- counterup js --> */}
      <script
        type="text/javascript"
        src="assets/js/jquery.counterup.min.js"
      ></script>
      {/* <!-- waypoints js --> */}
      <script type="text/javascript" src="assets/js/waypoints.min.js"></script>
      {/* <!-- wow js --> */}
      <script type="text/javascript" src="assets/js/wow.js"></script>
      {/* <!-- imagesloaded js --> */}
      <script
        type="text/javascript"
        src="assets/js/imagesloaded.pkgd.min.js"
      ></script>
      {/* <!-- venobox js --> */}
      <script type="text/javascript" src="venobox/venobox.js"></script>
      {/* <!-- ajax mail js --> */}
      <script type="text/javascript" src="assets/js/ajax-mail.js"></script>
      {/* <!--  testimonial js -->	 */}
      <script type="text/javascript" src="assets/js/testimonial.js"></script>
      {/* <!--  animated-text js -->	 */}
      <script type="text/javascript" src="assets/js/animated-text.js"></script>
      {/* <!-- venobox min js --> */}
      <script type="text/javascript" src="venobox/venobox.min.js"></script>
      {/* <!-- isotope js --> */}
      <script
        type="text/javascript"
        src="assets/js/isotope.pkgd.min.js"
      ></script>
      {/* <!-- jquery nivo slider pack js --> */}
      <script
        type="text/javascript"
        src="assets/js/jquery.nivo.slider.pack.js"
      ></script>
      {/* <!-- jquery meanmenu js -->	 */}
      <script
        type="text/javascript"
        src="assets/js/jquery.meanmenu.js"
      ></script>
      {/* <!-- jquery scrollup js -->	 */}
      <script
        type="text/javascript"
        src="assets/js/jquery.scrollUp.js"
      ></script>
      {/* <!-- theme js -->	 */}
      <script type="text/javascript" src="assets/js/theme.js"></script>
      {/* <!-- jquery js --> */}
    </div>
  );
} 

