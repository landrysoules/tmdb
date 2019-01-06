import React from 'react';
import './SearchResultsDropDown.css';
import SearchResultDropDownLine from './SearchResultDropDownLine';

const SearchResultsDropDown = ({ results }) => {
  if (results) {
    const lines = results
      ? results.map(result => (
          <SearchResultDropDownLine result={result} key={result.id} />
        ))
      : null;

    return <div className="dropdownlist">{lines}</div>;
  } else {
    return null;
  }
};
export default SearchResultsDropDown;
