import { useEffect, useState } from "react";
import { getMovie, patchMovie } from "../../libs/movie";
import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "../MovieForm";

export default function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    getMovie(id).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  function submit(movie) {
    patchMovie(id, movie).then(() => navigator(`/movie-details/${id}`));
  }

  return (
    <section>
      <header>
        <h1>Edit movie</h1>
      </header>

      <MovieForm submit={submit} movie={movie} buttonTitle="Edit movie" />
    </section>
  );
}
