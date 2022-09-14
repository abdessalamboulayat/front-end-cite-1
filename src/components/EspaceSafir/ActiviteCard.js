import axios from "axios"; 
import { useEffect, useState } from "react";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from "@mui/material";
import Dialog from "./Dialog";

const ActiviteCard = (props) => {
  
  const [image, setImage] = useState();
  const [dialog, setDialog] = useState({
    message: '',
    isLoading: false,
    idActivite: ''
  });
  const jwt = localStorage.getItem("tokenSafir");
  useEffect(()=>{
    axios.get(`http://localhost:8035/api/activiteSafir/image/${props.activite.image}`)
    .then((res)=>setImage(res.data));
  },[]);

  function handleDialog(id){
    setDialog({
      message: 'Voulez-vous vraiment supprimer cet activité?',
      isLoading: true,
      idActivite: id
    });
  }
  const deleteActivite = (choose)=>{
    if(choose){
      axios.delete(`http://localhost:8035/api/safir/deleteActivite/${dialog.idActivite}`,
      {
        headers:{
          'Authorization': 'Bearer '+jwt
        }
      }).then((res)=>{
        if(res.status===200){
          setDialog({
            message:'',
            isLoading: false,
            idActivite: ''
          });
          window.location.href='/activites';
        }
      }).catch((error)=>window.location.href='/login');
    }
    else{
      setDialog({
        message:'',
        isLoading: false,
        idActivite: ''
      });
    }
  }

 function statu(statu){
      if(statu== 'refuser'){
        return <span style={{color:"red"}}>Statu: <RadioButtonUncheckedRoundedIcon fontSize="small"/> refusé</span>
      }
      else if(statu=='valider'){
        return <span style={{color:"green"}}>Statu: <RadioButtonUncheckedRoundedIcon fontSize="small"/> accepté</span>
      }
      else{
        return (<span style={{color:"blue"}}>Statu: <RadioButtonUncheckedRoundedIcon fontSize="small"/> En attente</span>)
      }
    }
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="single_blog text_center mb-4">
        <div class="single_blog_thumb">
          <a href="#blog-details.html">
            <img
              width="380"
              height="400"
              // src={"assets/images/mission1.png"}
              src={image}
              alt=""
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
        <div class="single_blog_content pl-4 pr-4">
          <div class="techno_blog_meta shado_bg">
            <span class="meta-date pl-3">{props.activite.dateActiviteSafir} | {statu(props.activite.statu)}</span>
          </div>
          <div class="blog_page_title pb-1 pt-3">
            <h6>
                {props.activite.titre}
            </h6>
          </div>
          <div class="blog_description">
                <p style={{textAlign:'justify'}}>
                    {props.activite.resume} 
                </p>
                <IconButton onClick={()=>window.location.href=`/modifierActiviter/${props.activite.id}`}>
                    <EditRoundedIcon fontSize="large" style={{padding:'5px', color: '#2271f0', backgroundColor:'#e1e5eb', borderRadius:'50%'}}/>
                </IconButton>
                <IconButton onClick={()=>handleDialog(props.activite.id)}>
                    <DeleteRoundedIcon fontSize="large" style={{padding:'5px', color: '#ff031c', backgroundColor:'#e1e5eb', borderRadius:'50%'}}/>
                </IconButton>
          </div>
        </div>
      </div>
        {dialog.isLoading && <Dialog message={dialog.message} onDialog={deleteActivite}/>}
    </div>
  );
};
export default ActiviteCard;
