import React from "react";
import styles from "./Banner.module.scss";

const Banner = ({ bg = "", titleOrange, titleBlack, text }) => {
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
            <div className="text-center">
              <h1 className="title-banner wow fadeInDown">
                {titleOrange} <span>{titleBlack}</span>
              </h1>
              <p className="text wow fadeInDown">{text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
