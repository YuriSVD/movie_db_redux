import {KeyboardArrowRight} from "@mui/icons-material";
import {Button, Typography} from "@mui/material";
import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {SelectedCastMember} from "../SelectedCastMember";
import css from "./SelectedCastMembers.module.css";
import {personActions} from "../../redux";

const SelectedCastMembers = () => {
    const {movieId} = useParams();
    const {castMembers} = useAppSelector(state => state.personReducer);
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(personActions.getAll({movieId}));
    }, [movieId, dispatch]);

    return (
        <div>
            <Typography sx={{margin: "10px", color: isDarkTheme ? "white" : "black"}} variant={"h5"}>Top Billed Cast</Typography>
            <div className={css.castDiv}>
                {castMembers.slice(0, 10).map(castMember => <SelectedCastMember key={castMember.id} castMember={castMember}/>)}
                <Button sx={{color: isDarkTheme ? "white" : "#1976d2"}} onClick={() => navigate(`/movies/${movieId}/cast`)}>{<KeyboardArrowRight/>}</Button>
            </div>
        </div>
    );
};

export {SelectedCastMembers};