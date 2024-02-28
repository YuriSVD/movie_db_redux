import React, {FC} from 'react';

import {ICastMember} from "../../interfaces";
import DummyPhoto from "../../dummy_photos/dummy_person.jpg";

interface IProps {
    castMember: ICastMember;
}

const CastMember:FC<IProps> = ({castMember}) => {

    return (
        <div>
            cast member
        </div>
    );
};

export {CastMember};