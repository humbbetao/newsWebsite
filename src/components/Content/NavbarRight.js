import React, { Component } from 'react';
import './navbarRight.css'
import PopularPost from './PopularPost';
import DemaisPost from './DemaisPost';
import CategoryAndLink from './CategoryAndLink';

class NavbarRight extends Component {
    render() {

        return (
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="right_sidebar ">
                    <PopularPost />
                    <DemaisPost />
                    <CategoryAndLink/>
                </div>
            </div>
        );
    }
}

export default NavbarRight;