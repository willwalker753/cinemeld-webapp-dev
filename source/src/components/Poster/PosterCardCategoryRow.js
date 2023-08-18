import React from "react";
import PosterCard from "./PosterCard";

const PosterCardCategoryRow = ({
    categoryTitle="",
    cards=[],
    getMoreCards=()=>null,
    ...rest
}) => {    

// getMoreCards

    return (
        <div className="poster-card-category-row" {...rest}>
            <h2>{categoryTitle}</h2>
            {cards.map((card, index) => {
                const { imageUrl, onClick } = card;
                return (
                    <PosterCard
                        key={index}
                        imageUrl={imageUrl}
                        onClick={onClick}
                    />
                )
            })}
        </div>
    )
}

export default PosterCardCategoryRow;