// @flow
import React from "react";
import "../styles/index.css";
import Slider from "./Slider";
import Navbar from "./Navbar";

const About = (): React$Node  => {
  return (
    <>
      <Navbar />
      <Slider />
      <h1> About Page </h1>
    </>
  );
};

export default About;
