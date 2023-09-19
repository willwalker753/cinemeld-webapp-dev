import React, { useMemo } from "react";
import PosterCard from "./PosterCard";
import "./detailedPosterCard.css";
import CircleProgressChart from "../../chart/circleProgressChart/CircleProgressChart";

const DetailedPosterCard = ({
    title,
    genreList,
    votePercent,
    voteFactor,
    imageUrl,        
    onClick=null,
}) => {
    const genreDisplayText = useMemo(() => {
        const limitedGenreList = genreList.slice(0, 2);
        const genreNameList = limitedGenreList.reduce((list, genre) => [...list, genre.name ], []);
        const newGenreDisplayText = genreNameList.join(", ");
        return newGenreDisplayText;
    }, [genreList]);

    const chartPercent = useMemo(() => {
        return Math.round(votePercent)
    }, [votePercent]);

    const chartLabel = useMemo(() => {
        // convert the factor to a scale of 0 to 10 with 1 decimal place
        let newChartLabel = (voteFactor * 10).toFixed(1);
        if (newChartLabel === "10.0") {
            newChartLabel = "10";
        }
        return newChartLabel;
    }, [voteFactor]);

    return (
        <div className="detailed-poster-card-container" onClick={onClick}>            
            <PosterCard 
                imageUrl={imageUrl}
            />
            <div className="detailed-poster-card-rating" title="User Rating">
                <CircleProgressChart 
                    percent={chartPercent}
                    label={chartLabel}
                />
            </div>
            <div className="detailed-poster-card-tray">
                <p className="title">{title}</p>
                <p className="subtitle">{genreDisplayText}</p>
            </div>
        </div>
    )
}

export default DetailedPosterCard;