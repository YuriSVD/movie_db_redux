import {Typography} from "@mui/material";
import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./MovieGenre.module.css";

interface IProps {
    genre: IGenre;
}

const MovieGenre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <Link className={css.MovieGenre} to={`/genre/${id}`}>
            <Typography variant={"body2"}>
                {name.toUpperCase()}
            </Typography>
        </Link>
    );
};

export {MovieGenre};