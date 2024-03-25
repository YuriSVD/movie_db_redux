import {Typography} from "@mui/material";
import React from 'react';

import {CastMovie} from "../CastMovie";
import css from "./CastMovies.module.css";
import {useAppSelector} from "../../hooks";

const CastMovies = () => {
    const {castMovies} = useAppSelector(state => state.personReducer);
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const movies = castMovies.filter(movie => movie.release_date !== "").sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    return (
        <div className={css.CastMovies}>
            {!!movies.length && <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h5"}>Acting</Typography>}
            {movies.map(castMovie => <CastMovie key={castMovie.id} castMovie={castMovie}/>)}
        </div>
    );
};


export {CastMovies};