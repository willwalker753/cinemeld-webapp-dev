import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    const basename = `/${window.location.pathname.split("/")[1]}/`;
    return (
        <div>
            <h1>Hello World !</h1>
            <Link to={`/about`}>About</Link>
        </div>
    )
}

export default App;