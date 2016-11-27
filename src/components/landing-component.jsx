import React from 'react';

import '../styles/landing-component.scss';

export default class Landing extends React.Component {
  
  render() {
    return (
      <div className='landing__container text-xs-center'>
        <img className="landing__image" src="http://placekitten.com/200/300"/>
        <h1 className="landing__header">Hi, I'm Matt</h1>
      </div>
    );
  }
}
