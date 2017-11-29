import React, { Component } from 'react';
import Home from './components/Home';
import Content from './components/Content';
import Blog from './components/Blog';

import {Router, Route, hashHistory, IndexRoute } from 'react-router';

class App extends Component {
  state = {
    url: '',
    dataSource: undefined,
    news: [],
  };
  
  render() {
    return (
      <Router  history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Content}/>
          <Route path="blog" component={Blog}/>
        </Route>
      </Router>
    );
  }
}


export default App;
