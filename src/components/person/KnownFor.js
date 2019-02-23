import React from 'react';
import KnownForCard from './KnownForCard';

const KnownFor = ({ credits }) => {
  const cards = credits.map(credit => {
    return (
      <div className="column" style={{ paddingRight: '0px' }}>
        <KnownForCard credit={credit} />
      </div>
    );
  });
  return (
    <>
      <h4 class="title is-4">Known for</h4>
      <div className="columns is-multiline">{cards}</div>
    </>
  );
};

export default KnownFor;
