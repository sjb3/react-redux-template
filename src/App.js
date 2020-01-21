import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Article } from "./components/Article";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
