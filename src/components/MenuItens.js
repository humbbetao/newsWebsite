import React, { Component } from 'react';
import ItemMenu from './ItemMenu';
import './css/header.css';
class MenuItens extends Component {
    constructor(props) {
        super(props);
    }

    state={
        active:0
    };

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