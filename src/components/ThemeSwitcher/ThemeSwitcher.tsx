import {FormControlLabel} from "@mui/material";
import React from 'react';

import {useAppContext} from "../../hooks";
import {Switcher} from "./Switcher.style";
import {movieActions} from "../../reducers";

const ThemeSwitcher = () => {
    const theme = localStorage.getItem("themeMode");
    //const {dispatch} = useAppContext();
    const {dispatch} = useAppContext();

    if (theme) {
        if (!document.body.className) {
            document.body.classList.add(theme);
            dispatch(movieActions.changeTheme());
        }
    }
    return (
        <FormControlLabel
            control={<Switcher defaultChecked/>}
            label={""}
            onChange={() => {
                document.body.classList.toggle("darkTheme");
                localStorage.setItem("themeMode", document.body.className);
                dispatch(movieActions.changeTheme());
            }}
        />
    );
};

export {ThemeSwitcher};