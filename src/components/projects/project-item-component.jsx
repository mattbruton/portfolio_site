import React from 'react';

import '../../styles/project-item-component.scss';

export default class ProjectItem extends React.Component {
  render() {
    return (
      <div className="text-xs-center col-xs-10 push-xs-1">
        <h1 className="col-md-12 pull-md-1 col-xs-10 offset-xs-1 project__item__title">Project Title</h1>
        <div className="col-xs-12 col-md-12 project__item__desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tellus nunc, auctor quis ipsum vitae, bibendum vulputate felis. Donec semper libero sed justo laoreet, nec gravida arcu condimentum. Praesent pellentesque, odio vel fringilla faucibus, diam turpis congue nulla, sit amet venenatis ligula mauris vel sapien.</p>
        </div>
        <hr />
        <div className="col-xs-12">
          <div className="col-xs-4"><i className="fa fa-github-alt project__item__icon" aria-hidden="true"></i></div>
          <div className="col-xs-4"><i className="fa fa-github-alt project__item__icon" aria-hidden="true"></i></div>
          <div className="col-xs-4"><i className="fa fa-github-alt project__item__icon" aria-hidden="true"></i></div>
        </div>
      </div>
    );
  }
}
