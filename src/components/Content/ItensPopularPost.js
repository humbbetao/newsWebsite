import React, { Component } from 'react';
import './css/bodyNews.css'
import { Link } from 'react-router';

class ItensPopularPost extends Component {
    render() {
        var headline = "\"".concat(this.props.value.fields.headline)
        headline.concat("\"")
        return (
            <li>
                <div className="media">
                    <Link className="media-right" to={'news/' + headline + "\""} >
                        <img src={this.props.value.fields.thumbnail} alt="" />
                    </Link>
                    <div className="media-body">
                        <Link className="catg_title" to={'news/' + headline + "\""} >
                            {this.props.value.webTitle}
                        </Link>
                    </div>
                </div>
            </li>
        );
    }
}
export default ItensPopularPost;