import React from "react";
import DetailedPosterCard from "./posterCard/DetailedPosterCard";
import "./posterCardCategoryRow.css";

const PosterCardCategoryRow = ({
    categoryTitle="",
    cards=[],
    getMoreCards=()=>null,
    ...rest
}) => {    

// getMoreCards

    return (
        <div className="poster-card-category-row-container" {...rest}>
            <div className="poster-card-category-row-title-container">
                <h2>{categoryTitle}</h2>
            </div>
            <div className="poster-card-category-row">
                {cards.map((card, index) => {
                    const { title, genreList, voteAverage, imageUrl, onClick } = card;                
                    return (
                        <DetailedPosterCard
                            key={index}
                            title={title}
                            genreList={genreList}
                            voteAverage={voteAverage}
                            imageUrl={imageUrl}
                            onClick={onClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PosterCardCategoryRow;