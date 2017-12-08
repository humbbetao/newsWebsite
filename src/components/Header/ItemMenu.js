import React, { Component } from 'react';
import { Link } from 'react-router';


class ItemMenu extends Component {
    render() {

        return (
            <li>
                <Link
                    to={this.props.url}>
                    {this.props.itemName}
                </Link>
            </li>
        );
    }
}


export default ItemMenu;
