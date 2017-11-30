import React, { Component } from 'react';
import './bodyNews.css'
import ItensListContaint from './ItensListContaint';

class ListItem2 extends Component {
    render() {

        return (
            <ul class="featured_nav">
                <ItensListContaint />
                <ItensListContaint />
                <ItensListContaint />
                <ItensListContaint />
                <ItensListContaint />
                <ItensListContaint />
            </ul>

        );
    }
}


export default ListItem2;