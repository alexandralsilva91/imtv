import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import TvShow from './pages/TvShow';
import './index.css'
import NavBar from './common/NavBar';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/tv/:id" element={<TvShow />} />
    </Routes>
  </BrowserRouter>,
)
