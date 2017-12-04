import React, { Component } from 'react';
import CenterMode from '../Content/CenterMode';
import BodyNews from '../Content/BodyNews';

class Computers extends Component {

  render() {
    return (
      <div className="content">
        <CenterMode />
        <BodyNews  query='computer' />
      </div>
    );
  }
}


export default Computers;