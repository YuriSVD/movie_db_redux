import {Typography} from "@mui/material";
import React from 'react';

import {CrewMember} from "../CrewMember";
import {useAppSelector} from "../../hooks";
import {useCrewQuery} from "../../hooks";

const CrewMembers = () => {
    //const {state: {isDarkTheme}} = useAppContext();
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const reduce = useCrewQuery();
    return (
        <div>
            <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h5"}>Crew</Typography>
            {!!reduce.art.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Art</Typography>}
            {reduce.art.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.camera.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Camera</Typography>}
            {reduce.camera.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.costume.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Costume</Typography>}
            {reduce.costume.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.crew.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Crew</Typography>}
            {reduce.crew.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.directing.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Directing</Typography>}
            {reduce.directing.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.editing.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Editing</Typography>}
            {reduce.editing.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.lighting.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Lighting</Typography>}
            {reduce.lighting.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.production.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Production</Typography>}
            {reduce.production.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.sound.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Sound</Typography>}
            {reduce.sound.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.visualEffects.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Visual Effects</Typography>}
            {reduce.visualEffects.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.writing.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Writing</Typography>}
            {reduce.writing.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
        </div>
    );
};

export {CrewMembers};