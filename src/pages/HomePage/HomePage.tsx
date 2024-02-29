import React, {useEffect} from 'react';

import {Carousel, Movies, SearchForm} from "../../components";
import {useAppContext} from "../../hooks";
import css from "./HomePage.module.css";
import {movieActions} from "../../reducers";
import {movieService} from "../../services";

const HomePage = () => {
    const {state: {movies}, dispatch} = useAppContext();
    useEffect(() => {
        movieService.getAll("1").then(value => value.data).then(value => {
            dispatch(movieActions.setAll(value.results))
        });
    }, [dispatch]);

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