import Layout from "../components/Layout";
import Banner from "../components/Home/Banner/Banner";
import Cards_logos from "../components/Nosotros/Logos/Cards_logos";
import AccordionItem from "../components/ui/Accordion/AccordionItem";
import Accordion from 'react-bootstrap/Accordion';
import Card from "../components/Nosotros/Card/Card";
import Novedades from "../components/Home/Novedades/Novedades";


export default function NosotrosPage() {
 
  return (
    <>
      <Layout
        lang="es"
        title="Nosotros"
        description="AuctionsClick"
        nosotros="active"
      >
        <Banner
          bg="/images/bg-aviso.png"
          style={{ backgroundColor: `none` }}
          titleOrange="AUCTIONS"
          titleBlack="CLICK"
          text="Un portal de subastas a la vanguardia"
        />
        <div className="section-logos">
        <div className="triangulo"></div>
    <div className="container">
        <div className="row mt-5">
            <div className="col-6 col-lg mb-5">
              <Cards_logos
                src="/images/nosotros/money.svg"
                alt="inversion"
                text="Accesible"
                legend="Desde cualquier lugar y a cualquier hora."
              />
            </div>
            <div className="col-6 col-lg mb-5">
              <Cards_logos
                src="/images/nosotros/legal document.svg"
                alt="administrador concursal"
                text="Democrático"
                legend="Cualquier persona contará con toda la información."
              />
            </div>
            <div className="col-6 col-lg mb-5">
              <Cards_logos
                src="/images/nosotros/copyright.svg"
                alt="Abogado"
                text="Seguro"
                legend="Mismas garantías que con una subasta judicial."
              />
            </div>
            <div className="col-6 col-lg mb-5">
              <Cards_logos
                src="/images/nosotros/computer.svg"
                alt="Abogado"
                text="Escalable"
                legend="Preparados para albergar tantos procedimientos como se precise."
              />
            </div>
            <div className="col-6 col-lg mb-5">
              <Cards_logos
                src="/images/nosotros/plan.svg"
                alt="Abogado"
                text="Ágil"
                legend="Coordinamos la comunicación entre los juzgados y las partes."
              />
            </div>
          
          </div>
    </div>
    
</div>
<div class="section-info ">
<div class="container">
    <div class="row px-4 px-sm-0">
    <div class="col-lg-6 mb-4 wow fadeInLeft">
      <Card
       src="/images/nosotros/area.svg"
       bgsrc="/images/nosotros/bg-card1.svg"
       alt=""
       text="Área personal"
       legend="Participa como postor y sigue las subastas que te interesen con nuestro sistema de alertas personalizadas. Y desde el panel multipuja controlarás, en menos tiempo y esfuerzo, todas tus subastas, en tiempo real y desde un sólo lugar."
      />
    </div>
    <div class="col-lg-6 mb-4 wow fadeInRight">
    <Card
       src="/images/nosotros/cel.svg"
       bgsrc="/images/nosotros/bg-card1.svg"
       alt=""
       text="Puja desde tu móvil"
       legend="Haz tu puja o el seguimiento de tus bienes sin problemas desde cualquier dispositivo."
      />
    </div>
    <div class="col-lg-6 mb-4 wow fadeInLeft">
      <Card
       src="/images/nosotros/easy.svg"
       bgsrc="/images/nosotros/bg-card1.svg"
       alt=""
       text="Fácil de usar"
       legend="Simplificamos y adaptamos nuestro portal para que subastar/vender tus bienes sea tan fácil como te gustaría."
      />
    </div>
    <div class="col-lg-6 mb-4 wow fadeInRight">
    <Card
       src="/images/nosotros/mails.svg"
       bgsrc="/images/nosotros/bg-card1.svg"
       alt=""
       text="Informes"
       legend="Envío automático a todas las partes interesadas una vez finalizada la subasta."
      />
    </div>
    <div class="col-lg-6 mb-4 wow fadeInLeft">
      <Card
       src="/images/nosotros/osas.svg"
       bgsrc="/images/nosotros/bg-card1.svg"
       alt=""
       text="Categorización intuitiva de los bienes"
       legend="Catalogamos y ordenamos todos tus bienes/lotes para que puedas gestionarlos de forma rápida y sencilla."
      />
    </div>
    <div class="col-lg-6 mb-4 wow fadeInRight">
    <Card
       src="/images/nosotros/pc.svg"
       bgsrc="/images/nosotros/bg-card1.svg"
       alt=""
       text="Máxima seguridad"
       legend="Puedes registrarte con Certificado Digital, lo que garantiza tu identidad en Internet.
       El sello del tiempo (Time Stamp) de la FNMT registra el momento exacto de la puja.
       Firma Digital asegura la integridad del mensaje y/o documento."
      />
    </div>
  
    
        </div>
    </div>
</div>
<Novedades />
      </Layout>
    </>
  );
}
