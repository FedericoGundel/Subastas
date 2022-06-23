import Layout from "../components/Layout";
import Banner from "../components/Home/Banner/Banner";
import AccordionItem from "../components/ui/Accordion/AccordionItem";
import Dudas from "../components/ui/Dudas/Dudas";
import Accordion from 'react-bootstrap/Accordion';

export default function FAQs() {
  return (
    <>
      <Layout
        lang="es"
        title="Preguntas Frecuentes"
        description="AuctionsClick"
        home="active"
      >
        <Banner
          bg="/images/bg-aviso.png"
          style={{ backgroundColor: `none` }}
          titleOrange="PREGUNTAS"
          titleBlack="FRECUENTES"
          text="Lorem ipsum dolor sit amet, consectetuer."
          src=""
        />
        <div className="description-faqs container">
          <div className="row py-5">
            <div className="col-12 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?
              </p>
            </div>
          </div>
        </div>
        <Accordion id="accordionFAQ" className="accordion">
          <div className="py-5 wow fadeInLeft slow">
            <div className="container">
              <div className="title">
                <p className="text mb-4">Clases de AuctionsClick</p>
                <hr/>
              </div>
              <div className="content-faqs">
                <AccordionItem
                  nroItem="01"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="02"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="03"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="04"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-claro py-5 wow fadeInLeft slow">
            <div className="container">
              <div className="title">
                <p className="text mb-4">Alquiler de Material</p>
                <hr/>
              </div>
              <div className="content-faqs">
                <AccordionItem
                  nroItem="05"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="06"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="07"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="08"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
              </div>
            </div>
          </div>

          <div className="py-5 wow fadeInLeft slow">
            <div className="container">
              <div className="title">
                <p className="text mb-4">Texto</p>
                <hr/>
              </div>
              <div className="content-faqs">
                <AccordionItem
                  nroItem="09"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="10"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="11"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
                <AccordionItem
                  nroItem="12"
                  textButton="¿Lorem Ipsum?"
                  textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae necessitatibus animi, provident maiores asperiores ea, cum quod deserunt perspiciatis, sit illum quo corrupti illo dolorum? Praesentium culpa amet, adipisci officia nobis libero dolorem provident consequatur voluptates reprehenderit accusantium dignissimos saepe placeat numquam! Placeat voluptatibus mollitia ullam voluptates vitae eos?"
                />
              </div>
            </div>
          </div>
        </Accordion>
        <Dudas />
      </Layout>
    </>
  );
}
