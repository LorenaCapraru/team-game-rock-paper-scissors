import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Game from "./Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
