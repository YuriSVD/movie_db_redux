import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {Movie} from "../Movie";
import css from "./Movies.module.css";

interface IProps {
    movies: IMovie[]
}

const Movies:FC<IProps> = ({movies}) => {
    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};