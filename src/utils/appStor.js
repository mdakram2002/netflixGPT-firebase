import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
=======
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
>>>>>>> 626cd9ab50167197d7078e82ae71325efb3551a7
});
