import Layout from "../components/Layout";
import BannerHome from "../components/Home/Banner/BannerHome";
import Subasta from "../components/Home/Subasta/Subasta";
import Clientes from "../components/Home/Clientes/Clientes";
import Novedades from "../components/Home/Novedades/Novedades";
import ContentBanner from "../components/Home/Banner/Content-Banner";

export default function Home() {
  return (
    <>
      <Layout lang="es" title="Home" description="AuctionsClick" home="active">
        <BannerHome bg="/images/img-banner.png">
          <ContentBanner />
        </BannerHome>
        <Subasta />
        <Clientes />
        <Novedades />
      </Layout>
    </>
  );
}
