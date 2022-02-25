import { siguenos, facebook, twitter, vote, ht } from "./assets/";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./Follow.css";

const Follow = () => {
  return (
    <section className="follow" id="social">
      <div className="container">
        <div className="title">
          <figure>
            <img src={siguenos} alt="texto de síguenos" />
          </figure>
        </div>
        <div className="socialMedia">
          <a href="https://twitter.com/SoyMayorguista" target="blank">
            <figure>
              <img src={twitter} alt="logo Instagram" />
            </figure>
          </a>
          <a href="https://www.facebook.com/SoyMayorguista" target="blank">
            <figure>
              <img src={facebook} alt="logo Facebook" />
            </figure>
          </a>
        </div>
      </div>
      <div className="socialEmbebed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SoyMayorguista"
          options={{ height: 500, width: 400 }}
        />
        <iframe
          src="https://www.powr.io/facebook-feed/i/31629770#page"
          frameBorder="0"
          title="facebook social media"
          style={{ width: "400px" }}
        ></iframe>
      </div>
      <div className="vote-card">
        <figure>
          <img
            src={vote}
            alt="vote por edgar mayorga, 103 a la cámara por Cundinamarca"
          />
        </figure>
        <figure>
          <img src={ht} alt="#soymayorguista" />
        </figure>
      </div>
    </section>
  );
};

export default Follow;
