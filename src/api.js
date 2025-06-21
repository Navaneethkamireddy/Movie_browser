import axios from 'axios';

const API_KEY = '134ac805';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
};

export const getMovieDetails = (id) => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
};

