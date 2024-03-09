import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenres} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    genres: IGenre[];
    selectedGenres: IGenre[],
    genreIds: string
}

const initialState: IState = {
    genres: [],
    selectedGenres: [],
    genreIds: ""
};

const getAll = createAsyncThunk<IGenres, void>(
    "genreSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await genreService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        addGenreToList: (state, actions) => {
            state.selectedGenres.push(actions.payload);
        },
        removeGenreFromList: (state, actions) => {
            //state.selectedGenres.filter(genre => genre !== actions.payload)
            state.selectedGenres.splice(actions.payload, 1);
        },
        setGenreIds: (state, actions) => {
            state.genreIds = actions.payload;
            state.selectedGenres = [];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
    }
});

let {reducer: genreReducer, actions} = slice;

const genreActions = {
    ...actions,
    getAll
}

export {genreReducer, genreActions}