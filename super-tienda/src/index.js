import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PersonalCard } from "./components/PersonalCard.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <PersonalCard />
  </React.StrictMode>
);
