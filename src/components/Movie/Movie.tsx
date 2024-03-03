import {Typography} from "@mui/material";
import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import DummyPoster from "../../dummy_photos/dummy_poster.jpg"
import {IMovie} from "../../interfaces";
import css from "./Movie.module.css";
import {RatingStar} from "../RatingStar";
import {ReleaseDate} from "../ReleaseDate";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, vote_average, overview, poster_path, release_date} = movie;

    return (
        <div className={css.Movie}>
            <div className={css.posterDiv}>
                <img src={poster_path ? posterURL + urls.w300PosterSize + poster_path : DummyPoster} alt={title}/>
            </div>
            <Link to={`/movies/${id}`} className={css.details}>
                <Typography gutterBottom variant={"h5"}>{title}</Typography>
                <RatingStar rating={vote_average}/>
                <ReleaseDate release_date={release_date}/>
                <Typography sx={{marginTop: "8.4px"}} align={"justify"} variant={"body1"}>{overview}</Typography>
            </Link>
        </div>
    );
};

export {Movie};