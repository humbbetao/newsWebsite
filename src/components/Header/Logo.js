import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/Logo.css'
class Logo extends Component {
    render() {
        return (


            <h1 class="float-l">
                <Link className="navbar-brand" to="/" >
                    Cyber News
            </Link>
            </h1>

        );
    }
}


export default Logo;