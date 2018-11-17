// @flow
import React from 'react';
import './FrontPuzzle.css';

const FrontPuzzle = (
  movies: Array<{
    id: number,
    title: string,
  }>
) => (
  <div className="container">
    <div className="image-container">
      <img
        src="https://placeimg.com/500/282/people/grayscale"
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
export default FrontPuzzle;
