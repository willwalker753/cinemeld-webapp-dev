import React, { useState, useEffect } from "react";
import apiClient from "../requests/apiClient";
import PosterCardCategoryRow from "../components/poster/PosterCardCategoryRow";

const CategoryDrillDown = () => {
    const [ trendingMovieCards, setTrendingMovieCards ] = useState([]);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        const response = await apiClient.getTrendingMovies();
        const cards = response.data.trending_movies.results.map(result => {
            return {
                title: result.title,
                genreList: result.genre_list,
                votePercent: result.vote_percent,
                voteFactor: result.vote_factor,
                imageUrl: result.poster_url,
                onClick: () => console.log("click ", result.id)
            }
        })
        setTrendingMovieCards(cards);
    }

    return (
        <div>
            <h2>Notes for next time</h2>
            <ul style={{ marginBottom: "3rem" }}>

                {/* New theme ideas
                https://dribbble.com/tags/movie_search
                https://dribbble.com/shots/16690663--112-Concept-shots
                https://dribbble.com/shots/10060040-Daily-UI-022-Movie-Search
                https://dribbble.com/shots/6547670-V-kka
                https://dribbble.com/shots/9956355-SpeedyTV-Streaming-movie-search-engine-redesign
                https://dribbble.com/shots/10060040-Daily-UI-022-Movie-Search */}

                <li>DONT FORGET ABOUT FIGMA DESIGNS</li>
                
                <li>add error handling</li>
                
                <li>add a default movie poster when the image fails (onfail i think)</li>

                <li>add a loading animation for images, like skeleton (something with onload)</li>
                
                <li>add infinite scroll with limit</li>

                {/* <li>add view more button (probably static above list on right)</li> */}

                <li>add different image urls for different sizes (using original big poster right now)</li>

                {/* <li>maybe add metadata bar beneath each movie, like rating </li> */}
            </ul>
            <PosterCardCategoryRow
                categoryTitle="In The Spotlight"
                cards={trendingMovieCards}
                getMoreCards={getTrendingMovies}
            />
        </div>
    )
}

export default CategoryDrillDown;