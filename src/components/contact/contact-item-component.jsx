import React from 'react';

import '../../styles/contact-item-component.scss';

export default class ContactItem extends React.Component {

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    isLink: React.PropTypes.bool
  };

  render(){

    if(this.props.isLink){
      return(
        <div className="contact__item col-xs-12 col-lg-11 offset-lg-1 text-md-left">
          <span>
            <a href={'https://www.' + this.props.text}>
              <i className={this.props.className} aria-hidden="true"></i>
            </a>
          </span>
          <span className="contact__item__text">
            <a href={'https://www.' + this.props.text}>{this.props.text}</a>
          </span>
        </div>
      );
    } else {
      return(
        <div className="contact__item col-xs-12 col-lg-11 offset-lg-1  text-md-left">
          <span><i className={this.props.className} aria-hidden="true"></i></span>
          <span className="contact__item__text">{this.props.text}</span>
        </div>
      )
    }
  }
}
