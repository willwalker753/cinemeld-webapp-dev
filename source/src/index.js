import React from "react";
import ReactDOM from "react-dom/client";
import PageRouter from "./PageRouter";
import { Provider } from "react-redux"
import store from "./redux/store"
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PageRouter />
    </Provider>
);
