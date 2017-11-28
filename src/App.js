import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Foot from './components/Foot';
import Flexbox from 'flexbox-react';

class App extends Component {
  render() {
    return (
      <Flexbox 
        flexDirection="column"
         minHeight="100vh"
         alignItems="center"
         backgroundColor="#01579b" >
        <Header/>
        <Content/>
        <Foot/>
      </Flexbox>
    );
  }
}


export default App;
