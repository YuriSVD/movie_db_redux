import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieToList, IUser} from "../../interfaces";
import {userService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    user: IUser;
    trigger: boolean;
}

const initialState: IState = {
    user: null,
    trigger: false
}

const getUser = createAsyncThunk<IUser, void>(
    "userSlice/getUser",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getUser();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const addRemoveFromWatchList = createAsyncThunk<void, {userId: number, movie: IMovieToList}>(
    "userSlice/addToWatchList",
    async ({userId, movie}, {rejectWithValue}) => {
        try {
            await userService.addRemoveFromWatchList(userId, movie);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const addRemoveFromFavoriteList = createAsyncThunk<void, {userId: number, movie: IMovieToList}>(
    "userSlice/addToFavoriteList",
    async ({userId, movie}, {rejectWithValue}) => {
        try {
            await userService.addRemoveFromFavoriteList(userId, movie);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)



const slice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null;
        },
        changeTrigger: (state) => {
            state.trigger = !state.trigger;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

const {reducer: userReducer, actions} = slice;

const userActions = {
    ...actions,
    getUser,
    addRemoveFromFavoriteList,
    addRemoveFromWatchList
}

export {userActions, userReducer}