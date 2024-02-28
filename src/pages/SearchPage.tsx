import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {PaginationComponent, SearchingMovies} from "../components";
import {useAppContext} from "../hooks";
import {movieActions} from "../reducers/movie.reducer";
import {movieService} from "../services";

const SearchPage = () => {
    const [query, setQuery] = useSearchParams({page: "1"});
    const {state: {searchTitle, movies}, dispatch} = useAppContext();
    useEffect(() => {
        movieService.searchMovies(query.get("page"), searchTitle)
            .then(value => value.data)
            .then(value => {
                dispatch(movieActions.setAll(value.results));
                dispatch(movieActions.setTotalPage(value.total_pages));
            });
    }, [searchTitle, dispatch, query]);

    return (
        <div>
            <SearchingMovies movies={movies}/>
            <PaginationComponent query={query} setQuery={setQuery}/>
        </div>
    );
};

export {SearchPage};