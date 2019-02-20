import React, { useEffect, useState } from 'react';
import { fetchPerson, fetchCombinedCredits } from '../../services/ApiService';
import Person from './Person';
import _ from 'lodash/core';

const PersonContainer = props => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetchPerson(props.match.params.id)
      .then(response => {
        setPerson(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  if (!_.isEmpty(person)) return <Person person={person} />;
  return null;
};

export default PersonContainer;
