import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer, genreReducer, personReducer, switchReducer, videoReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    personReducer,
    switchReducer,
    videoReducer,
    userReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type {
    RootState,
    AppStore,
    AppDispatch
};

export {setupStore};