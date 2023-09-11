import React from "react";
import { Outlet } from "react-router-dom";
import "./rootLayout.css";

const RootLayout = () => {
    return (
        <div className="routes-layout">
            <Outlet />
        </div>
    )
}

export default RootLayout;