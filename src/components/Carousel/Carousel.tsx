import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import React, {FC, useState} from 'react';

import css from "./Carousel.module.css";
import {IMovie} from "../../interfaces";
import {MovieCarousel} from "../MoviesCarousel";

interface IProps {
    movies: IMovie[];
}

const Carousel:FC<IProps> = ({movies}) => {
    const [offset, setOffset] = useState<number>(0);
    /*setTimeout(() => {
       setOffset(offset - 100);
       if (offset === -(100 * (movies.length - 1))) {
           setOffset(0);
       }
   }, 5000);*/
    return (
        <div className={css.CarouselDiv}>
            <div className={css.Carousel} style={{transform: `translateX(${offset}vw)`}}>
                {movies.map(movie => <MovieCarousel key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttonsDiv}>
                <button onClick={() => {
                    setOffset(offset + 100);
                    if (offset === 0) {
                        setOffset(-(100 * (movies.length - 1)));
                    }
                }}>{<ArrowBackIos/>}</button>
                <button onClick={() => {
                    setOffset(offset - 100);
                    if (offset === -(100 * (movies.length - 1))) {
                        setOffset(0);
                    }
                }}>{<ArrowForwardIos/>}</button>
            </div>
        </div>
    );
};

export {Carousel};