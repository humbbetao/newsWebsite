import React, { Component } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Flexbox from 'flexbox-react';
import { Link } from 'react-router';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
         {/* Single Page Application */}
        return (
            <Flexbox
                flexDirection="column"
                minHeight="100vh"     >

                {/*Cabecalho*/}
                <Header />
                {/*Corpo*/}
                {this.props.children}
                {/*rodape*/}
                <Footer />
            </Flexbox>
        );
    }
}


export default Home;
