import React from "react";
// import ReactDOM from "react-dom/client";
// import{Admin,Resource} from"react-admin";
// import jsonServerProvider from "ra-data-json-server";
import { Route, Routes,Navigate } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Home from "./components/Home";
import Formulaire from "./components/Formulaire";
import Contact from "./components/Contact";
import Evenement from "./components/Evenement";
import Visite from "./components/Visite";
import Formation from "./components/Formation";
import Partanaire from "./components/Partenaire";
import Rayonnement from "./components/Rayonnement";
import Teams1 from "./components/Teams1";
import Teams2 from "./components/Teams2";
import Teams3 from "./components/Teams3";
import Rendezvous from "./components/Rendezvous";
import Mision from "./components/Mision";
import MisionPvalorisation from "./components/MisionPvalorisation";
import MisionPformation from "./components/MisionPformation";
import MisionPtransverse from "./components/MisionPtransverse";
import Motdedirecteur from "./components/Motdedirecteur";
import  Saphir from "./components/Saphir"; 
import OurServices from "./components/OurServices";
import SafirActiviteDetails from "./components/SafirActiviteDetails";
import LoginSafir from "./components/LoginSafir";
import ProfileSafir from "./components/EspaceSafir/ProfileSafir";
import Activites from "./components/EspaceSafir/Activites";
import AddNewActivite from "./components/EspaceSafir/AddNewActivite";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UpdateActiviteSafir from "./components/EspaceSafir/UpdateActiviteSafir";
import Layout from "./Layout";
import PrivateRoutes from "./components/EspaceSafir/PrivateRoute";


// const dataProvider=jsonServerProvider('https://jsonPlaceholder.typicode.com');
//  import { UserList,UserEdit,UserCreate} from "./user" ;



// import "./App.css";
function App() {
  return (
    <>
 
     
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<Home />} />

        <Route path="formulaire" element={<Formulaire />} />
        <Route path="contact" element={<Contact />} />
        <Route path="evenement" element={<Evenement />} />
        <Route path="formation" element={<Formation />} />
        <Route path="Visite" element={<Visite />} />
        <Route path="rayonnement" element={<Rayonnement />} />
        <Route path="Partenaire" element={<Partanaire />} />
        {/* <Route path="Magasin" element={<Magasin />} /> */}
        <Route path="Teams1" element={<Teams1 />} />
        <Route path="Teams2" element={<Teams2 />} />
        <Route path="Teams3" element={<Teams3 />} />
        <Route path="Rendezvous" element={<Rendezvous />} />
        <Route path="Mision" element={<Mision />} />
        <Route path="MisionPvalorisation" element={<MisionPvalorisation />} />
        <Route path="MisionPformation" element={<MisionPformation />} />
        <Route path="MisionPtransverse" element={<MisionPtransverse />} />
        <Route path="Motdedirecteur" element={<Motdedirecteur />} />
        <Route path="Saphir" element={<Saphir/>} />
        <Route path="ourService" element={<OurServices />} />
        <Route path="/safirActiviteDetails/:id" element={<SafirActiviteDetails />}/>
        <Route path="/login" element={<LoginSafir />}/>
        <Route path="/" element={<PrivateRoutes />}>
            <Route path='/' element={<Navigate replace to="activites"/>} />
            <Route path="/activites" element={<Activites />} />
            <Route path="/ajouterActiviter" element={<AddNewActivite />} />
            <Route path="/modifierActiviter/:id" element={<UpdateActiviteSafir />}/>
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
