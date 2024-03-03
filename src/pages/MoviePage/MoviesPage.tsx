import React, {useEffect} from 'react';

import {Genres, Movies, PaginationComponent} from "../../components";
import {useAppContext, usePageQuery} from "../../hooks";
import css from "./MoviePage.module.css";
import {movieService} from "../../services";
import {movieActions} from "../../reducers";

const MoviesPage = () => {
    const {page} = usePageQuery();
    const {state: {movies, genreIds}, dispatch} = useAppContext();
    useEffect(() => {
        movieService.getAll(page, genreIds).then(value => value.data).then(value => {
            dispatch(movieActions.setMovies(value.results));
            dispatch(movieActions.setTotalPage(value.total_pages));
        });
    }, [page, dispatch, genreIds]);

    return (
        <div className={css.MoviePage}>
            <div>
                <Genres/>
            </div>
            <div>
                <Movies movies={movies}/>
                <PaginationComponent/>
            </div>
        </div>
    );
};

export {MoviesPage};