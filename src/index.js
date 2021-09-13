import React from "react";
import ReactDOM from "react-dom";
import { DnDProvider } from "./util/context";
import "./Styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DnDProvider>
      <Router>
        <App />
      </Router>
    </DnDProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
