import React, { useMemo } from "react";
import PosterCard from "./PosterCard";
import "./detailedPosterCard.css";

const DetailedPosterCard = ({
    title,
    genreList,
    voteAverage,
    imageUrl,        
    onClick=null,
}) => {
    const genreDisplayText = useMemo(() => {
        const limitedGenreList = genreList.slice(0, 2);
        const genreNameList = limitedGenreList.reduce((list, genre) => [...list, genre.name ], []);
        const newGenreDisplayText = genreNameList.join(", ");
        return newGenreDisplayText;
    }, [genreList]);

    return (
        <div className="detailed-poster-card-container" onClick={onClick}>            
            <PosterCard 
                imageUrl={imageUrl}
            />
            <div className="">
                
            </div>
            <div className="detailed-poster-card-tray">
                <p className="title">{title}</p>
                <p className="subtitle">{genreDisplayText}</p>
            </div>
        </div>
    )
}

export default DetailedPosterCard;