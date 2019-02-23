import React from 'react';
import { URL, IMAGE_SIZE } from '../../../constants';

const CastCard = ({ cast }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={`${URL.IMAGES}${IMAGE_SIZE.MOVIE_CARD}/${cast.profile_path}`}
            alt="Actor"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-6" style={{ marginBottom: '0.3em' }}>
              {cast.name}
            </p>
            <p>{cast.character}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastCard;
