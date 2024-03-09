import React, {useEffect} from 'react';

import {Carousel, Movies, SearchForm} from "../../components";
import {useAppDispatch, useAppSelector, usePageQuery} from "../../hooks";
import css from "./HomePage.module.css";
import {movieActions} from "../../redux";

const HomePage = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {page} = usePageQuery();

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [dispatch, page]);

    return (
        <div>
            <Carousel movies={movies}/>
            <div className={css.movies}>
                <SearchForm/>
                <Movies movies={movies}/>
            </div>
        </div>
    );
};

export {HomePage};