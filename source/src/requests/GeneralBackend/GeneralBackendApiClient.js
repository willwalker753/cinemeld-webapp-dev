class GeneralBackendApiClient {
    constructor(requestAgent) {
        this.requestAgent = requestAgent;
    }

    healthcheck = () => {
        return this.requestAgent.get("/");
    }

    getTrendingMovies = () => {
        return this.requestAgent.get("/cinemeld/movie/category/trending");        
    }

    getHomeSummary = () => {
        return this.requestAgent.get("/cinemeld/movie/category/combined_summary")
    }

    getMovieDetail = ({ movie_id }) => {
        return this.requestAgent.get(`/cinemeld/movie/detail/${movie_id}`)
    }
}

export default GeneralBackendApiClient;