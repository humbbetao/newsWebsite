import React, { Component } from 'react';
import { Link } from 'react-router';
class SliderItem extends Component {
    render() {
        var headline = 'news/'.concat(this.props.value.fields.headline)
        return (
            <div className="single_iteam">
                <Link className="slider_img" to={headline} >
                    <img src={this.props.value.fields.thumbnail} alt={this.props.value.webTitle} />

                    <h2 className="slider_title">
                        {this.props.value.webTitle}
                    </h2>
                </Link>
            </div>
        );
    }
}

export default SliderItem;