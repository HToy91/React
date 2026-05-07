import { ThemeContext} from "../themeContext/ThemeContext.jsx"
import { useContext } from "react"

const Header = ({ children}) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className='header-content' style={{ backgroundColor: theme.background, color: theme.foreground }}>
            {children}
        </div>
    )
}

export default Header;