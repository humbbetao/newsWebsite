import React, { Component } from 'react';
import './css/navbarRight.css'
import ListItemPopularPost from './ListItemPopularPost';

class NavbarRight extends Component {
    render() {

        return (
            <div className="col-lg-3 col-md-6 col-sm-6" id="sidebar-right">
                <div className="single_widget_Right">
                    <h2>Popular Post</h2>
                    <ListItemPopularPost />
                </div>
            </div>
        );
    }
}

export default NavbarRight;