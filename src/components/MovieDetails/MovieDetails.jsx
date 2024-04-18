import { useParams, useNavigate } from "react-router-dom";
// import { movieList } from '../../data.js';
import Movie from "../Movie/Movie";
import { useEffect, useState } from "react";
import { getMovie, getMovies } from "../../libs/movie";

export function MovieDetails() {
  const { idMovie } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();

  // const movie = movieList.find((movie) => movie.id === idMovie);

  useEffect(() => {
    // getMovies().then((body) => {
    //   const foundMovie = body.find((movie) => movie.id === idMovie);
    //   setMovie(foundMovie);
    // });
    getMovie(idMovie)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idMovie]);

  // useEffect(() => {
  //   if (!movie) {
  //     navigate('/404');
  //     return;
  //   }
  // }, []);

  if (!movie) {
    return (
      <h2>
        The movie you have requested does not exits please search for a
        different one
      </h2>
    );
  }

  return (
    <section>
      <header>
        <h2>Movie details</h2>
      </header>

      {<Movie skipNavigation movie={movie} />}
    </section>
  );
}

/* REST - Representational State Transfer
 * GET /movies -> Brings back all resources
 * GET /movies/:id -> Brings back a specific resource
 * POST /movies -> Creates a new resource
 * PUT /movies/:id -> Updates a resource { id, title } DELETE and POST rest of the properties are DELETED!
 * PATCH /movies/:id -> Updates partially a resource { id, title } rest of the properties remain unchanged
 * DELETE /movies -> Deletes all movies
 * DELETE /movies/:id -> Deletes a specific movie
 */
