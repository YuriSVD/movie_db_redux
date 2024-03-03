import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import {MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";

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