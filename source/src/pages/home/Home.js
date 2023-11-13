import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieDetailPreloadedData } from "../../redux/slice/MovieDetailSlice";
import apiClient from "../../requests/GeneralBackend/apiClient";
import PosterCardCategoryRow from "../../components/poster/PosterCardCategoryRow";
import useAlert from "../../hook/useAlert";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
                onClick: () => onMovieClick(movie)
            }
        })
        return cards;
    }

    const onMovieClick = (movie) => {
        // save the availiable movie details so we don't have to wait for the movie details request to start showing data
        dispatch(setMovieDetailPreloadedData({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            genre_list: movie.genre_list,
            poster_url: movie.poster_url,
            backdrop_url: movie.backdrop_url,
            vote_percent: movie.vote_percent,
            vote_factor: movie.vote_factor,
            vote_count: movie.vote_count,
        }))
        navigate(`/movie/${movie.id}`)
    }

    return (
        <div className="home">
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