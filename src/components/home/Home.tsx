import React from 'react';

import './Home.css';
import FrontPuzzle from './FrontPuzzle';
import { Movie } from '../../models/Movie';
import { Serie } from '../../models/Serie';
export interface Props {
    movies: Movie[];
    series: Serie[];
}
const Home = ({ movies, series }: Props) => <FrontPuzzle movies={movies} series={series} />;
export default Home;
