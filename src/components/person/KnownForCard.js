import React from 'react';
import { IMAGE_SIZE, URL } from '../../constants';
import { Link } from 'react-router-dom';
import './KnownForCard.css';

function KnownForCard({ credit }) {
  const mediaCategoryPath = credit.media_type === 'tv' ? 'tv' : 'movies';
  return (
    <Link to={`/${mediaCategoryPath}/${credit.id}`}>
      <figure className="image">
        <img
          className="card-image"
          alt={credit.original_title}
          src={`${URL.IMAGES}${IMAGE_SIZE.THUMB}/${credit.poster_path}`}
        />
      </figure>
      <div>{credit.original_title || credit.original_name}</div>
    </Link>
  );
}

export default KnownForCard;
