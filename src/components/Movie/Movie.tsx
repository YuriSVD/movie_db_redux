import {Typography} from "@mui/material";
import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import {DateComponent} from "../DateComponent";
import DummyPoster from "../../dummy_photos/dummy_poster.jpg"
import {IMovie} from "../../interfaces";
import css from "./Movie.module.css";
import {RatingStar} from "../RatingStar";

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
            <div>
                <Link to={`/movies/${id}`} className={css.details}>
                    <Typography gutterBottom variant={"h5"}>{title}</Typography>
                    <RatingStar rating={vote_average}/>
                    <DateComponent time={release_date}/>
                    <Typography sx={{marginTop: "8.4px"}} align={"justify"} variant={"body1"}>{overview}</Typography>
                </Link>
            </div>
        </div>
    );
};

export {Movie};