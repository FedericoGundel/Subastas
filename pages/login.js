import Layout from "../components/Layout";
import Banner from "../components/Home/Banner/Banner";
import BannerLogin from "../components/Home/Banner/BannerLogin";
import ContentBanner from "../components/Home/Banner/Content-Banner";
import Novedades from "../components/Home/Novedades/Novedades";
export default function Login() {
  return (
    <>
      <Layout
        lang="es"
        title="Iniciar sesión"
        description="AuctionsClick"
        contacto="active"
      >
        <BannerLogin bg="/images/img-banner.png">
         
        </BannerLogin>
        
        <Novedades />
       
      </Layout>
    </>
  );
}