import React from 'react';
import NavBar from './NavBar';
import SearchBar from '../search/SearchBar';
import Main from './Main';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const MainLayout = () => (
  <>
    <Helmet>
      <title>The Movie dB</title>
    </Helmet>
    <NavBar />
    <SearchBar />
    <Main />
    <Footer />
  </>
);
export default MainLayout;
