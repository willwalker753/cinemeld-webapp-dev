import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SkeletonLoader = ({
    variant, // (string) "text", "circular", "rectangular", or "rounded"
    ...rest  // optional: width height (px number or css measurement string)
}) => {
    return (
        <Skeleton 
            variant={variant} 
            animation="wave" 
            {...rest} 
        />
    )
}

export default SkeletonLoader;