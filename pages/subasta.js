import Layout from "../components/Layout";
import Banner from "../components/Home/Banner/Banner";
import SliderSubasta from "../components/Subasta/SliderSubasta/SliderSubasta";
import TabSubasta from "../components/Subasta/TabSubasta/TabSubasta";
import Dudas from "../components/ui/Dudas/Dudas";

export default function SubastaPage() {
  return (
    <>
      <Layout
        lang="es"
        title="Subasta"
        description="AuctionsClick"
        subasta="active"
      >
        <Banner
          bg="/images/bg-aviso.png"
          style={{ backgroundColor: '#ED954A' }}
          titleOrange="TÍTULO DE"
          titleBlack="LA SUBASTA"
          src="/images/location.png"
          text="Calle número, piso y portal x, código postal, Ciudad, País."
        />
        <SliderSubasta />
        <TabSubasta />
        <Dudas />
      </Layout>
    </>
  );
}
