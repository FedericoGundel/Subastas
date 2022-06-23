import Layout from "../components/Layout";
import Banner from "../components/Home/Banner/Banner";
import FormContacto from "../components/Contacto/FormContacto/FormContacto";
import Contacto from "../components/Contacto/Contacto/Contacto";


export default function ContactoPage() {
  return (
    <>
      <Layout
        lang="es"
        title="Contacto"
        description="AuctionsClick"
        contacto="active"
      >
        <Banner
          bg="/images/bg-aviso.png"
          style={{ backgroundColor: `none` }}
          titleOrange="CONTACTO"
          titleBlack=""
          text="Lorem ipsum dolor sit amet, consectetuer"
        />
        <FormContacto />
        <Contacto />
       
      </Layout>
    </>
  );
}
