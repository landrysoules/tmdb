import React from 'react';
import logo from './tmdb-logo.svg';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar is-spaced is-black">
    <div className="container">
      <div className="navbar-brand">
        <a href="https://bulma.io">
          <img src={logo} width="81" height="72" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item up">discover</a>
          <a className="navbar-item up">movies</a>
          <a className="navbar-item up">tv shows</a>
          <a className="navbar-item up">people</a>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
