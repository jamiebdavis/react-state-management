import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "inception",
      price: "£10",
      id: "1234"
    },
    {
      name: "jungle book",
      price: "£11",
      id: "1235"
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
