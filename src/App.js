import React, { Component } from 'react';
import './App.css';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout />
      </Router>
    );
  }
}
export default App;
