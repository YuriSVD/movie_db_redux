import React, {useEffect} from 'react';
import {useAppContext} from "../../hooks";
import {personService} from "../../services";
import {useNavigate, useParams} from "react-router-dom";
import {movieActions} from "../../reducers/movie.reducer";
import {SelectedCastMember} from "../SelectedCastMember";
import {Button, Typography} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";
import css from "./SelectedCastMembers.module.css";

const SelectedCastMembers = () => {
    const {movieId} = useParams();
    const {state:{cast, isDarkTheme}, dispatch} = useAppContext();
    const navigate = useNavigate();
    useEffect(() => {
        personService.getAll(movieId)
            .then(value => value.data)
            .then(value =>
                {
                    dispatch(movieActions.getCastMembers(value.cast));
                    dispatch(movieActions.getCrewMembers(value.crew));
                })
    }, [movieId, dispatch]);
    return (
        <div>
            <Typography sx={{color: isDarkTheme ? "white" : "black"}} variant={"h5"}>Top Billed Cast</Typography>
            <div className={css.castDiv}>
                {cast.slice(0, 10).map(castMember => <SelectedCastMember key={castMember.id} castMember={castMember}/>)}
                <Button sx={{color: isDarkTheme ? "white" : "#1976d2"}} onClick={() => navigate(`/movies/${movieId}/cast`)}>{<KeyboardArrowRight/>}</Button>
            </div>
        </div>
    );
};

export {SelectedCastMembers};