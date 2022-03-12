import infoVotantes from "./assets/infovotantes.png";

const VotingQuery = () => {
  return (
    <div className="votingQuery" id="consulta">
      <a href="https://eleccioncolombia.registraduria.gov.co/" target="blank">
        <img
          className="infovotantes"
          style={{ width: "100%" }}
          src={infoVotantes}
          alt="infovotantes"
        />
      </a>
    </div>
  );
};

export default VotingQuery;
