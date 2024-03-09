import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IVideo, IVideoPage} from "../../interfaces";
import {videoService} from "../../services/video.service";
import {AxiosError} from "axios";

interface IState {
    videos: IVideo[]
}

const initialState: IState = {
   videos: []
}

const getAll = createAsyncThunk<IVideoPage, {id: number}>(
    "videoSlice/getAll",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await videoService.getAll(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: "videoSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.videos = action.payload.results;
            })
    }
});

const {reducer: videoReducer, actions} = slice;

const videoActions = {
    ...actions,
    getAll
};

export {videoReducer, videoActions}