import {Badge, Button, Typography} from "@mui/material";
import React, {FC, useEffect, useState} from 'react';

import {Genre} from "../Genre";
import css from "./Genres.module.css"
import {useAppContext} from "../../hooks";
import {IGenre} from "../../interfaces";
import {movieActions} from "../../reducers";
import {genreService} from "../../services";

const Genres: FC = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {state: {isDarkTheme, counterOfSelectedGenres, selectedGenres}, dispatch} = useAppContext();
    useEffect(() => {
        genreService.getAll().then(value => value.data).then(value => setGenres(value.genres));
    }, []);
    return (
        <div className={css.Genres} style={{color: isDarkTheme ? "white" : "#1976d2"}}>
            <Badge badgeContent={counterOfSelectedGenres} color={"primary"}>{<Typography>Genres:</Typography>}</Badge>
            <div>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            {!!selectedGenres.length && <Button onClick={() => {
                const genreIds = selectedGenres.map(genre => genre.id).toString();
                dispatch(movieActions.getGenreIds(genreIds));
                dispatch(movieActions.removeAllGenresFromList());
            }}>Search</Button>}
        </div>
    );
};

export {Genres};