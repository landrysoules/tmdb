import React from 'react';
import TitleBanner from './TitleBanner';
import TopBilledCast from '../cast/top-billed-cast/TopBilledCast';

const TV = ({ tv, credits }) => {
  console.debug('TV!!', credits);
  const topCast = credits.cast.slice(0, 5);
  return (
    <>
      <TitleBanner tv={tv} credits={credits} />
      <TopBilledCast cast={topCast} />
    </>
  );
};

export default TV;
