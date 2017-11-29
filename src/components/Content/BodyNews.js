import React, { Component } from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import LastNews from './LastNews';
import './bodyNews.css'
class BodyNews extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3 navbarLeft">
                    <NavbarLeft />
                </div>
                <div className="col-md-3 lastNews">
                    <LastNews />
                </div>
                <div className="col-md-3 navbarRight">
                    <NavbarRight />
                </div>

            </div >
        );
    }
}


export default BodyNews;