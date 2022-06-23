import React from "react";
import Boton from "../../ui/Boton/Boton";
import Form from "react-bootstrap/Form";
import style from "./Novedades.module.scss";

const Novedades = () => {
  return (
    <>
      <div className="novedades">
        <div className="triangulo"></div>
        <img
          className="casa-gris"
          src="/images/casa-gris.png"
          alt="casa gris"
        />
        <div className="container">
          <p className="text-novedades wow fadeInUp" data-wow-offset="20">
            ¡SÉ EL PRIMERO EN RECIBIR <span>TODAS NUESTRAS SUBASTAS!</span>
          </p>
          <div className="formulario-nove wow fadeIn slow">
            <form className="form-novedades wow fadeIn">
              <div className="form-nombre">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <Form.Select aria-label="Default select example">
                <option className="title-select">Tipo de subasta:</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <div className="form-email">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>
              <div className="form-btn mt-4 mt-xl-0">
                <Boton textBtn="¡Quiero ser el primero!" url="/" />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  <a className="ms-2">Acepto los términos y condiciones</a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Novedades;
