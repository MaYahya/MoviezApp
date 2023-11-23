import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import axios from "../../Request/axios";
import Video from "../Video/Video";
import "./Results.css";

const Results = ({ seletedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(seletedOption);
      setMovies(request.data.results);
    };
    fetchData();
  }, [seletedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <Video key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
