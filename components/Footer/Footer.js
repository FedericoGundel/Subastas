import React from "react";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "./Footer.module.scss";

const Footer = () => {
  const title = (
    <span>
      <img src="/images/idiomas.png" alt="idiomas" className="img-fluid me-2" />
      Idiomas
      <img
        className="arrow-down ms-3"
        src="/images/angle-down.png"
        alt="Down"
      ></img>
    </span>
  );

  const handleClick = (e) => {
    let botonIdiomas = document.querySelector("#dropdown-basic-button");

    if (document.querySelector("#dropdown-basic-button.prueba")) {
      botonIdiomas.classList.add("prueba");
    } else {
      botonIdiomas.classList.remove("prueba");
    }
  };

  const handleClickFooter = (e) => {
    let botonIdiomas = document.querySelector("#dropdown-basic-button");

    if (document.querySelector("#dropdown-basic-button.prueba")) {
      botonIdiomas.classList.remove("prueba");
    } else {
      botonIdiomas.classList.add("prueba");
    }
  };

  return (
    <>
      <div className="section-footer1" onClick={handleClickFooter}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 wow fadeInLeft slow">
              <img
                src="/images/logo-footer.png"
                alt="logo auctions click"
                className="img-fluid logo-footer"
              />
              <p className="mt-3">
                AuctionClick es una plataforma desarrollada y diseñada para
                sacar el máximo rendimiento a las subastas de la zona
                seleccionada.
              </p>
              <p className="text-footer mt-2">
                Calle "x" Número "x" Portal "x" Código Postal "x".
              </p>
              <p className="text-footer">Las Palmas de Gran Canaria</p>
              <div className="mt-4">
                <div id="redes">
                  <a className="me-2" href="">
                    <div className="red fb">
                      <img src="/images/fb.png" alt="facebook" />
                    </div>
                  </a>
                  <a className="me-2" href="">
                    <div className="red ig">
                      <img src="/images/ig.png" alt="instagram" />
                    </div>
                  </a>
                  <a className="me-2" href="">
                    <div className="red yt">
                      <img src="/images/yt.png" alt="youtube" />
                    </div>
                  </a>
                  <a className="me-2" href="">
                    <div className="red ta">
                      <img src="/images/tp.png" alt="trapavisor" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mt-3 mt-md-0 wow fadeInLeft slow">
              <h5>Servicios destacados</h5>
              <ul>
                <li>
                  <Link href="/">
                    <a className="items-menu">Subastas activas</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="items-menu">Subastas por finalizar</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mt-3 mt-md-0 wow fadeInLeft slow">
              <h5>Otras secciones</h5>
              <ul>
                <li>
                  <Link href="/contacto">
                    <a className="items-menu">Contáctanos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="items-menu">Nosotros</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mt-3 mt-md-0 wow fadeInLeft slow">
              <h5>Legal</h5>
              <ul>
                <li>
                  <Link href="/aviso-legal">
                    <a className="items-menu">Aviso legal</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="items-menu">Políticas de cookies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="items-menu">Preguntas frecuentes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="items-menu">Mapa del sitio</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <DropdownButton
                id="dropdown-basic-button"
                title={title}
                onClick={handleClick}
              >
                <Dropdown.Item href="#/action-1">Español</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Inglés</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Portugues</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
      <div className="section-footer2">
        <div className="text-center">
          <small>
            <p className="mb-0 wow fadeIn">
              &copy; 2021 AuctionsClick. Todos los derechos reservados
            </p>
          </small>
        </div>
      </div>
      <a href="#" className="whatsapp" target="_blank">
        <img
          src="/images/logo-msn.png"
          alt="logo-whatsapp"
          className="img-fluid whatsapp-icon"
        />
      </a>
    </>
  );
};

export default Footer;
