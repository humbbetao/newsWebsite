import React, { Component } from 'react';
import ItemMenu from './ItemMenu';
class MenuItens extends Component {
    render() {
        return (

            this.props.list.map((item, id) =>
                <ItemMenu key={id} itemName={item.nome} url={item.url} />
            )

        );
    }
}


export default MenuItens;