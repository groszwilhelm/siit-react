import axios from 'axios';

const url = "http://localhost:3000/movies";

export function getMovies() {
  // axios -> alternative to fetch -> npm install axios
  return fetch(`${url}`).then((response) => {
    if (!response.ok) {
      throw new Error(response);
    }

    // JSON.parse equivalent
    return response.json();
  });
}

export function getMovie(id) {
  return axios.get(`${url}/${id}`);
}

export function createMovie(movie) {
  return axios.post(`${url}`, movie);
}

export function updateMovie(id, movie) {
  return axios.patch(`${url}/${id}`, movie);
}

export function deleteMovie(id) {
  return axios.delete(`${url}/${id}`);
}
