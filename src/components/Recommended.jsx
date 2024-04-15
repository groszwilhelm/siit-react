import { movieList } from "../data.js";
import { Movie } from './Movie.jsx';

import './Recommended.css';

export default function Recommended() {
  return (
    <section>
      <header>
        <h2>Recommended for you</h2>
      </header>
      
      <ul className='movie-list'>
        {
          movieList.map((movie) => (
            <li className='movie-container' key={movie.id}>
              <Movie movie={movie} />
            </li>
          ))
        }
      </ul>
    </section>
  );
}
