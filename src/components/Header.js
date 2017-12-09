import React, { Component } from 'react';
import Menu from './Header/Menu';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Menu/>
      </header>
   
    );
  }
}


export default Header;
