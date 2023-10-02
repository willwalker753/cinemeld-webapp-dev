import React, { useState, useEffect } from "react";
import apiClient from "../requests/GeneralBackend/apiClient";
import PosterCardCategoryRow from "../components/poster/PosterCardCategoryRow";
import useAlert from "../hook/useAlert";

const Home = () => {
    const [ trendingMovieCards, setTrendingMovieCards ] = useState([]);
    const [ nowPlayingMovieCards, setNowPlayingMovieCards ] = useState([]);
    const [ viewerFavoritesMovieCards, setViewerFavoritesMovieCards ] = useState([]);
    const [ putAlert ] = useAlert();

    useEffect(() => {
        getSummary();
    }, []);

    const getSummary = async () => {
        const apiResult = await apiClient.getHomeSummary();
        if (apiResult.is_error) {
            putAlert("error", apiResult.message, 6000);
            return;
        }
        const newTrendingMovieCards = parseMovieListToCards(apiResult.trending_movies.results);
        setTrendingMovieCards(newTrendingMovieCards);

        const newNowPlayingMovieCards = parseMovieListToCards(apiResult.now_playing.results);
        setNowPlayingMovieCards(newNowPlayingMovieCards);

        const newViewerFavoritesMovieCards = parseMovieListToCards(apiResult.viewer_favorites.results);
        setViewerFavoritesMovieCards(newViewerFavoritesMovieCards);
    }

    const parseMovieListToCards = (movieList) => {
        const cards = movieList.map(movie => {
            return {
                title: movie.title,
                genreList: movie.genre_list,
                votePercent: movie.vote_percent,
                voteFactor: movie.vote_factor,
                imageUrl: movie.poster_url,
                onClick: () => console.log("click ", movie.id)
            }
        })
        return cards;
    }

    return (
        <div>
            <PosterCardCategoryRow
                categoryTitle="Trending"
                cards={trendingMovieCards}
            />

            <PosterCardCategoryRow
                categoryTitle="Now Playing"
                cards={nowPlayingMovieCards}
            />

            <PosterCardCategoryRow
                categoryTitle="Viewer Favorites"
                cards={viewerFavoritesMovieCards}
            />
        </div>
    )
}

export default Home;