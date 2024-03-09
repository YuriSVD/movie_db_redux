import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import css from "./CastAndCrew.module.css";
import {CastMembers, CrewMembers} from "../../components";
import {useAppDispatch} from "../../hooks";
import {personActions} from "../../redux";

const CastAndCrewPage = () => {
    const {movieId} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(personActions.getAll({movieId}));
    }, [movieId, dispatch]);

    return (
        <div className={css.CastAndCrew}>
            <CastMembers/>
            <CrewMembers/>
        </div>
    );
};

export {CastAndCrewPage};