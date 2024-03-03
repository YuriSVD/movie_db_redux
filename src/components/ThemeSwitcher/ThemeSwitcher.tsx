import {FormControlLabel} from "@mui/material";
import React from 'react';

import {useAppContext} from "../../hooks";
import {Switcher} from "./Switcher.style";
import {movieActions} from "../../reducers";
import {useSwitcherQuery} from "../../hooks";

const ThemeSwitcher = () => {
    const theme = localStorage.getItem("themeMode");
    const {dispatch} = useAppContext();
    const {changeTheme} = useSwitcherQuery();
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
            onChange={changeTheme}
        />
    );
};

export {ThemeSwitcher};