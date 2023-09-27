import axios from "axios";
import ErrorTransformStrategyGeneralBackend from "../RequestAgent/ErrorTransformStrategy/ErrorTransformStrategyGeneralBackend";
import RequestAgent from "../RequestAgent/RequestAgent";
import RequestAgentErrorTransformDecorator from "../RequestAgent/RequestAgentErrorTransformDecorator";
import RequestAgentUrlBaseDecorator from "../RequestAgent/RequestAgentUrlBaseDecorator";

import GeneralBackendApiClient from "./GeneralBackendApiClient";
import GeneralBackendApiClientCacheDecorator from "./GeneralBackendApiClientCacheDecorator";
import RequestCacheStorage from "../RequestCache/RequestCacheStorage";

// if the api url base env variable is not provided,
// then throw and error to stop the app and show an error message
const generalBackendUrlBase = process.env.REACT_APP_GENERAL_BACKEND_URL_BASE;
if (!generalBackendUrlBase) {
    alert("The site is experiencing some technical difficulties at the moment. Please try again soon");
    throw Error(`Missing env variable: REACT_APP_GENERAL_BACKEND_URL_BASE. Value: ${generalBackendUrlBase}`);
}

const errorTransformStrategy = new ErrorTransformStrategyGeneralBackend()

const requestAgent = new RequestAgentUrlBaseDecorator(
    new RequestAgentErrorTransformDecorator(
        new RequestAgent(axios),
        errorTransformStrategy
    ),
    generalBackendUrlBase
)

const generalBackendApiClient = new GeneralBackendApiClientCacheDecorator(
    new GeneralBackendApiClient(requestAgent),
    new RequestCacheStorage("request_cache_storage_general_backend")
)

export default generalBackendApiClient;