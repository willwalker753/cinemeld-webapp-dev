import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import apiClient from "../../requests/GeneralBackend/apiClient";
import useAlert from "../../hooks/useAlert";
import ProgressiveLoaderDecision from "../../components/loader/ProgressiveLoaderDecision";
import SkeletonLoader from "../../components/loader/SkeletonLoader";
import convertUtcToReleaseDate from "../../functions/convertUtcToReleaseDate";
import "./movieDetail.css";

// https://dribbble.com/shots/3278150-Cinematic

const MovieDetail = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [ putAlert ] = useAlert();
    const preloadedMovieData = useSelector((state) => state.movie_detail.preloaded_data);
    const [ movieDetail, setMovieDetail ] = useState({});
    const [ isMovieDetailRequestDone, setIsMovieDetailRequestDone ] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    })

    // get the movie details on mount
    useEffect(() => {
        if (!movieId) navigate("/");
        refreshMovieDetailData();        
    }, [movieId])

    // try to prefill the movie details using local data while waiting on the movie detail response
    useEffect(() => {
        importPreloadedData();
    }, [preloadedMovieData])

    const importPreloadedData = () => {
        // if the preload data doesn't exist OR it doesn't match the detail movie id
        // then dont import the data 
        if (!preloadedMovieData || preloadedMovieData.id.toString() !== movieId.toString()) return;
        // otherwise, do the import
        setMovieDetail({ 
            ...movieDetail,
            ...preloadedMovieData
        });
    }

    const refreshMovieDetailData = async () => {
        setIsMovieDetailRequestDone(false);
        const apiResult = await apiClient.getMovieDetail({ movie_id: movieId });
        if (apiResult.is_error) {
            putAlert("error", apiResult.message, 6000);
            setIsMovieDetailRequestDone(true);
            return;
        }
        console.log(apiResult.detail)
        
        apiResult.detail.release_date = convertUtcToReleaseDate(apiResult.detail.release_date);

        setMovieDetail(apiResult.detail);
        setIsMovieDetailRequestDone(true);
    }

    const loaderDecisionProps = useMemo(() => {
        return {
            isRequestDone: isMovieDetailRequestDone
        }
    }, [isMovieDetailRequestDone])

    return (
        <div className="movie-detail">
            <div className="movie-detail-backdrop-container">
                <ProgressiveLoaderDecision
                    {...loaderDecisionProps}
                    isDataSet={Boolean(movieDetail.backdrop_url)}
                    loaderChildren={<SkeletonLoader variant="rectangular" width="100%" height="100%" />}
                >
                    <img src={movieDetail.backdrop_url} />
                </ProgressiveLoaderDecision>
            </div>

            <div className="movie-detail-body">                
                <div className="movie-detail-title-container">
                    <ProgressiveLoaderDecision
                        {...loaderDecisionProps}
                        isDataSet={Boolean(movieDetail.title)}
                        loaderChildren={<SkeletonLoader variant="rounded" fontSize="2rem" />}
                    >
                        <h1>
                            {movieDetail.title}
                        </h1>
                    </ProgressiveLoaderDecision>
                </div>

                <div className="movie-detail-genres-container">
                    <ProgressiveLoaderDecision
                        {...loaderDecisionProps}
                        isDataSet={Boolean(movieDetail.genre_list)}
                        loaderChildren={<SkeletonLoader variant="rounded" fontSize="1rem" />}
                    >
                        <p>
                            {movieDetail.genre_list?.map(genre => genre.name)?.join(", ")}
                        </p>
                    </ProgressiveLoaderDecision>
                </div>

                <div className="movie-detail-metadata-row-container">
                    <ProgressiveLoaderDecision
                        {...loaderDecisionProps}
                        isDataSet={Boolean(movieDetail.release?.certification) && Boolean(movieDetail.release_date) && Boolean(movieDetail.runtime?.hour_minute_display_text)}
                        loaderChildren={<SkeletonLoader variant="rounded" fontSize="2rem" />}
                    >
                        <div className="movie-detail-metadata-row">
                                <div className="movie-detail-metadata-row-item">
                                    {movieDetail.release?.certification !== "" && (
                                        <div className="movie-detail-metadata-cert">{movieDetail.release?.certification}</div>
                                    )}
                                </div>
                                <div className="movie-detail-metadata-row-item">{movieDetail.release_date}</div>
                                <div className="movie-detail-metadata-row-item">{movieDetail.runtime?.hour_minute_display_text}</div> 
                                {movieDetail.external_link?.imdb !== "" && (
                                    <a 
                                        className="movie-detail-metadata-row-item movie-detail-metadata-external-link"
                                        href={movieDetail.external_link?.imdb}
                                        target="_blank"
                                    >
                                        <img className="movie-detail-metadata-external-link-logo" src="/asset/img/external_logo/imdb.svg" alt="IMDB" />
                                        <OpenInNewIcon className="movie-detail-metadata-external-link-icon" />
                                    </a>
                                )}                            
                        </div>
                    </ProgressiveLoaderDecision>
                </div>

                <div className="movie-detail-overview-container">
                    <ProgressiveLoaderDecision
                        {...loaderDecisionProps}
                        isDataSet={Boolean(movieDetail.overview)}
                        loaderChildren={<SkeletonLoader variant="text" />}
                    >
                        <h2 className="movie-detail-section-title">
                            Synopsis
                        </h2>
                        <p className="movie-detail-overview">
                            {movieDetail.overview}
                        </p>
                    </ProgressiveLoaderDecision>
                </div>
            </div>


            <h1 style={{ marginTop: "30vh"}}>DONT FORGET - JustWatch attribution is required for watch providers</h1>
            <p>https://developer.themoviedb.org/reference/movie-watch-providers</p>
            
        </div>
    )
}

export default MovieDetail;