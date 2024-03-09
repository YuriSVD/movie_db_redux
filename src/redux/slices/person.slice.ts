import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICastMember, ICredits, ICrewMember} from "../../interfaces";
import {personService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    castMembers: ICastMember[],
    crewMembers: ICrewMember[]
}

const initialState: IState = {
    castMembers: [],
    crewMembers: []
}

const getAll = createAsyncThunk<ICredits, { movieId: string }>(
    "personSlice/getAll",
    async ({movieId}, {rejectWithValue}) => {
        try {
            let {data} = await personService.getAll(movieId);
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
    }
});

const {reducer: personReducer, actions} = slice;

const personActions = {
    ...actions,
    getAll
};

export {personReducer, personActions}