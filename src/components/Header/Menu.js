import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Logo from './Logo';
import MenuItens from './MenuItens';
import BarSearch from './BarSearch';
import Path from '../../Path';

class Menu extends Component {
    render() {
        return (
            <Flexbox flexDirection="row" >
                <Logo />
                <MenuItens list={Path} />
                <BarSearch />
            </Flexbox>
        );
    }
}


export default Menu;
