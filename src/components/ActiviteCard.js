import axios from "axios";
import { useEffect, useState } from "react";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const ActiviteCard = (props) => {
  
  const [image, setImage] = useState();
  const [listImage, setListImage] = useState();
  const images = [];
  useEffect(()=>{
    axios.get(`http://localhost:8035/api/activiteSafir/image/${props.activite.image}`)
    .then((res)=>setImage(res.data));
  },[]);

  useEffect(()=>{
    props.activite.listeImage.map((imageName)=>
    axios.get(`http://localhost:8035/api/activiteSafir/image/${imageName}`)
    .then((res)=>images.push(res.data)));
    setListImage(images);
  },[])
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
            <span class="meta-date pl-3">{props.activite.dateActiviteSafir}</span>
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
                <Link to={`/safirActiviteDetails/${props.activite.id}`}>Détails...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActiviteCard;
