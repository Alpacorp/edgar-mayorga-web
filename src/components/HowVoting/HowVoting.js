import vote from "./assets/h4-como-votar.png";
import cardVote from "./assets/h5-tarjeton.png";
import "./HowVoting.css";

const HowVoting = () => {
  return (
    <section className="howVote">
      <div className="container">
        <div className="howVoteImg">
          <img src={vote} alt="texto votar" />
        </div>
        <div>
          <figure className="cardVote">
            <img src={cardVote} alt="tarjeton de voto" />
          </figure>
        </div>
        <div className="howVoteBtn">
          <div className="backBtn">
            <button>Ver Video</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowVoting;
