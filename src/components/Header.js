import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default function Header () {
    return (

  <div
        id="sticky-header"
        className="techno_nav_manu d-md-none d-lg-block d-sm-none d-none"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo mt-1">
                <a className="logo_img" >
                  <img
                    width="250"
                    height="100"
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
                  <Link to="/">Accueil</Link>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/Motdedirecteur">Mot de Directeur</Link>
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
                    <a>Pôle Incubation </a>

                    <ul class="sub-menu">
                      <li>
                        <Link to="/Mision">Mission </Link>
                      </li>
                      <li>
                        <Link to="/Teams1">Equipes </Link>
                      </li>
                      <li>
                        <Link to="/Saphir"> Saphir</Link>
                      </li>
                      <li>
                        <Link to="/Formulaire">Demande Incubation</Link>
                      </li>

                      <li>
                        <Link to="/Evenement">Evènement</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a> Pôle Formation</a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/MisionPformation">
                          Mission 
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
                    <a >Pôle Valorisation & TTO</a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/MisionPvalorisation">
                          Mission 
                        </Link>
                      </li>
                      <li>
                        <Link to="/Teams2">Equipes </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a >Pole Services transverses</a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="/MisionPtransverse">
                          Mission 
                        </Link>
                      </li>
                      <li>
                        <Link to="/Teams3">Equipes</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      );
}

 ;