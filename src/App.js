import React, { Component } from 'react';
import Home from './components/Home';
import Content from './components/Content';
import Blog from './components/Blog';
import Flexbox from 'flexbox-react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    url: '',
    dataSource: undefined,
    news: [],
  };
  
  render() {
    return (
      <Router  history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute  path="/" component={Content}/>
          <Route path="blog" component={Blog}/>
        </Route>
      </Router>
    );
  }
}


export default App;
