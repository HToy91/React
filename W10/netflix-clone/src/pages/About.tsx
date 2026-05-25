import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

const About = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div style={{marginTop: "100px", backgroundColor: theme.background, color: theme.foreground}}>
            <h1>Better than Netflix</h1>

        </div>
    )
}

export default About