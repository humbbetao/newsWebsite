import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Flexbox from 'flexbox-react';


class Home extends Component {
    render() {
        return (
            <Flexbox
                flexDirection="column"    >
                <Header />
                {this.props.children}
                <Footer />
            </Flexbox>
        );
    }
}


export default Home;
