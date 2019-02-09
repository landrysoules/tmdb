import React, { useEffect, useState } from 'react';
import { fetchTV, fetchTVCredits } from '../../services/ApiService';
import TV from './TV';

const TVContainer = props => {
  const [tv, setTV] = useState({});
  const [credits, setCredits] = useState({});
  useEffect(
    () => {
      fetchTV(props.match.params.id)
        .then(response => {
          response.data.releaseYear = response.data.first_air_date.split(
            '-'
          )[0];
          setTV(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [] // Highly important, without [], fetch would execute forever !!
  );

  useEffect(
    () => {
      fetchTVCredits(props.match.params.id)
        .then(response => {
          setCredits(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [] // Highly important, without [], fetch would execute forever !!
  );

  if (tv && credits.cast) return <TV tv={tv} credits={credits} />;
  return null;
};

export default TVContainer;
