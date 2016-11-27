import React from 'react';
import SectionHeader from '../common/section-header-component.jsx';

import '../../styles/projects-component.scss';

export default class Projects extends React.Component {
  render(){
    return(
      <div className="projects__container">
        <SectionHeader header="projects" />
      </div>
    );
  }
}
