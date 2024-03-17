import {Chip} from "@mui/material";
import React, {FC} from 'react';

import {useAppSelector, useGenreQuery} from "../../hooks";
import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {selected, setRemoveFromSelected, changeTrigger} = useGenreQuery();
    const {name} = genre;
    if (!selectedGenres.length && selected) {
        changeTrigger();
    }
    return (
        <Chip
            label={name}
            sx={{color: isDarkTheme || selected ? "white" : "#1976d2", margin: "3px"}}
            color={"primary"}
            variant={selected ? "filled" : "outlined"}
            onClick={() => {
                changeTrigger();
                setRemoveFromSelected(genre);
            }}
        />
    );
};

export {Genre};