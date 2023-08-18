import React from "react";
import ReactDOM from "react-dom/client";
import PageRouter from "./PageRouter";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
);
