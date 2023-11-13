import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slice/AlertSlice";
import movieDetailReducer from "./slice/MovieDetailSlice";

export default configureStore({
    reducer: {
        alert: alertReducer,
        movie_detail: movieDetailReducer
    },
})