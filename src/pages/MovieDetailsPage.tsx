import React from 'react';

import {MovieDetails, SelectedCastMembers} from "../components";

const MovieDetailsPage = () => {
    return (
        <div>
            <MovieDetails/>
            <SelectedCastMembers/>
        </div>
    );
};

export {MovieDetailsPage};