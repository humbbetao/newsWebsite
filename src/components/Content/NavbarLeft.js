import React, { Component } from 'react';
import ListItem from './ListItem';
import './bodyNews.css'

class NavbarLeft extends Component {
    render() {

        return (
  
            <div class="col-lg-3 col-md-3 col-sm-4">
                <div class="left_sidebar">
                    <div class="single_widget">
                        <h2>Post of the month</h2>
                        <ListItem/>
                    </div>
                </div>
            </div>

        );
    }
}


export default NavbarLeft;