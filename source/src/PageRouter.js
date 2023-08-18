import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CategoryDrillDown from "./pages/CategoryDrillDown";

const PageRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={CategoryDrillDown}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;