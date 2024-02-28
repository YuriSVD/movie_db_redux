import React, {useEffect} from 'react';

import {Carousel, Movies, SearchForm} from "../components";
import {movieService} from "../services";
import {useAppContext} from "../hooks";
import {movieActions} from "../reducers/movie.reducer";

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
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <SearchForm/>
                <Movies movies={movies}/>
            </div>
        </div>
    );
};

export {HomePage};