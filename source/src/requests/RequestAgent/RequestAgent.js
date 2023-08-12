import RequestAgentInterface from "./RequestAgentInterface";

class RequestAgent extends RequestAgentInterface {
    constructor(axiosFacade) {
        super();
        this.axiosFacade = axiosFacade;
    }

    get = async (url) => {
        return await this.axiosFacade.get(url);
    }

    post = async (url, payload) => {
        return await this.axiosFacade.post(url, payload);
    }
}

export default RequestAgent;