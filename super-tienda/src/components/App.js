import React from "react";
import About from "./About";
import Nav from "./Nav.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./slider";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Slider />
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact element="" />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
