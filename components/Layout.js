import React, { useEffect } from "react";
import Head from "next/head";

// Components
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = ({ children, title, home, subasta, contacto, nosotros}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.14.0-beta2/css/bootstrap-select.min.css"
          integrity="sha512-mR/b5Y7FRsKqrYZou7uysnOdCIJib/7r5QeJMFvLNHNhtye3xJp1TdJVPLtetkukFn227nKpXD9OjUc09lx97Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
        ></link>
        <title>{title}</title>
      </Head>
      <NavBar 
        home={home}
        subasta={subasta}
        contacto={contacto}
        nosotros={nosotros}
      />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
