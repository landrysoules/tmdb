import React, { Component } from 'react';
import { fetchPlayingNowMovies } from '../../services/ApiService';
import Home from './Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingNowMovies: [],
    };
  }

  componentDidMount() {
    fetchPlayingNowMovies().then(response => {
      console.warn('results', response.data.results);
      this.setState({ playingNowMovies: response.data.results });
    });
  }

  render() {
    if (this.state.playingNowMovies.length > 0) {
      return <Home movies={this.state.playingNowMovies} />;
    }
    return null;
  }
}

export default HomeContainer;
