import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Logo from './Logo';
import MenuItens from './MenuItens';
import BarSearch from './BarSearch';


class Menu extends Component {
    constructor(props) {
        super(props);
    };

    state = {
        listItensMenu: [
            { nome: 'Home', url: '/' },
            { nome: 'Blog', url: 'blog' },
            { nome: 'Mobile', url: 'mobile.html' },
            { nome: 'Laptops', url: 'laptops.html' },
            { nome: 'Tablets', url: 'tablets.html' },
            { nome: 'Contact Us', url: 'contactus.html' },
        ],
    };

    render() {
        return (
            <Flexbox flexDirection="rows"   >
                <Logo />
                <MenuItens list={this.state.listItensMenu} />
                <BarSearch />
            </Flexbox>
        );
    }
}


export default Menu;
