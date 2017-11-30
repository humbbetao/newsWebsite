import React, { Component } from 'react';
import './bodyNews.css'

class ItensNavbar extends Component {
    render() {

        return (
            <li>
                <figure className="effect-lily">
                    <a href="pages/single_page.html">
                        <img src={require('./teste2.jpg')} alt="" />
                    </a>
                    <figcaption className="text_lilly" >
                        <a href="pages/single_page.html">
                            It’s Now An Android World- Feel The Power
                        </a>
                    </figcaption>
                </figure>
            </li>
        );
    }
}


export default ItensNavbar;