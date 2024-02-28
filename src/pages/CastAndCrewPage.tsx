import React, {useEffect} from 'react';
import {useAppContext} from "../hooks";
import {personService} from "../services";
import {useParams} from "react-router-dom";
import {movieActions} from "../reducers/movie.reducer";
import {CastMembers, CrewMembers} from "../components";

const CastAndCrewPage = () => {
    const {movieId} = useParams();
    const {dispatch} = useAppContext();
    useEffect(() => {
        personService.getAll(movieId)
            .then(value => value.data)
            .then(value => {
                dispatch(movieActions.getCastMembers(value.cast));
                dispatch(movieActions.getCrewMembers(value.crew));
            })
    }, [dispatch, movieId]);
    return (
        <div>
            <CastMembers/>
            <CrewMembers/>
        </div>
    );
};

export {CastAndCrewPage};