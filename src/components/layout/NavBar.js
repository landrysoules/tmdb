import React from 'react';
import logo from './tmdb-logo.svg';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar is-spaced is-black">
    <div className="container">
      <div className="navbar-brand">
        <a href="/">
          <img src={logo} width="81" height="72" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item up" href="/discover">
            discover
          </a>
          <a className="navbar-item up" href="/movies">
            movies
          </a>
          <a className="navbar-item up" href="/tv">
            tv shows
          </a>
          <a className="navbar-item up" href="/people">
            people
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
