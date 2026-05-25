import Home from "./pages/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "./pages/Movies.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import Search from "./pages/Search.tsx";
import Watchlist from "./pages/Watchlist.tsx";
import Header from "./components/Header.tsx";
import "./App.css"

function App() {
  return (
      <BrowserRouter>

          <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;