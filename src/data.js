import { v4 as randomId } from "uuid";

class Movie {
  constructor(imageUrl, year, title, category, pg, bookmarked, trending = false) {
    this.id = randomId();
    this.imageUrl = imageUrl;
    this.year = year;
    this.title = title;
    this.category = category;
    this.pg = pg;
    this.bookmarked = bookmarked;
    this.trending = trending;
  }
}

export const movieList = [
  new Movie(
    "https://picsum.photos/id/237/300/200",
    2019,
    "The great lands",
    "Movie",
    "PG",
    true,
    true,
  ),
  new Movie(
    "https://picsum.photos/id/100/300/200",
    2019,
    "The diary",
    "Movie",
    "PG",
    false
  ),
  new Movie(
    "https://picsum.photos/id/1/300/200",
    2019,
    "No lands beyond",
    "Movie",
    "PG",
    false
  ),
  new Movie(
    "https://picsum.photos/id/20/300/200",
    2019,
    "lands",
    "Series",
    "18+",
    false,
    true
  ),
  new Movie(
    "https://picsum.photos/id/33/300/200",
    2019,
    "The",
    "Movie",
    "PG",
    false
  ),
  new Movie(
    "https://picsum.photos/id/66/300/200",
    2019,
    "great",
    "Series",
    "PG",
    false,
    true,
  ),
  new Movie(
    "https://picsum.photos/id/88/300/200",
    2019,
    "The great lands",
    "Movie",
    "PG",
    false,
    true
  ),
  new Movie(
    "https://picsum.photos/id/250/300/200",
    2019,
    "The great lands",
    "Movie",
    "PG",
    false
  ),
];
