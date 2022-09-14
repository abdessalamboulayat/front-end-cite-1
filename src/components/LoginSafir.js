import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginSafir(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState(null);
    
    const formData = {
        email: email,
        password : password
    }
    function submit(e){
        e.preventDefault();
        console.log("clicked");
        axios.post("http://localhost:8035/api/auth/login", formData)
        .then((res)=>{
            window.location.href = '/activites'; 
            localStorage.setItem("tokenSafir", res.data)
        }).catch((error)=>setMessage("Incorrect! Veuillez réassayer à nouveau"));
    }
    return(
        <div>
            <div className='container'>
                <div className='row login_form col-xl-12'>
                    <div className='box_login_form  col-xl-5 col-md-6 col-sm-8'>
                        <div class="section_sub_title uppercase mb-3">
                            <h6>Connectez-vous</h6>
                        </div>
                        {message!=null?<div className='alert alert-danger role="alert"'>{message}</div>:null}
                        <form onSubmit={submit}>
                            <div className='form_box mb-30 form_box_login'>
                                <input type={"text "} placeholder="Email" 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    value={email}
                                    required/>
                            </div>
                            <div className='form_box mb-30'>
                                <input type={"password"} placeholder="Password" 
                                    onChange={(e)=>setPassword(e.target.value)}
                                    value={password}
                                    required/>
                            </div>
                            <div className='quote_btn text_center'>
                                <button class="btn" type="submit">
                                    Connexion
                                </button>
                            </div>
                            <Link to="/Saphir">Retour</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginSafir;