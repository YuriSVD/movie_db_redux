import {Button, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from 'react';
import {useNavigate} from "react-router-dom";

import {useAppContext} from "../../hooks";
import {movieActions} from "../../reducers/movie.reducer";
import {SubmitHandler, useForm} from "react-hook-form";

interface IMovieTitle {
    movieTitle: string
}

const SearchForm = () => {
    const {register, handleSubmit, reset} = useForm<IMovieTitle>();
    const {dispatch} = useAppContext();
    const navigate = useNavigate();
    const search: SubmitHandler<IMovieTitle> = (title) => {
        dispatch(movieActions.searchMovies(title.movieTitle));
        navigate("/search");
        reset();
    }
    return (
        <Paper component={"form"}
               sx={{width: "80vw", padding: "2px 4px", display: "flex", alignItems: "center"}}
               onSubmit={handleSubmit(search)}>
            <SearchIcon/>
            <InputBase
                type={"search"}
                placeholder={"Search movies by title"}
                fullWidth
                {...register("movieTitle")}/>
            <Button type={"submit"}>Search</Button>
        </Paper>
    );
};

export {SearchForm};