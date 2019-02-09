import React from 'react';
import TitleBanner from './TitleBanner';
import TopBilledCast from './top-billed-cast/TopBilledCast';
import { Movie as Moovie} from '../../models/Movie';
import { Credits } from '../../models/Credits';

interface MovieProps{
movie: Moovie;
credits:  Credits;
}

const Movie = ({ movie, credits }:MovieProps) => {
  console.debug('Movie!!', credits);
  const topCast = credits.cast.slice(0, 5);
  return (
    <>
      <TitleBanner movie={movie} credits={credits} />
      <TopBilledCast cast={topCast} />
    </>
  );
};

export default Movie;
