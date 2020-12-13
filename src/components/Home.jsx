import React from "react";
import "../index.css";
import Slider from "./Slider";
import appstore from "../images/AppStoreBadge.svg";
import playstore from "../images/google-play-badge.png";

const Home = () => {
  return (
    <>
      <Slider />

      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
      <br />
      <h6>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </h6>
      <div className="badge">
        <img src={appstore} alt='App-Store'/>
        <img src={playstore} alt='Google-Playstore'/>
      </div>
    </>
  );
};

export default Home;
