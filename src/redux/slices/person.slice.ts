import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    ICastMember,
    ICredits,
    ICrewMember,
    IPersonMoviesPage,
    IPersonLinks,
    ICastMovie,
    ICrewMovie
} from "../../interfaces";
import {personService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    castMembers: ICastMember[],
    crewMembers: ICrewMember[],
    personLinks: IPersonLinks,
    castMovies: ICastMovie[],
    crewMovies: ICrewMovie[]
}

const initialState: IState = {
    castMembers: [],
    crewMembers: [],
    personLinks: null,
    castMovies: [],
    crewMovies: []
}

const getAll = createAsyncThunk<ICredits, { movieId: string }>(
    "personSlice/getAll",
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await personService.getAll(movieId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getPersonLinks = createAsyncThunk<IPersonLinks, { personId: number; }>(
    "personSlice/getPersonLinks",
    async ({personId}, {rejectWithValue}) => {
        try {
            const {data} = await personService.getPersonLinks(personId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getPersonMovies = createAsyncThunk<IPersonMoviesPage, { personId: number; }>(
    "personSlice/getPersonMovies",
    async ({personId}, {rejectWithValue}) => {
        try {
            const {data} = await personService.getMoviesByPerson(personId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: "personSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.castMembers = action.payload.cast;
                state.crewMembers = action.payload.crew;
            })
            .addCase(getPersonLinks.fulfilled, (state, action) => {
                state.personLinks = action.payload;
            })
            .addCase(getPersonMovies.fulfilled, (state, action) => {
                state.castMovies = action.payload.cast;
                state.crewMovies = action.payload.crew;
            })
    }
});

const {reducer: personReducer, actions} = slice;

const personActions = {
    ...actions,
    getAll,
    getPersonMovies,
    getPersonLinks
};

export {personReducer, personActions}