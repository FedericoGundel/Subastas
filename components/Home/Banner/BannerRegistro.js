import React, { useState } from 'react';
import {Modal, Button, Form, Container, Row, Col} from "react-bootstrap";
import Boton from "../../ui/Boton/Boton";
import styles from "./Banner.module.scss";
import CountrySelect from 'react-bootstrap-country-select';
const BannerLogin = ({ bg = "", children }) => {

    const [ value, setValue ] = useState(null); 
  return (
    <>
      <section
        className="banner registro"
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
               <p className="pb-3 wow fadeInLeft border-0">
               Recuerde que durante el proceso de alta, si los datos que proporciona son incorrectos o están incompletos, su oferta puede resultar NULA.
                </p>
                <p className="pb-3 wow fadeInLeft border-0">
                Le sugerimos que cumplimente los datos adecuadamente para poder contactar con usteden el caso en que vaya a realizar ofertas y resulte ser adjudicatario de alguno de los productos subastados.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="content-select  wow fadeIn slow">
                  <p className="title-select mb-4">
                    <strong>REGISTRO</strong>
                  </p>
                  <Form>
                  <div className="row">

                  <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="password" placeholder=""/>
                <Form.Text className="text-muted">                   
                </Form.Text>
            </Form.Group>
            
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
                  
                
            <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder=""/>
                <Form.Text className="text-muted">
                    
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="NombrePuja">
                <Form.Label>Nacionalidad</Form.Label>
                <CountrySelect
      value={value}
      onChange={setValue}
    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Email</Form.Label>
                <Form.Control type="mail" placeholder=""/>
                <Form.Text className="text-muted">                   
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder=""/>
                <Form.Text className="text-muted">                   
                </Form.Text>
            </Form.Group>
            <h2>Dirección</h2>
            <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder=""/>
                <Form.Text className="text-muted">                   
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder=""/>
                <Form.Text className="text-muted">                   
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Código postal</Form.Label>
                <Form.Control type="number" placeholder=""/>
                <Form.Text className="text-muted">                   
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="ps-0" type="checkbox" label="Acepto los términos de uso y la política de privacidad." />
            </Form.Group>
       
        </Form>
                  <Boton textBtn="CREAR CUENTA" url="/" />
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
