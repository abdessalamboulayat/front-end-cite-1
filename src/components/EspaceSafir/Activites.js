import { Divider, IconButton } from '@mui/material';
import React from 'react';
import LeftBar from '../Component/LeftBar';
import ActiviteCard from './ActiviteCard';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Activites(){

    const [activites, setActivites] = useState([]);
    const jwt = localStorage.getItem("tokenSafir");
    useEffect(()=>{
        axios.get("http://localhost:8035/api/safir/getMyActivities/",{
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:3006',
                'Authorization': 'Bearer '+jwt,
            }
	}
        )
        .then((res)=>{setActivites(res.data); console.log(res.data)});
    },[]);

    return(
        <div>
            <div >
                <div className='row'>
                    <div className='' style={{position: 'fixed', height:'100%', zIndex:'1',top:'0',left:'0', overflowX:'hidden', padding:'0'}}>
                        <LeftBar />
                    </div>
                    <div className='col-lg-10 col-md-10 col-sm-10' style={{marginLeft:'17%'}}>
                        <div className='row'>
                            <h4 style={{color: 'gray', padding:'10px 5px 0px 20px'}} >MES ACTIVITÉS</h4>
                        </div>
                    <Divider />
                    <div className='row'>
                        {activites.map((activite)=>
                            <ActiviteCard activite={activite}/>
                        )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Activites;