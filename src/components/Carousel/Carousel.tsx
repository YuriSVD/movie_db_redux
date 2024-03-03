import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import React, {FC} from 'react';

import css from "./Carousel.module.css";
import {IMovie} from "../../interfaces";
import {MovieCarousel} from "../MoviesCarousel";
import {useCarouselQuery} from "../../hooks";

interface IProps {
    movies: IMovie[];
}

const Carousel:FC<IProps> = ({movies}) => {
    const {offset, prevButton, nextButton} = useCarouselQuery();
    setTimeout(() => nextButton(), 10000);
    return (
        <div className={css.CarouselDiv}>
            <div className={css.Carousel} style={{transform: `translateX(${offset}vw)`}}>
                {movies.map(movie => <MovieCarousel key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttonsDiv}>
                <button onClick={prevButton}>{<ArrowBackIos/>}</button>
                <button onClick={nextButton}>{<ArrowForwardIos/>}</button>
            </div>
        </div>
    );
};

export {Carousel};