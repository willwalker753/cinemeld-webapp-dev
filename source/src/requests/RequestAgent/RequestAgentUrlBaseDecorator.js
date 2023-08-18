import RequestAgentInterface from "./RequestAgentInterface";

class RequestAgentUrlBaseDecorator extends RequestAgentInterface {
    constructor(agent, urlBase) {
        super();
        this.agent = agent;
        this.urlBase = urlBase;
    }

    get = async (url) => {
        return this.agent.get(this._buildRequestUrl(url));
    }

    post = async (url, payload) => {
        return this.agent.post(this._buildRequestUrl(url), payload);
    }

    _buildRequestUrl = (path) => {
        // ensure the urlbase does not have a trailing slash
        let safeUrlBase = this.urlBase;
        if (safeUrlBase.endsWith("/") === true) {
            safeUrlBase = safeUrlBase.slice(0, safeUrlBase.length-1);
        }
        
        // ensure the path has a leading slash
        let safePath = path;
        if (safePath.startsWith("/") === false) {
            safePath = `/${safePath}`;
        }

        return safeUrlBase + safePath;
    }
}

export default RequestAgentUrlBaseDecorator;