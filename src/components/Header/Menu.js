import React, { Component } from 'react';
import Logo from './Logo';
import MenuItens from './MenuItens';
import BarSearch from './BarSearch';
import Path from '../Path';
import { Nav } from 'react-router';

class Menu extends Component {
    render() {
        return (
            <div>
                <Logo />
                <input type="checkbox" id="control-nav" />
                <label for="control-nav" className="control-nav"></label>
                <label for="control-nav" className="control-nav-close"></label>
                <MenuItens list={Path} />
                <BarSearch />
            </div>
        );
    }
}


export default Menu;
