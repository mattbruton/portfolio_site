import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/nav-component.jsx';
import Landing from './components/landing-component.jsx';
import About from './components/about-component.jsx';
import Contact from './components/contact-component.jsx';

import './styles/main.scss';

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Navbar />
        <Landing />
        <About />
        <section id="projects" />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
