import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/Home';

const Main = () => (
  <Fragment>
    <Route exact path="/" component={Home} />{' '}
    {/* <Route path="/about" component={About} /> */}
  </Fragment>
);

export default Main;
