import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {SearchingMovie} from "../SearchingMovie";
import css from "./SearchingMovies.module.css"

interface IProps {
    movies: IMovie[]
}

const SearchingMovies:FC<IProps> = ({movies}) => {
    return (
        <div className={css.SearchingMovies}>
            {movies.map(movie => <SearchingMovie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchingMovies};