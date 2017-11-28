import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Menu from './Header/Menu';
import './css/header.css';


class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Menu />
        </div>
      </nav>
    );
  }
}


export default Header;
