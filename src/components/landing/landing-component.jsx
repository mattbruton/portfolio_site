import React from 'react';

import '../../styles/landing-component.scss';

export default class Landing extends React.Component {

  render() {
    return (
      <div className='landing__container text-xs-center'>
        <img className="landing__image" src="img/matt_port.jpg"/>
        <h1 className="landing__header">hi, i'm matt.</h1>
        <h3>( i write code )</h3>
      </div>
    );
  }
}
