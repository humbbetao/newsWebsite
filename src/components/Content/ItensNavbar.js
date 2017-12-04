import React, { Component } from 'react';
import './css/bodyNews.css';
import {Link} from 'react-router';

class ItensNavbar extends Component {
    render() {
        var headline = this.props.new.fields.headline
        return (
            <li>
                <figure className="effect-lily">
                    <Link to={'news/'.concat(headline)} >
                        <img src={this.props.new.fields.thumbnail} alt="" />
                    </Link>
                    <figcaption className="text_lilly" >
                        <Link to={'news/'.concat(headline)} >
                            {this.props.new.webTitle}
                        </Link>
                    </figcaption>
                </figure>
            </li>
        );
    }
}

export default ItensNavbar;