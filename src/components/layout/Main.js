import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from '../home/HomeContainer';

const Main = () => (
  <Fragment>
    <Route exact path="/" component={HomeContainer} />{' '}
    {/* <Route path="/about" component={About} /> */}
  </Fragment>
);

export default Main;
