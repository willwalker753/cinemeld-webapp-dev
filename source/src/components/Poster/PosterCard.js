import React from "react";
import "./posterCard.css";

const PosterCard = ({
    imageUrl,        
    onClick=()=>null,
    ...rest
}) => {
    return (
        <div className="poster-card-container" onClick={onClick} {...rest}>
            <img 
                className="poster-card-image"
                src={imageUrl} 
            />
        </div>
    )
}

export default PosterCard;