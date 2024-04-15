import { HiOutlineBookmark } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";

import PropTypes from 'prop-types';

import "./Movie.css";
import { useState } from 'react';

export function Movie(props) {
  const { title, pg, imageUrl, category, bookmarked, year } = props.movie;

  const [checked, setChecked] = useState(bookmarked);

  function setBookmark() {
    setChecked(!checked);
  }

  return (
    <article className={`movie ${props.large ? 'movie--large' : ''}`}>
      <img height={props.large ? "250" : "200"} width={props.large ? "400" : "300"} src={imageUrl} />

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

Movie.propTypes = {
  large: PropTypes.bool,
  movie: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.number,
    bookmarked: PropTypes.bool,
    pg: PropTypes.string,
    category: PropTypes.string,
    imageUrl: PropTypes.string,
  })
}
