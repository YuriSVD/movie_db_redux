import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICastMember, ICrewMember, IGenre, IMovie, IPage, IVideo} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
    totalPage: number;
    genres: IGenre[];
    searchTitle: string;
    cast: ICastMember[];
    crew: ICrewMember[];
    videos: IVideo[];
}

const initialState: IState = {
    movies: [],
    totalPage: 1,
    genres: [],
    searchTitle: null,
    cast: [],
    crew: [],
    videos: [],
}

const getAll = createAsyncThunk<IPage, {page: string, genreIds?: string}>(
    "movieSlice/getAll",
    async ({page, genreIds}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, genreIds);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const searchMoviesByName = createAsyncThunk<IPage, {page: string, query: string}>(
    "movieSlice/searchMoviesByName",
    async ({page, query}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.searchMovies(page, query);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const slice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setSearchingTitle: (state, actions) => {
            state.searchTitle = actions.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPage = action.payload.total_pages;
            })
            .addCase(searchMoviesByName.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPage = action.payload.total_pages;
            })
    }
})

let {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getAll,
    searchMoviesByName
}

export {movieReducer, movieActions}