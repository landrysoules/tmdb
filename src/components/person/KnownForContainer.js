import React, { useEffect, useState } from 'react';
import { fetchCombinedCredits } from '../../services/ApiService';
import KnownFor from './KnownFor';
import _ from 'lodash/core';
import * as R from 'ramda';

const { sort, filter, descend, prop } = R;

const KnownForContainer = ({ personId }) => {
  const [combinedCredits, setCombinedCredits] = useState({});
  useEffect(() => {
    fetchCombinedCredits(personId)
      .then(response => {
        setCombinedCredits(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!_.isEmpty(combinedCredits)) {
    console.warn('ccredits', combinedCredits.cast);
    // FIXME: Remove tv where episode count < 2 or better : character !== "" or even better : genre_id
    const sortByPopularity = sort(descend(prop('popularity')));
    const filterTalkShows = e => e.character !== '';
    // const sortedCredits = _.orderBy(combinedCredits.cast, 'popularity', 'desc');
    const sortedCredits = filter(
      filterTalkShows,
      sortByPopularity(combinedCredits.cast)
    );
    console.warn('sortedCredits', sortedCredits);
    return <KnownFor credits={sortedCredits.slice(0, 8)} />;
  }
  return null;
};
export default KnownForContainer;
