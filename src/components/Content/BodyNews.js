import React, { Component } from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import LastNews from './LastNews';
import './bodyNews.css'
class BodyNews extends Component {
    render() {
        return (
            <div class="row">
                <NavbarLeft />
                <LastNews />
                <NavbarRight />
            </div >
        );
    }
}


export default BodyNews;