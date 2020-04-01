import React from "react";

import "./App.css";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./context/MovieContext";
import Nav from "./components/Nav";
import AddMovie from "./components/addMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
