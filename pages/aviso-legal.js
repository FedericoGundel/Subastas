import Layout from "../components/Layout";
import Banner from "../components/Home/Banner/Banner";
import Caracteristicas from "../components/Aviso-legal/Caracteristicas/Caracteristicas";
import Dudas from "../components/ui/Dudas/Dudas";

export default function AvisoLegal() {
  return (
    <>
      <Layout
        lang="es"
        title="Aviso Legal"
        description="AuctionsClick"
        home="active"
      >
        <Banner
          bg="/images/bg-aviso.png"
          style={{ backgroundColor: `none` }}
          titleOrange="AVISO"
          titleBlack="LEGAL"
          text=""
          src=""
        />
        <Caracteristicas />
        <Dudas />
      </Layout>
    </>
  );
}
