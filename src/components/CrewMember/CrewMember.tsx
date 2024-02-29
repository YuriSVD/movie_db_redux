import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React, {FC} from 'react';

import {posterURL, urls} from "../../configs";
import DummyPhoto from "../../dummy_photos/dummy_person.jpg";
import {ICrewMember} from "../../interfaces";

interface IProps {
    crewMember: ICrewMember;
}

const CrewMember:FC<IProps> = ({crewMember}) => {
    const {name, job, profile_path} = crewMember;

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
                    image={profile_path ? posterURL + urls.w300PosterSize + profile_path : DummyPhoto}
                    alt={name}/>
                <CardContent>
                    <Typography sx={{fontSize: "1.25vw"}} variant={"h5"}>{name}</Typography>
                    <Typography sx={{fontSize: "0.83vw"}} variant={"subtitle1"}>{job}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {CrewMember};