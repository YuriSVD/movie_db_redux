import React, {FC} from 'react';
import {ICrewMember} from "../../interfaces";
import DummyPhoto from "../../dummy_photos/dummy_person.jpg";

interface IProps {
    crewMember: ICrewMember;
}

const CrewMember:FC<IProps> = ({crewMember}) => {

    return (
        <div>
            crew member
        </div>
    );
};

export {CrewMember};