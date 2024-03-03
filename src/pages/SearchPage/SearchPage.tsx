import React, {useEffect} from 'react';

import {PaginationComponent, SearchingMovies} from "../../components";
import {useAppContext, usePageQuery} from "../../hooks";
import {movieActions} from "../../reducers";
import {movieService} from "../../services";

const SearchPage = () => {
    const {page} = usePageQuery();
    const {state: {searchTitle, movies}, dispatch} = useAppContext();
    useEffect(() => {
        movieService.searchMovies(page, searchTitle)
            .then(value => value.data)
            .then(value => {
                dispatch(movieActions.setMovies(value.results));
                dispatch(movieActions.setTotalPage(value.total_pages));
            });
    }, [page, searchTitle, dispatch]);

    return (
        <div>
            <SearchingMovies movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export {SearchPage};