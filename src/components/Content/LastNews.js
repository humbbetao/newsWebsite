import React, { Component } from 'react';
import './bodyNews.css'
import ListItem2 from './LisItem2';

class LastNews extends Component {
    render() {

        return (
            <div class="col-lg-6 col-md-6 col-sm-8">
                <div class="middle_content">
                    <h2>What’s Hot</h2>
                    <ListItem2 />
                </div>
            </div>
        );
    }
}


export default LastNews;