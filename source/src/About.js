import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    const basename = `/${window.location.pathname.split("/")[1]}/`;
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum</p>
            <Link to={`/`}>Home</Link>
        </div>
    )
}

export default About;