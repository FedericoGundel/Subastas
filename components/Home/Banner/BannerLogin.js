import React from "react";

import {Modal, Button, Form, Container, Row, Col} from "react-bootstrap";
import Boton from "../../ui/Boton/Boton";

import styles from "./Banner.module.scss";

const BannerLogin = ({ bg = "", children }) => {
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
          <div className="container  content-banner">
            <div className="row w-100">
              <div className="text-banner col-12 col-md-6">
                <p class="title wow fadeInLeft pb-3">¿Aún no tienes cuenta?</p>
                <p className="pb-3 wow fadeInLeft">
                Es necesario crear una nueva cuenta para:
                </p>
               <ul className="mb-4 wow fadeInLeft">
                 <li>Participar como postor en las subastas.</li>
                 <li>Acceder a información sobre las subastas en las que ha participado.</li>
                 <li>Gestionar tus datos de contacto.</li>
               </ul>
               <Boton textBtn="CREAR CUENTA" url="/registro" />
              </div>
              <div className="col-12 col-md-6">
                <div className="content-select  wow fadeIn slow">
                  <p className="title-select mb-4">
                    <strong>INICIAR SESIÓN</strong>
                  </p>
                  <Form>
                  <div className="row">
                  <div className="col-12 col-md-3">
                  <Form.Group className="mb-3" controlId="NombrePuja">
                <Form.Label>Identificación</Form.Label>
                <Form.Select>
                  <option>NIF</option>
                  <option>NIE</option>
                  <option>Pasaporte</option>
                  <option>CIF</option>
                </Form.Select>
            </Form.Group>
</div>
<div className="col-12 col-md-9">
<Form.Label>Código</Form.Label>
<Form.Control type="number" placeholder=""/>
</div>
</div>
                  
                
            <Form.Group className="mb-5" controlId="MontoPuja">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder=""/>
                <Form.Text className="text-muted">
                    
                </Form.Text>
            </Form.Group>
            

            
            
        </Form>
                  <Boton textBtn="INICIAR SESIÓN" url="/" />
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

export default BannerLogin;
