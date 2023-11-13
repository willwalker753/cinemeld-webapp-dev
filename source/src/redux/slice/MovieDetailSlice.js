import { createSlice } from "@reduxjs/toolkit";

export const movieDetailSlice = createSlice({
    name: "movie_detail",
    initialState: {
        preloaded_data: null,
        /* example state:
            preloaded_data: {
                id: null,
                title: "",
                overview: "",
                genre_list: [],
                poster_url: "",
                backdrop_url: "",
                vote_percent: 0,
                vote_factor: 0,
                vote_count: 0,
            }
        */
    },
    reducers: {
        // this is used to set data that is already avaliable before going to the detail page
        // so we don't have to wait for the detail response to show things like movie title
        setMovieDetailPreloadedData: (state, action) => {
            state.preloaded_data = action.payload;
        },
        resetMovieDetailPreloadedData: (state, action) => {
            state.preloaded_data = null;
        },
    }
})

export const { setMovieDetailPreloadedData } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;