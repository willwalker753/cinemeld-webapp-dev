import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import About from './About';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = `/${window.location.pathname.split("/")[1]}/`;

root.render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<App />} />
            </Routes>
        </BrowserRouter> 
    </React.StrictMode>
);

