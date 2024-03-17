import {Typography} from "@mui/material";
import React from 'react';

import {CrewMember} from "../CrewMember";
import {useAppSelector} from "../../hooks";
import {useCrewQuery} from "../../hooks";

const CrewMembers = () => {
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {reduce, getCrew} = useCrewQuery();
    return (
        <div>
            <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h5"}>Crew</Typography>
            {!!reduce.directing.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Directing</Typography>}
            {getCrew(reduce.directing).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.writing.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Writing</Typography>}
            {getCrew(reduce.writing).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.costume.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Costume</Typography>}
            {getCrew(reduce.costume).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.camera.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Camera</Typography>}
            {getCrew(reduce.camera).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.visualEffects.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Visual Effects</Typography>}
            {getCrew(reduce.visualEffects).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.art.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Art</Typography>}
            {getCrew(reduce.art).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.sound.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Sound</Typography>}
            {getCrew(reduce.sound).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.editing.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Editing</Typography>}
            {getCrew(reduce.editing).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.lighting.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Lighting</Typography>}
            {getCrew(reduce.lighting).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.production.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Production</Typography>}
            {getCrew(reduce.production).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
            {!!reduce.crew.length && <Typography style={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"h6"}>Crew</Typography>}
            {getCrew(reduce.crew).map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
        </div>
    );
};

export {CrewMembers};