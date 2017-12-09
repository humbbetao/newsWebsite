import React, { Component } from 'react';
import './css/lastNews.css'
import ListNews from './ListNews';

class LastNews extends Component {
    render() {

        return (
            <div className="col-lg-6 col-md-6 col-sm-8">
                <div className="middle_content">
                    <h2>What’s Hot</h2>
                    <ListNews query={this.props.query} />
                   
                </div>
            </div>
        );
    }
}


export default LastNews;