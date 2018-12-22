import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const getIcon = type => {
  switch (type) {
    case 'movie':
      return <FontAwesomeIcon icon={faFilm} />;
    case 'person':
      return <FontAwesomeIcon icon={faUser} />;
    default:
      break;
  }
  return null;
};

const SearchResultDropDownLine = ({ result }) => {
  console.debug(getIcon(result.media_type));
  return (
    <div>
      {getIcon(result.media_type)}
      {result.media_type === 'movie' ? result.original_title : result.name}
    </div>
  );
};
export default SearchResultDropDownLine;
