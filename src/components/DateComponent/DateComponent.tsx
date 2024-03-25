import {Typography} from "@mui/material";
import React, {FC} from 'react';

interface IProps {
    time: string;
}

const DateComponent:FC<IProps> = ({time}) => {
    const date = new Date(time).toDateString();
    return (
        <Typography sx={{fontWeight: "bold"}} variant={"body1"}>
            {date.substring(date.indexOf(" ") + 1, date.length)}
        </Typography>
    );
};

export {DateComponent};