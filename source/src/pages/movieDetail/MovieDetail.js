import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import apiClient from "../../requests/GeneralBackend/apiClient";
import useAlert from "../../hook/useAlert";
import ProgressiveLoaderDecision from "../../components/loader/ProgressiveLoaderDecision";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const MovieDetail = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [ putAlert ] = useAlert();
    const preloadedMovieData = useSelector((state) => state.movie_detail.preloaded_data);
    const [ movieDetail, setMovieDetail ] = useState({});
    const [ isMovieDetailRequestDone, setIsMovieDetailRequestDone ] = useState(false);

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
        setMovieDetail(apiResult.detail);
        setIsMovieDetailRequestDone(true);
    }

    const loaderDecisionProps = useMemo(() => {
        return {
            isRequestDone: isMovieDetailRequestDone
        }
    }, [isMovieDetailRequestDone])

    return (
        <div>
            <div className="movie-detail-backdrop-container">
                <ProgressiveLoaderDecision
                    {...loaderDecisionProps}
                    isDataSet={Boolean(movieDetail?.backdrop_url)}
                    loaderChildren={<SkeletonLoader width="100%" height="100%" />}
                >
                    <img src={movieDetail?.backdrop_url} />
                </ProgressiveLoaderDecision>
            </div>


            <h1 style={{ marginTop: "30vh"}}>JustWatch attribution required for watch providers</h1>
            <p>https://developer.themoviedb.org/reference/movie-watch-providers</p>
            
        </div>
    )
}

export default MovieDetail;