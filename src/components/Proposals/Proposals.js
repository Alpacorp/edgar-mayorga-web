import proposalImg from "./assets/h15-texto-propuesta.png";
import {
  campo,
  casas,
  discapacidad,
  doctor,
  emprendimiento,
  frases,
} from "./assets";
import "./Proposal.css";

const Proposal = () => {
  return (
    <section className="proposal" id="propuestas">
      <div className="title">
        <figure>
          <img src={proposalImg} alt="propuestas" />
        </figure>
      </div>
      <div className="proposals-text">
        <div className="container">
          <div className="article">
            <figure>
              <img src={campo} alt="por el campo colombiano" />
            </figure>
            <h3>
              Por el <span style={{ color: "#E31016" }}>campo colombiano</span>
            </h3>
            <p>
              Asumir la defensa del campo colombiano que dignificará el
              desarrollo socioeconómico de nuestros campesinos.
            </p>
          </div>
          <div className="article">
            <figure>
              <img src={doctor} alt="contra la corrupción" />
            </figure>
            <h3>
              Vamos de frente{" "}
              <span style={{ color: "#E31016" }}>contra la corrupción</span> de
              las eps en el sector de salud
            </h3>
            <p>
              Ir de frente contra la corrupcion de las mafías que están acabando
              el sistema de salud en colombia.
            </p>
          </div>
          <div className="article">
            <figure>
              <img src={emprendimiento} alt="educación empresarial" />
            </figure>
            <h3>
              Porque luchará desde el congreso por la{" "}
              <span style={{ color: "#E31016" }}>Educación Empresarial</span>
            </h3>
            <p>
              Garantizar y fomentar a la juventud una formación educativa
              empresarial que conlleve a la formalidad del empleo en Colombia
            </p>
          </div>
          <div className="article">
            <figure>
              <img
                src={discapacidad}
                alt="derecho para las personas en condición de discapacidad"
              />
            </figure>
            <h3>
              Derechos <span style={{ color: "#E31016" }}>equitativos</span>
            </h3>
            <p>
              Porque su trabajo será por los derechos de las personas en
              condición de discapacidad
            </p>
          </div>
          <div className="article">
            <figure>
              <img src={casas} alt="casas subsidios" />
            </figure>
            <h3>
              Corregirá y dará orden a la{" "}
              <span style={{ color: "#E31016" }}>entrega de Subsidios</span>
            </h3>
            <p>
              Revisar y corregir la forma de entrega subsidios existentes en
              colombia. Para llegar a los más necesitados con un salario mínimo
              vital vigente al salario básico de los colombiano
            </p>
          </div>
          <div className="article">
            <figure>
              <img src={frases} alt="compromiso, resultados y liderazgo" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
