import axios from "axios";
import React, { components } from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

// import { List,Datagrid,TextField,EmailField} from "react-admin";

export default function Formulaire() {
  //use states ( utiliser l'etat ... donc les use state sont responsables de recuperer les valeurs des variables selon letat ( onclick , onchange....))
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [genre, setgenre] = useState("");
  const [email, setemail] = useState("");
  const [adresssepostal, setadressepostal] = useState("");
  const [nationalite, setnationalite] = useState("");
  const [ncin, setncin] = useState("");
  const [numerodetelephone, setnumerodetelephone] = useState("");
  const [datedenaissance, setdatedenaissance] = useState("");
  const [ideeprojet, setideeprojet] = useState("");
  const [secteurprojet, setsecteurproje] = useState("");
  const [nombreanneeexperience, setnombreanneeexperience] = useState("");

  const submit = async (e) => {
    // e.preventDefault()
    //construction dobjet json
    // if (email === ){

    const formData = {
      nom: nom,
      prenom: prenom,
      genre: genre,
      email: email,
      adressse: adresssepostal,
      nationalite: nationalite,
      ncin: ncin,
      numerodetelephone: numerodetelephone,
      datedenaissance: datedenaissance,
      ideedeprojet: ideeprojet,
      secteuredeprojet: secteurprojet,
      anneexperience: nombreanneeexperience,
    };

    console.log(formData);
    axios
      .post(`http://localhost:8035/api/v1/formulaire/`, formData)
      .then((res) => {
        if (res.data === 1) {
          // vider les cases
          setnom("");
          setprenom("");
          setgenre("");
          setemail("");
          setadressepostal("");
          setnationalite("");
          setncin("");
          setnumerodetelephone("");
          setdatedenaissance("");
          setideeprojet("");
          setsecteurproje("");
          setnombreanneeexperience("");
        }

        // NotificationManager.success("Success message", "Title here");
        console.log("azertyuiop");
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   handleChange = (event) => {
  //   this.setState({ name: event.target.value });
  //   this.setState({ prenom: event.target.value });
  //   this.setState({ email: event.target.value });
  //   this.setState({ adresssepostal: event.target.value });
  //   this.setState({ nationalite: event.target.value });
  //   this.setState({ ncin: event.target.value });
  //   this.setState({ numerodetelephon: event.target.value });
  //   this.setState({ datedenaissance: event.target.value });
  //   this.setState({ ideeprojet: event.target.value });
  //   this.setState({ secteurprojet: event.target.value });
  //   this.setState({ nombreanneeexperience: event.target.value });
  // };

  // try{
  //   const res =axios.post(`http://localhost:8036/api/v1/formulaire/`, { Formulaire })
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })

  //

  // state = {

  //   nom:'nom',
  //    prenom:'prenom',
  //    genre:'genre',
  //   email:'email',
  //    adresssepostal:'adresssepostal',
  //    nationalite:'nationalite',
  //    ncin:'ncin',
  //    numerodetelephon:'numerodetelephone',
  //    datedenaissance:'datedenaissance',
  //    ideepopjet:'ideeprojet',
  //  secteurprojet:'secteurprojet',
  //    nombreanneeexperience:'nombreanneeexperience',
  // }

  // const formulaire = {
  //    name: this.state.name,
  //    prenom: this.state.prenom,
  //    genre: this.state.prenom,
  //    email: this.state.email,
  //    adresssepostal: this.state.adresssepostal,
  //    ationalite: this.state.ationalite,
  //    ncin: this.state.ncin,
  //    numerodetelephon: this.state.numerodetelephon,
  //    datedenaissance: this.state. datedenaissance,
  //    ideepopjet: this.state.ideepopjet,
  //    secteurprojet: this.state.secteurprojet,
  //    nombreanneeexperience: this.state.nombreanneeexperience
  //  };

  return (
    <div>
      <Navbar />
      <Header />
      <HeaderMobile />

      {/* ** */}

      <div class="main_contact_area pt-80 bg_color2 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title text_center mb-55">
                <div class="section_sub_title uppercase mb-3">
                  <h6></h6>
                </div>
                <div class="section_main_title">
                  <h1> Demande d'incubation </h1>
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
                          placeholder="Prénom"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setgenre(event.target.value);
                            console.log(genre);
                          }}
                          value={genre}
                          type="text"
                          name="genre"
                          placeholder="Genre"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setemail(event.target.value);
                          }}
                          value={email}
                          type="email"
                          name="email"
                          placeholder="  Email"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setadressepostal(event.target.value);
                            console.log(adresssepostal);
                          }}
                          value={adresssepostal}
                          type="text"
                          name="Address"
                          placeholder="Adresse Postal"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setnationalite(event.target.value);
                            console.log(nationalite);
                          }}
                          value={nationalite}
                          type="text"
                          name="Nationalité"
                          placeholder="Nationalité"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setncin(event.target.value);
                            console.log(ncin);
                          }}
                          value={ncin}
                          type="text"
                          name="NCIN"
                          placeholder="N°CIN"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setnumerodetelephone(event.target.value);
                            console.log(numerodetelephone);
                          }}
                          value={numerodetelephone}
                          type="text"
                          name="NUMERO"
                          placeholder="Numero de téléphone"
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setdatedenaissance(event.target.value);
                            console.log(datedenaissance);
                          }}
                          value={datedenaissance}
                          type="text"
                          name="date"
                          placeholder="Date de naissance"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form_box mb-30">
                        <textarea
                          onChange={(event) => {
                            setideeprojet(event.target.value);
                            console.log(ideeprojet);
                          }}
                          value={ideeprojet}
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Idée de projet"
                        ></textarea>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setsecteurproje(event.target.value);
                            console.log(secteurprojet);
                          }}
                          value={secteurprojet}
                          type="text"
                          name="Secteur"
                          placeholder="Secteur de projet"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_box mb-30">
                        <input
                          onChange={(event) => {
                            setnombreanneeexperience(event.target.value);
                            console.log(nombreanneeexperience);
                          }}
                          value={nombreanneeexperience}
                          type="number"
                          name="Nombre"
                          placeholder=" Nombre d'anneé d'expérience"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div class="quote_btn text_center">
                  <button class="btn" type="" onClick={submit}>
                    Submit
                  </button>
                </div>
                <p class="form-message"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
