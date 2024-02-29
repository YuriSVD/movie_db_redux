import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import css from "./CastAndCrew.module.css";
import {CastMembers, CrewMembers} from "../../components";
import {useAppContext} from "../../hooks";
import {movieActions} from "../../reducers";
import {personService} from "../../services";

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
        <div className={css.CastAndCrew}>
            <CastMembers/>
            <CrewMembers/>
        </div>
    );
};

export {CastAndCrewPage};