import React, { Component } from 'react';
import CenterMode from './Content/CenterMode';
import BodyNews from './Content/BodyNews';

class Mobile extends Component {


  render() {
    return (
      <div className="content">
        <CenterMode />
        <BodyNews  query='mobile' />
      </div>
    );
  }
}


export default Mobile;