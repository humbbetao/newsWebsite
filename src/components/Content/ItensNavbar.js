import React, { Component } from 'react';
import { Link } from 'react-router';

class ItensNavbar extends Component {
    render() {
        var headline = '/news/'.concat("\"").concat(this.props.new.fields.headline).concat("\"");
        return (
            <li>
                <figure >
                    <Link className="effect-lily"  href={headline}  >
                        <img src={this.props.new.fields.thumbnail} alt={this.props.new.webTitle} />
                    </Link>
                    <figcaption >
                        <Link className="text_lilly" href={headline} >
                            {this.props.new.webTitle}
                        </Link>
                    </figcaption>
                </figure>
            </li>
        );
    }
}

export default ItensNavbar;