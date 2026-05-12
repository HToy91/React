import './App.css'
import {NavLink, Outlet} from 'react-router-dom'
import  { ToggleSwitch }  from './components/ToggleSwitch'
import {useContext, useEffect} from "react";
import {ThemeContext} from "./themeContext.tsx";

function App() {
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        document.body.style.background = theme.background
    }, [theme])

  return (
    <div className='App' style={{ backgroundColor: theme.background, color: theme.foreground }}>
        <div className={'nav-bar'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <ToggleSwitch />
        </div>

        <Outlet />
    </div>
  )
}

export default App
