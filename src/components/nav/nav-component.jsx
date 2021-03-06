import React from 'react';
import NavItem from './nav-item-component.jsx';

import '../../styles/nav-component.scss';

export default class Navbar extends React.Component {
  render() {

    return (
      <nav className="col-sm-12 text-xs-center text-md-right navbar-fixed-top navbar__container">
        <ul className="nav nav-inline nav__container--mobile">
          <NavItem url="#about" text="about"/>
          <NavItem url="#projects" text="projects"/>
          <NavItem url="#contact" text="contact" />
        </ul>
      </nav>
    );
  }
}
