// @flow

import React from "react";
import "../styles/index.css";
import Slider from "./Slider";
import appstore from "../images/AppStoreBadge.svg";
import playstore from "../images/google-play-badge.png";
import Navbar from "./Navbar";
import { useQuery, gql } from "@apollo/client";

const DATA = gql`
  query retrieveData($id: Int!) {
    getData(id: $id)
  }
`;

function Data({ id }) {
  const { loading, error, data } = useQuery(DATA, {
    variables: { id },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return data.getData;
}

const Home = (): React$Node  => {
  return (
    <>
      <Navbar />
      <Slider />
      <h1>
        <Data id={1} />
      </h1>
      <br />
      <h6>
        <Data id={2} />
      </h6>
      <div className="badge">
        <img src={appstore} alt="App-Store" />
        <img src={playstore} alt="Google-Playstore" />
      </div>
    </>
  );
};

export default Home;
