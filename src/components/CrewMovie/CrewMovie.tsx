import React, {FC} from 'react';
import {ICrewMovie} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import css from "./CrewMovie.module.css";
import {DateComponent} from "../DateComponent";
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";

interface IProps {
    crewMovie: ICrewMovie;
}

const CrewMovie:FC<IProps> = ({crewMovie}) => {
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {id, title, release_date, job} = crewMovie;
    return (
        <div className={css.CrewMovie}>
            <div style={{color: isDarkTheme ? "white" : "black"}} className={css.date}>
                <DateComponent release_date={release_date}/>
            </div>
            <div className={css.title}>
                <Link to={`/movies/${id}`}>
                    <Typography sx={{color: isDarkTheme ? "white" : "black", fontWeight: "bold"}} variant={"body1"}>{title}</Typography>
                </Link>
                <Typography sx={{marginLeft: "10px", color: isDarkTheme ? "white" : "black"}} variant={"body2"}>{job}</Typography>
            </div>
        </div>
    );
};

export {CrewMovie};