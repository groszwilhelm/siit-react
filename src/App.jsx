import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing/Landing";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import NotFound from './components/404/404';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navigation />

        {/* Switch statement */}
        <Routes>
          {/* Switch cases */}
          <Route path="/" element={<Landing />} />
          <Route path="/movie-details/:idMovie" element={<MovieDetails />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
