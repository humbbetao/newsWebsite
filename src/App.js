import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './components/pages/Home';
import Content from './components/Content';
import Technology from './components/pages/Technology'
import Computers from './components/pages/Computers'
import Mobile from './components/pages/Mobile'
import VideoGames from './components/pages/VideoGames'
import News from './components/News';
// import ArticleText from './components/Content/ArticleText';

import store from './store';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Home}>
            <IndexRoute component={Content} />
            <Route path="/news/:title" component={News} />
            <Route path="technology" component={Technology} />
            <Route path="computers" component={Computers} />
            <Route path="mobile" component={Mobile} />
            <Route path="videoGames" component={VideoGames} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
export default App;
