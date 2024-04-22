import { useEffect, useState } from "react";

import Search from "../Search/Search";
import Trending from "../Trending/Trending";
import Recommended from "../Recommended/Recommended";
import { getMovies } from "../../libs/movie";

export default function Landing() {
  let [searchTerm, setSearchTerm] = useState("");
  let [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies().then((body) => setMovieList(body));
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
