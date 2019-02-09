import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Autosuggest from 'react-autosuggest';

interface SearchBarProps {}

interface SearchBarState {
  value: string;
  suggestions: string[];
  selected: any;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    console.warn('SearchBar props: ', props);
    // this.state = {
    //   value: '',
    //   suggestions: [],
    // };

    this.handleChange = this.handleChange.bind(this); // FIXME: Check if this is needed
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.suggestionSelected = this.suggestionSelected.bind(this);
  }

  getInitialState() {
    return { backspaceRemoves: true, multi: true, creatable: false };
  }

  getSuggestionValue(suggestion: any) {
    return suggestion.value;
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions(value: any) {
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
  renderSuggestion(suggestion: any) {
    let displayedSuggestion = '';
    const icon = this.getIcon(suggestion.media_type);
    switch (suggestion.media_type) {
      case 'tv':
        displayedSuggestion = suggestion.original_name;
        break;
      case 'person':
        displayedSuggestion = suggestion.name;
        break;
      default:
        //movie
        displayedSuggestion = suggestion.original_title;
        break;
    }
    return (
      <div>
        {icon}
        <span className="suggestion-title">{displayedSuggestion}</span>
      </div>
    );
  }

  suggestionSelected(event: any, config: any) {
    console.debug('suggestionSelected', config.suggestion);
    this.setState({ selected: config.suggestion, value: '' }, function(this:SearchBar) {
      let path = 'movies';
      switch (config.suggestion.media_type) {
        case 'tv':
          path = 'tv';
          break;
        case 'person':
          path = 'person';
          break;
        default:
          break;
      }
      this.props.history.push(`/${path}/${this.state.selected.id}`);
    });
  }

  getIcon(type: string) {
    switch (type) {
      case 'movie':
        return <FontAwesomeIcon icon={faFilm} />;
      case 'person':
        return <FontAwesomeIcon icon={faUser} />;
      case 'tv':
        return <FontAwesomeIcon icon={faTv} />;
      default:
        break;
    }
    return null;
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested(value: string) {
    this.getSuggestions(value);
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  getResults(input: any) {
    //TODO: move this to API Service
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

  renderInput() {
    return <input type="text" />;
  }

  renderArrow() {
    return null;
  }

  handleChange(event: any, { newValue }: any) {
    console.debug('Char saisi', newValue);
    // Avoid issues when using kb arrows in search results (when pressing arrow, new value is undefined , and we don't do anything then)
    if (newValue !== undefined) {
      this.setState({ value: newValue });
      this.getResults(newValue);
    }
  }

  render() {
    const inputProps = {
      placeholder: 'Search for a movie, tv show, person...',
      value: this.state.value,
      onChange: this.handleChange,
    };

    const toRender = (
      <>
        <div className="container">
          <div className="field">
            <div className="control has-icons-left">
              <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                onSuggestionSelected={this.suggestionSelected}
                inputProps={inputProps}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </>
    );
    return toRender;
  }
}
// Here I have to use withRouter, since Autocomplete is not rendered by RR
// (since not in a Route). Great explanation here :
// https://tylermcginnis.com/react-router-programmatically-navigate/ I need it
// to change the route to /movie/xxx
export default withRouter<SearchBarProps>(SearchBar);
