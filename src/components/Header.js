import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Menu from './Menu';
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
        <Menu/>

        </div>
      </nav>
    );
  }
}


export default Header;
