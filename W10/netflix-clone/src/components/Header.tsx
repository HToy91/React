import { NavLink } from "react-router-dom"
import {ToggleSwitch} from "./ToggleSwitch.tsx";

const Header = () => {
    return (
        <nav>

            <h2>NETCINEMA</h2>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/watchlist">Watchlist</NavLink>
            <NavLink to="/about">About</NavLink>

            <ToggleSwitch />
        </nav>
    )
}
export default Header