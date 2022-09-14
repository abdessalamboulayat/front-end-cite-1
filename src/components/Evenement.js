import axios from "axios";
import React, { components, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import EvenementCard from "./EvenementCard";
import Header from "./Header";
import Navbar from "./Navbar";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";



export default function Evenement() {
  

  const [evenements, setEvenements] = useState([]);
  useEffect(function () {
    axios.get("http://localhost:8035/api/v1/evenement/").then((res) => {
      setEvenements([...res.data]);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />      
      <Header />
<HeaderMobile/>
      {/* ************************** */}

     

      <div class="blog_area pt-80 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-60 mt-3">
                <div class="section_sub_title uppercase mb-3">
                  <h3>Nos Evénements</h3>
                </div>
                <div class="section_main_title">
                  <h1></h1>
                </div>
                <div class="em_bar">
                  <div class="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            {evenements.map((evenment, index) => (
              <EvenementCard key={index} evenment={evenment} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
