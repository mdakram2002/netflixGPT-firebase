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
<<<<<<< HEAD
=======
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
>>>>>>> 626cd9ab50167197d7078e82ae71325efb3551a7
        addTrailersVideo: (state, action) => {
            state.trailerVedio = action.payload;
        },
    }
});

<<<<<<< HEAD
export const { addNowPlayingMovies, addTrailersVideo } = moviesSlice.actions;
=======
export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTVShow,addTopRatedTVSeries, addTrailersVideo } = moviesSlice.actions;
>>>>>>> 626cd9ab50167197d7078e82ae71325efb3551a7
export default moviesSlice.reducer;