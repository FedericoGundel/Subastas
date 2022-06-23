import React from "react";
import Link from "next/link";

import styles from "./Boton.module.scss";

const Boton = ({ textBtn, url }) => {
  return (
    <>
      <div className="boton text-center wow fadeInDown">
        <Link href={url}>
          <a className="btn btn-custom btn-rounded btn-orange-black btn-center-out">
            {textBtn}
          </a>
        </Link>
      </div>
    </>
  );
};

export default Boton;
