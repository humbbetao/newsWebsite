import React, { Component } from 'react';
import { Link } from 'react-router';
import './logo.css';

class Logo extends Component {
    render() {
        return (
            <div className="navbar-header">
                <Link className="navbar-brand" to="/" >
                    News Cyber
                </Link>
            </div >
        );
    }
}


export default Logo;