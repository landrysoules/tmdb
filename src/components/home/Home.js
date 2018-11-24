import React from 'react';

import './Home.css';
import FrontPuzzle from './FrontPuzzle';

const Home = ({ movies, series }) => (
  <FrontPuzzle movies={movies} series={series} />
);
export default Home;
