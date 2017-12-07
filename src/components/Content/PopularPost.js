import React, { Component } from 'react';
import ListItemPopularPost from './ListItemPopularPost';

class PopularPost extends Component {
    render() {
        return (
            <div className="single_widget_Right">
                <h2>Popular Post</h2>
                <ListItemPopularPost />
            </div>
        );
    }
}


export default PopularPost;