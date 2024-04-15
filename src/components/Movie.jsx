import { HiOutlineBookmark } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";

import "./Movie.css";
import { useState } from 'react';

export function Movie(props) {
  const { title, pg, imageUrl, category, bookmarked, year } = props.movie;

  const [checked, setChecked] = useState(bookmarked);

  function setBookmark() {
    setChecked(!checked);
  }

  return (
    <article className="movie">
      <img height="200" width="300" src={imageUrl} />

      <span className="movie__bookmark" onClick={setBookmark}>
        {checked ? <HiBookmark /> : <HiOutlineBookmark />}
      </span>

      <p className="movie__details">
        <span>{year}</span>
        <span>{category}</span>
        <span>{pg}</span>
      </p>
      <h3 className="movie__title">{title}</h3>
    </article>
  );
}
