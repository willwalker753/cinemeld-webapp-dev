import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const { movieId } = useParams();

    useEffect(() => {
        console.log("movieId from params", movieId)
    }, [movieId])

    return (
        <div>
            <h1>JustWatch attribution required for watch providers</h1>
            <p>https://developer.themoviedb.org/reference/movie-watch-providers</p>
            
        </div>
    )
}

export default MovieDetail;