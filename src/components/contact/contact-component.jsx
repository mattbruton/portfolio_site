import React from 'react';
import SectionHeader from '../common/section-header-component.jsx';
import ContactItem from './contact-item-component.jsx';

import '../../styles/contact-component.scss';

export default class Contact extends React.Component {
  render () {
    return(
      <div id="contact" className="contact__container col-md-12">
        <div className="col-xs-12">
          <SectionHeader header="contact" />
        </div>
        <div className="contact__content-container col-xs-12 col-md-6 push-md-4">
          <ContactItem className="fa fa-envelope" text="the.bruton@gmail.com" isLink={false}/>
          <ContactItem className="fa fa-phone" text="615.881.1045" isLink={false}/>
          <ContactItem className="fa fa-github" text="github.com/mattbruton" isLink={true} />
          <ContactItem className="fa fa-linkedin-square" text="linkedin.com/in/matt-bruton" isLink={true} />
        </div>
      </div>
    )
  }
}
