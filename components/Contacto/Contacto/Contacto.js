import React from "react";
import styles from "./Contacto.module.scss";

const Contacto = () => {
  return (
    <>
      <div className="section-contacto">
        <div className="container">
          <div className="row content-contact">
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <div className="circle-contacto wow fadeIn">
                <img
                  className="img-fluid"
                  src="/images/contact1.png"
                  alt="email"
                />
              </div>
              <a
                className="wow fadeIn"
                className="enlaces"
                href="mailto:soporte@auctionclick.com"
              >
                soporte@auctionclick.com
              </a>
            </div>
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <div className="circle-contacto wow fadeIn">
                <img
                  className="img-fluid"
                  src="/images/contact2.png"
                  alt="phone"
                />
              </div>
              <a className="wow fadeIn" href="tel:661 911 612">
                661 911 612
              </a>
            </div>
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <div className="circle-contacto wow fadeIn">
                <img
                  className="img-fluid"
                  src="/images/contact3.png"
                  alt="ubicacion"
                />
              </div>
              <p className="wow fadeIn">
                Calle número x, Las Palmas de Gran Canaria (España)
              </p>
            </div>
          </div>
          <div className="horario mt-5">
            <img
              src="/images/horario.png"
              alt="horario"
              className="wow fadeInDown"
            />
            <p className="mt-5 wow fadeInDown">
              Horario de atención al cliente: De Lunes a Jueves de 9:00 a 14:00
              y 16:00 a 18:00. Viernes de 9:00 a 14:00 (en agosto sólo e-mail).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
