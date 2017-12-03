import React, { Component } from 'react';
import CenterMode from './Content/CenterMode';
import BodyNews from './Content/BodyNews';

class VideoGames extends Component {


  render() {
    return (
      <div className="content">
        <CenterMode />
        <BodyNews  query='video games' />
      </div>
    );
  }
}


export default VideoGames;