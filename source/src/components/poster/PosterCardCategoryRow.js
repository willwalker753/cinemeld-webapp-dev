import React, { useMemo, useState, useEffect } from "react";
import DetailedPosterCard from "./posterCard/DetailedPosterCard";
import Button from "../button/Button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "./posterCardCategoryRow.css";
import "./posterCardCategoryRowSplide.css";

const PosterCardCategoryRow = ({
    categoryTitle="",
    cards=[],    
    ...rest
}) => {    
    // const setSplideSlidesPerPage = (breakpoints) => {
    //     const desired
    // }
    return (
        <div className="poster-card-category-row-container" {...rest}>
            <Splide 
                aria-label={categoryTitle}
                hasTrack={false}
                options={{
                    type: "slide",
                    drag: "free",
                    mediaQuery: "min", // breakpoints are mobile first, min-width
                    autoWidth: true,
                    lazyLoad: "sequential",
                    perMove: 1,
                    // perPage: 8,
                    gap: "1rem",
                    padding: { left: "1rem", right: "1rem" },
                    breakpoints: {
                        550: {
                            perMove: 2,
                        },
                        800: {
                            // perPage: 5,
                            gap: "2rem",
                            padding: { left: "3rem", right: "3rem" },
                            perMove: 3,
                        },
                        1100: {
                            // perPage: 6,
                            gap: "2rem",
                            padding: { left: "3rem", right: "3rem" },
                            perMove: 4,
                        },
                    }
                }}
            >    
                <div className="poster-card-category-row-title-container">
                    <h2>{categoryTitle}</h2>
                    <div className="poster-card-category-row-nav-button-container splide__arrows">
                        <Button 
                            className="poster-card-category-row-nav-button splide__arrow splide__arrow--prev"
                            styleType="surface"
                        >
                            <ChevronLeft sx={{ color: "inherit", fontSize: "inherit" }} /> 
                        </Button>
                        <Button 
                            className="poster-card-category-row-nav-button splide__arrow splide__arrow--next"
                            styleType="surface"
                        >
                            <ChevronRight sx={{ color: "inherit", fontSize: "inherit" }} />
                        </Button>
                    </div>
                </div>

                <SplideTrack>
                    {cards.map((card, index) => {
                        const { title, genreList, votePercent, voteFactor, imageUrl, onClick } = card;                
                        return (
                            <SplideSlide key={index}>
                                <DetailedPosterCard                                    
                                    title={title}
                                    genreList={genreList}
                                    votePercent={votePercent}
                                    voteFactor={voteFactor}
                                    imageUrl={imageUrl}
                                    onClick={onClick}
                                    imgProps={{
                                        "src": null,
                                        "data-splide-lazy": imageUrl
                                    }}  
                                />
                            </SplideSlide>
                        )
                    })}
                </SplideTrack>
            </Splide>
        </div>
    )
}

export default PosterCardCategoryRow;