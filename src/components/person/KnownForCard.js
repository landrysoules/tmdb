import React from 'react';
import { IMAGE_SIZE, URL } from '../../constants';

const KnownForCard = ({ credit }) => {
  return (
    <>
      <figure class="image" height="225px" width="150px">
        <img
          alt={credit.original_title}
          src={`${URL.IMAGES}${IMAGE_SIZE.THUMB}/${credit.poster_path}`}
        />
      </figure>
      <div>{credit.original_title}</div>
    </>
  );
};

export default KnownForCard;
