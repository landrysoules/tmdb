import React from 'react';
import CastCard from './CastCard';

const TopBilledCast = ({ cast }) => {
  const cards = cast.map(item => {
    return (
      <div className="column" style={{ display: 'flex' }}>
        <CastCard cast={item} />
      </div>
    );
  });
  return (
    <>
      <div className="container">
        <div className="title is-4">Top Billed Cast</div>
        <div className="columns">
          {cards}
          <div className="column is-two-fifths" />
        </div>
      </div>
    </>
  );
};

export default TopBilledCast;
