class GeneralBackendApiClient {
    constructor(requestAgent) {
        this.requestAgent = requestAgent;
    }

    healthcheck = () => {
        return this.requestAgent.get("/");
    }
}

export default GeneralBackendApiClient;