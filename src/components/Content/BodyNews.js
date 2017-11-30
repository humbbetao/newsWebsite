import React, { Component } from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import LastNews from './LastNews';
import './bodyNews.css'
class BodyNews extends Component {
    render() {
        return (
            <div class="containerBody col-lg-12 col-md-12 col-sd-12">
                <NavbarLeft />
                <LastNews />
                <NavbarRight />
            </div >
        );
    }
}


export default BodyNews;