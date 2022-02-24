import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowVoting from "./components/HowVoting/HowVoting";
import Profile from "./components/Profile/Profile";
import Proposal from "./components/Proposals/Proposals";
import VotingQuery from "./components/VotingQuery/VotingQuery";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowVoting />
      <Profile />
      {/* <Proposal /> */}
      <VotingQuery />
    </>
  );
};

export default App;
