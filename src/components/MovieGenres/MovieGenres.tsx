import React, {FC} from 'react';

import {IGenre} from "../../interfaces";
import css from "./MovieDetails.module.css"
import {MovieGenre} from "../MovieGenre";


interface IProps {
    genres: IGenre[];
}

const MovieGenres:FC<IProps> = ({genres}) => {
    return (
        <div className={css.MovieGenres}>
            {genres.map(genre => <MovieGenre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {MovieGenres};