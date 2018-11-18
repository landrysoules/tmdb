import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const TMDB_URL = 'https://api.themoviedb.org/3/';

const fetchPlayingNowMovies = () => {
  return axios.get(
    `${TMDB_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export { fetchPlayingNowMovies };
