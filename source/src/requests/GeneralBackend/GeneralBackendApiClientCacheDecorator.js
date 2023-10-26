class GeneralBackendApiClientCacheDecorator {
    constructor(
        apiClient, 
        requestCacheStorage
    ) {
        this.apiClient = apiClient;
        this.requestCacheStorage = requestCacheStorage;
    }

    healthcheck = () => {
        return this.apiClient.healthcheck();
    }

    getTrendingMovies = () => {
        // console.log("DO NOT FORGET TO USE THE REQUEST CACHE AGAIN")
        // return this.apiClient.getTrendingMovies();
        return this._cacheWrapper("getTrendingMovies", 5 * 60 * 1000);     
    }

    getHomeSummary = () => {
        // console.log("DO NOT FORGET TO USE THE REQUEST CACHE AGAIN")
        // return this.apiClient.getHomeSummary();
        return this._cacheWrapper("getHomeSummary", 5 * 60 * 1000);     
    }

    getMovieDetail = (payload) => {
        return this.apiClient.getMovieDetail(payload);
    }

    _cacheWrapper = async (apiClientMethod, ttlMs) => {
        // if there is a valid cached result then return it
        const cacheResult = this.requestCacheStorage.get(apiClientMethod);
        if (cacheResult) return cacheResult;

        // otherwise, get a new result from the api
        const apiResult = await this.apiClient[apiClientMethod]();
        // if the api result is an error, then don't cache it
        if (apiResult.is_error === true) return apiResult;

        // otherwise cache the successful api result
        this.requestCacheStorage.set(apiClientMethod, apiResult, ttlMs);
        return apiResult;
    }
}

export default GeneralBackendApiClientCacheDecorator;