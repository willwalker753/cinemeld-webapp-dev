import React from "react";
import ReactDOM from "react-dom/client";
import PageRouter from "./PageRouter";
import { register } from "swiper/element/bundle";
import "./main.css";

// register Swiper custom elements
register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
);
