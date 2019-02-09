import React, { Component } from 'react';
import { fetchPlayingNowMovies, fetchPlayingNowSeries } from '../../services/ApiService';
import Home from './Home';
import { Movie } from '../../models/Movie';
import { Serie } from '../../models/Serie';

interface HomeProps {}

interface HomeState {
    playingNowMovies: Movie[];
    playingNowSeries: Serie[];
}

class HomeContainer extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            playingNowMovies: [],
            playingNowSeries: []
        };
    }

    componentDidMount() {
        fetchPlayingNowMovies().then((response) => {
            console.warn('results', response.data.results);
            this.setState({ playingNowMovies: response.data.results });
        });
        fetchPlayingNowSeries().then((response) => {
            console.warn('results', response.data.results);
            this.setState({ playingNowSeries: response.data.results });
        });
    }

    render() {
        if (this.state.playingNowMovies.length > 0 && this.state.playingNowSeries.length > 0) {
            return <Home movies={this.state.playingNowMovies} series={this.state.playingNowSeries} />;
        }
        return null;
    }
}

export default HomeContainer;
