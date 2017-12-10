import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './components/pages/Home';
import Content from './components/Content';
import Technology from './components/pages/Technology'
import Computers from './components/pages/Computers'
import Mobile from './components/pages/Mobile'
import VideoGames from './components/pages/VideoGames'
import News from './components/News';
import Search from './components/Search';
import store from './store';
import NotFound from './components/pages/NotFound';
import ContactUs from './components/pages/ContactUs';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Home}>
            <IndexRoute component={Content} />
            <Route path='/news/:title' component={News} />
            <Route path='/search/:query' component={Search} />
            <Route path='technology' component={Technology} />
            <Route path='computers' component={Computers} />
            <Route path='mobile' component={Mobile} />
            <Route path='videoGames' component={VideoGames} />
            <Route path='contactUs/' component={ContactUs} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
export default App;
