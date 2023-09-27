import React, { useState, useEffect } from "react";
import apiClient from "../requests/GeneralBackend/apiClient";
import PosterCardCategoryRow from "../components/poster/PosterCardCategoryRow";
import useAlert from "../hook/useAlert";

const CategoryDrillDown = () => {
    const [ trendingMovieCards, setTrendingMovieCards ] = useState([]);
    const [ putAlert ] = useAlert();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        const response = await apiClient.getTrendingMovies();
        if (response.is_error) {
            putAlert(response.message);
        }
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

                <li>dont forget to reference the figma design (and old draw.io design)</li>
                
                <li>add request error handling</li>
                
                <li>add a default movie poster when the image fails (onfail i think)</li>

                <li>customize the swiper image loader so it matches the theme</li>
                
                <li>add infinite scroll with limit</li>
            </ul>

            <p>
                Left off adding an endpoint to get a combined list of movie categories. Also was adding a request cache storage in the webapp. (So i can cache a SUCCESSFUL response for like 5 minutes)
            </p>

            <PosterCardCategoryRow
                categoryTitle="Trending"
                cards={trendingMovieCards}
                getMoreCards={getTrendingMovies}
            />

            <PosterCardCategoryRow
                categoryTitle="Now Playing"
                cards={[]}
                getMoreCards={() => null}
            />

            <PosterCardCategoryRow
                categoryTitle="Viewer Favorites"
                cards={[]}
                getMoreCards={() => null}
            />

            <PosterCardCategoryRow
                categoryTitle="Action Packed"
                cards={[]}
                getMoreCards={() => null}
            />

            <PosterCardCategoryRow
                categoryTitle="Comedy"
                cards={[]}
                getMoreCards={() => null}
            />
        </div>
    )
}

export default CategoryDrillDown;