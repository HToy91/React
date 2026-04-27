import './App.css'
import {NavLink, Outlet} from 'react-router-dom';

function App() {

  return (
    <>
        <div className={'nav-bar'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
        </div>

        <Outlet />
    </>
  )
}

export default App
