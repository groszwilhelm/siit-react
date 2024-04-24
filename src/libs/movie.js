import { url, axios } from './config';

const basePath = `${url}/movies`;

export function getMovies(accessToken) {
  // axios -> alternative to fetch -> npm install axios
  return fetch(`${basePath}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }).then((response) => {
    if (!response.ok) {
      throw response;
    }

    // JSON.parse equivalent
    return response.json();
  });
}

export function getMovie(id) {
  return axios.get(`${basePath}/${id}`);
}

export function createMovie(movie) {
  return axios.post(`${basePath}`, movie);
}

export function patchMovie(id, partialMovieProperties) {
  return axios.patch(`${basePath}/${id}`, partialMovieProperties);
}

export function deleteMovie(id) {
  return axios.delete(`${basePath}/${id}`);
}
