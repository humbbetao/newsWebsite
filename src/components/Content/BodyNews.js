import React, { Component } from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import LastNews from './LastNews';
import './css/bodyNews.css'
class BodyNews extends Component {
    render() {
        return (
            <div className="containerBody col-lg-12 col-md-12 col-sd-12" id="mainContent">
                <LastNews query={this.props.query} />
                <NavbarLeft />
                <NavbarRight />
            </div >
        );
    }
}


export default BodyNews;