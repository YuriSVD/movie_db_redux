import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isDarkTheme: boolean;
}

const initialState: IState = {
    isDarkTheme: false
}

const slice = createSlice({
    name: "switchSlice",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        }
    }
});

let {reducer: switchReducer, actions} = slice;

const switchActions = {
    ...actions
};

export {switchActions, switchReducer}