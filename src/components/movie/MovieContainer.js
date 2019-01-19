import React, { Component, useEffect, useState } from 'react';
import { fetchMovie, fetchCredits } from '../../services/ApiService';
import TitleBanner from '../movie/TitleBanner';

// class MovieContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movie: {},
//     };
//   }

//   componentDidMount() {
//     fetchMovie(this.props.match.params.id)
//       .then(response => {
//         this.setState({ movie: response.data });
//         console.info(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });

//     fetchCredits(this.props.match.params.id)
//       .then(response => {
//         this.setState({ credits: response.data });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   render() {
//     if (this.state.movie && this.state.credits) {
//       return (
//         <TitleBanner movie={this.state.movie} credits={this.state.credits} />
//       );
//     } else return null;
//   }
// }

const MovieContainer = props => {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  useEffect(
    () => {
      fetchMovie(props.match.params.id)
        .then(response => {
          response.data.releaseYear = response.data.release_date.split('-')[0];
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [] // Highly important, without [], fetch would execute forever !!
  );

  useEffect(
    () => {
      fetchCredits(props.match.params.id)
        .then(response => {
          setCredits(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [] // Highly important, without [], fetch would execute forever !!
  );

  return <TitleBanner movie={movie} credits={credits} />;
};

export default MovieContainer;
