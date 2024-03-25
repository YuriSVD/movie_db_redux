import React, {useEffect} from 'react';
import {useLoaderData} from "react-router-dom";

import {CastMovies, CrewMovies, PersonDetails} from "../../components";
import {useAppDispatch} from "../../hooks";
import {IPersonDetails} from "../../interfaces";
import css from "./PersonPage.module.css";
import {personActions} from "../../redux";

type LoaderData = {
    data: IPersonDetails;
}

const PersonPage = () => {
    const {data} = useLoaderData() as LoaderData;
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(personActions.getPersonMovies({personId: data.id}))
    }, [data, dispatch]);
    return (
        <div className={css.PersonPage}>
            <PersonDetails personDetails={data}/>
            <div className={css.movies}>
                <CastMovies/>
                <CrewMovies/>
            </div>
        </div>
    );
};

export {PersonPage};