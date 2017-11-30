import React, { Component } from 'react';
import './bodyNews.css'
import ListItemPopularPost from './ListItemPopularPost';

const urlForSearch = tema =>
'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=technology&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'


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