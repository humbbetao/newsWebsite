import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Logo from './Logo';
import MenuItens from './MenuItens';
import BarSearch from './BarSearch';


class Menu extends Component {

    state = {
        listItensMenu: [
            { nome: 'Home', url: '/' },
            { nome: 'Technology', url: 'technology' },
            { nome: 'Computers', url: 'computers' },
            { nome: 'Mobile', url: 'mobile' },
            { nome: 'Video-games', url: 'Vvideogames' },
        ],
    };

    render() {
        return (
            <Flexbox flexDirection="row" >
                <Logo />
                <MenuItens list={this.state.listItensMenu} />
                <BarSearch />
            </Flexbox>
        );
    }
}


export default Menu;
