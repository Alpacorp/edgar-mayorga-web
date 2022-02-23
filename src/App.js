import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowVoting from "./components/HowVoting/HowVoting";
import Profile from "./components/Profile/Profile";
import VotingQuery from "./components/VotingQuery/VotingQuery";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowVoting />
      <Profile />
      <VotingQuery />
    </>
  );
};

export default App;
