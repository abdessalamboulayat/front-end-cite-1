import axios from "axios";
import { useEffect, useState } from "react";

const EvenementCard = ({ evenment }) => {
  const [img, setImg] = useState();
  const fetchImage = async () => {
    const { data } = await axios.get(
      // "http://localhost:8036/api/v1/evenement/images/" + evenment.image
      `http://localhost:8035/api/v1/evenement/images/${evenment.image}`
    );
    setImg(data);
  };
  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="single_blog text_center mb-4">
        <div class="single_blog_thumb">
          <a href="#blog-details.html">
            <img
              width="380"
              height="400"
              src={img}
              alt=""
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
        <div class="single_blog_content pl-4 pr-4">
          <div class="techno_blog_meta shado_bg">
            <a href="#"> </a>
            <span class="meta-date pl-3">
              {/* 11-11-2021 */}
              {evenment.date}
            </span>
          </div>
          <div class="blog_page_title pb-1 pt-3">
            <h3>
              <a href="blog-details.html">
                {/* Conférence : Blended learning{" "} */}
                {evenment.titre}
              </a>
            </h3>
          </div>
          <div class="blog_description">
            <p>
              {" "}
              {/* La cité de l'innovation de Marrakech a organisé une
                      conférence sur la thématique Blended learning : apports et
                      limites: RH, PROCESSUS, TECHNOLOGIES animée par M. ROUDAB
                      Noureddine, M. ADNANI Youssef et M. BENTAHER Younes. Des
                      professeurs, des doyens, des chefs d'entreprise et des
                      étudiants ont tous répondu présents à notre invitation Les
                      conférences ont également partagé avec les présents les
                      bonnes pratiques pour réussir la mission de digitalisation
                      de l'université */}
              {evenment.texte}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EvenementCard;
