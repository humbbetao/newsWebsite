import React, { Component } from 'react';
import Menu from './Header/Menu';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <nav className="topnav">
          <Menu />
      </nav>
    );
  }
}


export default Header;
