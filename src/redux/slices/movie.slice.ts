import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICastMember, ICrewMember, IGenre, IMovie, IMovieStates, IPage, IVideo} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
    totalPage: number;
    genres: IGenre[];
    searchTitle: string;
    cast: ICastMember[];
    crew: ICrewMember[];
    videos: IVideo[];
    movieStates: IMovieStates;
    movieId: number
}

const initialState: IState = {
    movies: [],
    totalPage: 1,
    genres: [],
    searchTitle: null,
    cast: [],
    crew: [],
    videos: [],
    movieStates: null,
    movieId: null
};

const getAll = createAsyncThunk<IPage, { page: string, genreIds?: string }>(
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

const searchMoviesByName = createAsyncThunk<IPage, { page: string, query: string }>(
    "movieSlice/searchMoviesByName",
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovies(page, query);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getWatchList = createAsyncThunk<IPage, { id: number, page?: string }>(
    "movieSlice/getMovieList",
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getWatchList(id, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getFavoriteList = createAsyncThunk<IPage, { id: number, page?: string }>(
    "movieSlice/getFavoriteList",
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getFavoriteList(id, page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getMovieStates = createAsyncThunk<IMovieStates, { id: number }>(
    "movieSlice/getMovieStates",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieStates(id);
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
        setMovieId: (state, actions) => {
            state.movieId = actions.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getMovieStates.fulfilled, (state, action) => {
                state.movieStates = action.payload;
            })
            .addMatcher(isFulfilled(getAll, searchMoviesByName, getFavoriteList, getWatchList), (state, action) => {
                state.movies = action.payload.results;
                state.totalPage = action.payload.total_pages;
            })
    }
})

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getAll,
    searchMoviesByName,
    getWatchList,
    getFavoriteList,
    getMovieStates
}

export {movieReducer, movieActions}