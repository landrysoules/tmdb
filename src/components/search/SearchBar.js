import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResultsDropDown from './SearchResultsDropDown';
import SearchField from './SearchField';
import Autosuggest from 'react-autosuggest';

class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };

    this.handleChange = this.handleChange.bind(this); // FIXME: Check if this is needed
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  getInitialState() {
    return { backspaceRemoves: true, multi: true, creatable: false };
  }

  getSuggestionValue(suggestion) {
    return suggestion.value;
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions(value) {
    console.debug('valuetrim', value);
    const inputValue = value.value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.getResults(value.value);
  }

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  //  getSuggestionValue ( suggestion  suggestion.name;

  // Use your imagination to render suggestions.
  renderSuggestion(suggestion) {
    return <div>{suggestion.media_type}</div>;
  }

  onChange(value) {
    this.setState({ value: value });
    if (value) {
      this.gotoMedia(value);
    }
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested(value) {
    // this.setState({
    //   suggestions: this.getSuggestions(value),
    // });
    this.getSuggestions(value);
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
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
        this.setState({ suggestions: data.data.results });
        console.debug('suggestions', this.state.suggestions);
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
    const inputProps = {
      placeholder: 'Type a programming language',
      value: this.state.value,
      onChange: this.handleChange,
    };
    return (
      <div className="container">
        <div className="field">
          <div className="control has-icons-left">
            {/* <SearchField handleChange={this.handleChange} />
            <SearchResultsDropDown results={this.state.results} /> */}
            <Autosuggest
              suggestions={this.state.suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
            />
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
