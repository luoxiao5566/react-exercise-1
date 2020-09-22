import React from 'react';
import './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h3 className="h33">{this.props.id}</h3>
      </div>
    )
    }
}

export default Title;