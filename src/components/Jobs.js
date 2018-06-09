import React, { Component } from 'react';

class Jobs extends Component {
  render() {
    return (
      <div className="job">
        <div className="job__years">
          <p className="job__end">{this.props.end}</p>
          <p className="job__start">{this.props.start}</p>
        </div>
        <h5 className="job__title">{this.props.jobTitle}</h5>
        <h5 className="job__company">{this.props.company}</h5>
        <p className="job__description">{this.props.description}</p>
      </div>
    );
  }
}

export default Jobs
