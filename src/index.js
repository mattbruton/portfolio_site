// Set up your application entry point here...

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/nav-component.js';
import Landing from './components/landing-component.jsx';

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Navbar />
        <Landing />
        <Landing />
        <section id="about" />
        <section id="projects" />
        <section id="link" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
