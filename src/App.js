import React from "react";
import Follow from "./components/Follow/Follow";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowVoting from "./components/HowVoting/HowVoting";
import Listprofile from "./components/ListProfile/ListProfile";
import Profile from "./components/Profile/Profile";
import Proposal from "./components/Proposals/Proposals";
import Video from "./components/Video/Video";
import VotingQuery from "./components/VotingQuery/VotingQuery";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowVoting />
      <Profile />
      <Listprofile />
      <Proposal />
      <Video />
      <VotingQuery />
      <Follow />
      <Footer />
    </>
  );
};

export default App;
