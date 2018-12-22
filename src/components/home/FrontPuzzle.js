import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPuzzle.css';

const FrontPuzzle = ({ movies, series }) => {
  const largeImageUrl = 'https://image.tmdb.org/t/p/w500/';
  const smallImageUrl = 'https://image.tmdb.org/t/p/w300/';
  return (
    <>
      <div className="section">
        <div className="container">
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <div className="puzzle">
              <div className="image-container">
                <div className="image-text">{series[0].name}</div>
                <img
                  src={`${largeImageUrl}${series[0].backdrop_path}`}
                  alt="placeholder"
                  width="500px"
                />
              </div>
              <div className="image-container">
                <div className="image-text-left">{series[1].name}</div>

                <img
                  src={`${smallImageUrl}${series[1].backdrop_path}`}
                  alt="placeholder"
                  width="250px"
                />
                <div className="image-text-right">{series[2].name}</div>
                <img
                  src={`${smallImageUrl}${series[2].backdrop_path}`}
                  alt="placeholder"
                  width="250px"
                />
              </div>
            </div>
            <div className="puzzle">
              <div className="image-container">
                <Link to={`/movies/${movies[1].id}`}>
                  <div className="image-text-left">
                    {movies[1].original_title}
                  </div>
                  <img
                    src={`${smallImageUrl}${movies[1].backdrop_path}`}
                    alt="placeholder"
                    width="250px"
                  />
                </Link>
                <Link to={`/movies/${movies[2].id}`}>
                  <div className="image-text-right">
                    {movies[2].original_title}
                  </div>
                  <img
                    src={`${smallImageUrl}${movies[2].backdrop_path}`}
                    alt="placeholder"
                    width="250px"
                  />
                </Link>
              </div>
              <div className="image-container">
                <Link to={`/movies/${movies[0].id}`}>
                  <div className="image-text">{movies[0].original_title}</div>
                  <img
                    src={`${largeImageUrl}${movies[0].backdrop_path}`}
                    alt="placeholder"
                    width="500px"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPuzzle;
