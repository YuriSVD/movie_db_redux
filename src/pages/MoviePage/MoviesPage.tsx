import React, {useEffect} from 'react';

import {Genres, Movies, PaginationComponent} from "../../components";
import {useAppDispatch, useAppSelector, usePageQuery} from "../../hooks";
import css from "./MoviePage.module.css";
import {movieActions} from "../../redux";

const MoviesPage = () => {
    const {page} = usePageQuery();
    const {movies} = useAppSelector(state => state.movieReducer);
    const {genreIds} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieActions.getAll({page, genreIds}))
    }, [page, genreIds, dispatch]);

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