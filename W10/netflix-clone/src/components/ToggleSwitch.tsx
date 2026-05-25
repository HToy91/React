import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ToggleSwitch = () => {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <label className='switch' >
                <input type="checkbox" onChange={ toggleTheme } />
                <span className='slider round'></span>
            </label>
        </>
    )
}
