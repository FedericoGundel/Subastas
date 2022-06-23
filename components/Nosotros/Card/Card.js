import React from "react";
import styles from "./Card.module.scss";

const Card = ({ src, alt, text, legend, bgsrc }) => {
  return (
    <>
      <div className="card-comun wow fadeIn"style={{backgroundImage:"url("+bgsrc+")"}}>
        <div class="row">
       <div class="col-sm-6 mb-4 pb-0 pb-sm-4 mb-sm-0">
       <img src={src} alt={alt} />
       </div> 
       <div class="col-sm-6 p-4 d-flex flex-column justify-content-start align-items-center">

       <p className="card-title wow fadeIn  text-center">{text}</p>
       <p className="card-text wow fadeIn text-center">{legend}</p>
       </div>
        </div>
       
     
      </div>
     
    </>
  );
};

export default Card;
