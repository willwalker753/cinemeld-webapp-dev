import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import CategoryDrillDown from "./pages/CategoryDrillDown";

const PageRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={RootLayout}>
                    <Route exact path="/" Component={CategoryDrillDown}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;