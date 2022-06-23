import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Boton from "../ui/Boton/Boton";
// import $ from 'jquery';

// Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./NavBar.module.scss";

export default function NavBar({ home, subasta, contacto, nosotros}) {
  const [hover, setHover] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [font, setFont] = useState(false);
  const [user, setUser] = useState(false);
  const [menu, setMenu] = useState('close');

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeColorFont = () => {
    if (window.scrollY >= 50) {
      setFont(true);
    } else {
      setFont(false);
    }
  };

  const changeIcon = () => {
    if (window.scrollY >= 50) {
      setUser(true);
    } else {
      setUser(false);
    }
  };
  
  const menuClick = () => {
    if (menu == 'open') {
      setMenu('close')
      console.log("MenuClose")
    } else {
      setMenu('open');
      console.log("MenuOpen")
    }
    document.querySelector('.navbar').classList.toggle('open')
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    changeColorFont();
    window.addEventListener("scroll", changeColorFont);
    changeIcon();
    window.addEventListener("scroll", changeIcon);
  });

  return (
    <>
      <Navbar
        id="menu"
        expand="lg"
        className={navbar ? "active" : ""} 
      >
        <div className="container-fluid pe-lg-5 px-xl-5">
          <Navbar.Brand href="/">
            <img
              className="logo-nav"
              src="/images/logo-menu.png"
              alt="logo-nav"
            />
          </Navbar.Brand>
          <button
            id="btn-menu-mobile"
            className="navbar-toggler custom-toggler"
            onClick={menuClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler custom-toggler"
          /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                href="/"
                className={`${font ? "nav_link_scroll" : "nav_link"} ${home}`}
              >
                <span>INICIO</span>
              </Nav.Link>
              <Nav.Link
                href="/subasta"
                className={`${font ? "nav_link_scroll" : "nav_link"} ${subasta}`}
              >
                <span>SUBASTAS</span>
              </Nav.Link>
              <Nav.Link
                href="/nosotros"
                className={`${font ? "nav_link_scroll" : "nav_link"} ${nosotros}`}
              >
                <span>ACERCA DE NOSOTROS</span>
              </Nav.Link>
              <Nav.Link
                href="/contacto"
                className={`${font ? "nav_link_scroll" : "nav_link"} ${contacto}`}
              >
                <span>CONTÁCTANOS</span>
              </Nav.Link>
              <Nav.Link
                
                className="nav_link img_user"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img
                  src="/images/user.png"
                  alt="user"
                  className={user ? "d-none" : "d-block"}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                />
                <img
                  src="/images/user_white.png"
                  alt="user"
                  className={user ? "d-block" : "d-none"}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                />
                <div
                  className="popup_login"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {hover && (
                    <div>
                      <div className="d_grid">
                        <Boton textBtn="Iniciar sesión" url="/login" />
                        <Boton textBtn="Registrarse" url="/registro" />
                      </div>
                    </div>
                  )}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div id="basic-navbar-nav-mobile" className={`${menu}`}>
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                href="/"
                className={font ? "nav_link_scroll" : "nav_link"}
              >
                <span>INICIO</span>
              </Nav.Link>
              <Nav.Link
                href="/"
                className={font ? "nav_link_scroll" : "nav_link"}
              >
                <span>SUBASTAS</span>
              </Nav.Link>
              <Nav.Link
                href="/"
                className={font ? "nav_link_scroll" : "nav_link"}
              >
                <span>ACERCA DE NOSOTROS</span>
              </Nav.Link>
              <Nav.Link
                href="/"
                className={font ? "nav_link_scroll" : "nav_link"}
              >
                <span>CONTÁCTANOS</span>
              </Nav.Link>
              <Nav.Link
                className="nav_link img_user"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img
                  src="/images/user_white.png"
                  alt="user"
                  className="d-block"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                />
                <div
                  className="popup_login "
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {hover && (
                    <div className="d_grid">
                      <Boton textBtn="Iniciar sesión" url="/" />
                      <Boton textBtn="Registrarse" url="/" />
                    </div>
                  )}
                </div>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>
    </>
  );
}
