import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Flexbox from 'flexbox-react';

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
    console.log(this.state.dataSource);
    return (
      <Flexbox
        flexDirection="column"
        minHeight="100vh"     >
        <Header />
        <Content />
        <Footer />
      </Flexbox>
    );
  }
}


export default App;
