import '../styles/nav-component.scss';

import React from 'react';



export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__logo col-lg-6 col-sm-12">
          <h1>matt<span>bruton</span></h1>
        </div>
        <div className="nav__list col-lg-6 col-sm-12">
          <ul className="col-lg-8 offset-lg-4">
            <li className="nav__list__item">
            <p>About
              <span>&bull;</span>
            </p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
