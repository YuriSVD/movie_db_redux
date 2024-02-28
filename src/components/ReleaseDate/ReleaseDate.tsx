import {Typography} from "@mui/material";
import React, {FC} from 'react';

import css from "./ReleaseDate.module.css";

interface IProps {
    release_date: string;
}

const ReleaseDate:FC<IProps> = ({release_date}) => {
    const date = new Date(release_date).toDateString();
    return (
        <Typography className={css.ReleaseDate} variant={"body1"}>
            {date.substring(date.indexOf(" ") + 1, date.length)}
        </Typography>
    );
};

export {ReleaseDate};