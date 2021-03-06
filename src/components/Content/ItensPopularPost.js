import React, { Component } from 'react';
import { Link } from 'react-router';

class ItensPopularPost extends Component {
    render() {
        var headline = "\"".concat(this.props.value.fields.headline).concat("\"")
        return (
            <li>
                <div className="media">
                    <Link className="media-right" href={'/news/' + headline } >
                        <img src={this.props.value.fields.thumbnail} alt={this.props.value.webTitle} />
                    </Link>
                    <div className="media-body">
                        <Link className="catg_title" href={'/news/' + headline } >
                            {this.props.value.webTitle}
                        </Link>
                    </div>
                </div>
            </li>
        );
    }
}
export default ItensPopularPost;