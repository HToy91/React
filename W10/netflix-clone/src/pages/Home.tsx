import useFetch from "../hooks/useFetch.ts";
import type { Movie } from "../types/Movie.ts";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const { data, loading, error } = useFetch<{ results: Movie[] }>(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );

    console.log(data);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div>
            <h1>Trending Movies</h1>
        </div>
    );
}

export default Home;