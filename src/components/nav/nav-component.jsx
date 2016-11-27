import React from 'react';
import NavItem from './nav-item-component.jsx';

import '../../styles/nav-component.scss';

export default class Navbar extends React.Component {
  render() {

    return (
      <nav className="col-md-4 offset-md-8 col-sm-12 text-xs-center navbar-fixed-top navbar__container">
        <ul className="nav nav-inline nav__container--mobile">
          <NavItem url="#" text="about"/>
          <NavItem url="#" text="projects"/>
          <NavItem url="#" text="contact" />
        </ul>
      </nav>
    );
  }
}
