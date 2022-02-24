import proposalImg from "./assets/h15-texto-propuesta.png";
import "./Proposal.css";

const Proposal = () => {
  return (
    <section className="proposal" id="propuestas">
      <figure>
        <img src={proposalImg} alt="propuestas" />
      </figure>
    </section>
  );
};

export default Proposal;
