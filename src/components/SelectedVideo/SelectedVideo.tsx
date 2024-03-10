import React, {FC} from 'react';
import {IVideo} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import {videoActions} from "../../redux";
import css from "./SelectedVideo.module.css";
import ReactPlayer from "react-player";
import {urls, youtubeURL} from "../../configs";

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