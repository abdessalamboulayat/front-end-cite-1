import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "./Component/ImageSlider";
import SliderImage from "./Component/SliderImage";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";

function SafirActiviteDetails(){

    const id = useParams();
    console.log(id.id);
    const [activite, setActivite] = useState({});
    const [image, setImage] = useState([]);
    const [listImage, setListImage] = useState([]);
    const images = [];

    useEffect(()=>{
        axios.get(`http://localhost:8035/api/activiteSafir/getActiviteById/${id.id}`
        )
        .then((res)=>{
            console.log('statu');
            console.log(res.status);
            console.log('activite');
            console.log(res.data);
            setActivite(res.data);
        });
    },[]);

    useEffect(()=>{
        axios.get(`http://localhost:8035/api/activiteSafir/listImages/${id.id}`)
            .then((res)=>{
                console.log('statu');
                console.log(res.status);
                console.log('date');
                console.log(res.data);
                setListImage(res.data);
            })
    },[]);
    //http://localhost:8035/api/activiteSafir/image/${imageName}
    console.log('array push1');
    console.log(images);
    return(
        
        <div>
            <Navbar />
            <Header />
            <HeaderMobile />
                <div className="activiteSafir">
                    <div className="titreActivite">
                        <h2>
                            {activite.titre} | {activite.dateActiviteSafir}
                        </h2>
                    </div>
                    <div className="descriptionActivite column">
                        <div className="col-lg-10 col-md-10 col-sm-10 mb-3">
                            <SliderImage listImages={listImage} />
                        </div>
                        <p className="col-xl-8">
                            {activite.text}
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default SafirActiviteDetails;