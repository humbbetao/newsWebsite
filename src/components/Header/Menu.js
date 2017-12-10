import React, { Component } from 'react';
import Logo from './Logo';
import MenuItens from './MenuItens';
import BarSearch from './BarSearch';
import Path from '../Path';

class Menu extends Component {
    render() {
        return (
            <div>
                <Logo />
                <input type="checkbox" id="control-nav" />
                <label htmlFor="control-nav" className="control-nav"></label>
                <label htmlFor="control-nav" className="control-nav-close"></label>
                <MenuItens list={Path} />
                <BarSearch />
            </div>
        );
    }
}


export default Menu;
