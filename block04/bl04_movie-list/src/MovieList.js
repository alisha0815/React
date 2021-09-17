import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};

export default MovieList;
