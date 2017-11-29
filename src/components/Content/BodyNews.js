import React, { Component } from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import LastNews from './LastNews';

class BodyNews extends Component {
    render() {
        return (
            <div>
                <NavbarLeft />
                <LastNews />
                <NavbarRight />
            </div>
        );
    }
}


export default BodyNews;