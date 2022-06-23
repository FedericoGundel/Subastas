import React, { Component } from "react";
import use, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Slider from "react-slick";
import styles from "./SliderSubasta.module.scss";
import Count from "./Countdown.js";
import {Modal, Button, Form, Container, Row, Col} from "react-bootstrap";
import Boton from "../../ui/Boton/Boton";
export default class SliderSubasta extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nav1: this.props.slider1,
      nav2: this.props.slider2,
      isOpen:false
    };
    this.handleModal = this.handleModal.bind(this); 
    
    
  }
  
 

  handleModal(){   
    this.setState((prevState) => ({ 
      isOpen: !prevState.isOpen
   }))
   }
  

   
  
  scrollToAnchor = (anchorName) => {
    
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        
       
        if(anchorElement) { 
          let anchorBtn = document.getElementById("tabSubasta-tab-condiciones");
          anchorBtn.click();
          anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
         
         }
        
        
    }
  }
  render() {
   
    return (
      <>
        <div className="section-slider-subasta">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-7 wow fadeInLeft">
                <div className="content-codigo">
                  <span className="codigo">#89548795RS</span>
                  <br className="d-xl-none" />
                  <img
                    className="ms-xl-3 "
                    src="/images/inicio.png"
                    alt="inicio"
                  />
                  <span>Inicio: 11/03/2021 12:00:32</span>
                  <br className="d-xl-none" />
                  <img className="ms-xl-3 " src="/images/fin.png" alt="fin" />
                  <span>Fin: 11/03/2021 12:00:32</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 text-end wow fadeInRight">
                <Badge className="badge-subasta px-3 me-3" pill>
                  <img className="fav-button me-2" src="/images/fav.svg" alt="corazon"/>
                  Añadir a favoritos
                </Badge>
                <Badge className="badge-subasta px-3" pill>
                  <img className="me-2" src="/images/star.png" alt="estrella" />
                  Last daily note
                </Badge>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-7 px-4 px-sm-5">
                <Slider
                  className="sliderFull"
                  asNavFor={this.state.nav2}
                  ref={(slider) => (this.slider1 = slider)}
                >
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide1.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide2.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide3.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide1.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide2.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide3.png"
                      alt="slides"
                    />
                  </div>
                </Slider>
                <Slider
                  className="sliderNav"
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide1.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide2.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide3.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide1.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide2.png"
                      alt="slides"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="w-100"
                      src="/images/slide3.png"
                      alt="slides"
                    />
                  </div>
                </Slider>
              </div>
              <div className="col-12 col-md-5 pt-3 pt-md-0">
                <a
                  className="btn btn-rounded btn-pujar wow fadeInRight"
                  onClick={this.handleModal}
                >
                  <div className="logo-puja">
                    <img src="/images/36.png" alt="Pujar" />
                  </div>
                  <a>PUJAR</a>
                </a>
                <div className="row">
                  <div className="col-6 content-box-puja left">
                    <div className="box-puja wow fadeIn slow">
                      <div className="text-box-puja">
                        <p>Mejor postura</p>
                        <p>120.000&euro;</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 content-box-puja right">
                    <div className="box-puja wow fadeIn slow">
                      <div className="text-box-puja">
                        <p>Acaba en</p>
                        <Count/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 content-box-puja left">
                    <div className="box-puja wow fadeIn slow">
                      <div className="text-box-puja">
                        <p>Puja mínima</p>
                        <p>1000&euro;</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 content-box-puja right">
                    <div className="box-puja wow fadeIn slow">
                      <div className="text-box-puja">
                        <p>Tramos entre pujas</p>
                        <p>190.000&euro;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 content-deposito">
                    <div className="box-deposito wow fadeIn slow">
                      <div className="text-box-deposito">
                        <p>Déposito: 7.328,22&euro;</p>
                        <a id="ver-instrucciones" onClick={()=>this.scrollToAnchor('condiciones')}>Ver instrucciones</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <Modal id="modal-puja" centered show={this.state.isOpen} onHide={this.handleModal} >
        <Modal.Header closeButton>
          <Modal.Title>Realizar puja</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="MontoPuja">
                <Form.Label>Monto a pujar</Form.Label>
                <Form.Control type="number" placeholder="Ingresa el monto total de la puja"/>
                <Form.Text className="text-muted">
                    (La diferencia con la puja mas alta debe superar al tramo entre pujas establecido)
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="ps-0" type="checkbox" label="Tiene reserva de puja" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="NombrePuja">
                <Form.Label>Pujar a nombre de:</Form.Label>
                <Form.Select>
                  <option>%Nombre%</option>
                  <option>%Nombre%</option>
                  <option>%Nombre%</option>
                </Form.Select>
            </Form.Group>
            
        </Form>
        <div className="row">
    <div className="col-12 text-center">
        <Boton textBtn="Confirmar" url="/" />
    </div>
</div>
        </Modal.Body>
        
      </Modal>
      </>
    );
  }
}
