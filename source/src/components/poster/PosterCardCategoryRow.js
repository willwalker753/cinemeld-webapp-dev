import React from "react";
import DetailedPosterCard from "./posterCard/DetailedPosterCard";
import "./posterCardCategoryRow.css";

const PosterCardCategoryRow = ({
    categoryTitle="",
    cards=[],
    getMoreCards=()=>null,
    ...rest
}) => {    
    return (
        <div className="poster-card-category-row-container" {...rest}>
            <div className="poster-card-category-row-title-container">
                <h2>{categoryTitle}</h2>
            </div>
            <div className="poster-card-category-row">
                <swiper-container
                    slides-per-view="auto"
                    // loop="true"
                    // free-mode="true"
                >
                    {cards.map((card, index) => {
                        const { title, genreList, votePercent, voteFactor, imageUrl, onClick } = card;                
                        return (
                            <swiper-slide
                                key={index}
                                lazy="true"
                            >
                                <DetailedPosterCard
                                    key={index}
                                    title={title}
                                    genreList={genreList}
                                    votePercent={votePercent}
                                    voteFactor={voteFactor}
                                    imageUrl={imageUrl}
                                    onClick={onClick}
                                />
                            </swiper-slide>
                        )
                    })}
                </swiper-container>
            </div>
        </div>
    )
}

export default PosterCardCategoryRow;