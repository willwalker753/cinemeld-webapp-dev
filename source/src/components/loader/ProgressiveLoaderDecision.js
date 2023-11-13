import React from "react";

/*
This component centralizes loader logic for data that could be set from multiple sources

Example:
    You have a "data" state value that is an object. 
    The keys are set in the object at different times as data is loaded from multiple sources (like a request and session storage for example)
    And you dont want to add if statements (for an inline loader) to all the indidual pieces of jsx 
    So the solution would be to wrap each piece of jsx (that depend on a "data" state key) with this component
*/

const ProgressiveLoaderDecision = ({ 
    isRequestDone,  // (boolean) true when all the data requests are complete 
    isDataSet,      // (booelan) true when the data value is set in state
    loaderChildren, // jsx to render a loader
    requestFailChildren=null, // jsx to render when the request failed to set the data
    children        // jsx to render when the data is set
}) => {
    // if the data is set,
    // then we don't need to worry about anything else,
    // so render the children
    if (isDataSet === true) {
        return children;
    }

    // if the request is complete, but the data is not set,
    // then the request failed
    if (isRequestDone === true) {
        return requestFailChildren;
    }

    // otherwise show a loader...
    //  because the data is not set, and the request is not done
    return loaderChildren;
}

export default ProgressiveLoaderDecision;