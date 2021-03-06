import React from "react";
import like from "./assets/icon-mano.svg";
import hands from "./assets/icon-manos-corazon.svg";
import "./ListProfile.css";

const Listprofile = () => {
  return (
    <section className="list">
      <div className="profesional">
        <p>
          En su <strong>trayectoria profesional</strong> se destacan los
          siguientes cargos:
        </p>
        <ul>
          <li>3 veces electo como diputado de la Asamblea de Cundinamarca.</li>
          <li>Asesor de Ministerio de Agricultura.</li>
          <li>Asesor del Instituto Colombiano Agropecuario ICA.</li>
          <li>
            Asesor del Ministerio del Medio Ambiente, Vivienda y Desarrollo
            Territorial.
          </li>
          <li>
            Asesor de la Secretaría de Agricultura de Cundinamarca, Planeación
            del Departamento de Cundinamarca, entre otros del orden Nacional.
          </li>
        </ul>
      </div>
      <div className="jobs">
        <div className="work-description">
          <figure>
            <img src={like} alt="icon like" />
          </figure>
          <p>
            Ha sido diputado durante 3 periodos del Departamento de Cundinamarca
            electo por el partido <strong>Cambio Radical </strong>
            destacándose como el
            <strong> dirigente más votado de este partido</strong> y el segundo
            de la duma departamental
            <strong style={{ color: "#008000" }}> con 41.493 votos.</strong>
          </p>
        </div>
        <hr
          style={{
            height: "2px",
            width: "20%",
            textAlign: "left",
            backgroundColor: "#E31016",
          }}
        />
        <div className="work-description">
          <figure>
            <img src={hands} alt="icon hands" />
          </figure>
          <p>
            Se caracteriza por su{" "}
            <strong>
              independencia, gestión y liderazgo en el departamento.
            </strong>{" "}
            Recorre permanentemente los{" "}
            <strong style={{ color: "#008000" }}>116 municipios,</strong>{" "}
            realizando gestión en la mayoría de ellos, conocedor del
            departamento en sus virtudes, y sus dificultades;{" "}
            <strong>comprometido con los temas sociales,</strong> educativos,
            agropecuarios, de salud y de discapacidad, buscando dar cumplimiento
            a las políticas públicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Listprofile;
