import React from "react";
import Boton from "../../ui/Boton/Boton";

import Form from "react-bootstrap/Form";
import styles from "./Banner.module.scss";

const BannerHome = ({ bg = "", children }) => {
  return (
    <>
      <section
        className="banner"
        style={{
          backgroundColor: `#ED954A`,
        }}
      >
        <div className="fondo-logo">
          <img src="/images/fondo-logo.png" alt="fondo" />
        </div>
        <div
          className="img-banner"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 100%), url(${bg})`,
          }}
        >
          <div className="container content-banner">
            <div className="row">
              <div className="text-banner col-12 col-md-5">
                <p className="wow fadeInLeft">
                  La primera herramienta tecnológica al servicio del ciudadano y
                  de la Administración de Justicia que tiene como finalidad
                  agilizar los procesos judiciales.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="content-select wow fadeIn slow">
                  <p className="title-select mb-4">
                    <strong>¿EMPEZAMOS?</strong>
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <Form.Label>Búsqueda libre</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <Form.Label className="mt-2">Tipo de bien</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className="col-6">
                      <Form.Label>Provincias</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <Form.Label className="mt-2">Tipo de procesos</Form.Label>
                      <Form.Select
                        className="mb-4"
                        aria-label="Default select example"
                      >
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                  <Boton textBtn="BUSCAS" url="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default BannerHome;
