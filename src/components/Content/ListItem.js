import React, { Component } from 'react';
import ItensNavbar from './ItensNavbar';
import './bodyNews.css'

class ListItem extends Component {
    render() {

        return (

            <ul class="post_nav">
                <ItensNavbar />
                <ItensNavbar />
                <ItensNavbar />
                <ItensNavbar />
                <ItensNavbar />
                <ItensNavbar />
                <ItensNavbar />
            </ul>
        );
    }
}


export default ListItem;