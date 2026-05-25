import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

const Search = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{marginTop: "100px", backgroundColor: theme.background, color: theme.foreground }}>
            <h1>Search Page</h1>

        </div>
    )
}

export default Search