import React, {FC} from 'react';

import {ICastMember} from "../../interfaces";
import DummyPhoto from "../../dummy_photos/dummy_person.jpg";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {posterURL, urls} from "../../configs";

interface IProps {
    castMember: ICastMember;
}

const CastMember:FC<IProps> = ({castMember}) => {
    const {name, character, profile_path} = castMember;

    return (
        <Card sx={{marginBottom: "0.5vw"}}>
            <CardActionArea disabled sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "20vw",
                height: "7.8vw"}}>
                <CardMedia
                    sx={{height: "7.8vw", width: "5.2vw"}}
                    component={"img"}
                    image={profile_path ? posterURL + urls.w300PosterSize + profile_path : DummyPhoto}/>
                <CardContent>
                    <Typography sx={{fontSize: "1.25vw"}} variant={"h5"}>{name}</Typography>
                    <Typography sx={{fontSize: "0.83vw"}} variant={"subtitle1"}>{character}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {CastMember};