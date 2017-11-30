import React, { Component } from 'react';
import './bodyNews.css'
import ItensListContaintBar from './ItensListContaintBar';

class ListItem2 extends Component {
    render() {

        return (
            <ul className="ppost_nav wow fadeInDown navbarL">
                <ItensListContaintBar />
                <ItensListContaintBar />
                <ItensListContaintBar />
                <ItensListContaintBar />
                <ItensListContaintBar />
            </ul>
        );
    }
}


export default ListItem2;