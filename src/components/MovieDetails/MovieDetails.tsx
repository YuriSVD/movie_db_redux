import {Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import DummyBackground from "../../dummy_photos/dummy_background.jpg";
import DummyPoster from "../../dummy_photos/dummy_poster.jpg";
import {IMovieDetails} from "../../interfaces";
import css from "./MovieDetails.module.css";
import {MovieGenres} from "../MovieGenres";
import {RatingStar} from "../RatingStar";
import {ReleaseDate} from "../ReleaseDate";
import {movieService} from "../../services";

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>(null);
    useEffect(() => {
        movieService.getMovieDetails(movieId).then(value => value.data).then(value => setMovieDetails(value));
    }, [movieId]);

    return (
        <>
            {movieDetails &&
                <div>
                    <div className={css.movieDiv}
                         style={{backgroundImage: movieDetails.backdrop_path ? `url(${posterURL}${urls.originalPosterSize}${movieDetails.backdrop_path})`: DummyBackground}}>
                        <div className={css.zIndex1}>
                            <img
                                src={movieDetails.poster_path ? posterURL + urls.w300PosterSize + movieDetails.poster_path : DummyPoster}
                                alt={movieDetails.title}/>
                        </div>
                        <div className={`${css.mainInfo} ${css.zIndex1}`}>
                            <Typography variant={"h3"}>{movieDetails.title}</Typography>
                            <RatingStar rating={movieDetails.vote_average}/>
                            <MovieGenres genres={movieDetails.genres}/>
                            <Typography align={"justify"} variant={"subtitle1"}>{movieDetails.overview}</Typography>
                        </div>
                        <div className={`${css.secondaryInfo} ${css.zIndex1}`}>
                            <ReleaseDate release_date={movieDetails.release_date}/>
                            <Typography gutterBottom variant={"body2"}>Release Date</Typography>
                            <Typography className={css.bold} variant={"body1"}>
                                {`${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m`}
                            </Typography>
                            <Typography gutterBottom variant={"body2"}>Run Time</Typography>
                            <Typography className={css.bold} variant={"body1"}>
                                {movieDetails.budget.toLocaleString() + "$"}
                            </Typography>
                            <Typography gutterBottom variant={"body2"}>Budget</Typography>
                            <Typography className={css.bold} variant={"body1"}>
                                {movieDetails.revenue.toLocaleString() + "$"}
                            </Typography>
                            <Typography gutterBottom variant={"body2"}>Revenue</Typography>
                        </div>
                        <div className={css.overlay}></div>
                    </div>
                </div>
            }
        </>
    );
};

export {MovieDetails};