import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../home/HomeContainer';
import MovieContainer from '../movie/MovieContainer';

// Route components have to be defined in a weird way : eg component={props => <MovieContainer {...props} />}
// instead of component={MovieContainer}
// It's the way I found to make Main re-render after search result is clicked
// Explanation here :https://stackoverflow.com/questions/48796869/react-router-url-is-changed-component-not-re-rendered
const Main = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route
        path="/movies/:id"
        // component={props => <MovieContainer {...props} />} => Normalement c'est ca qu il faudrait utiliser...
        render={props => <MovieContainer {...props} />}
      />
    </Switch>
  </Fragment>
);
export default Main;
