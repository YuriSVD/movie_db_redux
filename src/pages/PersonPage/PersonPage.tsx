import React, {useEffect} from 'react';
import {CastMovies, CrewMovies, PersonDetails} from "../../components";
import {IPersonDetails} from "../../interfaces";
import {useLoaderData} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {personActions} from "../../redux";
import css from "./PersonPage.module.css";

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