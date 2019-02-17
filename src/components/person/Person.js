import React from 'react';
import { URL, IMAGE_SIZE } from '../../constants';
import './Person.css';

const Person = ({ person }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-narrow">
            <figure className="image image-profile">
              <img
                height="450px"
                width="300px"
                src={`${URL.IMAGES}${IMAGE_SIZE.PROFILE}/${
                  person.profile_path
                }`}
                alt="Actor"
              />
            </figure>
            <div>Personal info</div>
            <div>Known For</div>
            <div>{person.known_for_department}</div>
            <div>Birthday</div>
            <div>{person.birthday}</div>
            <div>Place Of Birth</div>
            <div>{person.place_of_birth}</div>
          </div>
          <div className="column">
            <h1 className="title">{person.name}</h1>
            <div>
              <h2 className="subtitle">Biography</h2>
            </div>
            <div>{person.biography}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
