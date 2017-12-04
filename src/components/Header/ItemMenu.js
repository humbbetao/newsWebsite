import React, { Component } from 'react';
import { Link } from 'react-router';


class ItemMenu extends Component {
    render() {

        return (


            this.props.url === "/" ?
                <Link exact="true"
                    activeClassName='is-active'
                    to={this.props.url}>
                    {this.props.itemName}
                </Link> :
                <Link
                    activeClassName='is-active'
                    to={this.props.url}>
                    {this.props.itemName}
                </Link>


        );
    }
}


export default ItemMenu;
