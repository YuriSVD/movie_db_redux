import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React, {FC} from 'react';

import {posterURL, urls} from "../../configs";
import DummyPhoto from "../../dummy_photos/dummy_person.jpg";
import {ICastMember} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    castMember: ICastMember
}

const SelectedCastMember:FC<IProps> = ({castMember}) => {
    const {id, name, profile_path, character} = castMember;
    const navigate = useNavigate();
    const details = () => navigate(`/person/${id}`);
    return (
        <Card onClick={details} sx={{width: "10vw", marginRight: "0.5vw"}}>
            <CardActionArea>
                <CardMedia component={"img"}
                           image={profile_path ? posterURL + urls.w300PosterSize + profile_path : DummyPhoto}
                />
                <CardContent>
                    <Typography sx={{fontSize: "1.1vw"}} gutterBottom variant={"h6"}>{name}</Typography>
                    <Typography sx={{fontSize: "0.75vw"}} variant={"body2"} color={"text.secondary"}>{character}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export {SelectedCastMember};