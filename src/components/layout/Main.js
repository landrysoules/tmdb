import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from '../home/HomeContainer';
import MovieContainer from '../movie/MovieContainer';

const Main = () => (
  <Fragment>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/movies/:id" component={MovieContainer} />
  </Fragment>
);
export default Main;
