import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing/Landing";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import NotFound from "./components/404/404";
import CreateMovie from './components/CreateMovie/CreateMovie';
import EditMovie from './components/EditMovie/EditMovie';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Navigation />

      {/* Switch statement */}
      <Routes>
        {/* Switch cases */}
        <Route path="/" element={<Landing />} />
        <Route path="/movie-details/:idMovie" element={<MovieDetails />} />
        <Route path="create-movie" element={<CreateMovie />} />
        <Route path="edit-movie/:id" element={<EditMovie />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
