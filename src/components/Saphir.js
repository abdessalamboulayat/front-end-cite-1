import axios from "axios";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ActiviteCard from "./ActiviteCard";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";


export default function Saphir() {

  const [activites, setActivites] = useState([]);
  useEffect(()=>{
      axios.get("http://localhost:8035/api/activiteSafir/getAllActivities"
          // headers:{
          //     'Access-Control-Allow-Origin': 'http://localhost:3006',
          //     'Authorization': 'Bearer '+jwt,
          // }
      )
      .then((res)=>{setActivites(res.data); console.log(res.data)});
  },[]);
  return (
    <div>
       <Navbar />      
      <Header />
<HeaderMobile/>

      <div class="breatcome_area2 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breatcome_title">
                <div class="breatcome_title_inner pb-2 active order_style2_now">
                  <Link to="/login">Accéder à votre espace Saphir</Link>
                </div>
                <div class="breatcome_content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="how_it_work pt-50 pb-65">
        <div class="container">
          <div class="row">
            {/* <!-- Start Section Tile --> */}
            <div class="col-lg-12">
              <div class="section_title text_center mb-50 mt-3">
                <div class="section_main_title">
                  <h1>Programme Saphir </h1>
                </div>
                <div class="section_sub_title uppercase mb-3"></div>

                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
                <h3> Mission et objectif</h3>
              </div>
              <div class="case-study-details-full-content">
                <p>
                  Ce programme est inspiré d'une approche basée sur l'édcation
                  par les paires, qui est une méthode reconnue pour avoir un
                  impact sur les jeunes.En effet, ces derniers sont plus à meme
                  de modifier leur comportement si l'information qu'ils
                  reçoivent leur est communiquée par des personnes qui leur
                  ressembent ou qui appartiennent à leur communité
                </p>
                <p>
                  <h6>
                    {" "}
                    Le Saphir ,étant une interface entre la Cité d'innovation de
                    Marrakech et les étudiants,aura pour mission de:
                  </h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="single_blog text_center mb-4">
            <div class="single_blog_thumb">
              {/* <a href="#blog-details.html">
                <img
                  width="380"
                  height="400"
                  src="assets/images/mission1.png"
                  alt=""
                />
              </a> */}
              <p className="single_blog_thumb_paragraph">
                1. Promouvoir les services de la Cité de l'innovation 
                de Marrakech dans son établissement
              </p>
            </div>
            <div class="single_blog_content pl-4 pr-4">
              <div class="blog_page_title pb-1 pt-3">
                <h3>
                  <a href="blog-details.html"> </a>
                </h3>
              </div>
              <div class="blog_description">
                <p>
                  Le Saphir contribuera à la conception et la mise en oeuvre des
                  actions de communications en faveur de la CIM. Par conséquent
                  ,il aidera les étudiant(es) porteur(ses)des projet à se
                  familiariseravecles services de la Cité,permettant ainsi d
                  'enfaire la promotion{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="single_blog text_center mb-4">
            <div class="single_blog_thumb">
              {/* <a href="#blog-details.html">
                <img
                  width="380"
                  height="400"
                  src="assets/images/mobiliser.png"
                  alt=""
                />
              </a> */}
              <p className="single_blog_thumb_paragraph">
                2. Se mobiliser dans les activités professionnelles de la cité d'innovation de Marrakech
              </p>
            </div>
            <div class="single_blog_content pl-4 pr-4">
              <div class="blog_description">
                <p>
                  le Saphir particeperaà l'organisation et à l'animation des
                  évenements en rapport avec la cité et asurera la présentation
                  de celle-ci dans les événements organisés par les différent
                  établissements de l'université. De cete maniére, il
                  contribuera à renforcer la présence de la cité dans
                  l'écosystéme de l'unniversité. Dans ce cadre ,le Saphir pourra
                  prendre les initiatives{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="single_blog text_center mb-4">
            <div class="single_blog_thumb">
              {/* <a href="#blog-details.html">
                <img
                  width="380"
                  height="400"
                  src="assets/images/mission3.png"
                  alt=""
                />
              </a> */}
              <p className="single_blog_thumb_paragraph">
                3. Sourcing des futurs porteur(ses) de projets et d'idées innovantes au sein de son établissement
              </p>
            </div>
            <div class="single_blog_content pl-4 pr-4">
              {/* <div class="blog_page_title pb-1 pt-3">
                <h3>
                  <a href="blog-details.html">
                    la cérémonie de la remise de prix
                  </a>
                </h3>
              </div> */}
              <div class="blog_description">
                <p>
                  {" "}
                  Le Saphir devra participer au precessus de sourcing des
                  porteur(ses) de projets plus les étudiant(es) qui ont la fibr
                  d'enreprendre faisant ainsi de son établissement{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="how_it_work pt-50 pb-65">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-60 mt-3">
                <div class="section_sub_title uppercase mb-3">
                  <h6></h6>
                </div>
                <div class="section_main_title">
                  <h1>
                    Processus de travail <span> Saphir</span>
                  </h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="single_it_work_content_list pb-5">
                    <span>1</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>Profile rechercé</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1">
                    <p>
                      Vous etes étudiant(e)et/ou porteur(se)de
                      projet,passionné(e) par l'entreprenariatet le volontariat?
                      <br></br>vous avez les compétences suivante?
                      <br></br>exellentes aptitudes à communiquée
                      <br></br>Capable de prendre des initiatives
                      <br></br>avoir l'intéret pour l'entreprenariat
                      <br></br>pret à s'engager et à s'investir pour une période
                      d'une année
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="single_it_work_content_list pb-5">
                    <span>2</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>Compagnement de recrutement</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1">
                    <p>
                      {" "}
                      l'organise une session de rec de la Cité de l'innovation
                      de Marrakech organise une session de recrutement anueele
                      des Saphirs.Idéalement , les 15 établissementsde
                      l'Université Cadi Ayyad disposeront de leurs propres
                      antennes,afin d,assurer une Meilleurereprésentation . Une
                      campagne de communication sera lancée dans les
                      établissement ciblés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="single_it_work mb-4">
                <div class="single_it_work_content pl-2 pr-2">
                  <div class="single_it_work_content_list three pb-5">
                    <span>3</span>
                  </div>
                  <div class="single_work_content_title pb-2">
                    <h4>Entretien</h4>
                  </div>
                  <div class="single_it_work_content_text pt-1">
                    <p>
                      Aprés étude des candidatures, une premiére sélection se
                      fera sur base du Cv. Les personnes sélectionnées seront
                      enuite convoquées pour des entretiens individuels ou en
                      groupe,selon la décision de la direction. Ces démarches
                      nous permettront de découvrir les aptitudes des candidats
                      à prendre la parole, à débattre sur des sujets et d? avoir
                      un avant-gout sur leurs potenties et leurs atouts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="section_title text_center mb-60 mt-3">
                <div class="section_sub_title uppercase mb-3">
                  <h6></h6>
                </div>
                <div class="section_main_title">
                  <h4>
                    <spam>NB</spam>: Les Saphirs selectionne beneficieront de
                    plusieurs avantages lies a leur Appartenance,à part entiere
                    à la Cité de l'Innovation de Marrakech
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-60 mt-3">
                <div class="section_sub_title uppercase mb-3">
                  <h6></h6>
                </div>
                <div class="section_main_title">
                  <h1>
                    Activités des <span> Saphirs</span>
                  </h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          
        <div class="row">
              {/* <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single_blog text_center mb-4">
                  <div class="single_blog_thumb">
                    { <a href="#blog-details.html">
                      <img
                        width="380"
                        height="400"
                        src="assets/images/mission3.png"
                        alt=""
                      />
                    </a> }
                    <p className="single_blog_thumb_paragraph">
                      3. Sourcing des futurs porteur(ses) de projets et d'idées innovantes au sein de son établissement
                    </p>
                  </div>
                  <div class="single_blog_content pl-4 pr-4">
                    {/* <div class="blog_page_title pb-1 pt-3">
                      <h3>
                        <a href="blog-details.html">
                          la cérémonie de la remise de prix
                        </a>
                      </h3>
                    </div> }
                    <div class="blog_description">
                      <p>
                        {" "}
                        Le Saphir devra participer au precessus de sourcing des
                        porteur(ses) de projets plus les étudiant(es) qui ont la fibr
                        d'enreprendre faisant ainsi de son établissement{" "}
                      </p>
                      <Link to="#">Détails</Link>
                    </div>
                  </div>
                </div>
              </div> */}
              {
                activites.map((activite)=>
                  activite.statu=='valider'?<ActiviteCard activite={activite} />:null
                )
              }
          </div>
      </div>
      <Footer />
    </div>
  );
}
