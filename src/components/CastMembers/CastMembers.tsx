import {Typography} from "@mui/material";
import React from 'react';

import {CastMember} from "../CastMember";
import {useAppSelector} from "../../hooks";

const CastMembers = () => {
    const {castMembers} = useAppSelector(state => state.personReducer);
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    return (
        <div>
            <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h5"}>Cast</Typography>
            {castMembers.map(castMember => <CastMember key={castMember.id} castMember={castMember}/>)}
        </div>
    );
};

export {CastMembers};