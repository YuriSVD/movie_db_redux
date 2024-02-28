import React from 'react';
import {useAppContext} from "../../hooks";
import {CastMember} from "../CastMember";

const CastMembers = () => {
    const {state: {cast}} = useAppContext();
    return (
        <div>
            {cast.map(castMember => <CastMember key={castMember.id} castMember={castMember}/>)}
        </div>
    );
};

export {CastMembers};