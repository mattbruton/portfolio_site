import React from 'react';

export default class SectionHeader extends React.Component {

  static propTypes = {
    header: React.PropTypes.string.isRequired
  };

  render () {
    return(
        <div className="col-md-12">
          <h3 className="col-md-2 offset-md-2">
            <span className="section__header">{this.props.header}</span>
          </h3>
        </div>
    );
  }
}
