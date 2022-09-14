import { Button, Divider } from '@mui/material';
import React, { useState,useEffect } from 'react';
import LeftBar from '../Component/LeftBar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './form.css';

function UpdateActiviteSafir(){
    const id = useParams();
    const idActivite = id.id;
    const [titre, setTitre] = useState();
    const [date, setDate] = useState(null);
    const [resume, setResume] = useState();
    const [description, setDescription] = useState();
    const jwt = localStorage.getItem("tokenSafir");

    useEffect(()=>{
        axios.get(`http://localhost:8035/api/activiteSafir/getActiviteById/${id.id}`)
        .then((res)=>{
        setTitre(res.data.titre);
        setResume(res.data.resume);
        setDescription(res.data.text);
        const dateValue = res.data.dateActiviteSafir.replace(/-/g, "/");
        setDate((prev)=>dateValue);
        })
    },[]);

    function submit(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append("titre", titre);
        formData.append("resume", resume);
        formData.append("text", description);
        formData.append("dateActiviteSafir", date);
        fetch(`http://localhost:8035/api/safir/updateActivite/${idActivite}`,{
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Authorization': 'Bearer '+jwt,
            },
            body: formData,
        })
        .then((res)=>window.location.href="/activites")
        .catch((error)=>console.log(error));
    }
    return(
        <div>
            <div >
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-1' style={{position: 'fixed', height:'100%', zIndex:'1',top:'0',left:'0', overflowX:'hidden', padding:'0'}}>
                        <LeftBar />
                    </div>
                    <div className='col-xl-10' style={{marginLeft:'17%'}}>
                        <div className='row'>
                            <h4 style={{color: 'gray'}} className='col-xl-9'>MODIFIER UNE ACTIVITÉS</h4>
                        </div>
                    <Divider />
                    <div className="formUpdate">
                        <div className="col-xl-8 col-md-8 col-sm-8 mx-auto">
                        <div className="box_form_activite contact_from mt-1 shadow p-3 mb-5 bg-white rounded" >
                            <form id="contact_form" onSubmit={submit} className="p-2">
                            <div class="row" >
                                <div class="col-lg-7">
                                <div class="form_box1">
                                    <input
                                    type="text"
                                    name="Titre"
                                    placeholder="Titre de l'activité"
                                    // value={(e)=>e.target.value}
                                    defaultValue={titre}
                                    onChange={(e)=>setTitre(e.target.value)}
                                    />
                                </div>
                                </div>
                                <div class="col-lg-5">
                                <div class="form_box1">
                                    <input
                                    type="text"
                                    name="date"
                                    placeholder="2022-09-09"
                                    
                                    defaultValue={date}
                                    onChange={(e)=>{
                                        const dateValue = e.target.value.replace(/-/g, "/");
                                        setDate((prev)=>dateValue);
                                    }}
                                    //value={date}
                                    />
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <div class="form_box1">
                                    <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Résumé"
                                    onChange={(e)=>setResume(e.target.value)}
                                    defaultValue={resume}
                                    ></textarea>
                                </div>
                                </div>
                                <div class="col-lg-12">
                                <div class="form_box1">
                                    <textarea
                                    name="message"
                                    id="message"
                                    cols="20"
                                    rows="8"
                                    placeholder="Description"
                                    onChange={(e)=>setDescription(e.target.value)}
                                    defaultValue={description}
                                    ></textarea>
                                </div>
                                </div>
                            </div>
                            
                            <div class="quote_btn text_center">
                            <button class="btn" type="" >
                                Modifier
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
export default UpdateActiviteSafir;