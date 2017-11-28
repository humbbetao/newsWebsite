import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './header.css';
import Logo from './Logo';
import ListItensMenu from './ListItensMenu';
import BarSearch from './BarSearch';

class Menu extends Component {
    constructor(props) {
        super(props);
    };

    state = {
        listItensMenu: [
            'Home',
            'Technology',
            'Laptops',
            'Tablets',
            'Contact Us',
        ],
    };

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top" role="navigation">
                <Logo />
                <ListItensMenu list={this.state.listItensMenu} />
                <BarSearch />
            </nav>
        );
    }
}


export default Menu;
