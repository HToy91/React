import {NavLink, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";
import type { Movie } from "../types/Movie.ts";

const apiKey =  import.meta.env.VITE_API_KEY;

const MovieDetails = () => {

    const { id } = useParams();
    const { data, loading, error } = useFetch<Movie>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>;
    if (!data) return null;

    const imageUrl =  `https://image.tmdb.org/t/p/w500${data.poster_path}`;

    return (
        <div className="Movie-Details">

            <img src={imageUrl} alt={data.title}/>
            <p>Rating: ⭐️ {data.vote_average?.toFixed(2)}</p>

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