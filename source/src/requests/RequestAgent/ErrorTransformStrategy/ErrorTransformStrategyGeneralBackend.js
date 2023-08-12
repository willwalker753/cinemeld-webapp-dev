import ErrorTransformStrategyInterface from "./ErrorTransformStrategyInterface";

class ErrorTransformStrategyGeneralBackend extends ErrorTransformStrategyInterface {
    constructor() {
        super()
    }

    transform = (error) => {
        alert("do something")
    }
}

export default ErrorTransformStrategyGeneralBackend;