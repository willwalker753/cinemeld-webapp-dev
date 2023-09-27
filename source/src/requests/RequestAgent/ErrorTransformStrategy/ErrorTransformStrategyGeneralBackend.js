import ErrorTransformStrategyInterface from "./ErrorTransformStrategyInterface";

class ErrorTransformStrategyGeneralBackend extends ErrorTransformStrategyInterface {
    constructor() {
        super()
    }

    transform = (error) => {
        // default error
        let transformedError = {
            is_error: true,
            message: "There was an unexpected error. Please try again soon",
            status: 500
        }

        // attempt to parse the general backend error
        try {
            transformedError.status = error.response.status;
            transformedError.message = error.response.data.message;
        } catch(error) {}
        
        return transformedError;
    }
}

export default ErrorTransformStrategyGeneralBackend;