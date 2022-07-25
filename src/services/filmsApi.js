import axios from 'axios';

const API_KEY = 'bfe20768c956c05046c7d088e4b361cd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
}

export const fetchMovieDetails = async (id) => {
  return await axios.get(`movie/${id}?api_key=${API_KEY}`);
}

export const fetchMovieCredits = async (id) => {
  return await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
}

export const fetchMovieReviews = async (id) => {
  return await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
}

export const fetchMoviesByName = async (name) => {
  return await axios.get(`search/movie?api_key=${API_KEY}&query=${name}`);
}