import {Button, Typography} from "@mui/material";
import React, {FC, useEffect} from 'react';
import ReactPlayer from "react-player";

import {posterURL, urls, youtubeURL} from "../../configs";
import DummyBackground from "../../dummy_photos/dummy_background.jpg";
import DummyPoster from "../../dummy_photos/dummy_poster.jpg";
import {IMovieDetails} from "../../interfaces";
import css from "./MovieDetails.module.css";
import {MovieGenres} from "../MovieGenres";
import {RatingStar} from "../RatingStar";
import {movieActions} from "../../reducers";
import {ReleaseDate} from "../ReleaseDate";
import {useAppContext, useMovieVideoQuery} from "../../hooks";
import {videoService} from "../../services/video.service";

interface IProps {
    movieDetails: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {
        id,
        genres,
        release_date,
        title,
        vote_average,
        overview,
        poster_path,
        backdrop_path,
        budget,
        runtime,
        revenue
    } = movieDetails;
    const {state: {crew, videos}, dispatch} = useAppContext();
    const {playTrailer, playStopTrailer} = useMovieVideoQuery();
    useEffect(() => {
        videoService.getAll(id)
            .then(value => value.data)
            .then(value => dispatch(movieActions.getVideosToMovie(value.results)))
    }, [id, dispatch]);
    const directors = crew.filter(crewMember =>
        crewMember.job === "Director").map(director => director.name);
    const trailer = videos.find(video => video.type === "Trailer");
    return (
        <div>
            <div className={css.movieDiv}
                 style={{backgroundImage: backdrop_path ? `url(${posterURL}${urls.originalPosterSize}${backdrop_path})` : DummyBackground}}>
                <div className={css.zIndex1}>
                    <img
                        src={poster_path ? posterURL + urls.w300PosterSize + poster_path : DummyPoster}
                        alt={title}/>
                </div>
                <div className={`${css.mainInfo} ${css.zIndex1}`}>
                    {trailer && <ReactPlayer className={css.trailer}
                                  style={{visibility: playTrailer ? "visible" : "hidden"}}
                                  playing={playTrailer}
                                  controls={true}
                                  url={`${youtubeURL}${urls.watch}${trailer.key}`}
                                  width={"41.84vw"}
                                  height={"23.64vw"}
                                  onEnded={playStopTrailer}/>}
                    <Typography variant={"h3"}>{title}</Typography>
                    <RatingStar rating={vote_average}/>
                    <MovieGenres genres={genres}/>
                    <Typography align={"justify"} variant={"subtitle1"}>{overview}</Typography>
                </div>
                <div className={`${css.secondaryInfo} ${css.zIndex1}`}>
                    <Typography className={css.bold} variant={"body1"}>{directors.join(", ")}</Typography>
                    {!!directors.length && <Typography gutterBottom variant={"body2"}>Director</Typography>}
                    {!!release_date && <ReleaseDate release_date={release_date}/>}
                    {!!release_date && <Typography gutterBottom variant={"body2"}>Release Date</Typography>}
                    {!!runtime && <Typography className={css.bold} variant={"body1"}>
                        {`${Math.floor(runtime / 60)}h ${runtime % 60}m`}
                    </Typography>}
                    {!!runtime && <Typography gutterBottom variant={"body2"}>Run Time</Typography>}
                    {!!budget && <Typography className={css.bold} variant={"body1"}>
                        {budget.toLocaleString() + "$"}
                    </Typography>}
                    {!!budget && <Typography gutterBottom variant={"body2"}>Budget</Typography>}
                    {!!revenue && <Typography className={css.bold} variant={"body1"}>
                        {revenue.toLocaleString() + "$"}
                    </Typography>}
                    {!!revenue && <Typography gutterBottom variant={"body2"}>Revenue</Typography>}
                    {trailer && <Button sx={{color: "white", borderColor: "white"}}
                                        variant="outlined"
                                        onClick={playStopTrailer}>
                        {playTrailer ? "Stop Trailer" : "Play Trailer"}</Button>}
                </div>
                <div className={css.overlay}></div>
            </div>
        </div>
    );
};

export {MovieDetails};