import React, { Component } from 'react';
import Menu from './Header/Menu';

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
