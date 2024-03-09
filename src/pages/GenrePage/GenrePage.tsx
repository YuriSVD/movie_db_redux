import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {Movies, PaginationComponent} from "../../components";
import css from "./GenrePage.module.css"
import {useAppDispatch, useAppSelector, usePageQuery} from "../../hooks";
import {movieActions} from "../../redux";

const GenrePage = () => {
    const {genreId} = useParams();
    const {page} = usePageQuery();
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page, genreIds: genreId}))
    }, [dispatch, page, genreId]);

    return (
        <div className={css.GenrePage}>
            <Movies movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export {GenrePage};