import React from 'react';
import './FrontPuzzle.css';

const FrontPuzzle = ({ movies }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies[0].backdrop_path}`}
          alt="placeholder"
        />
      </div>
      <div>
        <img
          src="https://placeimg.com/250/141/people/grayscale"
          alt="placeholder"
        />
        <img
          src="https://placeimg.com/250/141/people/grayscale"
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export default FrontPuzzle;
