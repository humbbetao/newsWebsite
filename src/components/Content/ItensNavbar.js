import React, { Component } from 'react';
import {Link} from 'react-router';

class ItensNavbar extends Component {
    render() {
        var headline = ("\"").concat(this.props.new.fields.headline).concat("\"");
        return (
            <li>
                <figure className="effect-lily">
                    <Link to={'news/'.concat(headline)} >
                        <img src={this.props.new.fields.thumbnail} alt="" />
                    </Link>
                    <figcaption >
                        <Link  className="text_lilly" to={'news/'.concat(headline)} >
                            {this.props.new.webTitle}
                        </Link>
                    </figcaption>
                </figure>
            </li>
        );
    }
}

export default ItensNavbar;