class RequestCacheStorage {
    constructor(cacheKey) {
        this.cacheKey = cacheKey;
        this.cacheData = this.loadCache();
    }

    loadCache = () => {
        const cachedData = sessionStorage.getItem(this.cacheKey);
        let cacheResult = {};
        if (cachedData) {
            cacheResult = JSON.parse(cachedData);
            // Remove expired keys when loading the cache
            this.removeExpiredKeys(cacheResult); 
        } 
        return cacheResult;
    }

    saveCache = () => {
        sessionStorage.setItem(this.cacheKey, JSON.stringify(this.cacheData));
    }

    removeExpiredKeys = (data) => {
        const currentTime = Date.now();
        for (const key in data) {
            if (data.hasOwnProperty(key) && data[key].expiresAt && data[key].expiresAt < currentTime) {
                delete data[key];
            }
        }
    }

    get = (key) => {
        const entry = this.cacheData[key];
        if (entry && entry.expiresAt && entry.expiresAt < Date.now()) {
            // Remove the key if its TTL has expired
            delete this.cacheData[key];
            this.saveCache();
            return undefined;
        }
        return entry ? entry.value : undefined;
    }

    /* 
    ttlMs examples
        -1    never expire
        0     expire immediatly
        1000  expire after 1 second
    */
    set = (key, value, ttlMs) => {
        if (ttlMs > -1) {
            // Calculate the expiration timestamp
            const expiresAt = Date.now() + ttlMs;
            this.cacheData[key] = { value, expiresAt };
            this.saveCache();
            return
        }
        // otherwise ttlMs is not provided or <= 0, treat it as no TTL
        this.cacheData[key] = { value };
        this.saveCache();
    }

    override = (data) => {
        this.cacheData = data;
        this.saveCache();
    }

    clear = () => {
        sessionStorage.removeItem(this.cacheKey);
        this.cacheData = {};
    }
}

export default RequestCacheStorage;