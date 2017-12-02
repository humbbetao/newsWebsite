import React, { Component } from 'react';
import Home from './components/Home';
import Content from './components/Content';
import Technology from './components/Technology'
import Computers from './components/Computers'
import Mobile from './components/Mobile'
import VideoGames from './components/VideoGames'
import News from './News';
import Path from './Path';
import {Provider} from 'react-redux';

import store from './store';

import {Router, Route, hashHistory, IndexRoute } from 'react-router';

class App extends Component { 
  render() {
    return (
      <Provider store={store}>
      <Router  history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Content}/>
          <Route path="/news/:title" component={News}/>
          <Route path="technology" component={Technology}/>
          <Route path="computers" component={Computers}/>
          <Route path="mobile" component={Mobile}/>
          <Route path="videoGames" component={VideoGames}/>
        </Route>
      </Router>
      </Provider>
    );
  }
}
export default App;
