import React from 'react';

import '../styles/nav-component.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="col-xs-4 offset-xs-8 text-xs-center navbar-fixed-top navbar__container">
        <ul className="nav nav-inline">
          <li className="nav-item">
            <a className="nav-link navbar__link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar__link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar__link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
