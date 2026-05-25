import useFetch from "../hooks/useFetch.ts";
import type { Movie } from "../types/Movie.ts";
import MovieCard from "../components/MovieCard.tsx";
import { useContext } from "react";
import { ThemeContext} from "../context/ThemeContext.tsx";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const { theme } = useContext(ThemeContext);

    const { data, loading, error } = useFetch<{ results: Movie[] }>(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );

    console.log(data);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div className="Home" style={{ backgroundColor: theme.background, color: theme.foreground }}>
            {/*<h1>Trending</h1>*/}

            <div className="Home-data">
                {data?.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {data?.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {data?.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {data?.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {data?.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {data?.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;