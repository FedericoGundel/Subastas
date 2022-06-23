import React from "react";
import Slider from "react-slick";
import CardSubasta from "./Card_subasta";

const Subasta = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  var settings2 = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <div className="section-subasta">
        <div className="triangulo"></div>
        <div className="triangulo2"></div>
        <div className="container content-subasta">
          <p className="title-subasta wow fadeInDown">
            SUBASTAS <span>DESTACADAS</span>
          </p>
          <Slider {...settings} className="d-none d-md-block">
            <div>
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide1.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide2.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide3.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide1.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide2.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide3.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide1.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide2.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide3.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <CardSubasta
                    url="/images/slide4.png"
                    title="Plaza de aparcamiento"
                    text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                    url2="/"
                    text2="Acaba en"
                    text3="34 días y 03:47:36"
                    text4="9.000,00€"
                    text5="1.000.103€"
                  />
                </div>
              </div>
            </div>
          </Slider>
          <Slider {...settings2} className="d-block d-md-none">
            <div>
              <CardSubasta
                url="/images/slide1.png"
                title="Plaza de aparcamiento"
                text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                url2="/"
                text2="Acaba en"
                text3="34 días y 03:47:36"
                text4="9.000,00€"
                text5="1.000.103€"
              />
            </div>
            <div>
              <CardSubasta
                url="/images/slide1.png"
                title="Plaza de aparcamiento"
                text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                url2="/"
                text2="Acaba en"
                text3="34 días y 03:47:36"
                text4="9.000,00€"
                text5="1.000.103€"
              />
            </div>
            <div>
              <CardSubasta
                url="/images/slide1.png"
                title="Plaza de aparcamiento"
                text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                url2="/"
                text2="Acaba en"
                text3="34 días y 03:47:36"
                text4="9.000,00€"
                text5="1.000.103€"
              />
            </div>
            <div>
              <CardSubasta
                url="/images/slide1.png"
                title="Plaza de aparcamiento"
                text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                url2="/"
                text2="Acaba en"
                text3="34 días y 03:47:36"
                text4="9.000,00€"
                text5="1.000.103€"
              />
            </div>
            <div>
              <CardSubasta
                url="/images/slide1.png"
                title="Plaza de aparcamiento"
                text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                url2="/"
                text2="Acaba en"
                text3="34 días y 03:47:36"
                text4="9.000,00€"
                text5="1.000.103€"
              />
            </div>
            <div>
              <CardSubasta
                url="/images/slide1.png"
                title="Plaza de aparcamiento"
                text="Plaza de aparcamiento nº 42 calle Evaristo Arnús de Sants-Barcelona. Parte indivisa FR 5108/P42RP Barcelona 3..."
                url2="/"
                text2="Acaba en"
                text3="34 días y 03:47:36"
                text4="9.000,00€"
                text5="1.000.103€"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Subasta;
