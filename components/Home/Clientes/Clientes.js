import React from "react";
import Cards_clientes from "./Cards_clientes";

const Clientes = () => {
  return (
    <>
      <div className="section-clientes mt-4">
        <div className="triangulo"></div>
        <div className="container">
          <p className="title-clientes wow fadeInDown">
            DINOS QUIÉN ERES Y TE DIREMOS <span>EN QUÉ PODEMOS AYUDARTE</span>
          </p>
          <div className="row mt-5">
            <div className="col-6 col-lg-4 mb-5">
              <Cards_clientes
                src="/images/19-jude.svg"
                alt="inversion"
                text="Fondos de inversión"
              />
            </div>
            <div className="col-6 col-lg-4 mb-5">
              <Cards_clientes
                src="/images/27-jude.svg"
                alt="administrador concursal"
                text="Administrador concursal"
              />
            </div>
            <div className="col-6 col-lg-4 mb-5">
              <Cards_clientes
                src="/images/13-law.svg"
                alt="Abogado"
                text="Abogado"
              />
            </div>
            <div className="col-6 col-lg-4 mb-5 mb-md-0 mb-lg-0">
              <Cards_clientes
                src="/images/05-jude.svg"
                alt="Procurador"
                text="Procurador"
              />
            </div>
            <div className="col-6 col-lg-4 mb-5 mb-md-0 mb-lg-0">
              <Cards_clientes
                src="/images/07-law.svg"
                alt="Miembros administración justicia"
                text="Miembros administración justicia"
              />
            </div>
            <div className="col-6 col-lg-4 mb-5 mb-md-0 mb-lg-0">
              <Cards_clientes
                src="/images/09-jury.svg"
                alt="Particular"
                text="Particular"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;
