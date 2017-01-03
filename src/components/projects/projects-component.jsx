import React from 'react';
import SectionHeader from '../common/section-header-component.jsx';
import ProjectItem from './project-item-component.jsx';

import '../../styles/projects-component.scss';

export default class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  };

  componentWillMount() {
    axios.get(`../../data/projects.json`)
      .then(res => {
        const projects = res.data;
        console.log(projects);
        this.setState({ projects });
      });
  }


  render(){

    let projects = this.state.projects;

    return(
      <div id="projects" className="projects__container">
        <SectionHeader header="projects" />
          <div className="project__item__content col-xs-12 col-md-8 push-md-2">
            <ProjectItem repoUrl={projects.woofli.repoUrl} projectUrl={projects.woofli.projectUrl} title={projects.woofli.title} description={projects.woofli.description} />
          <ProjectItem repoUrl={projects.macc.repoUrl} projectUrl={projects.macc.projectUrl} title={projects.macc.title} description={projects.macc.description} />
        </div>
      </div>
    );
  }
}
