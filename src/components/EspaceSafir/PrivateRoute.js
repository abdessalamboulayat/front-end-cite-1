import axios from 'axios';
import { React ,useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';


    const useAuth=()=>{
        const user = localStorage.getItem("tokenSafir");
        
        if(user!=null){
            return true;
        }
        else{
            return false;
        }
    }
    const  PrivateRoutes=()=> {
      const auth = useAuth();
    return (auth===true ? <Outlet /> : <Navigate to="/login"/>);
}

export default PrivateRoutes;