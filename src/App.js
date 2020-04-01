import React from "react";

import "./App.css";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./context/MovieContext";
import Nav from "./components/Nav";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
