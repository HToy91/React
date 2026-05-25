import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav>

            <h2>NETCINEMA</h2>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/watchlist">Watchlist</NavLink>
        </nav>
    )
}
export default Header