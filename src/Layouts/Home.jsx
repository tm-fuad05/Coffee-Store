import React from "react";
import Banner from "../Components/Banner";
import Ads from "../Components/Ads";
import FollowUs from "../Components/FollowUs";
import Coffees from "../Components/Coffees";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Ads></Ads>
      <Coffees></Coffees>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
