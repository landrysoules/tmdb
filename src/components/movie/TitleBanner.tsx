import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Style from 'style-it';
import { Helmet } from 'react-helmet';

import './TitleBanner.css';
import {Movie } from '../../models/Movie';
import { Credits } from '../../models/Credits';

interface TitleBannerProps  {
  movie: Movie;
  credits: Credits
}

const TitleBanner = ({ movie, credits }:TitleBannerProps) => {
  console.debug('movie', movie);
  console.debug('credits', credits);
  const style = {
    // backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face${
    //   movie.backdrop_path
    // })`,
  };
  if (credits.crew && movie.original_title) {
    return (
      <>
        <Helmet>
          <title>The Movie dB - {movie.original_title}</title>
        </Helmet>
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
                    <nav className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <div style={{ width: '60px' }}>
                            <CircularProgressbar
                              percentage={movie.vote_average * 10}
                              text={`${movie.vote_average * 10}%`}
                              background
                              backgroundPadding={6}
                            />
                          </div>
                        </div>
                        <div>
                          <div>User</div>
                          <br />
                          <div>score</div>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                        <div>
                          {/* <p class="heading">Tweets</p>
                        <p class="title">3,456</p> */}
                        </div>
                      </div>
                    </nav>
                    <div>
                      <h5 className="title is-5 movie-content">Overview</h5>

                      <p>{movie.overview}</p>
                    </div>
                    <div>
                      <h5 className="title is-5 movie-content">
                        Featured crew
                      </h5>
                      <p>{credits.crew[0].name}</p>
                      <p>{credits.crew[0].job}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Style>
      </>
    );
  }
  return null;
};

export default TitleBanner;
