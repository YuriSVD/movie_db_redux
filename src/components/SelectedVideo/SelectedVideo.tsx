import React, {FC} from 'react';
import ReactPlayer from "react-player";
import {useDispatch} from "react-redux";

import {urls, youtubeURL} from "../../configs";
import {useAppSelector} from "../../hooks";
import {IVideo} from "../../interfaces";
import css from "./SelectedVideo.module.css";
import {videoActions} from "../../redux";

interface IProps {
    video: IVideo,
    index: number
}

const SelectedVideo:FC<IProps> = ({video, index}) => {
    const {numberOfVideo, activeVideo} = useAppSelector(state => state.videoReducer);
    const dispatch = useDispatch();
    const {key} = video;

    const changeStatus = () => dispatch(videoActions.setActiveVideo(!activeVideo));
    const hover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (activeVideo) {
            return;
        }
        const showingVideo = document.getElementsByClassName("SelectedVideo_active__Y67xB")[0] as HTMLElement;
        const currentVideo = event.target as HTMLElement;
        showingVideo.classList.remove("SelectedVideo_active__Y67xB");
        currentVideo.parentElement.parentElement.classList.add("SelectedVideo_active__Y67xB");
    }

    return (
        <div onMouseEnter={(event) => hover(event)}
        className={index === numberOfVideo ? `${css.active} ${css.video}` : css.video}>
            <ReactPlayer
                onPlay={changeStatus}
                onPause={changeStatus}
                onEnded={changeStatus}
                controls={false}
                url={`${youtubeURL}${urls.watch}${key}`}
            />
        </div>
    );
};

export {SelectedVideo};