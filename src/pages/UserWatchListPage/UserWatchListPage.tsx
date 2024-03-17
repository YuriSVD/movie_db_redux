import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, usePageQuery} from "../../hooks";
import {movieActions} from "../../redux";
import {Movies, PaginationComponent} from "../../components";
import css from "./UserWatchListPage.module.css";

const UserWatchListPage = () => {
    const {page} = usePageQuery();
    const {user} = useAppSelector(state => state.userReducer);
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (user) {
            const {id} = user;
            dispatch(movieActions.getWatchList({id, page}));
        }
    }, [user, dispatch, page]);
    return (
        <div className={css.UserWatchListPage}>
            <Movies movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export {UserWatchListPage};