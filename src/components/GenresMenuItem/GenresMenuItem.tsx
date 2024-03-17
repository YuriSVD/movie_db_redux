import {MenuItem} from "@mui/material";
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre
    closeMenu: Function
}

const GenresMenuItem: FC<IProps> = ({genre, closeMenu}) => {
    const {id, name} = genre;
    const navigate = useNavigate();
    return (
        <MenuItem onClick={() => {
            closeMenu();
            navigate(`/genre/${id}`);
        }}>{name}</MenuItem>
    );
};

export {GenresMenuItem};