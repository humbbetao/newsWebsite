import React, { Component } from 'react';
import ItemMenu from './ItemMenu';
import './css/MenuItens.css';

class MenuItens extends Component {
    render() {
        return (
            <nav className="float-r nav navbar-nav">
                <ul className="list-auto">
                    {this.props.list.map((item, id) =>
                        <ItemMenu key={id} itemName={item.nome} url={item.url} />
                    )}
                </ul>

            </nav>
        );
    }
}


export default MenuItens;