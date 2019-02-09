// @flow
import axios from 'axios';
import { Series } from '../models/Series';

const API_KEY = process.env.REACT_APP_API_KEY || '';
const TMDB_URL = 'https://api.themoviedb.org/3/';

const fetchPlayingNowMovies = () => {
    return axios.get(`${TMDB_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchPlayingNowSeries = () => {
    return axios.get(`${TMDB_URL}tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchMovie = (id: string) => {
    return axios.get(`${TMDB_URL}movie/${id}?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchTV = (id: string): { data: Series[] } => {
    return axios.get(`${TMDB_URL}tv/${id}?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchCredits = (movieId: string) => {
    return axios.get(`${TMDB_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchTVCredits = (id: string) => {
    return axios.get(`${TMDB_URL}tv/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`);
};

const fetchConfig = () => {
    return axios.get(`${TMDB_URL}configuration?api_key=${API_KEY}`);
};

export { fetchPlayingNowMovies, fetchPlayingNowSeries, fetchMovie, fetchTV, fetchCredits, fetchTVCredits, fetchConfig };
