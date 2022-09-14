import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default function HeaderMobile () {
    return ( 
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
                    <Link to="/Saphir"> Saphir</Link>
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
     );
}

 ;