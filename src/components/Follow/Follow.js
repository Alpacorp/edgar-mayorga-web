import { siguenos, facebook, instagram, vote } from "./assets/";
import "./Follow.css";

const Follow = () => {
  return (
    <section className="follow">
      <div className="container">
        <div className="title">
          <figure>
            <img src={siguenos} alt="texto de síguenos" />
          </figure>
        </div>
        <div className="socialMedia">
          <figure>
            <img src={facebook} alt="logo Facebook" />
          </figure>
          <figure>
            <img src={instagram} alt="logo Instagram" />
          </figure>
        </div>
      </div>
      <div>
        <figure>
          <img
            src={vote}
            alt="vote por edgar mayorga, 103 a la cámara por Cundinamarca"
          />
        </figure>
      </div>
    </section>
  );
};

export default Follow;
