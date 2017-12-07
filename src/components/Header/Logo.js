import React, { Component } from 'react';
import { Link } from 'react-router';
import './Logo.css'
class Logo extends Component {
    render() {
        return (
            <Link className="navbar-brand" to="/" >
                Cyber News
            </Link>
        );
    }
}


export default Logo;