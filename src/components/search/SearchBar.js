import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResultsDropDown from './SearchResultsDropDown';

class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState() {
    return { backspaceRemoves: true, multi: true, creatable: false };
  }

  onChange(value) {
    this.setState({ value: value });
    if (value) {
      this.gotoMedia(value);
    }
  }

  getResults(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    return axios
      .get(`${process.env.REACT_APP_API_ROOT}/search/multi?query=${input}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(data => {
        return { options: data.data.results };
      });
  }

  gotoMedia(value, event) {
    if (value.media_type === 'movie') {
      this.props.displayMovie(value.id);
      this.props.history.push(`/movie/${value.id}`);
      this.setState({ value: '' });
    } else {
      if (value.media_type === 'tv') {
        this.props.displayTV(value.id);
        this.props.history.push(`/tv/${value.id}`);
        this.setState({ value: '' });
      } else {
        if (value.media_type === 'person') {
          this.props.displayPerson(value.id);
          this.props.history.push(`/person/${value.id}`);
          this.setState({ value: '' });
        }
      }
    }
  }

  renderOption(option) {
    let mediaName;
    let icon;
    switch (option.media_type) {
      case 'movie':
        mediaName = option.original_title;
        icon = 'film';
        break;

      case 'tv':
        mediaName = option.original_name;
        icon = 'tv';
        break;

      case 'person':
        mediaName = option.name;
        icon = 'user';
        break;

      default:
        break;
    }
    return (
      <div>
        <span>{mediaName}</span>
        <span className="movie-type">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    );
  }

  renderInput() {
    return <input type="text" />;
  }

  renderArrow() {
    return null;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.debug({ value: event.target.value });
    this.getResults(event.target.value);
  }

  filterOptions(options, filter, currentValues) {
    // For now, we just manage movies and tv, in the future, I hope I'll find time
    // to add persons and all other media_types To disable filtering, juste return
    // options
    return options.filter(option => {
      return (
        option.media_type === 'movie' ||
        option.media_type === 'tv' ||
        option.media_type === 'person'
      );
    });
    // return options;
  }

  render() {
    return (
      // <section className="section">
      <div className="container">
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder="Search" />
            <span className="icon is-small is-left">
              <SearchResultsDropDown />
            </span>
          </p>
        </div>
      </div>
      // </section>
    );
  }
}
// Here I have to use withRouter, since Autocomplete is not rendered by RR
// (since not in a Route). Great explanation here :
// https://tylermcginnis.com/react-router-programmatically-navigate/ I need it
// to change the route to /movie/xxx
export default withRouter(SearchBar);
