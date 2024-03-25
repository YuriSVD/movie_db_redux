import React from 'react';
import {useLoaderData} from "react-router-dom";

import {MovieDetails, SelectedCastMembers} from "../../components";
import {IMovieDetails} from "../../interfaces";

type LoaderData = {
    data: IMovieDetails;
};

const MovieDetailsPage = () => {
    const {data} = useLoaderData() as LoaderData;
    return (
        <div>
            <MovieDetails movieDetails={data}/>
            <SelectedCastMembers/>
        </div>
    );
};

export {MovieDetailsPage};