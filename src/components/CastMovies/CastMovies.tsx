import React from 'react';
import {useAppSelector} from "../../hooks";
import {CastMovie} from "../CastMovie";
import {Typography} from "@mui/material";
import css from "./CastMovies.module.css";

const CastMovies = () => {
    const {castMovies} = useAppSelector(state => state.personReducer);
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const movies = castMovies.filter(movie => movie.media_type === "movie" && movie.release_date !== "").sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    return (
        <div className={css.CastMovies}>
            <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h5"}>Acting</Typography>
            {movies.map(castMovie => <CastMovie key={castMovie.id} castMovie={castMovie}/>)}
        </div>
    );
};


export {CastMovies};