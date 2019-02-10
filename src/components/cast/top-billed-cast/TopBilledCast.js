import React from 'react';
import CastCard from './CastCard';
import { Link } from 'react-router-dom';

const TopBilledCast = ({ cast }) => {
  const cards = cast.map(item => {
    return (
      <div className="column" style={{ display: 'flex' }}>
        <Link to={`/person/${item.id}`}>
          <CastCard cast={item} />
        </Link>
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
