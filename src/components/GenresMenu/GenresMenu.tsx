import {Button, Menu} from "@mui/material";
import React, {useEffect} from 'react';

import {GenresMenuItem} from "../GenresMenuItem";
import {useAppContext, useGenresMenuQuery} from "../../hooks";
import {genreService} from "../../services";
import {movieActions} from "../../reducers";

const GenresMenu = () => {
    const {state:{genres}, dispatch} = useAppContext();
    useEffect(() => {
        genreService.getAll()
            .then(value => value.data)
            .then(value => dispatch(movieActions.setGenres(value.genres)));
    }, [dispatch]);
    const {anchorEl, viewMenu, closeMenu} = useGenresMenuQuery();

    return (
        <div>
            <Button color={"inherit"} onClick={viewMenu}>
                Genres
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={closeMenu}
                MenuListProps={{'aria-labelledby': 'basic-button'}}>
                {genres.map(genre => <GenresMenuItem key={genre.id} closeMenu={closeMenu} genre={genre}/>)}
            </Menu>
        </div>
    );
};

export {GenresMenu};