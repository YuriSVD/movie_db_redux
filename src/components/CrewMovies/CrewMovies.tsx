import {Typography} from "@mui/material";
import React from 'react';

import {CrewMovie} from "../CrewMovie";
import css from "./CrewMovies.module.css";
import {useAppSelector, useCrewQuery} from "../../hooks";

const CrewMovies = () => {
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {crewMovies} = useAppSelector(state => state.personReducer);
    const {getMovies} = useCrewQuery();
    const movies = crewMovies
        .filter(movie => movie.release_date !== "")
        .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());

    return (
        <div className={css.CrewMovies}>
            {!!movies.length && <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom
                         variant={"h5"}>Production</Typography>}
            {getMovies(movies).map(movie => <CrewMovie key={movie.id} crewMovie={movie}/>)}
        </div>
    );
};

export {CrewMovies};