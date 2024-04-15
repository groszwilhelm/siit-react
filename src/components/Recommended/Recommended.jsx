import { movieList } from "../../data.js";
import { Movie } from "../Movie/Movie";

import PropTypes from "prop-types";

import "./Recommended.css";

export default function Recommended({ searchTerm }) {
  return (
    <section>
      <header>
        <h2>Recommended for you</h2>
      </header>

      <ul className="movie-list">
        {movieList
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
          )
          .map((movie) => (
            <li className="movie-container" key={movie.id}>
              <Movie movie={movie} />
            </li>
          ))}
      </ul>
    </section>
  );
}

Recommended.propTypes = {
  searchTerm: PropTypes.string
}
