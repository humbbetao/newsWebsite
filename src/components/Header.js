import React, { Component } from 'react';
import Menu from './Header/Menu';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar topnav">
        <div className="container-fluid">
          <Menu />
        </div>
      </nav>
    );
  }
}


export default Header;
