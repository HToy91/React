import type { Movie } from "../types/Movie";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} />

            <h3>{movie.title}</h3>

            <p>⭐️ {movie.vote_average?.toFixed(2)}</p>
        </div>
    )
}

export default MovieCard;