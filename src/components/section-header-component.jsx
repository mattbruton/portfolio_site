import React from 'react';

export default class SectionHeader extends React.Component {

  static propTypes = {
    header: React.PropTypes.string.isRequired
  };

  render () {
    return(
        <div className="col-xs-12">
          <h3 className="col-xs-2 offset-xs-2">
            <span className="section__header">{this.props.header}</span>
          </h3>
        </div>
    );
  }
}
