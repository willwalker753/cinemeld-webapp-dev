import RequestAgentInterface from "./RequestAgentInterface";

class RequestAgentErrorTransformDecorator extends RequestAgentInterface {
    constructor(agent, errorTransformStrategy) {
        super();
        this.agent = agent;
        this.errorTransformStrategy = errorTransformStrategy;
    }

    get = async (url) => {
        try {
            const response = await this.agent.get(url);
            return response.data;
        } catch (error) {
            return this.errorTransformStrategy.transform(error);
        }
    }

    post = async (url, payload) => {
        try {
            const response = await this.agent.post(url, payload);
            return response.data;
        } catch (error) {
            return this.errorTransformStrategy.transform(error);
        }
    }
}

export default RequestAgentErrorTransformDecorator;