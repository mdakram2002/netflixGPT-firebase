import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'Movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVedio: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailersVideo: (state, action) => {
            state.trailerVedio = action.payload;
        },
    }
});

export const { addNowPlayingMovies, addTrailersVideo } = moviesSlice.actions;
export default moviesSlice.reducer;