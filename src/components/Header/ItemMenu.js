import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Link } from 'react-router';

class ItemMenu extends Component {
    constructor(props) {
        super(props);
    };

    state = {

    };

    render() {

        return (

            <li>{this.props.url == "/" ?
                <Link exact={true}
                    activeClassName='is-active'
                    to={this.props.url}>
                    {this.props.itemName}
                </Link> :
                <Link
                    activeClassName='is-active'
                    to={this.props.url}>
                    {this.props.itemName}
                </Link>}

            </li>
        );
    }
}


export default ItemMenu;
