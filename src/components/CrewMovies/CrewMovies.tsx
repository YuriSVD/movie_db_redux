import React from 'react';
import {useAppSelector} from "../../hooks";
import {CrewMovie} from "../CrewMovie";
import {Typography} from "@mui/material";
import css from "./CrewMovies.module.css";
import {ICrewMovie} from "../../interfaces";

const CrewMovies = () => {
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {crewMovies} = useAppSelector(state => state.personReducer);
    const movies = crewMovies
            .filter(movie => movie.media_type === "movie" && movie.release_date !== "")
            .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());

    const obj = Object.create({movies});
    console.log(obj);
    /*const sort = (array: any) => {
        let sortArray = [];
        for (let i = 0; i < array.length; i++) {
            if (i !== 0 && sortArray[sortArray.length - 1].title === array[i].title) {
                sortArray[sortArray.length - 1].job = sortArray[sortArray.length - 1].job + array[i].job;
            } else {
                sortArray.push(array[i])
            }
        }
        return sortArray;
    }
    console.log(sort(m));*/
    return (
        <div className={css.CrewMovies}>
            <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h5"}>Production</Typography>
            {movies.map(crewMovie => <CrewMovie key={crewMovie.id} crewMovie={crewMovie}/>)}
        </div>
    );
};

export {CrewMovies};