import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import About from './About';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

