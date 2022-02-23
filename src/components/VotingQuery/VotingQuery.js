import React from "react";

const VotingQuery = () => {
  return (
    <div className="votingQuery" id="comovotar">
      <iframe
        src="https://infovotantescongreso.registraduria.gov.co/Home"
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
