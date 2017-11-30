import React, { Component } from 'react';
import './bodyNews.css'

class ItensNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <li>
                <figure className="effect-lily">
                    <a href="pages/single_page.html">
                        <img src={this.props.new.fields.thumbnail} alt="" />
                    </a>
                    <figcaption className="text_lilly" >
                        <a href="pages/single_page.html">
                        {this.props.new.webTitle}
                        </a>
                    </figcaption>
                </figure>
            </li>
        );
    }
}


export default ItensNavbar;