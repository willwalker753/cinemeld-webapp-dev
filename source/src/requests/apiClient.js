import axios from "axios";
import ErrorTransformStrategyGeneralBackend from "./RequestAgent/ErrorTransformStrategy/ErrorTransformStrategyGeneralBackend";
import RequestAgent from "./RequestAgent/RequestAgent";
import RequestAgentErrorTransformDecorator from "./RequestAgent/RequestAgentErrorTransformDecorator";
import RequestAgentUrlBaseDecorator from "./RequestAgent/RequestAgentUrlBaseDecorator";
import GeneralBackendApiClient from "./GeneralBackendApiClient";

const generalBackendUrlBase = process.env.REACT_APP_GENERAL_BACKEND_URL_BASE;
if (!generalBackendUrlBase) {
    alert("I'm sorry, the site is experiencing some technical difficulties at the moment. Please try again soon");
    throw Error(`Missing env variable: REACT_APP_GENERAL_BACKEND_URL_BASE. Value: ${generalBackendUrlBase}`);
}

const errorTransformStrategy = new ErrorTransformStrategyGeneralBackend()

const requestAgent = new RequestAgentUrlBaseDecorator(
    new RequestAgentErrorTransformDecorator(
        new RequestAgent(
            axios
        ),
        errorTransformStrategy
    ),
    generalBackendUrlBase
)

const generalBackendApiClient = new GeneralBackendApiClient(
    requestAgent
)

export default generalBackendApiClient;