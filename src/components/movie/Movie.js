import React from 'react';
import TitleBanner from './TitleBanner';
import TopBilledCast from './top-billed-cast/TopBilledCast';

const Movie = ({ movie, credits }) => {
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
