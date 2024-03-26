import {Button, Tooltip, Typography} from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React, {FC, useEffect} from 'react';
import ReactPlayer from "react-player";
import {useNavigate} from "react-router-dom";

import {posterURL, urls, youtubeURL} from "../../configs";
import {DateComponent} from "../DateComponent";
import DummyBackground from "../../dummy_photos/dummy_background.jpg";
import DummyPoster from "../../dummy_photos/dummy_poster.jpg";
import {useAppDispatch, useAppSelector, useMovieStatesQuery, useMovieVideoQuery} from "../../hooks";
import {IMovieDetails} from "../../interfaces";
import css from "./MovieDetails.module.css";
import {MovieGenres} from "../MovieGenres";
import {RatingStar} from "../RatingStar";
import {movieActions, videoActions} from "../../redux";

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
        revenue,
        tagline,
        belongs_to_collection
    } = movieDetails;
    const {movieStates} = useAppSelector(state => state.movieReducer);
    const {user, trigger} = useAppSelector(state => state.userReducer);
    const {crewMembers} = useAppSelector(state => state.personReducer);
    const {videos} = useAppSelector(state => state.videoReducer);
    const dispatch = useAppDispatch();
    const {playTrailer, playStopTrailer} = useMovieVideoQuery();
    useEffect(() => {
        dispatch(videoActions.getAll({id}));
        dispatch(movieActions.getMovieStates({id}));
        dispatch(movieActions.setMovieId(id));
    }, [dispatch, id, user, trigger]);
    const directors = crewMembers.filter(crewMember =>
        crewMember.job === "Director").map(director => director.name);
    const trailer = videos.find(video => video.type === "Trailer");
    const {setRemoveFromFavoriteList, setRemoveFromWatchList} = useMovieStatesQuery();
    const navigate = useNavigate();
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
                    <div style={{display: "flex"}}>
                        <Typography variant={"h3"}>{title}</Typography>
                    </div>
                    <RatingStar rating={vote_average}/>
                    <div className={css.buttonsDiv}>
                        <MovieGenres genres={genres}/>
                        {belongs_to_collection && <Tooltip title={belongs_to_collection.name}>
                            <Button color={"inherit"} onClick={() => navigate(`/collection/${belongs_to_collection.id}`)}>
                                <VideoLibraryIcon/>
                            </Button>
                        </Tooltip>}
                        {user &&
                            <div>
                                <Tooltip title={movieStates.watchlist ? "delete from Watch" : "add to Watch"}>
                                    <Button color={"inherit"} onClick={setRemoveFromWatchList}>
                                        {movieStates.watchlist
                                            ? <BookmarkOutlinedIcon/>
                                            : <BookmarkBorderOutlinedIcon fontSize={"medium"}/>}
                                    </Button>
                                </Tooltip>
                                <Tooltip title={movieStates.favorite ? "delete from Favorite" : "add to Favorite"}>
                                    <Button color={"inherit"} onClick={setRemoveFromFavoriteList}>
                                        {movieStates.favorite
                                            ? <FavoriteOutlinedIcon/>
                                            : <FavoriteBorderOutlinedIcon fontSize={"medium"}/>}
                                    </Button>
                                </Tooltip>
                            </div>
                        }
                    </div>
                    <Typography fontStyle={"italic"}>{tagline}</Typography>
                    <Typography sx={{marginTop: "0.5vw"}} align={"justify"} variant={"subtitle1"}>{overview}</Typography>
                </div>
                <div className={`${css.secondaryInfo} ${css.zIndex1}`}>
                    <Typography fontWeight={"bold"} variant={"body1"}>{directors.join(", ")}</Typography>
                    {!!directors.length && <Typography gutterBottom variant={"body2"}>{directors.length > 1 ? "Directors" : "Director"}</Typography>}
                    {!!release_date && <DateComponent time={release_date}/>}
                    {!!release_date && <Typography gutterBottom variant={"body2"}>Release Date</Typography>}
                    {!!runtime && <Typography fontWeight={"bold"} variant={"body1"}>
                        {`${Math.floor(runtime / 60)}h ${runtime % 60}m`}
                    </Typography>}
                    {!!runtime && <Typography gutterBottom variant={"body2"}>Run Time</Typography>}
                    {!!budget && <Typography fontWeight={"bold"} variant={"body1"}>
                        {budget.toLocaleString() + "$"}
                    </Typography>}
                    {!!budget && <Typography gutterBottom variant={"body2"}>Budget</Typography>}
                    {!!revenue && <Typography fontWeight={"bold"} variant={"body1"}>
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