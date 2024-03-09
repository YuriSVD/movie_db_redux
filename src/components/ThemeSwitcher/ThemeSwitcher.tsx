import {FormControlLabel} from "@mui/material";
import React from 'react';

import {useAppDispatch} from "../../hooks";
import {Switcher} from "./Switcher.style";
import {useSwitcherQuery} from "../../hooks";
import {switchActions} from "../../redux";

const ThemeSwitcher = () => {
    const theme = localStorage.getItem("themeMode");
    const dispatch = useAppDispatch();
    const {changeTheme} = useSwitcherQuery();
    if (theme) {
        if (!document.body.className) {
            document.body.classList.add(theme);
            dispatch(switchActions.changeTheme());
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