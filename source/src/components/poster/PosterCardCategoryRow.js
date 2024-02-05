import React, { useMemo, useState, useEffect, useRef } from "react";
import DetailedPosterCard from "./posterCard/DetailedPosterCard";
import Button from "../button/Button";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./posterCardCategoryRow.css";

const PosterCardCategoryRow = ({
    categoryTitle="",
    cards=[],    
    ...rest
}) => {    
    // const glideRef = useRef(null);
    // const slideCountPerClick = useMemo(() => 3, []); // the number of slides that are advanced when the next or prev button is clicked
    // const [ prevButtonDisabled, setPrevButtonDisabled ] = useState(true);
    // const [ nextButtonDisabled, setNextButtonDisabled ] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {

    //         const glide = new Glide(glideRef.current, {
    //             type: 'slider',
    //             // bound: true, // true = dont show partial view of slides at the end
    //             gap: 10, // pixel space between slides
    //             swipeThreshold: 80, // pixels of mobile swiping required to change slides
    //             dragThreshold: 120, // pixels of desktop swiping required to change slides
    //             perTouch: false, // max number of slides to swipe at once
    //             touchRatio: 0.7,
    //             animationDuration: 200,
    //             rewind: false,
    //             perView: 7,
    //             breakpoints: {
    //                 800: {
    //                     perView: 3,
    //                 },
    //                 1200: {
    //                     perView: 5,
    //                 },
    //             }
    //         })
    //         glide.mount()
    //     },500)

    //     // return () => {
    //     //     glide.destroy();
    //     // };
    // }, [])

    // const getSwiper = () => {
    //     return document.getElementById(swiperContainerId).swiper;
    // }

    // const goPrevSlide = () => {
    //     const swiper = getSwiper();
    //     for (let i=0; i<slideCountPerClick; i++) {
    //         swiper.slidePrev();
    //     }        
    //     afterSlideChange();        
    // }

    // const goNextSlide = () => {
    //     const swiper = getSwiper();
    //     for (let i=0; i<slideCountPerClick; i++) {
    //         swiper.slideNext();
    //     }
    //     afterSlideChange();        
    // }

    // const afterSlideChange = () => {
    //     const swiper = getSwiper();
    //     // enable or disable the navigation buttons depending on if there are more slides
    //     setPrevButtonDisabled(swiper.isBeginning)
    //     setNextButtonDisabled(swiper.isEnd)
    // }

    return (
        <div className="poster-card-category-row-container" {...rest}>
            <div className="poster-card-category-row-title-container">
                <h2>{categoryTitle}</h2>
                <div className="poster-card-category-row-nav-button-container">
                    <Button 
                        className="poster-card-category-row-nav-button"
                        styleType="surface"
                        // onClick={goPrevSlide} 
                        // disabled={prevButtonDisabled}
                    >
                        <ChevronLeft sx={{ color: "inherit", fontSize: "inherit" }} /> 
                    </Button>
                    <Button 
                        className="poster-card-category-row-nav-button"
                        styleType="surface"
                        // onClick={goNextSlide}
                        // disabled={nextButtonDisabled}
                    >
                        <ChevronRight sx={{ color: "inherit", fontSize: "inherit" }} />
                    </Button>
                </div>
            </div>


            {/* 
            
            
            left off here

            glide doesnt seem to be working out

            maybe try splide
            https://splidejs.com/
            see the "drag free" demo

            dont forget to test on mobile before continuing too far
            remember swiper was jerky/laggy on mobile
            
            */}

            <Splide 
                aria-label=""
            >                
                {cards.map((card, index) => {
                    const { title, genreList, votePercent, voteFactor, imageUrl, onClick } = card;                
                    return (
                        <SplideSlide>
                            <DetailedPosterCard
                                key={index}
                                title={title}
                                genreList={genreList}
                                votePercent={votePercent}
                                voteFactor={voteFactor}
                                imageUrl={imageUrl}
                                onClick={onClick}
                            />
                        </SplideSlide>
                    )
                })}
            </Splide>
            {/* <div className="poster-card-category-row">
                <div 
                    ref={glideRef} 
                    className="poster-card-category-row-carousel"
                >
                    <div 
                        className="glide__track" 
                        data-glide-el="track"
                    >
                        <ul className="poster-card-category-row-carousel-slides glide__slides">
                            {cards.map((card, index) => {
                                const { title, genreList, votePercent, voteFactor, imageUrl, onClick } = card;                
                                return (
                                    <li 
                                        key={index}
                                        className="glide__slide"
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
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div> */}


            {/* <div className="poster-card-category-row">
                <div 
                    ref={glideRef} 
                    className="poster-card-category-row-carousel"
                >
                    <div 
                        className="glide__track" 
                        data-glide-el="track"
                    >
                        <ul className="poster-card-category-row-carousel-slides glide__slides">
                            {cards.map((card, index) => {
                                const { title, genreList, votePercent, voteFactor, imageUrl, onClick } = card;                
                                return (
                                    <li 
                                        key={index}
                                        className="glide__slide"
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
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default PosterCardCategoryRow;