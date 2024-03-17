import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import {DateComponent} from "../DateComponent";
import DummyPoster from "../../dummy_photos/dummy_poster.jpg";
import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie;
}

const SearchingMovie:FC<IProps> = ({movie}) => {
    const {id, title, poster_path, overview, release_date} = movie;
    const navigate = useNavigate();

    return (
        <Card sx={{marginBottom: "0.52vw"}}>
            <CardActionArea sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "80vw"
            }} onClick={() => navigate(`/movies/${id}`)}>
                <CardMedia
                    sx={{height: "7.81vw", width: "5.21vw"}}
                    component={"img"}
                    image={poster_path ? posterURL + urls.w300PosterSize + poster_path : DummyPoster}
                    alt={title}
                />
                <CardContent sx={{paddingTop: 0}}>
                    <Typography variant={"h5"} component={"div"}>{title}</Typography>
                    <DateComponent release_date={release_date}/>
                    <Typography variant={"subtitle1"}>{overview}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {SearchingMovie};