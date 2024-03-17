import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {Button, Typography} from "@mui/material";
import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {SelectedVideo} from "../SelectedVideo";
import css from "./SelectedVideos.module.css";
import {videoActions} from "../../redux";

const SelectedVideos = () => {
    const {movieId} = useParams();
    const {videos} = useAppSelector(state => state.videoReducer);
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const dispatch = useAppDispatch();
    const selectedVideos = videos.slice(0, 18);
    const navigate = useNavigate();
    dispatch(videoActions.setNumberOfVideo(selectedVideos.length - 1));
    return (
        <div>
            <Typography sx={{color: isDarkTheme ? "white" : "black"}} variant={"h5"}>Videos</Typography>
            <div style={{display: "flex"}}>
                <div className={css.videos}>
                    {selectedVideos.map((video, index) => <SelectedVideo key={video.id} video={video} index={index}/>)}
                </div>
                <Button
                    sx={{color: isDarkTheme ? "white" : "#1976d2"}}
                    onClick={() => navigate(`/movies/${movieId}/videos`)}>
                    {<KeyboardArrowRightIcon/>}
                </Button>
            </div>
        </div>
    );
};

export {SelectedVideos};