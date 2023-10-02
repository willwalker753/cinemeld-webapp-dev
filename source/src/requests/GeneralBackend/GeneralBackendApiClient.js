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
        return this.requestAgent.get("/cinemeld/movie/summary")
    }
}

export default GeneralBackendApiClient;