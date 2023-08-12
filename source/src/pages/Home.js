import React, { useEffect } from "react";
import apiClient from "../requests/apiClient";

const Home = () => {
    useEffect(() => {
        const test = async () => {    
            const result = await apiClient.healthcheck();
            console.log(result);
        }
        test();
    }, [])

    return (
        <h1>Hello World!</h1>
    )
}

export default Home;