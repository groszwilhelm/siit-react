import axios from 'axios';

export function getMovies() {
  // axios -> alternative to fetch -> npm install axios
  return fetch("http://localhost:3000/movies")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response);
    }
    
      // JSON.parse equivalent
      return response.json();
    });
}

export function getMovie(id) {
  return axios.get(`http://localhost:3000/moviess/${id}`);
}
