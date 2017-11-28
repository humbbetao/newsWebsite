import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Menu from './Menu';
import './header.css';

class Header extends Component {
  render() {
    return (
      <Flexbox
        element="header"
        height="60px">
        <Menu/>
         
      </Flexbox>
        );
  }
}


export default Header;
