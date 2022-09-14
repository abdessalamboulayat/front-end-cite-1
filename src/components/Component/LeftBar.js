import React, { useEffect, useState } from "react";
import {Container, Divider, Typography} from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Link } from "react-router-dom";
import axios from "axios";


function LeftBar(){
    const [open, setOpen] = React.useState(true);
    const jwt = localStorage.getItem("tokenSafir");
    const [user, setUser] = useState();
    useEffect(()=>{
    axios.get("http://localhost:8035/api/safir/getCurrentUser",{
            headers:{
                'Authorization': 'Bearer '+jwt,
            }
        }).then((res)=>{setUser(res.data);}) },[])

    const handleClick = () => {
        setOpen(!open);
    };
    function handleClose(){
        localStorage.removeItem("token");
        window.location.href='/login'
    }
    return user!=null &&(
        <Container className="container1">
            <div style={{minHeight:'90vh'}}>
                <div >
                    <Link to={"/activites"} className="item">
                        <AccountCircleRoundedIcon className="iconHome"/>
                        <Typography className="text">{user.nomSafir} <br/>{user.prenomSafir}</Typography>
                    </Link>
                </div>
                <Divider style={{backgroundColor:'white', border: '2px solid white'}}/>
                <div >
                    <Link to={"/activites"} className="item">
                        <EventNoteRoundedIcon className="iconHome"/>
                        <Typography className="text">Mes Activités</Typography>
                    </Link>
                </div>
                <div >
                    <Link to={"/ajouterActiviter"} className="item">
                        <AddBoxRoundedIcon className="iconHome"/>
                        <Typography className="text">Nouvelle Activité</Typography>
                    </Link>
                </div>
            </div>
            <div>
                <Link to={"#"} className="item logout" onClick={handleClose}>
                    <ExitToAppRoundedIcon className="iconHome"/>
                    <Typography className="text">Déconnexion</Typography>
                </Link>
            </div>
        </Container>
    )
}
export default LeftBar;