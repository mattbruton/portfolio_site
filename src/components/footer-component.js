import React from 'react';
import '../styles/footer-component.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer container-fluid">
        <div className="footer__header col-sm-12">
          <h2>contact</h2>
        </div>
        <div className="footer__contact__info col-lg-4 col-md-4 col-sm-12">
          <p><span><i className="fa fa-envelope" aria-hidden="true" /></span> <a href="mailto:matt@mattbruton.com">matt@mattbruton.com</a></p>
          <p><span><i className="fa fa-phone-square" aria-hidden="true" /></span> 615.881.1045</p>
        </div>
        <hr/>
        <div className="col-lg-8 col-md-8 col-sm-12 footer__link">
          <a href="https://www.linkedin.com/in/matt-bruton"><i className="float-lg-right float-md-right fa fa-linkedin footer__link__icon" aria-hidden="true"/></a>
          <a href="https://www.github.com/mattbruton"><i className="float-lg-right float-md-right fa fa-github footer__link__icon" aria-hidden="true"/></a>
        </div>
      </div>
    );
  }
}
