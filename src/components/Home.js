import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Flexbox from 'flexbox-react';


class Home extends Component {
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
