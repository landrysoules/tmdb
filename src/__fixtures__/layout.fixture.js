import Home from '../components/home/Home';
import NavBar from '../components/layout/NavBar';
import FrontPuzzle from '../components/home/FrontPuzzle';
export default [
  {
    component: Home,
    props: {
      loggedIn: true,
      user: {
        name: 'Dan the Man',
      },
    },
  },
  {
    component: NavBar,
    props: {
      loggedIn: true,
      user: {
        name: 'Dan the Man',
      },
    },
  },
  {
    component: FrontPuzzle,
    props: {
      movies: [
        {
          id: 1,
          title: 'The Big Lebowski',
        },
      ],
    },
  },
];
