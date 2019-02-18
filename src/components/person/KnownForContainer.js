import React, { useEffect, useState } from 'react';
import { fetchCombinedCredits } from '../../services/ApiService';
import KnownFor from './KnownFor';
import _ from 'lodash/core';

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

  if (!_.isEmpty(combinedCredits))
    return <KnownFor credits={combinedCredits.cast.slice(0, 8)} />;
  return null;
};
export default KnownForContainer;
