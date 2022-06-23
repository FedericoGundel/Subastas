import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Boton from "../../ui/Boton/Boton";

import styles from "./FormContacto.module.scss";

const FormContacto = () => {
  const [selected, setSelected] = useState("");
  const showSelectedLabel = ("Show Selected Label", true);
  const selectedSize = ("Selected Size", 14);
  const showOptionLabel = ("Show Option Label", false);
  const showSecondarySelectedLabel = ("Show Secondary Selected Label", true);
  const showSecondaryOptionLabel = ("Show Secondary Option Label", true);
  const placeholder = ("Placeholder", "Cod. País");
  const searchable = ("Searchable", false);
  const customLabels =
    ("Custom Labels",
    {
      ES: { primary: "ES", secondary: "+34" },
      AR: { primary: "AR", secondary: "+54" },
      BO: { primary: "BO", secondary: "+591" },
      BR: { primary: "BR", secondary: "+55" },
      CL: { primary: "CL", secondary: "+56" },
      CO: { primary: "CO", secondary: "+57" },
      CR: { primary: "CR", secondary: "+506" },
      CU: { primary: "CU", secondary: "+53" },
      EC: { primary: "EC", secondary: "+593" },
      SV: { primary: "SV", secondary: "+503" },
      GT: { primary: "GT", secondary: "+502" },
      HT: { primary: "HT", secondary: "+509" },
      HN: { primary: "HN", secondary: "+504" },
      JM: { primary: "JM", secondary: "+1" },
      MX: { primary: "MX", secondary: "+52" },
      NI: { primary: "NI", secondary: "+505" },
      PY: { primary: "PY", secondary: "+595" },
      PA: { primary: "PA", secondary: "+507" },
      PR: { primary: "PR", secondary: "+1" },
      DO: { primary: "DO", secondary: "+1" },
      SR: { primary: "SR", secondary: "+597" },
      UY: { primary: "UY", secondary: "+598" },
      VE: { primary: "VE", secondary: "+58" },
      BB: { primary: "BB", secondary: "+1268" },
      BS: { primary: "BS", secondary: "+1" },
      BZ: { primary: "BZ", secondary: "+501" },
      CA: { primary: "CA", secondary: "+1" },
      DM: { primary: "DM", secondary: "+1" },
      US: { primary: "US", secondary: "+1" },
      GT: { primary: "GT", secondary: "+502" },
      GY: { primary: "GY", secondary: "+592" },
      PE: { primary: "PE", secondary: "+51" },
      VC: { primary: "VC", secondary: "+1" },
      LC: { primary: "LC", secondary: "+1" },
      TT: { primary: "TT", secondary: "+1" },
      UY: { primary: "UY", secondary: "+598" },
      AL: { primary: "AL", secondary: "+355" },
      DE: { primary: "DE", secondary: "+49" },
      AD: { primary: "AD", secondary: "+376" },
      AM: { primary: "AM", secondary: "+374" },
      AT: { primary: "AT", secondary: "+43" },
      AZ: { primary: "AZ", secondary: "+994" },
      BE: { primary: "BE", secondary: "+32" },
      BY: { primary: "BY", secondary: "+375" },
      BA: { primary: "BA", secondary: "+387" },
      BG: { primary: "BG", secondary: "+359" },
      CY: { primary: "CY", secondary: "+357" },
      DK: { primary: "DK", secondary: "+45" },
      SK: { primary: "SK", secondary: "+421" },
      SI: { primary: "SI", secondary: "+386" },
      EE: { primary: "EE", secondary: "+372" },
      FI: { primary: "FI", secondary: "+358" },
      FR: { primary: "FR", secondary: "+33" },
      GE: { primary: "GE", secondary: "+995" },
      GR: { primary: "GR", secondary: "+30" },
      HU: { primary: "HU", secondary: "+36" },
      IE: { primary: "IE", secondary: "+353" },
      IC: { primary: "IC", secondary: "+354" },
      IT: { primary: "IT", secondary: "+39" },
      KZ: { primary: "KZ", secondary: "+7" },
      LV: { primary: "LV", secondary: "+371" },
      LI: { primary: "LI", secondary: "+423" },
      LT: { primary: "LT", secondary: "+370" },
      LU: { primary: "LU", secondary: "+352" },
      MK: { primary: "MK", secondary: "+389" },
      MT: { primary: "MT", secondary: "+356" },
      MD: { primary: "MD", secondary: "+373" },
      MC: { primary: "MC", secondary: "+377" },
      ME: { primary: "ME", secondary: "+382" },
      NO: { primary: "NO", secondary: "+47" },
      NL: { primary: "NL", secondary: "+31" },
      PL: { primary: "PL", secondary: "+48" },
      PT: { primary: "PT", secondary: "+351" },
      GB: { primary: "GB", secondary: "+44" },
      CZ: { primary: "CZ", secondary: "+420" },
      RO: { primary: "RO", secondary: "+40" },
      RU: { primary: "RU", secondary: "+7" },
      SM: { primary: "SM", secondary: "+378" },
      RS: { primary: "RS", secondary: "+381" },
      SE: { primary: "SE", secondary: "+46" },
      CH: { primary: "CH", secondary: "+41" },
      TR: { primary: "TR", secondary: "+90" },
      UA: { primary: "UA", secondary: "+380" },
    });
    const [messageSend, setMessageSend] = useState(false);
  return (
    <>
      <div className="section-form-contacto">
        <div className="container">
          <div className="form-contacto wow fadeIn slow">
            <div className="row">
              <div className="col-12 col-md-5">
                <form className="p-5">
                  <div className="mb-3">
                    <label htmlFor="InputNombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputNombre"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                    />
                  </div>
                  <div className="form-group mb-3 row">
                    <div className="col-xl-6  mo-b-15">
                      <label htmlFor="InputPrefijo" className="form-label">
                        Prefijo telefónico
                      </label>
                      <ReactFlagsSelect
                        selected={selected}
                        onSelect={(código) => setSelected(código)}
                        showSelectedLabel={showSelectedLabel}
                        selectedSize={selectedSize}
                        showOptionLabel={showOptionLabel}
                        showSecondarySelectedLabel={showSecondarySelectedLabel}
                        showSecondaryOptionLabel={showSecondaryOptionLabel}
                        searchable={searchable}
                        placeholder={placeholder}
                        customLabels={customLabels}
                        countries={[
                          "ES",
                          "AR",
                          "BO",
                          "BR",
                          "CL",
                          "CO",
                          "CR",
                          "CU",
                          "EC",
                          "SV",
                          "GT",
                          "HT",
                          "HN",
                          "JM",
                          "MX",
                          "NI",
                          "PY",
                          "PA",
                          "PR",
                          "DO",
                          "SR",
                          "UY",
                          "VE",
                          "BB",
                          "BS",
                          "BZ",
                          "CA",
                          "DM",
                          "US",
                          "GT",
                          "GY",
                          "PE",
                          "VC",
                          "LC",
                          "TT",
                          "UY",
                          "AL",
                          "DE",
                          "AD",
                          "AM",
                          "AT",
                          "AZ",
                          "BE",
                          "BY",
                          "BA",
                          "BG",
                          "CY",
                          "DK",
                          "SK",
                          "SI",
                          "EE",
                          "FI",
                          "FR",
                          "GE",
                          "GR",
                          "HU",
                          "IE",
                          "IC",
                          "IT",
                          "KZ",
                          "LV",
                          "LI",
                          "LT",
                          "LU",
                          "MK",
                          "MT",
                          "MD",
                          "MC",
                          "ME",
                          "NO",
                          "NL",
                          "PL",
                          "PT",
                          "GB",
                          "CZ",
                          "RO",
                          "RU",
                          "SM",
                          "RS",
                          "SE",
                          "CH",
                          "TR",
                          "UA",
                        ]}
                      />
                    </div>
                    <div className="col-xl-6 mt-3 mt-xl-0">
                      <label htmlFor="InputTelef" className="form-label">
                        N° de teléfono móvil
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="InputTelef"
                      />
                    </div>
                  </div>
                  <div className="mb-3 ps-0 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Acepto los términos y condiciones
                    </label>
                  </div>
                  <p className="text-form mb-0">
                    <span>Responsable: </span>Auction Click
                  </p>
                  <p className="text-form mb-0">
                    <span>Finalidad: </span>Responder a solicitudes de
                    formulario
                  </p>
                  <p className="text-form mb-0">
                    <span>Legitimación: </span>Tu consentimiento expreso
                  </p>
                  <p className="text-form mb-0">
                    <span>Destinatario: </span>Auction Click
                  </p>
                  <p className="text-form mb-0">
                    <span>Derechos: </span>Acceso, rectificación, limitación y
                    supresión de tus datos
                  </p>
                </form>
              </div>
              <div className="col-12 col-md-7">
                <form className="p-5">
                  <div className="mb-3">
                    <label htmlFor="InputAsunto" className="form-label">
                      Asunto
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputAsunto"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="11"
                    ></textarea>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      className="btn btn-custom btn-rounded btn-orange-black btn-center-out"
                      onClick={() => setMessageSend(true)}
                    >
                      Enviar consulta
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {messageSend && (
              <div className="message-send">
                <div>
                  <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_v2PAPH.json" background="transparent" speed="1" autoplay loop></lottie-player>
                  <h3>Enviado Correctamente</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </>
  );
};

export default FormContacto;
