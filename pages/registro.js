import Layout from "../components/Layout";
import Banner from "../components/Home/Banner/Banner";
import BannerRegistro from "../components/Home/Banner/BannerRegistro";
import ContentBanner from "../components/Home/Banner/Content-Banner";
import Novedades from "../components/Home/Novedades/Novedades";
export default function ContactoPage() {
  return (
    <>
      <Layout
        lang="es"
        title="Registro"
        description="AuctionsClick"
        contacto="active"
      >
      <BannerRegistro bg="/images/img-banner.png">
         
      </BannerRegistro>
       
      </Layout>
    </>
  );
}