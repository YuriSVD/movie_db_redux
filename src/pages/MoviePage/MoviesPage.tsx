import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {Genres, Movies, PaginationComponent} from "../../components";
import {useAppContext} from "../../hooks";
import css from "./MoviePage.module.css";
import {movieService} from "../../services";
import {movieActions} from "../../reducers";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({page: "1"});
    const {state: {movies, genreIds}, dispatch} = useAppContext();
    useEffect(() => {
        movieService.getAll(query.get("page"), genreIds).then(value => value.data).then(value => {
            dispatch(movieActions.setAll(value.results));
            dispatch(movieActions.setTotalPage(value.total_pages));
        });
    }, [query, dispatch, genreIds]);

    return (
        <div className={css.MoviePage}>
            <div>
                <Genres/>
            </div>
            <div>
                <Movies movies={movies}/>
                <PaginationComponent query={query} setQuery={setQuery}/>
            </div>
        </div>
    );
};

export {MoviesPage};