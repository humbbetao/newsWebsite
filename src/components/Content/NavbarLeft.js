import React, { Component } from 'react';
import ListItem from './ListItem';
import './css/navbarLeft.css'

class NavbarLeft extends Component {

    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="left_sidebar">
                    <div className="single_widget">
                        <h2>Technology</h2>
                        <ListItem />
                    </div>
                </div>
            </div>

        );
    }
}


export default NavbarLeft;