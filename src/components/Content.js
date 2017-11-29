import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Feed from 'rss-to-json';
class Content extends Component {

  componentDidMount(){
    var FeedParser = require('feedparser');
    var request = require('request'); // for fetching the feed
    
  }

  render() {
    return (
      <Flexbox flexGrow={1}>
        Content
      </Flexbox>
    );
  }
}


export default Content;