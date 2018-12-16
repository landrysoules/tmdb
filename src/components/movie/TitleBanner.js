import React from 'react';
import './TitleBanner.css';
import Style from 'style-it';

const TitleBanner = ({ movie }) => {
  console.debug('movie', movie);
  const style = {
    // backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face${
    //   movie.backdrop_path
    // })`,
  };
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
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                movie.poster_path
              }`}
              alt=""
            />
          </div>
        </div>
      </div>
    </Style>
  );
};

export default TitleBanner;
