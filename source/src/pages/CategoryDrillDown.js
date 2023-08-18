import React, { useState, useEffect } from "react";
import apiClient from "../requests/apiClient";
import PosterCardCategoryRow from "../components/Poster/PosterCardCategoryRow";

const CategoryDrillDown = () => {
    const [ trendingMovieCards, setTrendingMovieCards ] = useState([]);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        const response = await apiClient.getTrendingMovies();
        const cards = response.data.trending_movies.results.map(result => {
            return {
                imageUrl: result.poster_url,
                onClick: () => console.log("click ", result.id)
            }
        })
        setTrendingMovieCards(cards);
    }

    return (
        <div>
            <p>
            Notes for next time
            
            add error handling
            
            add a default movie poster when the image fails (onfail i think)

            add a loading animation for images, like skeleton (something with onload)
             
            add infinite scroll with limit

            add view more button (probably static above list on right)

            add different image urls for different sizes (using original big poster right now)

            maybe add metadata bar beneath each movie, like rating 
            </p>
            <PosterCardCategoryRow
                categoryTitle="In The Spotlight"
                cards={trendingMovieCards}
                getMoreCards={getTrendingMovies}
            />
        </div>
    )
}

export default CategoryDrillDown;