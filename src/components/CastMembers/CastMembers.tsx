import React from 'react';

import {CastMember} from "../CastMember";
import {useAppContext} from "../../hooks";
import {Typography} from "@mui/material";

const CastMembers = () => {
    const {state: {cast, isDarkTheme}} = useAppContext();
    return (
        <div>
            <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h5"}>Cast</Typography>
            {cast.map(castMember => <CastMember key={castMember.id} castMember={castMember}/>)}
        </div>
    );
};

export {CastMembers};