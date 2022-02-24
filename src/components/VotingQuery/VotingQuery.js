import React from "react";

const VotingQuery = () => {
  return (
    <div className="votingQuery" id="consulta">
      <iframe
        src="https://eleccioncolombia.registraduria.gov.co/"
        frameBorder="0"
        title="voting place"
        width="100%"
        height="900px"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default VotingQuery;
