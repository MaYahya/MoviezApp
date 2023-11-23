import React from "react";
import "./Nav.css";
import Help from "../../Request/Help";

const Nav = ({ setSelectedOption }) => {
  return (
    <div className="Nav">
      <h2 onClick={() => setSelectedOption(Help.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchActionMovie)}>Action</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(Help.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setSelectedOption(Help.fetchTv)}>Movie</h2>
    </div>
  );
};

export default Nav;
