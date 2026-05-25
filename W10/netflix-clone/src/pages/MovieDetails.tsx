import { NavLink, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";
import type { Movie } from "../types/Movie.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import {
    addToWatchlist,
    removeFromWatchlist,
} from "../features/watchlist/watchlistSlice.ts";

const apiKey =  import.meta.env.VITE_API_KEY;

const MovieDetails = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { id } = useParams();
    const { data, loading, error } = useFetch<Movie>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );

    const isInWatchlist = useSelector((state: RootState) =>
        data ? state.watchlist.movies.some((movie) => movie.id === data.id) : false
    );

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>;
    if (!data) return null;

    const imageUrl =  `https://image.tmdb.org/t/p/w500${data.poster_path}`;

    return (
        <div className="Movie-Details">

            <img src={imageUrl} alt={data.title}/>
            <p>Rating: ⭐️ {data.vote_average?.toFixed(1)}</p>
            <button
                onClick={() =>
                    dispatch(
                        isInWatchlist
                            ? removeFromWatchlist(data.id)
                            : addToWatchlist(data)
                    )
                }
            >
                {isInWatchlist ? "−" : "＋"}
            </button>

            <div className="Movie-Details-Content">
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
                <p style={{fontWeight: "bold"}}>Release Date: {data.release_date}</p>
            </div>

            <NavLink to="/">Back to Home</NavLink>


        </div>
    )
}

export default MovieDetails