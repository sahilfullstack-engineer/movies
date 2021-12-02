import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "movies",
    initialState: {
        movielist: [],
        loading: false,
    },

    reducers: {
        moviesRequested: (movies, action) => {
            movies.loading = true;
        },

        moviesReceived: (movies, action) => {
            movies.movielist = action.payload.results;
            movies.loading = false;
        },

        moviesRequestFailed: (movies, action) => {
            movies.loading = false;
        },
    },
});

export default slice.reducer;

const { moviesRequested, moviesReceived, moviesRequestFailed } = slice.actions;

const url = "/3/movie/popular?api_key=200411096b426384ebc11827c9d89f50";

export const getmovies = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: moviesRequested.type,
            onSuccess: moviesReceived.type,
            onError: moviesRequestFailed.type,
        })
    );
};