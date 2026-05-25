import { useSelector} from "react-redux";
import type { RootState } from "../app/store";
import {NavLink} from "react-router-dom";

const Watchlist = () => {

    const movies = useSelector((state: RootState) => state.watchlist.movies);

    return (
        <div className="Home">
            <h1 style={{marginTop:"50px"}}>Watchlist</h1>

            <div className="Home-data">
                {movies.map(movie => {
                    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

                    return (
                        <div key={movie.id}>
                            <NavLink to={`/movies/${movie.id}`}>
                                <img src={imageUrl} alt={movie.title}/>

                                <h2 style={{textDecoration: "none", color: "white"}}>{movie.title}</h2>

                            </NavLink>
                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default Watchlist;