import React from 'react';
import './Resume.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <div id = "years">
            {this.props.value.value3}
        </div>
        <div id = "resume">
            <p className = "p3">{this.props.value.value1}</p>
            <p className = "p4">{this.props.value.value2}</p>
        </div>
      </div>
    )
    }
}

export default Resume;