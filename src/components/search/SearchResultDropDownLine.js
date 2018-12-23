import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';

const getIcon = type => {
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
};

const getTitle = result => {
  switch (result.media_type) {
    case 'movie':
      return result.original_title;
    case 'person':
      return result.name;
    case 'tv':
      return result.original_name;
    default:
      break;
  }
  return '';
};

const SearchResultDropDownLine = ({ result }) => {
  console.debug(getIcon(result.media_type));
  const title = '';
  return (
    <div>
      {getIcon(result.media_type)}
      {getTitle(result)}
    </div>
  );
};
export default SearchResultDropDownLine;
