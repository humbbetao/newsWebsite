import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './header.css';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                    <img src={require('./img/logo.png')} alt="" />
                </a>
            </div>
        );
    }
}


export default Logo;