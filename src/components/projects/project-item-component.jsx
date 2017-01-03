import React from 'react';

import '../../styles/project-item-component.scss';

export default class ProjectItem extends React.Component {

  static propTypes = {
    description: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="text-xs-center col-xs-12">
        <h1 className="col-md-12 pull-md-1 col-xs-10 offset-xs-1 project__item__title">{this.props.title}</h1>
        <div className="col-xs-12 col-md-12 project__item__desc">
        <p>{this.props.description}</p>
        </div>
        <hr />
        <div className="col-xs-12">
          <div className="col-xs-6"><a href={this.props.projectUrl}><i className="fa fa-external-link project__item__icon" aria-hidden="true"></i></a></div>
          <div className="col-xs-6"><a href={this.props.repoUrl}><i className="fa fa-github project__item__icon" aria-hidden="true"></i></a></div>
        </div>
      </div>
    );
  }
}
