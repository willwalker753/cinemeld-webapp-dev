import React, { useMemo, useState } from "react";
import DetailedPosterCard from "./posterCard/DetailedPosterCard";
import Button from "../button/Button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import "./posterCardCategoryRow.css";

const PosterCardCategoryRow = ({
    categoryTitle="",
    cards=[],    
    ...rest
}) => {    
    const swiperContainerId = useMemo(() => `poster-card-category-row-swiper-container-${uuidv4()}`, []);
    const slideCountPerClick = useMemo(() => 3, []); // the number of slides that are advanced when the next or prev button is clicked
    const [ prevButtonDisabled, setPrevButtonDisabled ] = useState(true);
    const [ nextButtonDisabled, setNextButtonDisabled ] = useState(false);

    const getSwiper = () => {
        return document.getElementById(swiperContainerId).swiper;
    }

    const goPrevSlide = () => {
        const swiper = getSwiper();
        for (let i=0; i<slideCountPerClick; i++) {
            swiper.slidePrev();
        }        
        afterSlideChange();        
    }

    const goNextSlide = () => {
        const swiper = getSwiper();
        for (let i=0; i<slideCountPerClick; i++) {
            swiper.slideNext();
        }
        afterSlideChange();        
    }

    const afterSlideChange = () => {
        const swiper = getSwiper();
        // enable or disable the navigation buttons depending on if there are more slides
        setPrevButtonDisabled(swiper.isBeginning)
        setNextButtonDisabled(swiper.isEnd)
    }

    return (
        <div className="poster-card-category-row-container" {...rest}>
            <div className="poster-card-category-row-title-container">
                <h2>{categoryTitle}</h2>
                <div className="poster-card-category-row-nav-button-container">
                    <Button 
                        className="poster-card-category-row-nav-button"
                        styleType="surface"
                        onClick={goPrevSlide} 
                        disabled={prevButtonDisabled}
                    >
                        <ChevronLeft sx={{ color: "inherit", fontSize: "inherit" }} /> 
                    </Button>
                    <Button 
                        className="poster-card-category-row-nav-button"
                        styleType="surface"
                        onClick={goNextSlide}
                        disabled={nextButtonDisabled}
                    >
                        <ChevronRight sx={{ color: "inherit", fontSize: "inherit" }} />
                    </Button>
                </div>
            </div>
            <div className="poster-card-category-row">
                <swiper-container
                    id={swiperContainerId}
                    slides-per-view="auto"


                /*

                    Left off here

                    swiper is slow/jerky on mobile in multiple browsers.

                    i added css-mode below, and that might fix it, need to test

                    if it does then i need to fix other stuff. 
                        like scrolling on desktop, 
                        the spacing on the first (and maybe last slide), 
                        and the number of slides scrolled each time the nav button is clicked


                */



                    css-mode="true"
                    // loop="true"
                    // free-mode="true"
                    // navigation="true"
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