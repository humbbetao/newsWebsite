import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
class Menu extends Component {
    constructor(props) {
        super(props);
    };

    state = {
    };

    render() {
        return (
            <li> <a href={this.props.url}> {this.props.itemName}</a></li>
        );
    }
}


export default Menu;
