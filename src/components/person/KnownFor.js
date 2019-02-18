import React from 'react';
import KnownForCard from './KnownForCard';

const KnownFor = ({ credits }) => {
  const cards = credits.map(credit => {
    return (
      <div className="column">
        <KnownForCard credit={credit} />
      </div>
    );
  });
  return <div className="columns">{cards}</div>;
};

export default KnownFor;
