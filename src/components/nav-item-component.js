import React from 'react';

import '../styles/nav-item-component.scss';

export default class NavItem extends React.Component{

  static propTypes = {
    url: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  };

  render(){
    return(
      <li className="nav-item">
        <a className="nav-link navbar__link"
           href={this.props.url}>
           {this.props.text}
        </a>
      </li>
    );
  }
}
