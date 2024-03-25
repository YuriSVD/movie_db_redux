import {configureStore} from "@reduxjs/toolkit";

import {movieReducer, genreReducer, personReducer, switchReducer, videoReducer, userReducer} from "./slices";

const store = configureStore({
    reducer: {
        movieReducer,
        genreReducer,
        personReducer,
        switchReducer,
        videoReducer,
        userReducer,
    }
});

export {store};