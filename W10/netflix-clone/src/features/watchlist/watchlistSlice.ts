import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Movie} from "../../types/Movie";

interface WatchlistState {
    movies: Movie[];
}

const initialState: WatchlistState = {
    movies: []
};

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,

    reducers: {

        addToWatchlist: (state, action: PayloadAction<Movie>) => {
            const exists = state.movies.find(movie => movie.id === action.payload.id);

            if (!exists) {
                state.movies.push(action.payload);
            }
        },

        removeFromWatchlist: (state, action: PayloadAction<number>) => {
            state.movies =
                state.movies.filter(
                    movie => movie.id !== action.payload
                )
        }
    }
})

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;