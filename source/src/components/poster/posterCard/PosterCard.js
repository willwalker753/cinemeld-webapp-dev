import React from "react";
import "./posterCard.css";

const PosterCard = ({
    imageUrl,        
    onClick=null,
    imgProps={},
    ...rest
}) => {
    return (
        <div className="poster-card-container" onClick={onClick} {...rest}>
            <img 
                className="poster-card-image"
                src={imageUrl} 
                {...imgProps}
            />
        </div>
    )
}

export default PosterCard;