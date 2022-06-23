import React from "react";
import Boton from "../Boton/Boton";
import styles from "./Dudas.module.scss";

const Dudas = () => {
  return (
    <>
      <div className="section-dudas">
        <img
          className="casa-gris"
          src="/images/casa-gris.png"
          alt="casa gris"
        />
        <div className="container">
          <div className="content-dudas wow fadeIn slow">
            <p className="title-dudas wow fadeInDown">¿TIENES DUDAS?</p>
            <p className="text-dudas mb-3 wow fadeInDown">
              <strong>RESPONDEMOS DE </strong>FORMA RÁPIDA Y PERSONALIZADA.
            </p>
            <Boton textBtn="¡Contáctanos!" url="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dudas;
