import React from "react";
import About from "./About";
// import Nav from "./components/Nav.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h1>Home Page</h1>
        </div>
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
