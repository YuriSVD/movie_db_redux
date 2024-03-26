import {Typography} from "@mui/material";
import React, {FC} from 'react';

import css from "./Collection.module.css";
import {posterURL, urls} from "../../configs";
import DummyBackground from "../../dummy_photos/dummy_background.jpg";
import DummyPoster from "../../dummy_photos/dummy_poster.jpg";
import {ICollection} from "../../interfaces";
interface IProps {
    collection: ICollection;
}
const Collection:FC<IProps> = ({collection}) => {
    const {name, overview, poster_path, backdrop_path} = collection;
    return (
        <div className={css.Collection}
             style={{backgroundImage: backdrop_path ? `url(${posterURL}${urls.originalPosterSize}${backdrop_path})` : DummyBackground}}>
            <div className={css.zIndex1}>
                <img src={poster_path ? posterURL + urls.w300PosterSize + poster_path : DummyPoster}
                     alt={name}/>
            </div>
            <div className={`${css.info} ${css.zIndex1}`}>
                <div>
                    <Typography variant={"h3"}>{name}</Typography>
                    <Typography align={"justify"} variant={"subtitle1"}>{overview}</Typography>
                </div>
            </div>
            <div className={css.overlay}></div>
        </div>
    );
};

export {Collection};