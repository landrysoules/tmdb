import React from 'react';
import { IMAGE_SIZE, URL } from '../../constants';
import './KnownForCard.css';

const KnownForCard = ({ credit }) => {
  return (
    <>
      <figure className="image">
        <img
          className="card-image"
          alt={credit.original_title}
          src={`${URL.IMAGES}${IMAGE_SIZE.THUMB}/${credit.poster_path}`}
        />
      </figure>
      <div>{credit.original_title || credit.original_name}</div>
    </>
  );
};

export default KnownForCard;
