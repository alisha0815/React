import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry Porter", price: "$20", id: 23124 },
    { name: "Minari", price: "$30", id: 23125 },
    { name: "Parrasit", price: "$25", id: 23126 },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
      {/* render all the child components */}
    </MovieContext.Provider>
  );
};
