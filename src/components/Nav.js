import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Number of Movies: {movies.length}</li>
      </ul>
    </nav>
  );
};

export default Nav;
