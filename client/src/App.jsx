import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PopularMovies } from "./pages/PopularMovies";
import { Watchlist } from "./pages/Watchlist";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
