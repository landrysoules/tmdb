//@flow
import React from 'react';
import TitleBanner from './TitleBanner';
import TopBilledCast from './top-billed-cast/TopBilledCast';
import { Movie as MovieModel } from '../../models/Movie';
import { Credits } from '../../models/Credits';

const Movie = ({ movie, credits }: { movie: MovieModel, credits: Credits }) => {
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
