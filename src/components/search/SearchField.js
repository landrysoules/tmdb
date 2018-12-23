import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchField.css';

const SearchField = () => {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <input className="input" type="text" />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  );
};

export default SearchField;
