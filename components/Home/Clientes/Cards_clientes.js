import React from "react";
import styles from "./Clientes.module.scss";

const Cards_clientes = ({ src, alt, text }) => {
  return (
    <>
      <div className="circle-clientes wow fadeIn slow">
        <img src={src} alt={alt} />
      </div>
      <p className="text-clientes wow fadeIn slow">{text}</p>
    </>
  );
};

export default Cards_clientes;
