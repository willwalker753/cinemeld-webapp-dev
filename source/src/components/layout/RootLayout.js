import React from "react";
import { Outlet } from "react-router-dom";
import Snackbar from "../snackbar/Snackbar";
import "./rootLayout.css";

const RootLayout = () => {
    return (
        <div className="routes-layout">
            <Snackbar />
            <Outlet />
        </div>
    )
}

export default RootLayout;