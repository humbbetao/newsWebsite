import React, { Component } from 'react';
import CenterMode from './Content/CenterMode';
import BodyNews from './Content/BodyNews';
import './content.css'

class Content extends Component {

  render() {

    return (
      <div className="content">
        <CenterMode />
        <BodyNews query='technology' />
      </div>
    );
  }
}


export default Content;