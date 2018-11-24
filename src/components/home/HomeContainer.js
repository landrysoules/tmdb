import React, { Component } from 'react';
import {
  fetchPlayingNowMovies,
  fetchPlayingNowSeries,
} from '../../services/ApiService';
import Home from './Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingNowMovies: [],
      playingNowSeries: [],
    };
  }

  componentDidMount() {
    fetchPlayingNowMovies().then(response => {
      console.warn('results', response.data.results);
      this.setState({ playingNowMovies: response.data.results });
    });
    fetchPlayingNowSeries().then(response => {
      console.warn('results', response.data.results);
      this.setState({ playingNowSeries: response.data.results });
    });
  }

  render() {
    if (
      this.state.playingNowMovies.length > 0 &&
      this.state.playingNowSeries.length > 0
    ) {
      return (
        <Home
          movies={this.state.playingNowMovies}
          series={this.state.playingNowSeries}
        />
      );
    }
    return null;
  }
}

export default HomeContainer;
