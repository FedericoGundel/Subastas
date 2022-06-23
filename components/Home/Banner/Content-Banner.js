import React from "react";
import Boton from "../../ui/Boton/Boton";

import Form from "react-bootstrap/Form";
import styles from "./Banner.module.scss";

const ContentBanner = () => {
  return (
    <>
      {/* <div className="content-select-col d-block d-md-none wow fadeIn slow">
        <p className="title-select mb-4">¿EMPEZAMOS?</p>
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
            <Form.Label className="mt-2">Tipo de porcesos</Form.Label>
            <Form.Select className="mb-4" aria-label="Default select example">
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        <Boton textBtn="BUSCAS" url="/" />
      </div> */}
      <div className="container icons mt-5 wow fadeInLeft">
        <div className="me-0 me-md-4 d-flex align-items-center">
          <div className="content-icon me-2">
            <img src="/images/1.png" alt="tiempo" />
          </div>
          <span>A PUNTO DE FINALIZAR</span>
        </div>
        <div className="me-0 me-md-4 d-flex align-items-center">
          <div className="content-icon me-2">
            <img src="/images/2.png" alt="proximamente" />
          </div>
          <span>PROXIMAMENTE</span>
        </div>
        <div className="me-0 me-md-4 d-flex align-items-center">
          <div className="content-icon me-2">
            <img src="/images/3.png" alt="novedades" />
          </div>
          <span>NOVEDADES</span>
        </div>
        {/* <ul>
          <li className="d-flex align-items-center">
            <div className="content-icon me-2">
              <img src="/images/1.png" alt="tiempo" />
            </div>
            <span>A PUNTO DE FINALIZAR</span>
          </li>
          <li className="d-flex align-items-center my-1 ms-sm-4">
            <div className="content-icon me-2">
              <img src="/images/2.png" alt="proximamente" />
            </div>
            <span>PROXIMAMENTE</span>
          </li>
          <li className="d-flex align-items-center my-1 ms-sm-4">
            <div className="content-icon me-2">
              <img src="/images/3.png" alt="novedades" />
            </div>
            <span>NOVEDADES</span>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default ContentBanner;
