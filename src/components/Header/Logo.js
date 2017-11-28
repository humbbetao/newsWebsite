import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                    News Cyber
                </a>
            </div>
        );
    }
}


export default Logo;