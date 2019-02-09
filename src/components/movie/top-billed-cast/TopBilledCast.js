// @flow
import React from 'react';
import CastCard from './CastCard';
import { Person } from '../../../models/Person';

const TopBilledCast = ({ cast }: { cast: Person[] }) => {
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
