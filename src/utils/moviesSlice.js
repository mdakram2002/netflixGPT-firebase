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
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies= action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies= action.payload;
        },
        addTVShow: (state, action) => {
            state.tvShow= action.payload;
        },
        addTopRatedTVSeries: (state, action) => {
            state.tvSeries= action.payload;
        },
        addTrailersVideo: (state, action) => {
            state.trailerVedio = action.payload;
        },
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTVShow,addTopRatedTVSeries, addTrailersVideo } = moviesSlice.actions;
export default moviesSlice.reducer;