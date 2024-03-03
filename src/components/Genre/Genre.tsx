import {Chip} from "@mui/material";
import React, {FC} from 'react';

import {useAppContext} from "../../hooks";
import {useGenreQuery} from "../../hooks";
import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {state: {isDarkTheme, selectedGenres}} = useAppContext();
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