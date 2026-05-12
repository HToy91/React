import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const ToggleSwitch = () => {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <div className='switch' >
                <input type="checkbox" onChange={ toggleTheme } />
                <span className='slider round'></span>
            </div>
        </>
    )
}
