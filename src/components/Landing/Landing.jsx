import { useContext, useEffect, useState } from "react";

import Search from "../Search/Search";
import Trending from "../Trending/Trending";
import Recommended from "../Recommended/Recommended";
import { getMovies } from "../../libs/movie";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

export default function Landing() {
  let [searchTerm, setSearchTerm] = useState("");
  let [movieList, setMovieList] = useState([]);
    const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    getMovies(auth)
      .then((body) => setMovieList(body))
      .catch((response) => {
        if (response.status === 401) {
          navigate("/login");
        }
      });
  }, []);

  function onSearchTermChange(term) {
    setSearchTerm(term);
  }

  return (
    <>
      <Search setSearchTerm={onSearchTermChange} />
      <Trending movieList={movieList} />
      <Recommended movieList={movieList} searchTerm={searchTerm} />
    </>
  );
}
