//@flow
import React from 'react';
import { URL, IMAGE_SIZE } from '../../../constants';
import { Person } from '../../../models/Person';

const CastCard = ({ cast }: { cast: Person }) => {
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

        {/* <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div> */}
      </div>
    </div>
  );
};

export default CastCard;
