import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";

const PageRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={RootLayout}>
                    <Route exact path="/" Component={Home}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;