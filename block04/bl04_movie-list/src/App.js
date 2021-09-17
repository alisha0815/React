import React, { useState } from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";

function App() {
  const [movies, setMovies] = useState([
    { name: "Harry Porter", price: "$20", id: 23124 },
    { name: "Minari", price: "$30", id: 23125 },
    { name: "Parrasit", price: "$25", id: 23126 },
  ]);
  return (
    <div>
      <Nav numOfMovies={movies.length} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
