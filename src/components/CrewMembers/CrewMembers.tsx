import React from 'react';
import {useAppContext} from "../../hooks";
import {CrewMember} from "../CrewMember";

const CrewMembers = () => {
    const {state: {crew}} = useAppContext();
    return (
        <div>
            {crew.map(crewMember => <CrewMember key={crewMember.id} crewMember={crewMember}/>)}
        </div>
    );
};

export {CrewMembers};