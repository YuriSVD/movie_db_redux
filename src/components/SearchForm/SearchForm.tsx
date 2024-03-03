import {joiResolver} from "@hookform/resolvers/joi";
import {Alert, Button, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useAppContext} from "../../hooks";
import {movieActions} from "../../reducers";
import css from "./SearchForm.module.css";
import {MovieTitleValidator} from "../../validators";

interface IMovieTitle {
    movieTitle: string
}

const SearchForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IMovieTitle>({
        mode: "onSubmit",
        resolver: joiResolver(MovieTitleValidator)
    });
    const {state: {isDarkTheme}, dispatch} = useAppContext();
    const navigate = useNavigate();
    const search: SubmitHandler<IMovieTitle> = (title) => {
        dispatch(movieActions.searchMovies(title.movieTitle));
        navigate("/search");
        reset();
    }
    return (
        <div className={css.SearchForm}>
            <Paper className={css.form} component={"form"}
                   sx={{backgroundColor: isDarkTheme ? "white" : "#00143C"}}
                   onSubmit={handleSubmit(search)}>
                <SearchIcon sx={{color: isDarkTheme ? "black" : "white", padding: "0 10px"}}/>
                <InputBase
                    sx={{color: isDarkTheme ? "black" : "white"}}
                    type={"search"}
                    placeholder={"Search movies by title"}
                    fullWidth
                    {...register("movieTitle")}/>
                <Button sx={{color: isDarkTheme ? "" : "white"}} type={"submit"}>Search</Button>
            </Paper>
            {errors.movieTitle && <Alert className={css.alert} severity={"info"}>{errors.movieTitle.message}</Alert>}
        </div>);
};

export {SearchForm};