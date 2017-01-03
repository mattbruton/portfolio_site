import React from 'react';
import SectionHeader from '../common/section-header-component.jsx';
import ProjectItem from './project-item-component.jsx';

import '../../styles/projects-component.scss';

export default class Projects extends React.Component {
  render(){
    return(
      <div className="projects__container">
        <SectionHeader header="projects" />

          <div className="project__item col-xs-12">
            <div className="row">
              <div className="project__nav__icon col-xs-1 text-xs-left push-md-1">
                <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
              </div>
              <div className="project__item__content col-xs-8 offset-xs-1">
                <ProjectItem />
              </div>
              <div className="project__nav__icon col-xs-1 pull-xs-1 pull-md-0 text-xs-right">
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>

      </div>
    );
  }
}
