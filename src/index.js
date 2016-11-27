// Set up your application entry point here...

import React from 'react';
import ReactDOM from 'react-dom';

//import Navbar from './components/nav-component.js';
//import Footer from './components/footer-component.js';

export default class App extends React.Component {

  render() {
    return(
      <div>
        //<Navbar />
        <section id="about" />
        <section id="projects" />
        <section id="link" />
        //<Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
