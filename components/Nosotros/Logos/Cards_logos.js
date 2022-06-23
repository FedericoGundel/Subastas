import React from "react";
import styles from "./Cards_logos.module.scss";

const Cards_clientes = ({ src, alt, text, legend }) => {
  return (
    <>
      <div className="circle-logos wow fadeIn slow">
        <img src={src} alt={alt} />
      </div>
      <p className="text-logos wow fadeIn slow">{text}</p>
      <p className="legend-logos wow fadeIn slow">{legend}</p>
    </>
  );
};

export default Cards_clientes;
