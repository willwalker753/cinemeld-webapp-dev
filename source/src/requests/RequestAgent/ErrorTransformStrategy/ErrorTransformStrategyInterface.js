class ErrorTransformStrategyInterface {
    transform = (error) => {
        throw new Error("transform method not implemented")
    }
}

export default ErrorTransformStrategyInterface;