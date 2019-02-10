import React from 'react';
import './Footer.css';
import logo from './tmdb-logo.svg';

const Footer = () => (
  <footer className="footer bottom-background">
    <div className="content">
      <div className="columns">
        <div className="column is-one-quarter" />
        <div className="column">
          <img id="logo" src={logo} alt="" style={{ marginTop: '5em' }} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
