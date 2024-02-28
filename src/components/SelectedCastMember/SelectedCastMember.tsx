import React, {FC} from 'react';
import {ICastMember} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import DummyPhoto from "../../dummy_photos/dummy_person.jpg";
import {posterURL, urls} from "../../configs";

interface IProps {
    castMember: ICastMember
}

const SelectedCastMember:FC<IProps> = ({castMember}) => {
    const {id, name, profile_path, character} = castMember;
    const navigate = useNavigate();
    return (
        <Card sx={{maxWidth: "10.4vw", marginRight: "0.5vw"}}>
            <CardActionArea>
                <CardMedia sx={{height: "13.3vw"}}
                           component={"img"}
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