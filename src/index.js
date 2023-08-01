import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
