/** @format */

import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import BodyImage from "../assets/body.jpg";

const GptSearch = () => {
  return (
    <div className="bg-cover">
      <div>
        <img
          src={BodyImage}
          alt="BodyImg"
          className="absolute -z-10 bg-cover"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
};
export default GptSearch;
