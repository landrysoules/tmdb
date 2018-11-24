import React from 'react';
import './FrontPuzzle.css';

const FrontPuzzle = ({ movies, series }) => {
  const largeImageUrl = 'https://image.tmdb.org/t/p/w500/';
  const smallImageUrl = 'https://image.tmdb.org/t/p/w300/';
  return (
    <>
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="puzzle">
              <div className="image-container">
                <div className="image-text">{series[0].name}</div>
                <img
                  src={`${largeImageUrl}${series[0].backdrop_path}`}
                  alt="placeholder"
                  width="500px"
                />
              </div>
              <div>
                <img
                  src={`${smallImageUrl}${series[1].backdrop_path}`}
                  alt="placeholder"
                  width="250px"
                />
                <img
                  src={`${smallImageUrl}${series[2].backdrop_path}`}
                  alt="placeholder"
                  width="250px"
                />
              </div>
            </div>
            <div className="puzzle">
              <div className="image-container">
                <img
                  src={`${smallImageUrl}${movies[1].backdrop_path}`}
                  alt="placeholder"
                  width="250px"
                />
                <img
                  src={`${smallImageUrl}${movies[2].backdrop_path}`}
                  alt="placeholder"
                  width="250px"
                />
              </div>
              <div className="image-container">
                <img
                  src={`${largeImageUrl}${movies[0].backdrop_path}`}
                  alt="placeholder"
                  width="500px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPuzzle;
