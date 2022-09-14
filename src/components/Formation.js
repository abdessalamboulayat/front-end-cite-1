import React from "react";
import {  Link } from "react-router-dom";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import axios from "axios";
import EvenementCard from "./EvenementCard";
import FormationCard from "./FormationCard";
import Footer from "./Footer";




export default function Formation() {

  const [formations, setFormations] = useState([]);
  useEffect(function () {
    // axios.get("http://localhost:8036/api/v1/formation/").then((res) => {
    //   setFormations(res.data);
    //   console.log(formations);
    // });
    axios.get("http://localhost:8035/api/v1/formation/getFormation")
    .then((response)=>{
      setFormations([...response.data]);
      console.log(response.data)});
  }, []);








  return (
    <div>
      
      <Navbar />      
      <Header />
<HeaderMobile/>


{/* ****** */}
      

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
                  <h1> formation</h1>
                  <h1></h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          {formations.map((formt, index) => (
              <FormationCard key={index} formt={formt} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
