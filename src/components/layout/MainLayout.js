import React, { Fragment } from 'react';
import NavBar from './NavBar';
import SearchBar from '../search/SearchBar';
import Main from './Main';
import Footer from './Footer';

const MainLayout = () => (
  <Fragment>
    <NavBar />
    <SearchBar />
    <Main />
    <Footer />
  </Fragment>
);
export default MainLayout;
