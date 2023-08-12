import RequestAgentInterface from "./RequestAgentInterface";

class RequestAgentErrorTransformDecorator extends RequestAgentInterface {
    constructor(agent, errorTransformStrategy) {
        super();
        this.agent = agent;
        this.errorTransformStrategy = errorTransformStrategy;
    }

    get = async (url) => {
        try {
            return await this.agent.get(url);
        } catch (error) {
            return this.errorTransformStrategy.transform(error);
        }
    }

    post = async (url, payload) => {
        try {
            return await this.agent.post(url, payload);
        } catch (error) {
            return this.errorTransformStrategy.transform(error);
        }
    }
}

export default RequestAgentErrorTransformDecorator;