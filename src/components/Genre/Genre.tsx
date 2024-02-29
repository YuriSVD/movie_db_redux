import {Chip} from "@mui/material";
import React, {FC, useState} from 'react';

import {useAppContext} from "../../hooks";
import {IGenre} from "../../interfaces";
import {movieActions} from "../../reducers";

interface IProps {
    genre: IGenre;
}

const Genre:FC<IProps> = ({genre}) => {
    const {state:{isDarkTheme, selectedGenres}, dispatch} = useAppContext();
    const [selected, setSelected] = useState<boolean>(false);
    const {name} = genre;
     if (!selectedGenres.length && selected) {
         setSelected(false);
     }
    return (
        <Chip
            label={name}
            sx={{color: isDarkTheme ? "white" : selected ? "white" : "#1976d2", margin: "3px"}}
            color={"primary"}
            variant={selected ? "filled" : "outlined"}
            onClick={() => {
                setSelected(prevState => !prevState);
                selected
                    ? dispatch(movieActions.removeSelectedGenre())
                    : dispatch(movieActions.addSelectedGenre());
                selectedGenres.includes(genre)
                    ? dispatch(movieActions.removeGenreFromList(genre))
                    : dispatch(movieActions.addGenreToList(genre));
            }}
        />
    );
};

export {Genre};