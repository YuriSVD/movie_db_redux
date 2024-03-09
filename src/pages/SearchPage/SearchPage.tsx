import React, {useEffect} from 'react';

import {PaginationComponent, SearchingMovies} from "../../components";
import {useAppDispatch, useAppSelector, usePageQuery} from "../../hooks";
import {movieActions} from "../../redux";

const SearchPage = () => {
    const {page} = usePageQuery();
    const {movies, searchTitle} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.searchMoviesByName({page, query: searchTitle}))
    }, [page, searchTitle, dispatch]);

    return (
        <div>
            <SearchingMovies movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export {SearchPage};