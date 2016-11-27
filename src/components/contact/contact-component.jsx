import React from 'react';
import SectionHeader from '../common/section-header-component.jsx';
import ContactItem from './contact-item-component.jsx';

import '../../styles/contact-component.scss';

export default class Contact extends React.Component {
  render () {
    return(
      <div className="contact__container">
        <SectionHeader header="contact" />
        <div className="contact__content-container col-xs-6 offset-xs-3">
          <ContactItem className="fa fa-envelope" text="the.bruton@gmail.com" isLink=""/>
          <ContactItem className="fa fa-phone" text="615.881.1045" isLink=""/>
          <ContactItem className="fa fa-github" text="github.com/mattbruton" isLink="true" />
          <ContactItem className="fa fa-linkedin-square" text="linkedin.com/in/matt-bruton" isLink="true" />
        </div>
      </div>
    )
  }
}
