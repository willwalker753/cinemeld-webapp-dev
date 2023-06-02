import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from "react-router-dom";
import App from './App';
import About from './About';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = `/${window.location.pathname.split("/")[1]}/`;

const Temp = () => {
    const location = useLocation();

    // useEffect(() => {
    //     // If the page path is using hash routing
    //     // Then add a new history entry using standard page routing
    //     // This runs every time the router changes pages
    //     if (window?.location?.hash.startsWith(`#${basename}`)) {
    //         const pagePath = window.location.hash.replace(`#`, '');
    //         window.history.pushState(null, null, pagePath)
    //     }
    //     // if (window?.location?.pathname === `${basename}`) {
    //     //     window.history.pushState(null, null, `${basename}#${basename}`)
    //     // }
    // }, [location]);

    return (
            <Routes>
                <Route exact path={`/about`} element={<About />} />
                <Route exact path={`/`} element={<App />} />
        </Routes>
    )
}

root.render(
    <React.StrictMode>
        <HashRouter>
            <Temp />
        </HashRouter> 
    </React.StrictMode>
);

