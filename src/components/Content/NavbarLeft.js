import React, { Component } from 'react';
import ListItem from './ListItem';
import './css/navbarLeft.css'

class NavbarLeft extends Component {

    render() {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6" id="sidebar-left">
                <div className="single_widget">
                    <h2>Technology</h2>
                    <ListItem />
                </div>
            </div>

        );
    }
}


export default NavbarLeft;

