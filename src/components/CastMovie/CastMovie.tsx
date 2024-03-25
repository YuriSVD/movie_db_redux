import {Typography} from "@mui/material";
import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from "./CastMovie.module.css";
import {DateComponent} from "../DateComponent";
import {useAppSelector} from "../../hooks";
import {ICastMovie} from "../../interfaces";

interface IProps {
    castMovie: ICastMovie;
}

const CastMovie:FC<IProps> = ({castMovie}) => {
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {id, title, release_date, character} = castMovie;
    return (
        <div className={css.CastMovie}>
            <div style={{color: isDarkTheme ? "white" : "black"}} className={css.date}>
                <DateComponent time={release_date}/>
            </div>
            <div className={css.title}>
                <Link to={`/movies/${id}`}>
                    <Typography sx={{color: isDarkTheme ? "white" : "black", fontWeight: "bold"}} variant={"body1"}>{title}</Typography>
                </Link>
                <Typography sx={{marginLeft: "10px", color: isDarkTheme ? "white" : "black"}} variant={"body2"}>as {character}</Typography>
            </div>
        </div>
    );
};

export {CastMovie};