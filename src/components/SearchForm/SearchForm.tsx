import {Button, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useAppContext} from "../../hooks";
import {movieActions} from "../../reducers";

interface IMovieTitle {
    movieTitle: string
}

const SearchForm = () => {
    const {register, handleSubmit, reset} = useForm<IMovieTitle>();
    const {state: {isDarkTheme}, dispatch} = useAppContext();
    const navigate = useNavigate();
    const search: SubmitHandler<IMovieTitle> = (title) => {
        dispatch(movieActions.searchMovies(title.movieTitle));
        navigate("/search");
        reset();
    }
    return (
        <Paper component={"form"}
               sx={{
                   backgroundColor: isDarkTheme ? "white" : "#00143C",
                   margin: "2.6vw 0",
                   width: "80vw",
                   padding: "2px 4px",
                   display: "flex",
                   alignItems: "center"}}
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
    );
};

export {SearchForm};