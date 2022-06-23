import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import styles from "./TabSubasta.module.scss";

const TabSubasta = () => {
  
  return (
    <> <div className="pb-5" id="condiciones">
          
   
      <Tabs
        defaultActiveKey="caracteristicas"
        id="tabSubasta"
        className="tabSubasta container-fluid mb-3"
      >
        <div className="triangleDownRight"></div>
       
        <Tab
          eventKey="caracteristicas"
          title="CARACTERISTÍCAS"
          className="container"
        >
          <p className="text-orange">Local comercial</p>
          <p className="text-bold">
            AVISO IMPORTANTE: Véanse las condiciones particulares de la subasta
            en relación al periodo excepcional de devolución de los depósitos
            efectuados para la participación en esta subasta. El plazo para
            devolución de los depósitos comenzará a partir del primer día hábil
            del mes de SEPTIEMBRE.
          </p>
          <p>
            Local comercial situado en planta baja y en el entresuelo del
            inmueble, s/n de gobierno, sito en término de Alcantarilla, pago del
            Potrox, Carretera N-340, Camino del Pliego y calle A en proyecto, el
            cual se levanta sobre un solar constitutivo de la parcela señalada
            con el número ocho en el proyecto de reparcelación de la unidad
            deactuación 3.10 'El Potrox", en Alcantarilla. señalado con elnúmero
            2 a la quese accede a través de la zona común que bordea el
            edificio.
          </p>
          <p>
            Tiene una superficie construida de 545,17m² de los que 375,44m²
            están en la planta baja y 169,73 están en el entresuelo.
          </p>
          <p>
            Nota: La imagen mostrada es orientativa y no tiene carácter
            contractual. En ocasiones, la documentación de que disponemos no es
            tan minuciosa como para localizar con garantías cada uno de los
            bienes, en tal caso, se muestra un plano general de la zona,
            quepuede no coincidir con el bien subastado.
          </p>
        </Tab>
        <Tab
          eventKey="gastos"
          title="GASTOS, IMPUESTOS Y CARGAS"
          className="container"
        >
          <p className="text-orange">Local comercial</p>
          <p className="text-bold">AVISO IMPORTANTE</p>
          <p>Texto 1.</p>
          <p>Text 2.</p>
          <p>Texto 3.</p>
        </Tab>
        <Tab
          eventKey="documentacion"
          title="DOCUMENTACIÓN"
          className="container"
        >
          <p className="text-orange">Local comercial</p>
          <p className="text-bold">
            AVISO IMPORTANTE: Véanse las condiciones particulares de la subasta
            en relación al periodo excepcional de devolución de los depósitos
            efectuados para la participación en esta subasta. El plazo para
            devolución de los depósitos comenzará a partir del primer día hábil
            del mes de SEPTIEMBRE.
          </p>
          <p>
            Local comercial situado en planta baja y en el entresuelo del
            inmueble, s/n de gobierno, sito en término de Alcantarilla, pago del
            Potrox, Carretera N-340, Camino del Pliego y calle A en proyecto, el
            cual se levanta sobre un solar constitutivo de la parcela señalada
            con el número ocho en el proyecto de reparcelación de la unidad
            deactuación 3.10 'El Potrox", en Alcantarilla. señalado con elnúmero
            2 a la quese accede a través de la zona común que bordea el
            edificio.
          </p>
          <p>
            Tiene una superficie construida de 545,17m² de los que 375,44m²
            están en la planta baja y 169,73 están en el entresuelo.
          </p>
          <p>
            Nota: La imagen mostrada es orientativa y no tiene carácter
            contractual. En ocasiones, la documentación de que disponemos no es
            tan minuciosa como para localizar con garantías cada uno de los
            bienes, en tal caso, se muestra un plano general de la zona,
            quepuede no coincidir con el bien subastado.
          </p>
        </Tab>
      
        <Tab eventKey="condiciones" title="CONDICIONES" className="container">
          
            
          <p className="text-orange">Local comercial</p>
          <p  className="text-bold">
            AVISO IMPORTANTE: Véanse las condiciones particulares de la subasta
            en relación al periodo excepcional de devolución de los depósitos
            efectuados para la participación en esta subasta. El plazo para
            devolución de los depósitos comenzará a partir del primer día hábil
            del mes de SEPTIEMBRE.
          </p>
          <p>
            Local comercial situado en planta baja y en el entresuelo del
            inmueble, s/n de gobierno, sito en término de Alcantarilla, pago del
            Potrox, Carretera N-340, Camino del Pliego y calle A en proyecto, el
            cual se levanta sobre un solar constitutivo de la parcela señalada
            con el número ocho en el proyecto de reparcelación de la unidad
            deactuación 3.10 'El Potrox", en Alcantarilla. señalado con elnúmero
            2 a la quese accede a través de la zona común que bordea el
            edificio.
          </p>
          <p>
            Tiene una superficie construida de 545,17m² de los que 375,44m²
            están en la planta baja y 169,73 están en el entresuelo.
          </p>
          <p>
            Nota: La imagen mostrada es orientativa y no tiene carácter
            contractual. En ocasiones, la documentación de que disponemos no es
            tan minuciosa como para localizar con garantías cada uno de los
            bienes, en tal caso, se muestra un plano general de la zona,
            quepuede no coincidir con el bien subastado.
          </p>
          
        </Tab>
       
        
      </Tabs>
      </div>
    </>
  );
};

export default TabSubasta;
