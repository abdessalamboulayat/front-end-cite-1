import { Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import LeftBar from '../Component/LeftBar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AddNewActivite(){
    const [titre, setTitre] = useState();
    const [date, setDate] = useState("");
    const [resume, setResume] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [listImage, setListImage] = useState();
    const [error, setError] = useState();
    const jwt = localStorage.getItem("tokenSafir");

    function submit(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append("titre", titre);
        formData.append("resume", resume);
        formData.append("text", description);
        formData.append("dateActiviteSafir", date);
        formData.append("image", image);
        // formData.append("listeImage", Object.entries(listImage));

        for(let key of Object.keys(listImage)) {
            if (key !== 'length') {
              formData.append('listeImage', listImage[key]);
            }
        }
        axios.post("http://localhost:8035/api/safir/addActiviteSafir",
        formData,
        {headers:{
            'Access-Control-Allow-Origin': 'http://localhost:3006',
            'Authorization': 'Bearer '+jwt,
        }}
        )
        .then((res)=>{window.location.href="/activites"})
        .catch((error)=>setError("Error! Veuillez réssayer à nouveau"));
    }

    return(
        <div>
            <div >
                <div className='row'>
                    <div style={{position: 'fixed', height:'100%', zIndex:'1',top:'0',left:'0', overflowX:'hidden', padding:'0'}}>
                        <LeftBar />
                    </div>
                    <div className='col-xl-10' style={{marginLeft:'17%'}}>
                        <div className='row'>
                            <h4 style={{color: 'gray'}} className='col-xl-9'>AJOUTER UNE NOUVELLE ACTIVITÉS</h4>
                        </div>
                    <Divider />
                    <div class="row">
                        <div className="col-xl-8 col-md-8 col-sm-8 mx-auto">
                        <div className="box_form_activite contact_from mt-1 shadow p-3 mb-5 bg-white rounded">
                            <form id="contact_form" onSubmit={submit} className="p-2">
                                {error===null ? <p style={{color:'red'}}>{error}</p>:null}
                            <div class="row">
                                <div class="col-lg-7">
                                <div class="form_box">
                                    <input
                                    type="text"
                                    name="Titre"
                                    placeholder="Titre de l'activité"
                                    onChange={(e)=>setTitre(e.target.value)}
                                    value={titre}
                                    />
                                </div>
                                </div>
                                <div class="col-lg-5">
                                <div class="form_box">
                                    <input
                                    type="date"
                                    name="date"
                                    placeholder="Date de l'activité"
                                    /* onChange={(e)=>{setDate(e.target.value); console.log(e.target.value)}}*/
                                    onChange={(e)=>{
                                        const dateValue = e.target.value.replace(/-/g, "/");
                                        setDate((prev)=>dateValue);
                                        console.log(dateValue)
                                    }}
                                    // value={date}
                                    />
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <div class="form_box">
                                    <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Résumé"
                                    onChange={(e)=>setResume(e.target.value)}
                                    value={resume}
                                    ></textarea>
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <div class="form_box">
                                    <textarea
                                    name="message"
                                    id="message"
                                    cols="20"
                                    rows="8"
                                    placeholder="Description"
                                    onChange={(e)=>setDescription(e.target.value)}
                                    value={description}
                                    ></textarea>
                                </div>
                                </div>

                            <div>
                                <div class="form_box">
                                    <label htmlFor='btn-image'>
                                        <Button
                                            className="btn-choose"
                                            variant="outlined"
                                            component="span" 
                                            startIcon={<PhotoCamera />}
                                        >
                                            image principale
                                        </Button>
                                    </label>
                                    <span>{image!=null?image.name:null}</span>
                                    <input
                                    id='btn-image'
                                    type="file"
                                    name="Secteur"
                                    placeholder="Secteur de projet"
                                    style={{display:'none'}}
                                    onChange={(e)=>setImage(e.target.files[0])}
                                    />
                                </div>
                                </div>
                                <div>
                                    <div class="form_box">
                                        <label htmlFor='btn-listImage'>
                                            <Button
                                                className="btn-choose"
                                                variant="outlined"
                                                component="span" 
                                                startIcon={<PhotoCamera />}
                                            >
                                                autres images
                                            </Button>
                                        </label>
                                        <input
                                        id='btn-listImage'
                                        type="file"
                                        name="Secteur"
                                        placeholder="Secteur de projet"
                                        multiple
                                        style={{display:'none'}}
                                        onChange={(e)=>setListImage(e.target.files)}
                                        />
                                        <span>{listImage!=null?listImage.length+' images':null}</span>
                                </div>
                                </div>
                            </div>
                            
                            <div class="quote_btn text_center">
                            <button class="btn" type="" >
                                Submit
                            </button>
                            </div>
                            </form>
                            <p class="form-message"></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default AddNewActivite;