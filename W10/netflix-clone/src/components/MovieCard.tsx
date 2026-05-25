import type { Movie } from "../types/Movie";
import { NavLink } from "react-router-dom";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <NavLink to={`/movies/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
                <img src={imageUrl} alt={movie.title} />

                <h3>{movie.title}</h3>

                <p>⭐️ {movie.vote_average?.toFixed(1)}</p>
            </div>

        </NavLink>
    )
}

export default MovieCard;