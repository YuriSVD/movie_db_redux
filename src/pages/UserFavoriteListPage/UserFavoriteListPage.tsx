import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, usePageQuery} from "../../hooks";
import {movieActions} from "../../redux";
import {Movies, PaginationComponent} from "../../components";
import css from "./UserFavoriteListPage.module.css";

const UserFavoriteListPage = () => {
    const {page} = usePageQuery();
    const {user} = useAppSelector(state => state.userReducer);
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect( () => {
        if (user) {
            dispatch(movieActions.getFavoriteList({id: user.id, page}));
        }
    }, [user, dispatch, page]);
    return (
        <div className={css.UserFavoriteListPage}>
            <Movies movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export {UserFavoriteListPage};