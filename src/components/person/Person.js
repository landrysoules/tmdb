import React from 'react';
import { URL, IMAGE_SIZE } from '../../constants';
import './Person.css';

const Person = ({ person }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <figure className="image image-profile">
              <img
                src={`${URL.IMAGES}${IMAGE_SIZE.PROFILE}/${
                  person.profile_path
                }`}
                alt="Actor"
              />
            </figure>
            <div>Personal info</div>
          </div>
          <div className="column">
            <h1 class="title">{person.name}</h1>
            <div>
              <h2 class="subtitle">Biography</h2>
            </div>
            <div>{person.biography}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
