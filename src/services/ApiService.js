import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const TMDB_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = TMDB_URL;

const fetchPlayingNowMovies = () => {
  return axios.get(
    `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
};

const fetchPlayingNowSeries = () => {
  return axios.get(`tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchMovie = id => {
  return axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchTV = id => {
  return axios.get(`tv/${id}?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchCredits = movieId => {
  return axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );
};

const fetchTVCredits = id => {
  return axios.get(`tv/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchPerson = id => {
  return axios.get(`person/${id}?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchCombinedCredits = id => {
  return axios.get(
    `person/${id}/combined_credits?api_key=${API_KEY}&language=en-US&page=1`
  );
};

const fetchConfig = () => {
  return axios.get(`${TMDB_URL}configuration?api_key=${API_KEY}`);
};

export {
  fetchPlayingNowMovies,
  fetchPlayingNowSeries,
  fetchMovie,
  fetchTV,
  fetchCredits,
  fetchTVCredits,
  fetchConfig,
  fetchPerson,
  fetchCombinedCredits,
};
