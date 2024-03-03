import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {Movies, PaginationComponent} from "../../components";
import css from "./GenrePage.module.css"
import {useAppContext, usePageQuery} from "../../hooks";
import {movieService} from "../../services";
import {movieActions} from "../../reducers";

const GenrePage = () => {
    const {genreId} = useParams();
    const {page} = usePageQuery();
    const {state: {movies, genres}, dispatch} = useAppContext();
    useEffect(() => {
        movieService.getAll(page, genreId)
            .then(value => value.data)
            .then(value => {
                dispatch(movieActions.setMovies(value.results));
                dispatch(movieActions.setTotalPage(value.total_pages));
            })
    }, [dispatch, genreId, page, genres]);
    return (
        <div className={css.GenrePage}>
            <Movies movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export {GenrePage};