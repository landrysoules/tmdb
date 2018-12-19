import React from 'react';
import './TitleBanner.css';
import Style from 'style-it';

const TitleBanner = ({ movie, credits }) => {
  console.debug('movie', movie);
  console.debug('credits', credits);
  const style = {
    // backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face${
    //   movie.backdrop_path
    // })`,
  };
  if (credits.crew && movie.original_title) {
    return (
      <Style>
        {`
  .title-banner::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 542px;
    filter: opacity(90%) grayscale(40%) contrast(30%) brightness(30%);
    background-image: url(https://image.tmdb.org/t/p/w1400_and_h450_face${
      movie.backdrop_path
    });
    background-repeat: no-repeat;
    background-size: cover;
}
    `}
        <div className="title-banner" style={style}>
          <div className="section  title-banner-front">
            <div className="container">
              <div className="media">
                <div className="media-left">
                  <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                      movie.poster_path
                    }`}
                    alt=""
                  />
                </div>
                <div className="media-content movie-content">
                  <h2 className="title is-2 movie-content">
                    {movie.original_title} ({movie.releaseYear})
                  </h2>
                  <div>
                    Overview
                    <p>{movie.overview}</p>
                  </div>
                  <div>
                    Featured crew
                    <p>{credits.crew[0].name}</p>
                    <p>{credits.crew[0].job}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    );
  }
  return null;
};

export default TitleBanner;
