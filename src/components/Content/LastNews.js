import React, { Component } from 'react';
import './lastNews.css'
import ListItem2 from './LisItem2';

class LastNews extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div class="col-lg-6 col-md-6 col-sm-8">
                <div class="middle_content">
                    <h2>What’s Hot</h2>
                    <ListItem2 news ={this.props.news} />
                </div>
            </div>
        );
    }
}


export default LastNews;