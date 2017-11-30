import React, { Component } from 'react';
import './bodyNews.css'
import PopularPost from './PopularPost';
import DemaisPost from './DemaisPost';
import CategoryAndLink from './CategoryAndLink';

class NavbarRight extends Component {
    render() {

        return (
            <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="right_sidebar">
                    <PopularPost />
                    <DemaisPost />
                    <CategoryAndLink/>
                </div>
            </div>
        );
    }
}

export default NavbarRight;