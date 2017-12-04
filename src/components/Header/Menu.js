import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Logo from './Logo';
import MenuItens from './MenuItens';
import BarSearch from './BarSearch';
import Path from '../Path';

class Menu extends Component {
    render() {
        return (
            <div>
                <Logo />
                <MenuItens list={Path} />
                <BarSearch />
            </div>
        );
    }
}


export default Menu;
