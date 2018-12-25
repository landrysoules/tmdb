import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResultsDropDown from './SearchResultsDropDown';
import SearchField from './SearchField';

class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this); // FIXME: Check if this is needed
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
        this.setState({ results: data.data.results });
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

  renderInput() {
    return <input type="text" />;
  }

  renderArrow() {
    return null;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.debug('Char saisi', event.target.value);
    this.getResults(event.target.value);
  }

  render() {
    return (
      <div className="container">
        <div className="field">
          <div className="control has-icons-left">
            <SearchField handleChange={this.handleChange} />
            <SearchResultsDropDown results={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}
// Here I have to use withRouter, since Autocomplete is not rendered by RR
// (since not in a Route). Great explanation here :
// https://tylermcginnis.com/react-router-programmatically-navigate/ I need it
// to change the route to /movie/xxx
export default withRouter(SearchBar);
