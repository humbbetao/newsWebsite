import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ItemMenu from './ItemMenu';
import './header.css'

class MenuItens extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav custom_nav">
                    {this.props.list.map((item, id) =>
                        <ItemMenu key={id} itemName={item.nome} url={item.url} />
                    )}

                </ul>
            </div>


        );
    }
}


export default MenuItens;