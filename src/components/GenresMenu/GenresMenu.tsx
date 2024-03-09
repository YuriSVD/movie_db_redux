import {Button, Menu} from "@mui/material";
import React, {useEffect} from 'react';

import {GenresMenuItem} from "../GenresMenuItem";
import {useAppDispatch, useAppSelector, useGenresMenuQuery} from "../../hooks";
import {genreActions} from "../../redux";

const GenresMenu = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
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