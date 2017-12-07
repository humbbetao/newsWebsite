import React, { Component } from 'react';
import ItemMenu from './ItemMenu';
import './css/MenuItens.css';

class MenuItens extends Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-collapse">
                {this.props.list.map((item, id) =>
                    <ItemMenu key={id} itemName={item.nome} url={item.url} />
                )}
            </ul>
        );
    }
}


export default MenuItens;